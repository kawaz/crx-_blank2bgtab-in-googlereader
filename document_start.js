document.addEventListener("click", function(e) {
  if(e.button == 0) {
    for(var elm = e.target; elm; elm = elm.parentNode) {
      if(elm.tagName == "A") {
        if(elm.target == "_blank") {
          e.preventDefault();
          e.stopPropagation();
          chrome.extension.sendMessage({url: elm.href});
        }
        return;
      }
    }
  }
}, true); //aタグに直接イベントが追加されてるパターンでも先んじて無効化を実行したいのでキャプチャリングで処理する
