var clicked_amount = 0;

function button1Clicked() {
        clicked_amount++
    document.getElementById("numbertimes").innerHTML = clicked_amount.toString();
}


function button2Clicked() {
     let current_opacity = document.getElementById("c3").style.getPropertyValue("opacity");

    if (current_opacity == "1") {
        document.getElementById("c3").style.opacity = "0";
    } else {
        document.getElementById("c3").style.opacity = "1";
    }

}