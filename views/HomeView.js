
HomeView();


function HomeView(){
    let html = ''
    html += `
     <div class="Header-background">
         <div class="Header">
                <div class="buttons-bar">${getButtons()}</div>
        </div>
    </div>

    <div class="content">
        ${model.content}
    </div>

    <div class="footer">
        ${footer()}</div>
    </div>
    `
    document.getElementById('app').innerHTML = html;
}

function getButtons(){
    let html = ''
    for(let i = 0; i < model.navbarButtons.length; i++){
        
        html += `<button class="btn" onclick="${model.navbarButtons[i]}()">${model.navbarButtons[i]}</button>`
    }
    return html;
}

function footer(){
    let html = `
    <div>
    KontaktInfo <br>

    ${model.contactInfo.name}<br>
    ${model.contactInfo.phoneNumber}<br>
    ${model.contactInfo.adress}<br>
    ${model.contactInfo.email}<br>
    ${model.contactInfo.facebook}
</div>
    `
    return html
}


