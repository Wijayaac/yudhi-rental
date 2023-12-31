export default class HeaderNavigation {
  private bodyElm: Element;
  private headerElm: HTMLElement;
  private primaryNav: Element;
  private navToggle: Element;
  private windowWidth: number;
  constructor() {
    this.bodyElm = document.body;
    this.headerElm = this.bodyElm.querySelector("header")!;
    this.primaryNav = document.querySelector("#primary-navigation")!;
    this.navToggle = document.querySelector(".header__toggle.header--mobile")!;
    this.windowWidth = window.innerWidth;

    this.init();
  }

  init() {
    if (this.primaryNav) {
      // this.mobileToggle();
    }

    if (this.headerElm) {
      this.onScroll();
    }
  }

  // private mobileToggle() {
  //   this.navToggle.addEventListener("click", () => {
  //     let visibility = this.primaryNav.getAttribute("data-visible");
  //     if (visibility === "false") {
  //       this.primaryNav.setAttribute("data-visible", "true");
  //       this.navToggle.setAttribute("aria-expanded", "true");
  //     } else {
  //       this.primaryNav.setAttribute("data-visible", "false");
  //       this.navToggle.setAttribute("aria-expanded", "false");
  //     }
  //   });
  // }
  private onScroll() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.headerElm.classList.add("scroll");
      } else {
        this.headerElm.classList.remove("scroll");
      }
    });
  }
}
