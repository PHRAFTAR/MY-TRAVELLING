// Get the about section and about link
const aboutSection = document.getElementById("about");
const aboutLink = document.getElementById("about-link");

// Add event listener to the about link
aboutLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Toggle the visibility of the about section
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
    } else {
        aboutSection.style.display = "none";
    }
});
