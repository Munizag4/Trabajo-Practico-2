const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var idArticulo = urlParams.get('id');


function buscarArticulo(){
    let listaArticulos = localStorage.getItem("listaArticulos");
    
    if(listaArticulos != null){      
         
        listaArticulos = JSON.parse(listaArticulos);
        let articulo ="";
        let html =""; 
        listaArticulos.forEach(function(obj){
            if(obj.id == idArticulo){
                articulo = obj;
            }
        })

        if(articulo != ""){
            html += `
            <div class="alert alert-primary" role="alert">${articulo.codigo}</div>
            <div class="alert alert-info" role="alert">${articulo.descripcion}</div>
            <div class="alert alert-success" role="alert">${articulo.detalle}</div>                   
            <img class="card-img-top"  src="${articulo.imagen}" alt="${articulo.codigo};">            
            <div class="precio" >${articulo.precio}</div>                      
            `
            document.getElementById('detalle-producto').innerHTML = html;

            estrellar(articulo.calificacion);
        }
    }
        
}

function estrellar(calificacion){
    const numero = calificacion.length;
    const estrellasOscuras = 5 - numero;
    html ="";
    for(i = 0; i<numero; i++){
        html += "⭐";
    }
    for(i =0; i<estrellasOscuras;i++){
        html += "⚪";
    }
    document.getElementById('estrellas').innerHTML = html;

}


buscarArticulo(); 