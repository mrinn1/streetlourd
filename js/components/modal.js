// ============================================================
// VictoryToClan — Modal Dialog System
// ============================================================

class ModalManager {
    constructor() {
        this.activeModal = null;
    }

    /**
     * Show a modal dialog
     * @param {Object} options
     * @param {string} options.title - Modal title
     * @param {string} options.content - HTML content for the body
     * @param {string} [options.size='md'] - Size: 'sm', 'md', 'lg', 'xl'
     * @param {boolean} [options.showClose=true] - Show close button
     * @param {Array} [options.actions] - Array of {label, class, onClick} for footer buttons
     * @returns {HTMLElement} The modal element
     */
    show({ title, content, size = 'md', showClose = true, actions = [], onClose = null }) {
        this.close(); // Close any existing modal

        const sizes = {
            sm: 'max-w-sm',
            md: 'max-w-lg',
            lg: 'max-w-2xl',
            xl: 'max-w-4xl',
            full: 'max-w-6xl',
        };

        const backdrop = document.createElement('div');
        backdrop.className = 'fixed inset-0 z-[9998] flex items-center justify-center p-4';
        backdrop.id = 'modal-backdrop';
        backdrop.innerHTML = `
            <div class="absolute inset-0 bg-black/60 backdrop-blur-sm modal-backdrop-bg" onclick="window.__modalManager?.close()"></div>
            <div class="relative w-full ${sizes[size]} modal-content-enter">
                <div class="relative rounded-2xl border border-white/10 bg-[#1a1f2e]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                    ${title ? `
                    <div class="flex items-center justify-between px-6 py-4 border-b border-white/10">
                        <h3 class="text-lg font-bold text-white" style="font-family: 'Lilita One', cursive;">${title}</h3>
                        ${showClose ? `
                        <button onclick="window.__modalManager?.close()" class="text-white/50 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                        </button>` : ''}
                    </div>` : ''}
                    <div class="px-6 py-5 text-gray-300 max-h-[70vh] overflow-y-auto modal-body">
                        ${content}
                    </div>
                    ${actions.length > 0 ? `
                    <div class="flex items-center justify-end gap-3 px-6 py-4 border-t border-white/10">
                        ${actions.map((a, i) => `
                            <button id="modal-action-${i}" class="${a.class || 'px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all'}">
                                ${a.label}
                            </button>
                        `).join('')}
                    </div>` : ''}
                </div>
            </div>
        `;

        document.body.appendChild(backdrop);
        document.body.style.overflow = 'hidden';

        // Attach button handlers
        actions.forEach((action, i) => {
            const btn = backdrop.querySelector(`#modal-action-${i}`);
            if (btn && action.onClick) {
                btn.addEventListener('click', () => action.onClick(backdrop));
            }
        });

        // Animate in
        requestAnimationFrame(() => {
            const contentEl = backdrop.querySelector('.modal-content-enter');
            if (contentEl) {
                contentEl.classList.add('modal-content-visible');
            }
        });

        this.activeModal = backdrop;
        this.onClose = onClose;

        // ESC key to close
        this._escHandler = (e) => {
            if (e.key === 'Escape') this.close();
        };
        document.addEventListener('keydown', this._escHandler);

        return backdrop;
    }

    /**
     * Show a confirmation dialog
     */
    confirm({ title, message, confirmLabel = 'Confirm', cancelLabel = 'Cancel', onConfirm, onCancel, danger = false }) {
        return this.show({
            title: title || 'Konfirmasi',
            content: `<p class="text-gray-300">${message}</p>`,
            size: 'sm',
            actions: [
                {
                    label: cancelLabel,
                    class: 'px-4 py-2 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all',
                    onClick: () => {
                        this.close();
                        if (onCancel) onCancel();
                    },
                },
                {
                    label: confirmLabel,
                    class: `px-4 py-2 rounded-xl text-sm font-bold text-white transition-all ${
                        danger 
                            ? 'bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700' 
                            : 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700'
                    }`,
                    onClick: () => {
                        this.close();
                        if (onConfirm) onConfirm();
                    },
                },
            ],
        });
    }

    close() {
        if (this.activeModal) {
            const contentEl = this.activeModal.querySelector('.modal-content-visible');
            if (contentEl) {
                contentEl.classList.remove('modal-content-visible');
                contentEl.classList.add('modal-content-exit');
            }
            const backdrop = this.activeModal;
            setTimeout(() => {
                backdrop.remove();
                document.body.style.overflow = '';
            }, 200);
            this.activeModal = null;
        }
        if (this._escHandler) {
            document.removeEventListener('keydown', this._escHandler);
        }
        if (this.onClose) {
            this.onClose();
            this.onClose = null;
        }
    }
}

export const modal = new ModalManager();

// Expose globally for inline onclick handlers
window.__modalManager = modal;
