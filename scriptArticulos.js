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
            <div>${articulo.precio}</div>
            <div class="card" style="width: 18rem;" >
            <img class="card-img-top" src="${articulo.imagen}" alt="${articulo.codigo}" margin-bottom: 20px;>            
            </div>
            
            
            `
            document.getElementById('detalle-producto').innerHTML = html;
        }
    }
        
}

buscarArticulo();