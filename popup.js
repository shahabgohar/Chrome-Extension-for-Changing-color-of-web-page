window.addEventListener('DOMContentLoaded',()=>{
    // let's set defaults for all color pickers
    jscolor.presets.default = {
        height: 181,              // make the picker box a little bigger
        position: 'right',        // position the picker to the right of the target
        previewPosition: 'right', // display color preview on the right side
        previewSize: 40,          // make color preview bigger
    };
    var selectedColor = null
    let colorPicker = document.getElementById('colorPicker')
    colorPicker.addEventListener('input',()=>{
        selectedColor = colorPicker.value.toString();

    } )
    let colorSubmit = document.getElementById('colorSubmit')
    colorSubmit.addEventListener('click',()=>{

        chrome.tabs.query({active:true,currentWindow:true},(tabs)=>{
            chrome.tabs.sendMessage(tabs[0].id,{todo:"changeColor",clickedColor:selectedColor})
            console.log(selectedColor)
        })
    })
} ) 


