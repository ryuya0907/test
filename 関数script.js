function area(hankei,ensyuritu=3.14){
    return(hankei*hankei)*ensyuritu;
}

document.write(area(5)+"<br>");
document.write(area(7)+"<br>");
document.write(area(10)+"<br>");

document.write("<br>");

function price(otona,kodomo){
    return"グループの合計金額は"+(otona*500+kodomo*200)+"円です。";
}

document.write("A"+price(2,4)+"<br>");
document.write("B"+price(1,5)+"<br>");
document.write("C"+price(3,7)+"<br>");

