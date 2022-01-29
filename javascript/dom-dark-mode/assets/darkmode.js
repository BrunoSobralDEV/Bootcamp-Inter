function darkModeTheme() {
    const lightText = document.querySelector('.page-title')
    const body = document.body
    const btn = document.querySelector('.button-6')
    const footer = document.querySelector('.footer')

    lightText.innerHTML = "Light Mode On"
    btn.classList.toggle('dark')
    body.classList.toggle('dark')
    footer.classList.toggle('dark')
}

const changeThemeBtn = document.querySelector('.button-6')
changeThemeBtn.addEventListener("click", darkModeTheme)