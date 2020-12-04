
chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
//request represents all the incoming parameters
    if(request.todo == "showPageAction"){
        //to specify or hrighligh the icon we have a chrome api but first we have to do the following
//retrieves the options
        chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
            //to show or highlight the page action icon
            chrome.pageAction.show(tabs[0].id)
//    to highlight it on a specific page then we need to use content scripts and messages
        })
    }
})