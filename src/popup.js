
// background.jsからtitleタグとURLを取得
var textTitle = chrome.extension.getBackgroundPage().textTitle;
var textUrl = chrome.extension.getBackgroundPage().textUrl;
// 取得した値をpopup.htmlの該当箇所に挿入
var titleElm = document.getElementById('textView');
var urlElm = document.getElementById('textUrl');
// 取得した値をpopup.htmlの該当箇所に挿入
titleElm.textContent = textTitle;
urlElm.textContent = textUrl;


function submit() {
  var submitText = document.getElementById("input").value;// 入力したテキストを取得
  // 取得した値をcontent_script.jsで受けれるように送信
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      send: submitText
    });
  });
}
document.getElementById("submit").addEventListener("click", submit);
