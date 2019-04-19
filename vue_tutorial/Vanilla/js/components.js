
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
    formEl.appendChild(input("Email"))
    formEl.appendChild(button("Start"))
    return formEl
}

function fullHeader(){
    let el = header()
    el.appendChild(block("Logo"))
    el.appendChild(block("Login"))
    return el
}

function fullFooter(){
    let el = header()
    el.appendChild(block(
        "5640 Beacon st." + 
        "Pittsburgh PA 15217" +
        "602-710-5010" 
    ))
    return el
} 

function fullBody(){
    let bodyEl = body()
    bodyEl.appendChild(video("../assets/180825_13_garden.mp4"))
    bodyEl.appendChild(block(
        "The Employee Development Platform" +
        "Get (gain) the best from your employees." +
        "Hire them, Train Them, Reap the benefits." +
        "Track progress easily"
    ))
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