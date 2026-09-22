// Nideyatech marketing site — small progressive-enhancement script.
// No frameworks, no build step: keeps Cloudflare Pages deploys instant.

(function () {
  "use strict";

  // ---- Nav: solid/blur background once scrolled ----
  var nav = document.getElementById("nav");
  // Pages with no dark hero at the top (e.g. privacy.html) set
  // data-force-scrolled="true" so the nav always uses its light-background
  // (dark text/logo) styling instead of the hero-only white variant.
  var forceScrolled = nav.dataset.forceScrolled === "true";
  var onScroll = function () {
    if (forceScrolled || window.scrollY > 12) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // ---- Mobile menu ----
  var burger = document.getElementById("burger");
  var mobileMenu = document.getElementById("mobileMenu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", function () {
      burger.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open");
      document.body.style.overflow = mobileMenu.classList.contains("is-open") ? "hidden" : "";
    });
    mobileMenu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        burger.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
        document.body.style.overflow = "";
      });
    });
  }

  // ---- Reveal-on-scroll ----
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
