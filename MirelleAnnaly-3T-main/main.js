    function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
    const listaDeTeclas = document.querySelectorAll('.tecla');  

     let contador = 0;
     // Estrutura de Repetição -  Enquanto 
     while (contador < listaDeTeclas.length) {
     listaDeTeclas[contador]
        
    };
    contador = contador + 1; 
    console.log(contador);

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
     const idAudio =  ` #som_${instrumento}`
    console.log(idAudio);
    tecla.onclick =  function (){  
        tocaSom('som_tecla_splash');
     }
    

     


   