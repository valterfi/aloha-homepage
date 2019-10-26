document.addEventListener("DOMContentLoaded", function() {

    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(function(element) {
        // add click listener for the element in this iteration of the loop
        element.addEventListener('click', function(event) {
            event.preventDefault();
            // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
            let hrefString = element.href;

            // get the section by its id using the string from the last step
            let section = hrefString.split('#')[1];

            // scroll to that section with .scrollIntoView()
            document.querySelector("#" + section).scrollIntoView({ 
                behavior: 'smooth' 
            });

        });
    });

});    