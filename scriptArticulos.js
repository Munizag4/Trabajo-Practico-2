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
            <div class="precio">${articulo.precio}</div>            
            <img class="card-img-top"  src="${articulo.imagen}" alt="${articulo.codigo}" ;>            
            </div>
            
            
            `
            document.getElementById('detalle-producto').innerHTML = html;
        }
    }
        
}

buscarArticulo();