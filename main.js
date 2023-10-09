    function tocaSom(idElementoAudio){
    document.querySelector(dElementoAudio).play();
}
    const listaDeTeclas = document.querySelectorAll('.tecla');  

     let contador = 0;
     // Estrutura de Repetição -  Enquanto 
     while (contador < listaDeTeclas.length) {
     listaDeTeclas[contador].onclick =  function (){  
        tocaSom('som_tecla_splash');
    };
    contador = contador + 1;  
     }
    

     


   