chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
console.log(sender);
  chrome.tabs.create({
    url: message.url,
    active: false,
    index: sender.tab.index + 1
  });
});
