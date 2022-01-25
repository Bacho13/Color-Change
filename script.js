function changeColor(){
    var hexNumbers = ["0", "2", "3", "4", "5", "6", "7", "8", "9",

                      "A", "B", "C", "D", "E", "F" ]; 

    var hexcode = '';


    for(var i =0; i<6; i++){
        var random_index = Math.floor(Math.random() * 10);
        
        hexcode += hexNumbers[random_index];
    }


   

    console.log(hexcode);

    document.getElementsByClassName("hexCode").innerHTML = hexcode;
    
    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;

}



changeColor();
