function bind (parentID, child){
    document.getElementById(parentID).appendChild(child)
}

function basicBind (parent, child){
    parent.innerHTML = child
}

let bindToApp = function(child){
    bind("app", child)
}