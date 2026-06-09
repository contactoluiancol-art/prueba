
fetch('data/repositories.json')
.then(r=>r.json())
.then(data=>{
document.getElementById('cards').innerHTML=data.repositories.map(r=>`
<div class="card" onclick="location.href='pages/repository.html'">
<h3>${r.name}</h3>
<p>${r.description}</p>
</div>`).join('');
});
