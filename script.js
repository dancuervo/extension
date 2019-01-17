
document.addEventListener('DOMContentLoaded', function(){

  var hora = document.querySelector('#time');
  h = new Date().toJSON();
  hora.innerHTML = h;

      // test if #boton exists and add the eventlistner to it
    if(document.querySelector('#boton')){
        
        document.querySelector('#boton').addEventListener('click', function(){
            test_AJAX();
        });
    } else {
        console.log('what???');
    }
    // end test #boton
});



 //TEST AJAX

 function test_AJAX() {
    var xhttp = new XMLHttpRequest();

    var testurl = document.querySelector('#link');

    if(testurl.value == "") {
      testurl.style.backgroundColor = 'red';
      testurl.value = "Insert a url!";
    } else {
      var botonAJAX = document.querySelector("#demo");

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        botonAJAX.style.backgroundColor = "green";
        botonAJAX.innerHTML = "AJAX success";
      }else{
        botonAJAX.style.backgroundColor = "red";
        botonAJAX.innerHTML = "Test AJAX fail";
      }
    };
    xhttp.open("GET", testurl.value, true);
    xhttp.send();
    }

  }

  //End test AJAX