/**
 * Created by session1 on 2/16/16.
 */
var inputToCheck = ["name", "streetName", "city", "state", "zip"];

function isAddressFilled() {
    var filled = 1;
    for(var i = 0; i < inputToCheck.length; i++) {
        if(document.getElementById(inputToCheck[i]).value == "") {filled = 0;}
    }
}

function validateForm() {
    for(var i = 0; i < inputToCheck.length; i++) {
        if(document.getElementById(inputToCheck[i]).value == "") {
            /*document.getElementById(inputToCheck[i]).style.borderColor="red";
             document.getElementById(inputToCheck[i]).style.borderWidth="Thin";
             setInterval(document.getElementById(inputToCheck[i]).style.borderColor=null,1000);
             setInterval(document.getElementById(inputToCheck[i]).style.borderWidth=null,1000);*/
        }
    }
}
