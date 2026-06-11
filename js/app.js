
fetch('data/modules.json').then(r=>r.json()).then(data=>{
document.getElementById('banner').innerHTML=`<div class="banner" style="background-image:url('${data.banner}')"><h1>Plataforma Logística</h1><p>Zoom 15 segundos</p></div>`;
document.getElementById('cards').innerHTML=data.modules.map(m=>`<div class="card" onclick="location.href='pages/${m.page}.html'"><h3>${m.name}</h3><p>${m.desc}</p></div>`).join('');
});
