 chrome.runtime.sendMessage({todo:"showPageAction"});
function changeColorOfTags(tagName,selectedColor){
     let elements = document.getElementsByTagName(tagName)
    for( let i = 0; i < elements.length; i++){
        elements[i].style.color = selectedColor
    }

}
chrome.runtime.onMessage.addListener(
    (request,sender,sendResponse)=>{
    if(request.todo === 'changeColor'){
        console.log("request")

        let color = request.clickedColor.toString()
       changeColorOfTags("div",color)
        changeColorOfTags("p",color)
        changeColorOfTags("td",color)
    }
})