window.addEventListener("load", function (event) {

    var MiBoton = document.querySelector('#button');
    const bodyEl = document.querySelector('body');
    
    MiBoton.addEventListener("click", ()=> {
        var boton = document.getElementById("button").value;
        
        if(boton == "Oscuro"){
            bodyEl.classList.add('dark-mode');
            MiBoton.value="Claro";
        }else if (boton == "Claro"){
            bodyEl.classList.remove('dark-mode');
            MiBoton.value= "Oscuro";
        }
    
    });
    
    
    });
    