export const registerForm = document.querySelector("#register-form")
export const loginForm = document.querySelector("#login-form")

const changeToRegisterBtn = document.querySelector("#change-to-register")
const changeToLoginBtn = document.querySelector("#change-to-login")

const authSubTitle = document.querySelector("#auth-type")

changeToLoginBtn.addEventListener('click', () => {
    registerForm.classList.remove('active')
    loginForm.classList.add('active')
    authSubTitle.innerHTML = 'Sign in'
})

changeToRegisterBtn.addEventListener('click', () => {
    loginForm.classList.remove('active')
    registerForm.classList.add('active')
    authSubTitle.innerHTML = 'Register'
})