function GetCurrentUrl(callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    callback(url);
  });
}

export default GetCurrentUrl;
