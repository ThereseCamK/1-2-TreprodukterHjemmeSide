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
                <img onclick="enlargeImg(this)" class="pictures" src="${model.products[i].img[0]}"/>
               
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
       html += `<div class="singleProduct" >
                <p> ${model.galleri[i].name}</p>
          
               <img class="pictures" onclick="enlargeImg(this)" src="${model.galleri[i].img[0]}"/><br>
                <button class="moreBtn btn" onclick="showOnlyOneProduct(${i})">⇢</button> <br>
                </div>`
    }`
 
    `
    model.content = html;
    HomeView();
}



function enlargeImg(element){
    // element.style.transform ="scale(3.0)";
    // element.style.transition = "transform 0.25s ease";
    element.classList.add("biggPicture")
    element.onclick = function() {resetImg(element)}
}

function resetImg(element){
    element.classList.remove("biggPicture")

    element.onclick = function() {enlargeImg(element)}
}

function showOnlyOneProduct(index){

    let html = `
    <div class="singleProduct ">
  
    <button class="bckBtn btn" onclick="Galleri()">⇠</button>

                <p> ${model.galleri[index].name}</p>
                ${showImgs(index)}
             
                <p>Beskrivelse: ${model.galleri[index].description}</p>
    </div>
    `


    model.content = html;
    HomeView();
}

function showImgs(index){
    let html = ``
    for(let i = 0; i < model.products[index].img.length; i++){
   
        html += `
        <img onclick="enlargeImg(this)" class="pictures" src="${model.products[index].img[i]}"/>
       `
    }
    html += ``
    return html;
}