document.addEventListener("click", function(e) {
  if(e.button == 0) {
    for(var elm = e.target; elm; elm = elm.parentNode) {
      if(elm.tagName == "A") {
        if(elm.target == "_blank") {
          e.preventDefault();
          chrome.extension.sendMessage({url: elm.href});
        }
        return;
      }
    }
  }
}, false);
