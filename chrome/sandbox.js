// demonstrates how to use storageAPI in sandbox

    window.onload = function() {

        if(storageAPI.CHROME_EXTENSION == true) {
            // initialize chrome storage postMessage listeners
            storageAPI.delegator();
        } else {
            // just use window.localStorage and delegate to the onload handler
            storageAPI.sandbox.window.onload();
        }

    };

    storageAPI.sandbox.window.onload = function () {
        // legacy onload handler for sandboxed page


        // initialize storageAPI to use window.localStorage or chrome storage APIs
        storageAPI.initSandbox(function() {

//            document.getElementById("load").setAttribute("onclick", function() { console.info("whatup!"); });

            console.info("done loading!");
        });
    };