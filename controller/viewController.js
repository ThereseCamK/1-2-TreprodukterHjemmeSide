function Om(){
    
    model.content = `
    <div class="aboutContent">
        Jeg heter Remi og jeg er veldig glad i å lage forskjellige ting.
        Det er en stor lidenskap jeg har. 
        Ta kontakt dersom du ønsker noe av det jeg har laget eller om det er noe du lurer på om jeg kan lage til deg.
    </div>
    `
    HomeView();
}

function Produkter(){
    
let html = ''
  
    
    for(let i = 0; i < model.products.length; i++){
        var first = i % 3 == 0 ? 'first' : ' ';
       html += `<div class="singleProduct ${first}">
                <p> ${model.products[i].name}</p>
                <img class="pictures" src="${model.products[i].img[0]}"/>
               
                <p>Pris: ${model.products[i].price}</p>
                <p>Beskrivelse: ${model.products[i].description}</p>
                </div>`
    }
  
    model.content = html;
    HomeView();

 
}

function Galleri(){
    
    let html = `
    `
  for(let i = 0; i < model.galleri.length; i++){
       html += `<div class="singleProduct">
                <p> ${model.galleri[i].name}</p>
               
               <img class="pictures" src="${model.galleri[i].img[0]}"/>
                <p>Beskrivelse: ${model.galleri[i].description}</p>
                </div>`
    }`
 
    `
    model.content = html;
    HomeView();
}
function showImgs(index){
    let html = ``
    for(let i = 0; i < model.products[index].img.length; i++){
        html += `<div class="images">
        <img class="pictures" src="${model.products[index].img[i]}"/>
       </div> `
    }
    return html;
}