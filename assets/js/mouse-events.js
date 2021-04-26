document.addEventListener('DOMContentLoaded', function (event) {
  window.addEventListener('load', function () {
    const customCursor = document.getElementById('custom-cursor')
    const cursorPoint = document.getElementById('point')
    document.addEventListener('mousemove', (e) => {
      const cursorX = e.x
      const cursorY = e.y
      // customCursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`
      customCursor.style.top = `${cursorY - 20}px`
      customCursor.style.left = `${cursorX - 20}px`
    })
    document.addEventListener('click', () => {
      const customCursorClassList = [...customCursor.classList]
      customCursor.classList.add('click')
      setTimeout(() => {
        customCursor.classList.remove('click')
      }, 300)
    })
  })
})
