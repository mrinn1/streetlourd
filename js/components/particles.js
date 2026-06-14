// ============================================================
// StreetLourd — Particle Effects Canvas
// ============================================================

export class ParticleSystem {
    constructor(canvasId = 'particles-canvas') {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationId = null;
        this.maxParticles = 60;
        this.colors = [
            'rgba(245, 166, 35, 0.4)',   // Gold
            'rgba(168, 85, 247, 0.3)',    // Purple
            'rgba(59, 130, 246, 0.3)',    // Blue
            'rgba(255, 215, 0, 0.2)',     // Light gold
            'rgba(147, 51, 234, 0.2)',    // Violet
        ];

        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticle() {
        return {
            x: Math.random() * this.canvas.width,
            y: this.canvas.height + Math.random() * 100,
            size: Math.random() * 3 + 1,
            speedY: -(Math.random() * 0.5 + 0.2),
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.1,
            color: this.colors[Math.floor(Math.random() * this.colors.length)],
            life: 0,
            maxLife: Math.random() * 300 + 200,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: Math.random() * 0.02 + 0.01,
        };
    }

    update() {
        // Add new particles
        while (this.particles.length < this.maxParticles) {
            this.particles.push(this.createParticle());
        }

        // Update existing particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.speedX;
            p.y += p.speedY;
            p.life++;
            p.pulse += p.pulseSpeed;

            // Fade in/out based on life
            const lifeRatio = p.life / p.maxLife;
            if (lifeRatio < 0.1) {
                p.currentOpacity = p.opacity * (lifeRatio / 0.1);
            } else if (lifeRatio > 0.8) {
                p.currentOpacity = p.opacity * ((1 - lifeRatio) / 0.2);
            } else {
                p.currentOpacity = p.opacity;
            }

            // Pulsing size
            p.currentSize = p.size + Math.sin(p.pulse) * 0.5;

            // Remove dead particles
            if (p.life >= p.maxLife || p.y < -20) {
                this.particles.splice(i, 1);
            }
        }
    }

    draw() {
        if (!this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (const p of this.particles) {
            this.ctx.save();
            this.ctx.globalAlpha = p.currentOpacity || p.opacity;
            this.ctx.fillStyle = p.color;
            this.ctx.shadowColor = p.color;
            this.ctx.shadowBlur = p.currentSize * 4;

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.currentSize, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.restore();
        }
    }

    animate() {
        this.update();
        this.draw();
        this.animationId = requestAnimationFrame(() => this.animate());
    }

    start() {
        if (!this.canvas) return;
        this.animate();
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    destroy() {
        this.stop();
        this.particles = [];
        if (this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}
