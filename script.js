
document.addEventListener('DOMContentLoaded', function(){
   
    if(document.querySelector('#boton')){
        
        document.querySelector('#boton').addEventListener('click', function(){
    
            document.querySelector('#texto').innerHTML = "Hey!";
        
        });
    } else {
        console.log('what???');
    }
    
});