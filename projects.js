document.addEventListener('DOMContentLoaded', () => {
    const transition = document.querySelector('.transition');
    const trademark = document.querySelector('.footerone');
    const mainLetters = document.querySelector('.mainLetters');
    //const nextButtons = document.querySelectorAll('.nextProject');
    const sections = document.querySelectorAll('.project');
    const arrows = document.querySelectorAll('.scrollArrows');
    const scrollUpButton = document.querySelector('.scrollUp');
    const scrollDownButton = document.querySelector('.scrollDown');
    const isScrolling = false;
    const theProjects = document.querySelector('.content');
    const projects = document.querySelectorAll('.projectInfo');
    const wholecontainer = document.querySelector('.projectContainer');
    //const prevButtonsNav = document.querySelectorAll('.prev');
    //const nextButtonsNav = document.querySelectorAll('.next');
    //const scoreElement = document.getElementById('score').querySelector('span');
    //const goToProjectsButton = document.getElementById('goToProjects');
    //const instruction = document.getElementById('instruction');
    //const crosshaired = document.getElementById('crosshair');
    //let score = 0;
    
    //instruction.style.display = 'none';
    //scoreElement.parentElement.style.display = 'none';
    //crosshaired.style.display = 'none';
    //goToProjectsButton.style.display = 'none';


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

    setTimeout(() => {
        wholecontainer.style.opacity = 1;
    }, 2000);


    // setTimeout(() => {
    //     theProjects.forEach((section) => {
    //         section.style.opacity = 1;
    //     });
    // }, 2200);

    // setTimeout(() => {
    //     projects.style.opacity = 1;
    // }, 2200);



    
    let currentSectionIndex = 0;


    const scrollToSection = (index) => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSectionIndex = index;
    };




    window.addEventListener('wheel', (event) => {
        if (isScrolling) return;
        isScrolling = true;

        if (event.deltaY < 0 && currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        } else if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        }

        setTimeout(() => {
            isScrolling = false;
        }, 1000);
    }
    );






    const updateIndex = () => {
        let closestindex = 0;
        let dist = Infinity;

        sections.forEach((section, index) => {
            const { top } = section.getBoundingClientRect();

            if (top > 0 && top < dist) {
                closestindex = index;
                dist = top;
            }
        });
        currentSectionIndex = closestindex;
    };

    window.addEventListener('scroll', updateIndex);



    scrollUpButton.addEventListener('click', () => {
        if (currentSectionIndex > 0) {
            scrollToSection(currentSectionIndex - 1);
        }
    });

    scrollDownButton.addEventListener('click', () => {
        if (currentSectionIndex < sections.length - 1) {
            scrollToSection(currentSectionIndex + 1);
        }
    });



});
