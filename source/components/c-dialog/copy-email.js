var copyButton = document.getElementById( 'button-copy' )

// Resets the successful state
function resetCopyButton() {
  copyButton.classList.remove( 'is-successful' );
  copyButton.innerHTML = '<svg height="14" width="14" aria-hidden="true" viewBox="0 0 100 100" class="icon c-button__icon"><use xlink:href="#icon-clipboard"></use></svg>Copy<span class="content-hide-visually"> email address</span>';
}


var clipboard = new Clipboard( '.c-button__copy' );

// Adds a success state when the email address is successfully copied
clipboard.on('success', function( e ) {
  copyButton.classList.add( 'is-successful' );
  copyButton.setAttribute( 'aria-live', 'polite' );
  copyButton.innerHTML = '<svg height="14" width="14" aria-hidden="true" viewBox="0 0 100 100" class="icon c-button__icon"><use xlink:href="#icon-checkmark"></use></svg><span class="content-hide-visually">Email address </span>Copied';

  e.clearSelection();

  setTimeout(resetCopyButton, 2500);
});


// Displays an error state if the email address does not successfully copy
clipboard.on('error', function( e ) {
  var contactField = document.getElementById( 'button-copy' );
  var contactError = document.createElement( 'p' );
  var contactFieldParent = contactField.parentNode;

  copyButton.disabled = true;

  contactFieldParent.insertBefore(contactError, contactField.nextSibling); // Generate the error message after the contact field
  contactError.innerHTML = 'Your browser does not have clipboard support. Try copying the email address manually.';
  contactError.setAttribute( 'class', 'c-button__error' );
  contactError.setAttribute( 'aria-live', 'polite' );
});
