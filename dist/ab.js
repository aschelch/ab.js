"use strict";
function ab(options){

    const urlParams = new URLSearchParams(window.location.search);

    if(options == undefined){
        let elems = document.querySelectorAll("[data-ab-variant]");
        let options = new Set();
        for(var i = 0; i < elems.length; i++){
            options.add(elems[i].getAttribute("data-ab-variant"));
            elems[i].style.display = "none";
        }
        options = Array.from(options);
    
        let option = '';
        if(urlParams.has('ab-variant')){
            option = urlParams.get('ab-variant')
        }else{
            option = options[Math.floor(Math.random() * options.length)]
        }
                
        // Display selected option
        elems = document.querySelectorAll("[data-ab-variant="+option+"]");
        for(var i = 0; i < elems.length; i++){
            elems[i].style.display = "block";
        }

    }else{

        // Hide all options
        for (const [key, ids] of Object.entries(options.variants)) {
            for(var i = 0; i < ids.length; i++){
                document.getElementById(ids[i]).style.display = "none";
            }
        }

        // Choose option to display
        let variant;
        if(urlParams.has('ab-variant')){
            variant = options.variants[urlParams.get('ab-variant')];
        }else{
            var keys = Object.keys(options.variants);
            variant = options.variants[keys[ keys.length * Math.random() << 0]]
        }

        // Display selected option
        for(var i = 0; i < variant.length; i++){
            document.getElementById(variant[i]).style.display = "block";
        }

    }


}