// Tu código aquí. 

   let boton = document.querySelector("#btnResta");
   let boton2 = document.querySelector("#btnSuma");
   let contador = 0; 
   let marca =  document.querySelector("#counter");
   marca.style.color="green"

   boton.addEventListener("click", () =>{
    contador = contador - 1;
    marca.textContent = contador;
    console.log(contador);
    if (contador<0){
        marca.style.color = "red"
    }else{
        marca.style.color = "green"
    }
   })

   boton2.addEventListener("click", () =>{
    contador = contador + 1;
    console.log(contador);
    marca.textContent = contador;
    if (contador<0){
        marca.style.color = "red"
    }else{
        marca.style.color = "green"
    }
   })



   
