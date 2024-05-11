document.addEventListener("DOMContentLoaded", function() {
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

    const images = document.querySelectorAll("#tomb-of-safdar-jang img");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    images.forEach(image => {
        image.addEventListener("click", function() {
            popup.style.display = "block";
            popupImg.src = this.src;
        });
    });

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Add download functionality
    const downloadBtn = document.getElementById("download-btn");
    downloadBtn.addEventListener("click", function() {
        const link = document.createElement("a");
        link.href = popupImg.src;
        link.download = "image.jpg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
