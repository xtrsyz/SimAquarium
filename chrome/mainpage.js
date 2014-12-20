
document.addEventListener('DOMContentLoaded', function() {

// if you have multiple pages, use updateSandboxStorage to pass updated storage to other pages via iframe id attribute
/*  document.getElementById('btnUpdateStorage').addEventListener('click', function(event) {
    storageAPI.updateSandboxStorage('sandboxFrame');
  });*/


// ugly hack to prevent this onload firing before the sandbox delegator is listening...
window.setTimeout(function() {

    // get the saved data from chrome storage APIs and send to the sandbox
    storageAPI.initWrapper();
},1000);

}); // end DOMContentLoaded
