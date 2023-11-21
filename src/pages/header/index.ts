import { defineStore } from 'pinia';

interface HeaderState {
  showContent: boolean;
  isSmallScreen: boolean;
}

export const useHeaderStore = defineStore({
  id: 'header',
  state: (): HeaderState => ({
    showContent: false,
    isSmallScreen: window.innerWidth <= 767,
  }),
  actions: {
    toggleContent() {
      this.showContent = !this.showContent;
    },
    handleResize() {
      this.isSmallScreen = window.innerWidth <= 767;
      if (!this.isSmallScreen) {
        this.showContent = false;
      }
    },
    init() {
      window.addEventListener('resize', this.handleResize);
    },
    destroy() {
      window.removeEventListener('resize', this.handleResize);
    },
  },
});