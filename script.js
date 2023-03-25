const linkToggle = document.querySelector('#link-toggle')
const link = document.querySelector('.container.nav .link')
linkToggle.addEventListener('click', function () {
    linkToggle.classList.toggle('fa-xmark')
    link.classList.toggle('show')
})