new Splide("#carousel-best-sl", {
  pagination: false,
  lazyLoad: true,
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow",
    prev: "splide__arrow--prev control-arrow-prev",
    next: "splide__arrow--next control-arrow-next",
  },
}).mount();

new Splide("#carousel-deals-main", {
  pagination: true,
  lazyLoad: true,
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow-deals",
    prev: "splide__arrow--prev control-arrow-deals-prev",
    next: "splide__arrow--next control-arrow-deals-next",
  },
}).mount();

new Splide("#carousel-deals", {
  pagination: true,
  lazyLoad: true,
  type: "loop",
  // paginationDirection: "ttb",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow-deals-mode",
    prev: "splide__arrow--prev control-arrow-deals-mode-prev position-absolute",
    next: "splide__arrow--next control-arrow-deals-mode-next position-absolute",
  },
}).mount();

new Splide("#carousel-bestsller", {
  pagination: true,
  lazyLoad: true,
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow-deals-mode",
    prev: "splide__arrow--prev control-arrow-seller-mode-prev position-absolute",
    next: "splide__arrow--next control-arrow-seller-mode-next position-absolute",
  },
}).mount();

var main = new Splide(".thumbnail-carousel-today-deals-main", {
  type: "fade",
  pagination: false,
  arrows: false,
});

var thumbnails = new Splide(".thumbnail-carousel-today-deals", {
  fixedWidth: 100,
  fixedHeight: 60,
  rewind: true,
  pagination: false,
  isNavigation: true,
  breakpoints: {
    600: {
      fixedWidth: 60,
      fixedHeight: 44,
    },
  },
});

main.sync(thumbnails);
main.mount();
thumbnails.mount();

var main2 = new Splide(".thumbnail-carousel-today-deals-main2", {
  type: "fade",
  pagination: false,
  arrows: false,
});

var thumbnails2 = new Splide(".thumbnail-carousel-today-deals2", {
  fixedWidth: 100,
  fixedHeight: 60,
  rewind: true,
  pagination: false,
  isNavigation: true,
  breakpoints: {
    600: {
      fixedWidth: 60,
      fixedHeight: 44,
    },
  },
});
main2.sync(thumbnails2);
main2.mount();
thumbnails2.mount();

var main3 = new Splide(".thumbnail-carousel-today-deals-main3", {
  type: "fade",
  pagination: false,
  arrows: false,
});

var thumbnails3 = new Splide(".thumbnail-carousel-today-deals3", {
  fixedWidth: 100,
  fixedHeight: 60,
  rewind: true,
  pagination: false,
  isNavigation: true,
  breakpoints: {
    600: {
      fixedWidth: 60,
      fixedHeight: 44,
    },
  },
});
main3.sync(thumbnails3);
main3.mount();
thumbnails3.mount();
// new Splide("#carousel-seller-today", {
//   type: "loop",
//   arrows: false,
// }).mount();

new Splide("#carousel-host-arrivls", {
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow-deals-mode",
    prev: "splide__arrow--prev control-arrow-recommend-prev position-absolute",
    next: "splide__arrow--next control-arrow-recommend-next position-absolute",
  },
}).mount();

new Splide("#carousel-recommended", {
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow-deals-mode",
    prev: "splide__arrow--prev control-arrow-recommend-prev position-absolute",
    next: "splide__arrow--next control-arrow-recommend-next position-absolute",
  },
}).mount();

new Splide("#carousel-recently", {
  pagination: true,
  lazyLoad: true,
  type: "loop",
  classes: {
    arrows: "control-arrows",
    arrow: "splide__arrow control-arrow-deals-mode",
    prev: "splide__arrow--prev control-arrow-recently-mode-prev position-absolute",
    next: "splide__arrow--next control-arrow-recently-mode-next position-absolute",
  },
}).mount();
