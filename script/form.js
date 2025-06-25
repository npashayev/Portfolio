// Form modal related code

const contactBtn = document.querySelector('.email-btn')
const formModal = document.querySelector('.form-modal')
const modalCloseBtn = document.querySelector('.close-btn')
const modalOverlay = document.querySelector('.modal-overlay')

const closeModal = () => {
    formModal.style.display = 'none';
    document.body.style.overflow = ""
    document.body.style.height = ""
};

contactBtn.addEventListener('click', function () {
    formModal.style.display = 'flex'

    // This prevent the page scroll when modal is open
    document.body.style.overflow = "hidden"
    document.body.style.height = "100vh"
})

modalCloseBtn.addEventListener('click', closeModal)

// When user clicks outside the modal, the modal will be closed as well
modalOverlay.addEventListener('click', closeModal)




// Form logic

const form = document.querySelector('.contact-form')
const notificationContainer = document.querySelector(".notification-cnr")
const notificationText = document.querySelector(".notification-txt")
const notificationIcon = document.querySelector(".notification-icon")
const loadingIcon = document.querySelector(".loading-icon")
const submitText = document.querySelector(".submit-txt")


form.addEventListener('submit', function (e) {
    e.preventDefault()
    submitText.style.display = "none"
    loadingIcon.style.display = "block"

    // We get the input data from input fields and store it in a formData object
    const title = document.getElementById("title-input").value
    const name = document.getElementById("name-input").value
    const email = document.getElementById("email-input").value
    const message = document.getElementById("message-area").value

    const formData = {
        title,
        name,
        email,
        message
    }


    // This will send the message, title, name and email to my personal mail through emailjs
    emailjs.send("service_3jb4orb", "template_n1jkphk", formData)
        .then(() => {
            notificationContainer.style.display = 'flex';
            notificationContainer.classList.add("success")
            notificationText.textContent = "Message sent successfully!"
            notificationIcon.classList.add('fa-circle-check');
            form.reset()
            submitText.style.display = "block"
            loadingIcon.style.display = "none"

            setTimeout(() => {
                notificationContainer.style.display = 'none'
                notificationContainer.classList.remove('success')
                notificationIcon.classList.remove("fa-circle-check")
            }, 5000)

        })
        .catch(error => {
            notificationContainer.style.display = 'flex';
            notificationContainer.classList.add("fail")
            notificationText.textContent = "Something went wrong, please try again later."
            notificationIcon.classList.add('fa-circle-exclamation');
            submitText.style.display = "block"
            loadingIcon.style.display = "none"

            setTimeout(() => {
                notificationContainer.style.display = 'none'
                notificationContainer.classList.remove('fail')
                notificationIcon.classList.remove("fa-circle-exclamation")
            }, 5000)
        })
})