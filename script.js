const $button = document.getElementById('btn-js');
const $hello = document.getElementById('hello');


$button.addEventListener("click", e => {    
    e.preventDefault();
      $hello.innerHTML += 'Fui clicado <br/>';
})


requestIdleCallback (function(){
    let content = "";
    for (let i=0; i <10000; i++){
       content += "Fui clicado ";
    }
    $hello.innerHTML=content;
})

     


