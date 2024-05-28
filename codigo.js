boton = document.createElement('button');

       
        boton.id = 'btnCarrito';

    
        boton.innerHTML = 'Agregar al carrito';

        
        function handleClick() {
           
            const h3 = document.createElement('h3');
            
           
            h3.innerHTML = 'Agregado';

           
            document.body.appendChild(h3);

            
            boton.innerHTML = 'Agregado';
        }

        boton.addEventListener('click', handleClick);

   
        document.body.appendChild(boton);
