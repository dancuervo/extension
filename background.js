

/* test injectScripts
chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == 'changeColor'){
        chrome.tabs.executeScript({
          code: 'document.body.style.backgroundColor="orange"'
        });
      }
   });

   // test injectScripts
chrome.runtime.onMessage.addListener(
  function(message, callback) {
    if (message == 'alert_pop'){
      chrome.tabs.executeScript({
        code: 'alert("POP!")'
      });
    }
 });

 // Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // No tabs or host permissions needed!
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});
*/