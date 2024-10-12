fetch("DynamicElement.json")

.then (function (response){
    return response.json();
})



.then (function(Dynamicelements){
let placeholder = document.query.querySelector ("#data-output");
let out = "";
for(let Dynamicelement of Dynamicelements ){
out += `
<button>
${Dynamicelement.name}

<button>

`;
}



})
    
