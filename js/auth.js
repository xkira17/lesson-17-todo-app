export const registerForm = document.querySelector("#register-form")
export const loginForm = document.querySelector("#login-form")

const changeToRegisterBtn = document.querySelector("#change-to-register")
const changeToLoginBtn = document.querySelector("#change-to-login")

const authSubTitle = document.querySelector("#auth-type")

const registerName = document.querySelector("#register-name")
const registerPhone = document.querySelector("#register-phone")
const registerPassword = document.querySelector("#register-password")

const loginPhone = document.querySelector("#login-phone")
const loginPassword = document.querySelector("#login-password")

changeToLoginBtn.addEventListener('click', () => {
    loginForm.classList.remove('active')
    registerForm.classList.add('active')
    authSubTitle.innerHTML = 'Register'
})

changeToRegisterBtn.addEventListener('click', () => {
    registerForm.classList.remove('active')
    loginForm.classList.add('active')
    authSubTitle.innerHTML = 'Sign in'
})

function register(e) {
    e.preventDefault()

    const data = {
        phone: registerPhone.value,
        name: registerName.value,
        password: registerPassword.value,
    }

    fetch('http://todo.paydali.uz/api/register', {
        method: "POST",
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        if (data.code === 200) {
            Swal.fire('Good job!', 'You registred successful!', 'success')
            registerForm.classList.remove('active')
            loginForm.classList.add('active')
            authSubTitle.innerHTML = 'Sign in'
        } else {
            Swal.fire('Wrong!', data.message, 'error')
        }
    })
    .catch(err => console.log(err))
}


function login(e) {
    e.preventDefault()
    
    const data = {
        phone: loginPhone.value,
        password: loginPassword.value,
    }
    
    fetch('http://todo.paydali.uz/api/login', {
        method: "POST",
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(data => {
        if (data.code === 200) {
            Swal.fire('Good job!', 'вы успешно вошли в свой аккаунт', 'success')
            localStorage.setItem('todo-token', data.payload.token)
            localStorage.setItem('todo-username', data.payload.name)
        } else {
            Swal.fire('Wrong!', data.message, 'error')
        }
    })
    .catch(err => console.log(err))
}

loginForm.addEventListener('submit', login)
registerForm.addEventListener('submit', register)