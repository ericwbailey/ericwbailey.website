var mailtoLinks = document.querySelectorAll( '[data-message-subject]' )


// Turns mailto links into buttons for use with a11y-dialog
for ( var i = 0; i < mailtoLinks.length; i++ ) {
  var contactButton = mailtoLinks[i]; // Turns querySelectorAll results into something workable
  var contactButtonClasses = contactButton.getAttribute( 'class' );
  var contactButtonSubject = contactButton.getAttribute( 'data-message-subject' );
  var contactButtonContent = contactButton.innerHTML;

  contactButton.outerHTML = '<button class="' + contactButtonClasses + ' is-contact-button' + '" data-message-subject="' + contactButtonSubject + '">' + contactButtonContent + '</button>'
}


// Create a new A11yDialog by targeting #a11y-dialog, second argument
// specifies the `<main>` element's ID. See:
// https://github.com/edenspiekermann/a11y-dialog#javascript
var dialog = new A11yDialog( document.getElementById( 'a11y-dialog' ), document.getElementById( 'section-main' ) );


// Displays the A11yDialog when an event is fired
function handleDialogueButtonClick( e ) {
  dialog.show();
}


// Hack that turns the trees generated by querySelectorAll targeting the
// `data-message-subject` attribute, turns it into an array, then adds an event listener
// that fires the handleDialogueButtonClick function.
[].slice.apply( document.querySelectorAll( '.is-contact-button' ) ).forEach(function( elm ) {
  elm.addEventListener( 'click', handleDialogueButtonClick );
});
