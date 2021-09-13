const listaDeProductos = [{producto:'telefono', valor: 500}, {producto:'computadora', valor: 1000}, {producto:'tv', valor: 100}
, {producto:'heladera', valor: 2500}, {producto:'tostadora', valor: 200}]


function filtrarProductos(valor){
const result = listaDeProductos.filter(listaDeProductos => listaDeProductos.valor <= valor)

result.forEach(producto =>{
    const elemento = document.createElement('p')
    elemento.innerText = producto.producto + ' ' + producto.valor
   
    document.getElementById("val").appendChild(elemento)

})

}

function filtrarProductosASC(){
   
    const result = listaDeProductos.sort((a, b) => {
        const prodA = a.producto.toLowerCase();
        const prodB = b.producto.toLowerCase();
         return  prodA - prodB
        })
    
    result.forEach(producto =>{
        const elemento = document.createElement('p')
        elemento.innerText = producto.producto + ' ' + producto.valor
       
        document.getElementById("val").appendChild(elemento)
    
    })
    
    }

    function filtrarPrecioDESC(){
   
        const result = listaDeProductos.sort((a, b) => {
           return  b.valor - a.valor
            })
        
        result.forEach(producto =>{
            const elemento = document.createElement('p')
            elemento.innerText = producto.producto + ' ' + producto.valor
           
            document.getElementById("val").appendChild(elemento)
        
        })
        
        }