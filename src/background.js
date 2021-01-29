var textTitle = '';
var textUrl = '';
// content_script.jsで取得したtitleタグとURLを取得して変数に代入
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        textTitle = request.title;
        textUrl = request.url;
    }
);
