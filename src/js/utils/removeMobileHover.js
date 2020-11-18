import isMobile from "./isMobile";

// Inspired by: 
// https://gist.github.com/rcmachado/7303143
// http://mvartan.com/2014/12/20/fixing-sticky-hover-on-mobile-devices/

export default function removeMobileHover() {
  if (isMobile.any()) {
    for (let sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
      const sheet = document.styleSheets[sheetI];
      if (sheet.cssRules) {
        for (let ruleI = sheet.cssRules.length - 1; ruleI >= 0; ruleI--) {
          const rule = sheet.cssRules[ruleI];
          if (rule.selectorText) {
            rule.selectorText = rule.selectorText.replace(":hover", ":active");
          }
        }
      }
    }
  }
}
