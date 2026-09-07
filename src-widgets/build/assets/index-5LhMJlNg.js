import "./virtual_mf-exposes___mfe_internal__fullcalendar__customWidgets_js-BagxKZZy.js";
import "./virtual_mf-REMOTE_ENTRY_ID___mfe_internal__fullcalendar__customWidgets_js-DYfUdPGB.js";
(function() {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`))
    return;
  for (let e2 of document.querySelectorAll(`link[rel="modulepreload"]`))
    n(e2);
  new MutationObserver((e2) => {
    for (let t2 of e2)
      if (t2.type === `childList`)
        for (let e3 of t2.addedNodes)
          e3.tagName === `LINK` && e3.rel === `modulepreload` && n(e3);
  }).observe(document, {childList: true, subtree: true});
  function t(e2) {
    let t2 = {};
    return e2.integrity && (t2.integrity = e2.integrity), e2.referrerPolicy && (t2.referrerPolicy = e2.referrerPolicy), t2.credentials = e2.crossOrigin === `use-credentials` ? `include` : e2.crossOrigin === `anonymous` ? `omit` : `same-origin`, t2;
  }
  function n(e2) {
    if (e2.ep)
      return;
    e2.ep = true;
    let n2 = t(e2);
    fetch(e2.href, n2);
  }
})();
