function bind (parentID, child){
    document.getElementById(parentID).appendChild(child)
}

let bindToApp = function(child){
    bind("app", child)
}