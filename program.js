

function colorPalette()
{
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
document.getElementById('renk').style.background=randomColor;
document.getElementById("backGroundColor").innerHTML="Background Color:" + randomColor;
}

