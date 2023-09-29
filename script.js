 async function mostrarProductos(){
  await fetch('productos.json')
  .then(async function(res){
    return await res.json();
  })
  .then(function(data){
    localStorage.setItem('listaArticulos', JSON.stringify(data));
    let html='';
    data.forEach(function(articulo){

    html += `
          <li>
            <strong>${articulo.codigo}:</strong> ${articulo.descripcion} 
            <a type="button" class="btn btn-primary" href="articulos.html?id=${articulo.id}"> +info</a> 
          </li>`;
    })

   document.getElementById('lista-productos').innerHTML = html;
  })
}
  mostrarProductos();
