$(document).ready(function() {

    $(".subscribe-btn").click(function(){
        let email = $(".input-email").val();
        if (email !== '') {
            if (validateEmail(email)) {
                alert('Thanks for subscribing!')
            } else {
                alert('Invalid Email');
            }
        } else {
            alert('Empty Email');
        }
    });
    

    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(function(element) {
        // add click listener for the element in this iteration of the loop
        $(element).click(function(event) {
            event.preventDefault();

            // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
            //let hrefString = element.href;
            // get the section by its id using the string from the last step
            let section = element.hash;

            // scroll to that section with .scrollIntoView()
            document.querySelector(section).scrollIntoView({ 
                behavior: 'smooth' 
            });

        });
    });

});

function validateEmail(email) {
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}