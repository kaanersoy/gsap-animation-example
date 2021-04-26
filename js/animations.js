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

document.addEventListener('DOMContentLoaded', function (event) {
  window.addEventListener('load', function () {
    gsap.registerPlugin(ScrollTrigger)
    animateImagesClipPath('.animate-image')
  })
})
