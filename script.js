function mostrarProductos(){
  fetch('productos.json')
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    let html='';
    data.forEach(function(articulo){

    html += `
    <li>

      <strong>${articulo.codigo}:</strong> ${articulo.descripcion} <a href="articulos.html?${articulo.id}"> +info</a> </li>`;
    })

   document.getElementById('lista-productos').innerHTML = html;
  })
}
  mostrarProductos();
