var bgText = document.getElementById("bgText");
var prevDiv = document.getElementById("preview");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var picChooser = document.getElementById("picChooser");

var numUse = 0;

bgText.addEventListener("keyup", function(ev){
    //console.log(ev.keyCode);
    if(ev.keyCode == 13){
        //do someyhing to background
        
        console.log(c1.checked, c2.checked, c3.checked);
        
        if(c1.checked){
            //document.body.style.backgroundColor = bgText.value;
            if(bgText.value == "space1"){
                document.body.style.backgroundImage = "url(img/1.jpg)";
            } else if(bgText.value == "space2"){
                document.body.style.backgroundImage = "url(img/2.jpg)";
            } else if(bgText.value == "space3"){
                document.body.style.backgroundImage = "url(img/3.jpg)";
            } else {
                document.body.style.backgroundColor = bgText.value;
            }
            
            
            
        } else if(c2.checked){
            //prevDiv.style.backgroundColor = bgText.value;
            if(bgText.value == "space1"){
                prevDiv.style.backgroundImage = "url(img/1.jpg)";
            } else if(bgText.value == "space2"){
                prevDiv.style.backgroundImage = "url(img/2.jpg)";
            } else if(bgText.value == "space3"){
                prevDiv.style.backgroundImage = "url(img/3.jpg)";
            } else {
                prevDiv.style.backgroundColor = bgText.value;
            }
            //prevDiv.style.backgroundImage = "url("+bgText.value+")";
            
        } else if(c3.checked){
            //menu.style.backgroundColor = bgText.value;
            if(bgText.value == "space1"){
                menu.style.backgroundImage = "url(img/1.jpg)";
            } else if(bgText.value == "space2"){
                menu.style.backgroundImage = "url(img/2.jpg)";
            } else if(bgText.value == "space3"){
                menu.style.backgroundImage = "url(img/3.jpg)";
            } else {
                menu.style.backgroundColor = bgText.value;
            }
        } else {
            alert("Choose an option");
        }
        
        //prevDiv.style.backgroundColor = bgText.value;
        bgText.value = "";
        
        numUse++;
        if(numUse > 5){
            alert("You reached the limit.Pay to use more!");
            document.getElementById("display").innerHTML = "You reached the limit.Pay to use more!";
        }
    }
});

picChooser.addEventListener("change", function(){
    var picNum = parseInt(picChooser.value);
    
    if(picNum > 3){
        picChooser.value = 1;
    }
    
    if(picNum < 1){
        picChooser.value = 3;
    }
    if(c1.checked){
    document.body.style.backgroundImage = "url(img/"+picChooser.value+".jpg)";
     }
    else  if(c2.checked){
    prevDiv.style.backgroundImage = "url(img/"+picChooser.value+".jpg)";
     }
     else if(c3.checked){
    menu.style.backgroundImage = "url(img/"+picChooser.value+".jpg)";
     }
});