(function() {
  window.setInterval(function() {
    if (document.getElementById("qcCmpButtons")) {
      window.__cmpui("updateConsentUi", 2);
      window.__cmpui("disableAllPurposeConsents");
      window.__cmpui("updateConsentUi", 3);
      window.__cmpui("toggleAllVendorConsents", !1);
      window.__cmp("saveConsents",window.__cmpui("getConsentInfo"), function(){window.__cmpui("dismissConsentUi")});
      console.log("All GDPR cookies rejected!");
    }
  }, 2000);
})();
