var randomnumber1=Math.floor(Math.random()*6)+1;
var random_dice_number="images/dice"+randomnumber1+".png";
var dice_image_pointer=document.querySelectorAll("img")[0].setAttribute("src",random_dice_number);

var randomnumber2=Math.floor(Math.random()*6)+1;
var random_dice_number="images/dice"+randomnumber2+".png";
var dice_image_pointer=document.querySelectorAll("img")[1].setAttribute("src",random_dice_number);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="🚩player1 wins";
}
else{
    document.querySelector("h1").innerHTML="player2 wins🚩";
}
if(randomnumber1==randomnumber2){
    document.querySelector("h1").innerHTML="TIE";
}
