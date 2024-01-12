document.addEventListener("DOMContentLoaded", function () {
    var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function highlightNav() {
        var scrollPosition = window.scrollY;
        
        // Loop through each section to find the one in the viewport
        document.querySelectorAll('section').forEach(function(section) {
            var offset = section.offsetTop - 50; // Adjust the offset as needed   
            if (scrollPosition >= offset) {
                // Remove the 'selected' class from all navbar links
                navbarLinks.forEach(function(innerLink) {
                    innerLink.classList.remove('selected');
                });
                // Add the 'selected' class to the navbar link corresponding to the section
                var sectionId = section.getAttribute('id');
                var correspondingLink = document.querySelector('.navbar-nav .nav-link[href="#' + sectionId + '"]');  
                if (correspondingLink) {
                    correspondingLink.classList.add('selected');
                }
            }
        });
    }
    
    // Call the function on page load
    highlightNav();
    
    // Call the function on scroll
    window.addEventListener('scroll', highlightNav);
});
