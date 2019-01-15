
document.addEventListener('DOMContentLoaded', function(){
   
    // test if #boton exists and add the eventlistner to it
    if(document.querySelector('#boton')){
        
        document.querySelector('#boton').addEventListener('click', function(){
    
            document.querySelector('#texto').innerHTML = "Hey!";
        
        });
    } else {
        console.log('what???');
    }
    // end test #boton

});

 //TEST AJAX

 document.addEventListener('DOMContentLoaded', function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.querySelector("#demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
  }

);
  //End test AJAX
