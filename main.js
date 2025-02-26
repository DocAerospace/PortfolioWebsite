document.addEventListener('DOMContentLoaded', () => {
    const map = document.querySelector('.map');
    const icons = document.querySelectorAll('.icon');

    // Move the map with mouse
    document.addEventListener('mousemove', (e) => {
        const x = ((e.clientX / 2) / window.innerWidth) * 10;
        const y = ((e.clientY / 2) / window.innerHeight) * 10;

        map.style.transform = `translate(-${x}%, -${y}%)`;
    });



    //mouse move
    document.addEventListener('mousemove', (e) => {
        const flashlight = document.querySelector('.flashlight');
        const flashlightWidth = flashlight.offsetWidth;
        const flashlightHeight = flashlight.offsetHeight;
        flashlight.style.transform = `translate(${e.clientX - flashlightWidth / 2}px, ${e.clientY - flashlightHeight / 2}px)`;
        
    });


    //clicking on the icons
    icons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const id = e.target.id;
            let targetPage = '';
    
            switch (id) {
                case 'contactIcon':
                    targetPage = 'contactme.html';
                    break;
                case 'aboutIcon':
                    targetPage = 'aboutme.html';
                    break;
                case 'projectsIcon':
                    targetPage = 'projects.html';
                    break;
            }
            
            //super mario transition
            if (targetPage) {
                const transitioned = document.querySelector('.transition');
                transitioned.classList.add('active');
    
                setTimeout(() => {
                    window.location.href = targetPage;
                }, 1500); 
            }
        });
    });
});



