updateView()
function updateView(){
    if(model.currentPage == 'Om') Om()
    if(model.currentPage == 'Produkter') Produkter()
    if(model.currentPage == 'Galleri') Galleri()
}

function changePage(page){
  
    model.currentPage = page; 
    updateView()
}
function HomeView(){
    let html = ''
    html += `
    <div class="page">
        <div class="Header-background">
            <div class="Header">
                    <div class="buttons-bar">${getButtons()}</div>
            </div>
        </div>

        <div class="content">
            ${model.content}
        </div>

        <div  class="footer">
            ${footer()}</div>
        </div>
    </div>
    `
    document.getElementById('app').innerHTML = html;
}

function getButtons(){
    let html = ''
    for(let i = 0; i < model.navbarButtons.length; i++){
        
        html += `<button class="btn" onclick="changePage('${model.navbarButtons[i]}')">${model.navbarButtons[i]}</button>`
    }
    return html;
}

function footer(){
    let html = `
    <div>
    KontaktInfo: 
   <div> ${model.contactInfo.name}  <br>Tlf: ${model.contactInfo.phoneNumber}
    epost:  ${model.contactInfo.email}</div>
 
   <div>Adresse: ${model.contactInfo.adress}</div>
    <div class="developerName">Siden er utviklet av Therese Camilla Nordnes</div>
   <div class="linkToSome"><a href="https://www.facebook.com/groups/448680922004040" class="fa fa-facebook"></a></div>
      


</div>
    `
    return html
}


