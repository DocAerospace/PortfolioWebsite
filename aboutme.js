document.addEventListener('DOMContentLoaded', () => {
    const transition = document.querySelector('.transition');
    const trademark = document.querySelector('.footerone');
    const mainLetters = document.querySelector('.mainLetters');
    const image = document.querySelector('.aboutMeContainer');
    //const text = document.querySelector('.rightColumn');
    
    transition.classList.add('active');
    
    setTimeout(() => {
        transition.classList.remove('active');
    }, 5000);


    setTimeout(() => {
        mainLetters.style.opacity = 1;
        trademark.style.opacity = 1;
    }, 1500);

    setTimeout(() => {
        mainLetters.classList.add('scaleMove');
    }, 3000);


    //make the texts have the typing effect
    const discoverText = document.getElementById('discoverText');
    const discoverText2 = document.getElementById('discoverText2');
    const discoverText3 = document.getElementById('discoverText3');
    const projectList = document.getElementById('projectList');
    const listItems = projectList.querySelectorAll('li');
    
    const typeEffect = (element, speed, callback) => {
        const text = element.textContent;
        element.textContent = ''; //empty text for start typing
        let i = 0;

        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer); //stop timer after all texts
                if (callback) {
                    setTimeout(callback, 1000);
                }
            }
        }, speed);
    };


    setTimeout(() => {
        discoverText.classList.remove('hidden');
        typeEffect(discoverText, 15, () => {
            setTimeout(() => {
                discoverText2.classList.remove('hidden');
                typeEffect(discoverText2, 15, () => {
                    setTimeout(() => {
                        discoverText3.classList.remove('hidden');
                        typeEffect(discoverText3, 15, () => {
                            projectList.classList.remove('hidden');
                            listItems.forEach((item, index) => {
                                setTimeout(() => {
                                    item.style.visibility = 'visible';
                                    typeEffect(item, 15);
                                }, index * 0); 
                            });
                        });
                    }, 1000); 
                });
            }, 1000);
        });
    }, 4200);


    setTimeout(() => {
        image.style.opacity = 1;
    }, 4200);
});