$(document).ready(function(){

$.getJSON("data/profile.json",function(data){

$("#name").text(data.name)

$("#role").text(data.role)

$("#about").text(data.about)

let skillsHTML=""

data.skills.forEach(skill=>{

skillsHTML+=`

<label>${skill.name}</label>

<div class="progress">

<div class="progress-bar" style="width:0%" data-width="${skill.level}%">

${skill.level}%

</div>

</div>

`

})

$("#skills").html(skillsHTML)

$(".progress-bar").each(function(){

let width=$(this).data("width")

$(this).animate({width:width},1200)

})

let projHTML=""

data.projects.forEach(p=>{

projHTML+=`

<div class="col-md-4">

<div class="card p-4 mb-4">

<h5>${p.title}</h5>

<p>${p.desc}</p>

</div>

</div>

`

})

$("#projects").html(projHTML)

})


$.getJSON("data/publications.json",function(data){

let pubHTML=""

data.forEach(p=>{

pubHTML+=`<li>${p}</li>`

})

$("#pubs").html(pubHTML)

})

})