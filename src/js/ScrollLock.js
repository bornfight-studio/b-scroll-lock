/*
 * b-scroll-lock v 1.0.0
 * Author: Bornfight
 * Repo: https://github.com/bornfight/b-scroll-lock
 *
 * Year: 2020
 */

export default class ScrollLock {
    constructor() {
        this.body = document.querySelector('body');
    }

    /**
     *
     * @param {number} offset
     */
    lockScroll(offset) {
        let scrollClassOffset = offset || 100;
        this.offsetTop = document.documentElement.scrollTop;
        this.body.style.overflow = 'hidden';
        this.body.style.top = `-${this.offsetTop}px`;
        this.body.style.position = 'fixed';

        if (this.offsetTop > scrollClassOffset) {
            this.body.classList.add('is-fixed-scrolled');
        }
    }

    /**
     *
     * @param {number} offsetTop
     */
    unlockScroll(offsetTop) {
        this.body.style.top = '0px';
        this.body.style.position = '';
        this.body.style.overflow = '';
        document.documentElement.scrollTop = offsetTop || this.offsetTop;

        this.body.classList.remove('is-fixed-scrolled');
    }
}