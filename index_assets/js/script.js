// ================ Site Dark and Light Mood Setting 
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleBtn = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    const logo = document.getElementById("logo");

    // Check user's previous preference (if saved in localStorage)
    const currentTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", currentTheme);

    // Update button and logo based on initial theme
    updateThemeAssets(currentTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener("click", () => {
        const theme = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);

        // Save user's preference in localStorage
        localStorage.setItem("theme", theme);

        // Update button and logo
        updateThemeAssets(theme);
    });

    function updateThemeAssets(theme) {
        if (theme === "dark") {
            themeIcon.src = "index_assets/images/icons/dark.png"; // Dark mode icon
            logo.src = "index_assets/images/logo/dark-logo.png"; // Dark mode logo
        } else {
            themeIcon.src = "index_assets/images/icons/light.png"; // Light mode icon
            logo.src = "index_assets/images/logo/logo.png"; // Light mode logo
        }
    }
});



// ========== Navbar Fixed with scroll wheel 
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const fixedPoint = 100;

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > fixedPoint) {
            navbar.classList.add("fixed");
        } else {
            navbar.classList.remove("fixed");
        }
    });
});


// ============== Smooth Scroll to Section 
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-link[href^="#"]');
    const navbar = document.querySelector(".navbar");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault(); 
            const targetId = this.getAttribute("href").substring(1); 
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const targetPosition = targetSection.offsetTop - navbar.offsetHeight; // Calculate target position
                smoothScrollTo(targetPosition); // Call smooth scroll function
            }
        });
    });

    function smoothScrollTo(targetPosition) {
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        const duration = 800; // Duration for smooth scroll (in ms)
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime; // Initialize startTime
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Progress of the animation (0 to 1)

            window.scrollTo(0, startPosition + distance * progress); // Scroll with smooth effect

            if (timeElapsed < duration) {
                requestAnimationFrame(animation); // Keep animating until the duration is reached
            }
        }

        requestAnimationFrame(animation); // Start the animation
    }
});


// ============ Manu Active by Section 
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section"); 
    const navLinks = document.querySelectorAll(".nav-link"); 
    const updateActiveLink = () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.pageYOffset >= sectionTop - 100 && window.pageYOffset < sectionTop + sectionHeight - 50) {
                currentSection = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.remove("active"); 
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active"); 
            }
        });
    };
    window.addEventListener("scroll", updateActiveLink);
});

// =================== Back to top button js 
document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("back-to-top");

    // Show the button when scrolling down 100px
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            backToTopBtn.classList.add("show"); // Show button
        } else {
            backToTopBtn.classList.remove("show"); // Hide button
        }
    });

    // Smooth scroll to top when the button is clicked
    backToTopBtn.addEventListener("click", () => {
        smoothScrollToTop();
    });

    function smoothScrollToTop() {
        const duration = 800; // Duration in milliseconds
        const startPosition = window.scrollY;
        const startTime = performance.now();

        function scrollAnimation(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Calculate progress (0 to 1)

            // Ease-in-out effect for smoother scrolling
            const easeInOutQuad = progress < 0.5 
                ? 2 * progress * progress 
                : -1 + (4 - 2 * progress) * progress;

            const scrollPosition = startPosition * (1 - easeInOutQuad); // Calculate the new scroll position

            window.scrollTo(0, scrollPosition); // Scroll to the calculated position

            if (progress < 1) {
                requestAnimationFrame(scrollAnimation); // Continue animation
            }
        }

        requestAnimationFrame(scrollAnimation); // Start animation
    }
});



// ====================================
// =================== Hero Section Start 
// ====================================

var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
    loop: true,             // Keep it looping forever
    delay: 75,              // Adjust typing speed (in milliseconds)
    deleteSpeed: 50,        // Adjust deletion speed
    cursor: '|',            // Custom cursor
    autoStart: true         // Automatically start typing when script is loaded
});
typewriter.typeString('Web Developer')
    .pauseFor(2500)         // Wait for 2.5 seconds after typing
    .deleteAll()            // Delete all the text
    .typeString('App Developer') // Add another role
    .pauseFor(2500)
    .deleteAll()
    .typeString('FrontEnd Dev')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Full Stack') // Added another title
    .pauseFor(2500)
    .deleteAll()
    .start();               // Start the typing effect

// ====================================
// =================== Hero Section End 
// ====================================


// ================================================ 
// ===================  Custom Cursor Effect JS Start 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});
// ===================  Custom Cursor Effect JS End 
// ================================================ 

// ================================================ 
// =================== Page Loading Effect Start 
$(document).ready(function() {
	// Users can skip the loading process if they want.
	$('.skip').click(function() {
		$('.loading, body').addClass('loaded');
	})
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.loading, body').addClass('loaded');
		setTimeout(function() {
			$('.loading').css({'display':'none'})
		}, 2000)
	});
	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('.loading, body').addClass('loaded');
	}, 60000);
})
// =================== Page Loading Effect End 
// ================================================ 

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    expandImg.src = imgs.src;
  }
function myFunction2(imgs) {
    var expandImg2 = document.getElementById("expandedImg2");
    expandImg2.src = imgs.src;
  }
function myFunction3(imgs) {
    var expandedImg3 = document.getElementById("expandedImg3");
    expandedImg3.src = imgs.src;
  }




// =============== Contact Form JS 
const inputs = document.querySelectorAll(".input");
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}
inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


    // // Disable right-click
    // document.addEventListener("contextmenu", (event) => {
    //     event.preventDefault();
    //     alert("Right-click is disabled on this site.");
    // });

    // // Disable keyboard shortcuts
    // document.addEventListener("keydown", (event) => {
    //     // Block specific keys
    //     if (
    //         (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "p" || event.key === "i")) || // Ctrl+U, Ctrl+S, Ctrl+P, Ctrl+Shift+I
    //         event.key === "F12" // F12
    //     ) {
    //         event.preventDefault();
    //         alert("This shortcut is disabled.");
    //     }
    // });


console.log("%cStop! Do not copy this code!", "color: red; font-size: 40px;");
