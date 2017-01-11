// ============================================================================
// Main
// ============================================================================


// Global Variables -----------------------------------------------------------
var contactInfo = {
  first:   "cire",
  middle:  "w",
  last:    "yeliab",
  service: "liamg"
};


var copyButton = document.getElementById( 'button-copy' );


var mailtoLinks = document.querySelectorAll( '[data-message-subject]' );


var sectionMain = document.getElementById( 'section-main' );


// Global Functions -----------------------------------------------------------
/**
 * Takes a string and reverses it (ex: "foobar" becomes "raboof").
 *
 * @example reverseString(string)
 * @param {String} string String to be reversed.
 * @see printContactInfo
 * @public
 */
var reverseString = function(string) {
  return string.split( "" ).reverse().join( "" );
}
