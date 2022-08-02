// Inspired by James Bridle's brilliant welcome.js:
// https://github.com/stml/welcomejs
(function() {
  if ( !window.console ) {
    return;
  }

  var i = 0;

  if ( !i ) {
    setTimeout( function() {
      console.log( '%c👋 Hey there', 'font: 3em sans-serif; line-height: 1.7;' );
      console.log( '%cThank you for visiting my site, I hope you are enjoying it!', 'font: 1.25 sans-serif; line-height: 1.7;' );
      console.log( '%cIf you accidentally opened this and are confused by what you see, don\'t worry! You can learn more about what the Console is and how it works here: https://developer.mozilla.org/en-US/docs/Tools/Web_Console', 'font: 1.25 sans-serif; line-height: 1.7;' );
      console.log( '%cIf you would like to check out this site\'s code, it is available on GitHub: https://github.com/ericwbailey/ericwbailey.website', 'font: 1.25 sans-serif; line-height: 1.7;' );
    }, 1);
    i = 1;
  }
})();
