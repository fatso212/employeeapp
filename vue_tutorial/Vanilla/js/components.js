
function link(href, inner){
    let el = document.createElement("a")
    linkStyle(el)
    el.href = `${href}.html`
    el.innerHTML = inner
    return el
}


function header(){
    let el = document.createElement("div");
    headerStyle(el)
    return el
}

function block(txt){
    let el = document.createElement("div");
    blockStyle(el)
    el.appendChild(link(txt, txt))
    return el
}

function body(){
    let el = document.createElement("div");
    bodyStyle(el)
    return el
}

function form(){
    let el = document.createElement("form");
    formStyle(el)
    return el
}

function input(txt){
    let el = document.createElement("div");
    let label = document.createElement("label");
    labelStyle(label)
    let input = document.createElement("input");
    inputStyle(input)
    label.innerText = txt
    el.appendChild(label)
    el.appendChild(input)
    return el
}

function fullForm(){
    let formEl = form()
    formEl.appendChild(input("First Name"))
    formEl.appendChild(input("Last Name"))
    formEl.appendChild(button("Add Employee"))
    return formEl
}

function fullHeader(){
    let el = header()
    el.appendChild(block("About"))
    el.appendChild(block("Contact"))
    el.appendChild(block("Pricing"))
    el.appendChild(block("Details"))
    return el
}

function fullFooter(){
    let el = header()
    return el
} 

function fullBody(){
    let bodyEl = body()
    bodyEl.appendChild(video("../assets/Forest_15_3b_Videvo.mov"))
    bodyEl.appendChild(fullForm())
    return bodyEl
}

function video(url){
    let el = document.createElement("video")
    videoStyle(el)
    let src = document.createElement("source")
    el.autoplay = "true"
    el.loop = "true"
    el.muted = "true"
    src.src = url
    src.type = "video/mp4"
    el.appendChild(src)
    return el
}

function button(txt){
    let el = document.createElement("button")
    buttonStyle(el)
    el.innerText = txt
    return el
}