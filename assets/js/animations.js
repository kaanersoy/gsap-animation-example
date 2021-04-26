function animateImagesClipPath(selector) {
  const items = document.querySelectorAll(selector)
  items.forEach((item) => {
    const tl = new gsap.timeline({ scrollTrigger: item })
    tl.fromTo(
      item,
      { webkitClipPath: 'polygon(0 0, 0% 0, 0% 0%, 0% 0%)' },
      { webkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }
    )
  })
}

function scrubElement(selector, scrubX, scrubY) {
  const getStrings = document.querySelectorAll(selector)
  getStrings.forEach((str) => {
    gsap.to(str, {
      scrollTrigger: {
        trigger: str,
        start: 'top center',
        end: 'top 100px',
        scrub: 3,
      },
      x: scrubX,
      y: scrubY,
      ease: 'none',
      duration: 3,
    })
  })
}

function riseText(selector) {
  const tl = gsap.timeline({ scrollTrigger: { trigger: selector, toggleActions: 'play pause resume reset' } })
  tl.from(selector, { y: 70, x: 3, duration: 1, skewY: -5, stagger: 0.18 })
}

function callHomeAnimations() {
  animateImagesClipPath('.animate-image')
  scrubElement('#box-1-head', -30, 60)
  scrubElement('#scrub', 30, -20)
  riseText('.text-block .line p')
}

document.addEventListener('DOMContentLoaded', function (event) {
  window.addEventListener('load', function () {
    gsap.registerPlugin(ScrollTrigger)
    callHomeAnimations()
  })
})
