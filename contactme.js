document.addEventListener('DOMContentLoaded', () => {
    const transition = document.querySelector('.transition');
    const mainLetters = document.querySelector('.mainLetters');
    const subLetters = document.querySelector('.subLetters');
    const formContainer = document.querySelector('.formContainer');
    const button = document.querySelector('.submitBtn');
    const trademark = document.querySelector('.footerone');
    const icons = document.querySelector('.iconsContainer');
    const icons2 = document.querySelector('.moreText');
    const back = document.querySelector('.tooltip');
    const form = document.querySelector('contactMeForm');
    const formMessage = document.querySelector('formMessage');
    
    transition.classList.add('active');
    
    setTimeout(() => {
        transition.classList.remove('active');
    }, 5000);

    setTimeout(() => {
        mainLetters.style.opacity = 1;
        trademark.style.opacity = 1;
    }, 1500);

    setTimeout(() => {
        mainLetters.style.opacity = 1;
        mainLetters.classList.add('scaleMove');
    }, 3000);

    setTimeout(() => {
        subLetters.style.opacity = 1;
    }, 900);

    setTimeout(() => {
        formContainer.style.opacity = 1;
    }, 1500);

    setTimeout(() => {
        button.style.opacity = 1;
    }, 5000);

    setTimeout(() => {
        icons.style.opacity = 1;
        icons2.style.opacity = 1;
    }, 6000);


    form.addEventListener('submit', function(event) {
        //event.preventDefault();
        const name = document.querySelector('name').value;
        const message = document.querySelector('message').value;

        if (name === '' || message === '') {
            formMessage.textContent = 'Empty fields';
            setTimeout(() => {
                formMessage.textContent = '';
            }, 2000);
        } else {
            formMessage.textContent = 'Sent!';
            setTimeout(() => {
                formMessage.textContent = '';
            }, 2000);
            // form.reset();
        }
    });




    
});