// ============================================================
// VictoryToClan — Animation Utilities
// ============================================================

/**
 * Initialize scroll-triggered fade/slide animations using IntersectionObserver
 */
export function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-visible');
                    // Stagger children if the parent has data-stagger
                    if (entry.target.dataset.stagger) {
                        const children = entry.target.querySelectorAll('.animate-item');
                        children.forEach((child, i) => {
                            child.style.transitionDelay = `${i * 100}ms`;
                            child.classList.add('animate-visible');
                        });
                    }
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        observer.observe(el);
    });

    return observer;
}

/**
 * Initialize parallax effect on hero section
 */
export function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    if (!parallaxElements.length) return;

    let ticking = false;

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                parallaxElements.forEach((el) => {
                    const speed = parseFloat(el.dataset.parallax) || 0.5;
                    el.style.transform = `translateY(${scrollY * speed}px)`;
                });
                ticking = false;
            });
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
}

/**
 * Smooth page transition
 */
export async function pageTransition(container, renderFn) {
    // Fade out
    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';

    await new Promise((r) => setTimeout(r, 200));

    // Render new content
    await renderFn();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Fade in
    requestAnimationFrame(() => {
        container.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    });

    // Re-init scroll animations for new content
    setTimeout(() => initScrollAnimations(), 100);
}

/**
 * Typewriter text effect
 */
export function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    return new Promise((resolve) => {
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                resolve();
            }
        }
        type();
    });
}

/**
 * Counter animation (count up from 0 to target)
 */
export function animateCounter(element, target, duration = 1500) {
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(start + (target - start) * eased);
        element.textContent = current.toLocaleString('en-US');

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/**
 * Add ripple effect to element on click
 */
export function addRipple(element) {
    element.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';
        ripple.classList.add('ripple-effect');
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
}
