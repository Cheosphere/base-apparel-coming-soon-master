const form = document.getElementById('form')
const inputEmail = document.getElementById('input_email')
const spanError = document.getElementById('error_msg')
const iconError = document.getElementById('icon_error')

// Escuhamos evento submit del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault()
    // Validación campo vacío
    if (inputEmail.value === '') {
        spanError.innerHTML = 'This field is required'
        iconError.classList.add('icon_error_show')
        inputEmail.focus()
        // Validación que se incluya @ en email ingresado
    } else if (inputEmail.value.indexOf("@") < 0) {
        spanError.innerHTML = 'Please provide a valid email'
        inputEmail.focus()
        // Validación que se incluya .com en email ingresado
    } else if (inputEmail.value.indexOf(".com") < 0) {
        spanError.innerHTML = 'Please provide a valid email'
        inputEmail.focus()
    } else {
        // Si todo se ingresó correctamente mostramos mensaje OK
        iconError.classList.remove('icon_error_show')
        spanError.classList.add('ok_msg')
        inputEmail.classList.add('ok_msg')
        // Limpiamos el input
        inputEmail.value = ''
        spanError.innerHTML = 'Email registered correctly'
        // Refrescamos la página en 2 segundos
        setTimeout(() => {
            inputEmail.value = ''
            window.location.reload()
        }, 2000)
    }
})