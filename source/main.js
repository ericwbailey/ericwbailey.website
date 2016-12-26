var mailtoLinks = document.querySelectorAll( '[data-message-subject]' )

// Turns mailto links into buttons for use with a11y-dialog
for ( var i = 0; i < mailtoLinks.length; i++ ) {
    var contactButton = mailtoLinks[i]; // Turns querySelectorAll results into something workable
    var contactButtonClasses = contactButton.getAttribute( 'class' );
    var contactButtonSubject = contactButton.getAttribute( 'data-message-subject' );
    var contactButtonContent = contactButton.innerHTML;

    contactButton.outerHTML = '<button class="' + contactButtonClasses + ' is-contact-button' + '" data-message-subject="' + contactButtonSubject + '">' + contactButtonContent + '</button>'
}
