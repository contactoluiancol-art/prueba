
async function cargar(){
 const res = await fetch('data/dashboard.json');
 const data = await res.json();

 document.getElementById('banner').innerHTML = `
 <div class="banner" style="background-image:url('${data.banner.imagen}')">
   <div class="overlay">
      <h1>${data.banner.titulo}</h1>
      <p>${data.banner.subtitulo}</p>
   </div>
 </div>`;

 document.getElementById('cards').innerHTML =
 data.cards.map(c=>`
 <div class="card">
   <i class="fa-solid ${c.icono}"></i>
   <h3>${c.titulo}</h3>
   <p>${c.descripcion}</p>
 </div>`).join('');
}
cargar();
