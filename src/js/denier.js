function denyQuantcast() {
  var tries = 0
  var intervalId = window.setInterval(function() {
    if (document.getElementById("qcCmpButtons")) {
      window.__cmpui("updateConsentUi", 2)
      window.__cmpui("disableAllPurposeConsents")
      window.__cmpui("updateConsentUi", 3)
      window.__cmpui("toggleAllVendorConsents", !1)
      window.__cmp("saveConsents", window.__cmpui("getConsentInfo"), function(){window.__cmpui("dismissConsentUi")})
      console.log("Quantcast GDPR cookies rejected!")
      tries = 100
    } else {
      tries += 1
    }
    if (tries >= 100) {
      clearInterval(intervalId)
    }
  }, 100)
}


function denyTrustArc() {
  var tries = 0
  var intervalId = window.setInterval(function() {
    if (window.truste) {
      window.truste.eu.prefclose()
      console.log("TrustArc GDPR cookies not opted-in!")
      tries = 100
    } else {
      tries += 1
    }
    if (tries >= 100) {
      clearInterval(intervalId)
    }
  }, 100)
}


(function() {
  denyQuantcast()
  denyTrustArc()
})()
