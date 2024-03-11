// script.js

const menu = document.querySelector('.nav-menu');
const toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const navMenu = document.querySelector('.nav-menu');
    const navContainer = document.querySelector('.navbar-container');
    const spans = document.querySelectorAll('.toggle-button span');

    const showMenuWithDelay = () => {
        setTimeout(() => {
            navMenu.classList.add('show-menu');
            spans.forEach(span => {
                span.classList.add('hidden'); // Add the hidden class
            });
            const screenWidth = window.innerWidth;
            const newMarginLeft = screenWidth > 768 ? '42%' : '15%'; // Example condition

            navContainer.style.marginLeft = newMarginLeft;
        }, 650); // Delay of 900 milliseconds
        navMenu.style.marginTop = '-10px';
    };

    const hideMenu = () => {
        navMenu.classList.remove('show-menu');
        spans.forEach(span => {
            span.classList.remove('hidden'); // Remove the hidden class
        });
        navContainer.style.marginLeft='50%';
    };

    const navbarContainer = document.querySelector('.navbar-container');
    navbarContainer.addEventListener('mouseenter', showMenuWithDelay);
    navbarContainer.addEventListener('mouseleave', hideMenu);
});



document.addEventListener('DOMContentLoaded', function() {
    var skillLevels = document.querySelectorAll('.skill-level');
    var skillContainer = document.querySelector('.skills-main-container');
    
    window.addEventListener('scroll', function() {
        var containerTop = skillContainer.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (containerTop < windowHeight - (windowHeight * 0.3)) {
            skillLevels.forEach(function(skillLevel) {
                skillLevel.classList.add('slideleft');
            });
        } else {
            skillLevels.forEach(function(skillLevel) {
                skillLevel.classList.remove('slideleft');
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var projectsContainer = document.querySelector('.projects-container');
    
    window.addEventListener('scroll', function() {
        var projectContainerTop = projectsContainer.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (projectContainerTop < windowHeight - (windowHeight * 0.3)) {
            projectsContainer.classList.add('slide-down');
        } else {
            projectsContainer.classList.remove('slide-down');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const typingSpan = document.getElementById('typingSpan');
    const words = [' App', ' Software', ' Web', ' Python']; // Words to be typed
    let wordIndex = 0; // Index to track current word
    let charIndex = 0; // Index to track current character
    let isDeleting = false; // Flag to track if deleting characters
    const typingSpeed = 100; // Typing speed in milliseconds
    const sleepTimeAfterDeleting = 1000; // Sleep time in milliseconds after deleting

    function type() {
        const currentWord = words[wordIndex]; // Get current word

        if (!isDeleting && charIndex < currentWord.length) {
            // Add character
            typingSpan.textContent += currentWord[charIndex];
            charIndex++;
        } else if (isDeleting && typingSpan.textContent.length > 0) {
            // Delete character
            typingSpan.textContent = typingSpan.textContent.slice(0, -1);
        } else {
            // Move to the next word or previous word
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            charIndex = 0; // Reset character index for the new word
            setTimeout(type, sleepTimeAfterDeleting); // Sleep after deleting
            return; // Exit the function
        }

        setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }

    // Start typing effect
    type();
});


document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(function(project) {
        const image = project.querySelector('img');
        const textDetails = project.querySelector('.text-details');

        // Click event for the image
        image.addEventListener('click', function() {
            // Hide the image
            image.style.display = 'none';

            // Show the text details
            textDetails.style.display = 'block';
        });

        // Click event for the text details
        textDetails.addEventListener('click', function() {
            // Hide the text details
            textDetails.style.display = 'none';

            // Show the image
            image.style.display = 'block';
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu li a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            
            const targetId = this.getAttribute('href').substring(0); // Get the target section id
            const targetSection = document.getElementById(targetId); // Get the target section element
            
            if (targetSection) {
                // Scroll to the target section smoothly
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
