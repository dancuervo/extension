
document.addEventListener('DOMContentLoaded', function(){
   
    // test if #boton exists and add the eventlistner to it
    if(document.querySelector('#boton')){
        

        document.querySelector('#boton').addEventListener('click', function(){
            
            test_AJAX();

            chrome.runtime.sendMessage({message: "changeColor"});
            
        
        });
    } else {
        console.log('what???');
    }
    // end test #boton

});

 //TEST AJAX

 function test_AJAX() {
    var xhttp = new XMLHttpRequest();
    document.querySelector("#demo").style.color = "white";

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.querySelector("#demo").style.backgroundColor = "green";
       document.querySelector("#demo").innerHTML = "AJAX success";
      }else{
        document.querySelector("#demo").style.backgroundColor = "red";
        document.querySelector("#demo").innerHTML = "AJAX fail";
      }
    };
    xhttp.open("GET", "https://www.hostnet.com.br/", true);
    xhttp.send();
  }

  //End test AJAX

  // test injectScripts
chrome.runtime.onMessage.addListener(
    function(message, callback) {
      if (message == 'changeColor'){
        chrome.tabs.executeScript({
          code: 'document.body.style.backgroundColor="orange"'
        });
      }
   });
