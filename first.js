//open new page when button clicked
document.querySelector('.enterButton').addEventListener('click', function() {
    window.location.href = "loading.html"; 
});



    



document.addEventListener("DOMContentLoaded", function() {

    ///////////////////////TYPING EFFECT//////////////////////////



    //make the second text have the typing effect
    const descriptionText = document.getElementById('discoverText');
    
    const typeEffect = (element, speed) => {
        const text = element.textContent;
        element.textContent = ''; //empty text for start typing
        let i = 0;

        const timer = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(timer); //stop timer after all texts
            }
        }, speed);
    };


    setTimeout(() => {
        discoverText.classList.remove('hidden');
        typeEffect(discoverText, 60); 
    }, 2000);


    const enterButton = document.querySelector('.enterButton');
    setTimeout(() => {
        enterButton.style.opacity = 1; 
    }, 1000);





    ///////////////////////PIXELS//////////////////////////



    //display pixels at background
    const numPixels = 100; //size
    const pixelContainer = document.createElement('div');
    pixelContainer.classList.add('pixel-container');
    document.body.appendChild(pixelContainer);
    const pixels = [];

    //create and add pixel
    for (let i = 0; i < numPixels; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.top = `${Math.random() * 100}vh`; 
        pixel.style.left = `${Math.random() * 100}vw`; 
        pixel.style.animationDuration = `${Math.random() * 10 + 5}s`; 
        pixel.style.animationDelay = `${Math.random() * 5}s`; 
        pixelContainer.appendChild(pixel);
        pixels.push(pixel);
        animatePixel(pixel);
    }

    //pixel animation
    function animatePixel(pixel) {
        const randomX = (Math.random() - 0.5) * 500; 
        const randomY = (Math.random() - 0.5) * 500; 
        const duration = (Math.random() * 5 + 5) * 1000; 

        pixel.animate([
            { transform: 'translate(0, 0)' },
            { transform: `translate(${randomX}px, ${randomY}px)` }
        ], {
            duration: duration,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out'
        });
    }

    //mouse click
    document.addEventListener('click', (e) => {
        pixels.forEach(pixel => {
            const rect = pixel.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            //const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx); 
            const force = 250;

            const newX = rect.left + Math.cos(angle) * force;
            const newY = rect.top + Math.sin(angle) * force;

            pixel.style.left = `${newX}px`;
            pixel.style.top = `${newY}px`;
            pixel.style.transition = `all 1.8s ease-in-out`;
            //pixel.style.transform = `translate(${newX}px, ${newY}px)`;
             
        });
    });

    //mouse move
    document.addEventListener('mousemove', (e) => {
        const flashlight = document.querySelector('.flashlight');
        const flashlightWidth = flashlight.offsetWidth;
        const flashlightHeight = flashlight.offsetHeight;
        flashlight.style.transform = `translate(${e.clientX - flashlightWidth / 2}px, ${e.clientY - flashlightHeight / 2}px)`;
        
    });
    





});


