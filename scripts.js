const inputName = document.getElementById("name")
const inputContact = document.getElementById("mobile-contact")
const inputMessage = document.getElementById("message")
const form = document.getElementById("form")

inputContact.addEventListener('keydown', (event) => {
    if (event.key != 'Backspace'){
        if (event.target.value.length === 0) {
            event.target.value = '('
        }
        else if (event.target.value.length === 3) {
            event.target.value = event.target.value + ') '
        }
        else if (event.target.value.length === 4) {
            event.target.value = event.target.value + ' '
        }
        else if (event.target.value.length === 6) {
            event.target.value = event.target.value + ' '
        }
        else if (event.target.value.length === 11) {
            event.target.value = event.target.value + '-'
        }
    }
})

inputContact.addEventListener('keypress', (event) => {
    if (event.key != 'Backspace') {
        if (!(event.key in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])) {
            event.target.value = event.target.value.slice(0, -1);
        }
    }
})

inputContact.addEventListener('keyup', (event) => {
    if (event.key != 'Backspace') {
        if (!(event.key in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])) {
            event.target.value = event.target.value.slice(0, -1);
        }
    }
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    emailjs.init({publicKey: "Ub_LUXlAxBCjDwMTv"})
    emailjs.sendForm("service_rw71vam", "template_q86touv", form)
        .then((response) => {
            alert("Orçamento Solicitado com Sucesso!")
            inputName.value = ''
            inputContact.value = ''
            inputMessage.value = ''
        })
        .catch((error) => alert("Ocorreu algum erro!"))
})