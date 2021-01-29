
// titleタグとURLを取得してbackground.jsに送る
chrome.runtime.sendMessage({
    title: document.title,
    url: location.href
});

// popup.htmlのinput要素に書いたテキストを取得
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  alert(msg.send);//送られたテキストをアラートで表示
});


