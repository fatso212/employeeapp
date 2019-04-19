//aggregate listeners for each target
//when submit email is clicked
//place to store functions
//place to de
    console.log("element page has been loaded")
    let elements = {
        firstInput : {
            selector: document.getElementsByTagName("input")[0],
            events: {
                mouseover: [
                    function enlargeText() {
                       // console.log(firstInput.selector)
                        let val = parseFloat(elements.firstInput.selector.style.fontSize, 10)
                        elements.firstInput.selector.style.fontSize = val + 5 + "px"
                    },
                    function changeColor() {
                       // console.log(firstInput.selector)
                       elements.firstInput.selector.style.color = "orange"
                    }
                ]
            }
        }
    }
    
function initListeners(){
    for(element in elements){
        //console.log(elements)
        //console.log(element)
        //console.log(elements[element].events)
        for(event in elements[element].events){
            //console.log(event + "should be mouseover")
            //console.log(element + "should be firstInput")
            //console.log(elements[element].events[event])
    
            elements[element].events[event].forEach(function(item){
                console.log(elements[element].selector)
                //console.log(event)
                //console.log(item)
                elements[element].selector.addEventListener("click", function(){
                    console.log("entered function")
                    item()
                })
            })
        }
    }
}
    
    


