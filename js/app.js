
fetch('data/home.json')
.then(r=>r.json())
.then(data=>{
document.getElementById('banner').innerHTML=`
<div class="banner" style="background-image:url('${data.banner}')">
<h1>${data.title}</h1>
</div>`;

document.getElementById('cards').innerHTML=data.cards.map(c=>`
<div class="card" onclick="location.href='pages/repository.html'">
<h2>${c.name}</h2>
<p>${c.description}</p>
</div>
`).join('');
});
