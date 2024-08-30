/**
 * b-scroll-lock v 1.0.8
 * Author: Bornfight Studio
 * Repo: https://github.com/bornfight-studio/b-scroll-lock
 *
 * Year: 2020
 */

export default class ScrollLock {
    constructor() {
        this.body = document.body;
    }

    /**
     *
     * @param {number} offset
     */
    lockScroll(offset = 100) {
        this.offsetTop = window.pageYOffset;
        this.body.style.overflow = 'hidden';
        this.body.style.top = `-${this.offsetTop}px`;
        this.body.style.position = 'fixed';
        this.body.dataset.scrollAmount = `${this.offsetTop}`;

        if (this.offsetTop >= offset) {
            this.body.classList.add('is-fixed-scrolled');
        }
    }

    /**
     *
     * @param {number} offsetTop
     */
    unlockScroll(offsetTop = this.offsetTop) {
        this.body.style.top = '0px';
        this.body.style.position = '';
        this.body.style.overflow = '';
        window.scroll(0, offsetTop || 0);
        this.body.dataset.scrollAmount = "";

        this.body.classList.remove('is-fixed-scrolled');
    }
}
