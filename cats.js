const catsFormToggleBtn = document.querySelector('#toggle-catform-btn')
const catsForm = document.querySelector('#cats-form')
const submitBtn = document.querySelector('.submit-btn')
let opened = false


catsFormToggleBtn.addEventListener('click', () => toggleCatsForm.call())


function toggleCatsForm () {
    opened = true

    switch(opened) {
        case true: {
            catsForm.classList.add('form-shown')
            opened = false
            break;
        }

        case false: {
            catsForm.classList.remove('form-shown')
            opened = true;
        }
    }
}

submitBtn.addEventListener('click', () => openSubmitSuccessDialog.call())

function openSubmitSuccessDialog() {
    window.alert("Cat is successfully added.")
}
