
fetch('data/modules.json')
.then(r=>r.json())
.then(data=>{

document.getElementById('banner').innerHTML=`
<div class="banner-content"
style="background-image:url('${data.banner.image}')">

<h1>${data.banner.title}</h1>
<p>${data.banner.subtitle}</p>

</div>
`;

document.getElementById('modules').innerHTML=
data.modules.map(m=>`
<div class="card"
onclick="location.href='pages/module.html'">

<h2>${m.title}</h2>

<p>${m.description}</p>

</div>
`).join('');

});
