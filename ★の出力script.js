for(var star=1; star<=5; star++){
    document.write("★");
}

document.write("<br>")
document.write("<br>")

for(var a=1; a<=2; a++){
    for(var b=1; b<=3; b++){
    document.write("★");
    }
    document.write("<br>");
       }

document.write("<br>");
document.write("<br>");

for(var a=1; a<=2; a++){
    for(var b=1; b<=5; b++){
        document.write("☆");
    }
    document.write("<br>");
        }

document.write("<br>")
document.write("<br>")

var a=1;
while(a<5){
    document.write("★★★★★"+"<br>");
    a++;
}

document.write("<br>")
document.write("<br>")

var a=1;
while(a<5){
    document.write("★★★"+"<br>");
    a++;
}

document.write("<br>")
document.write("<br>")

var a=1;
while(a<4){
    document.write("★☆★"+"<br>");
    a++;
}

document.write("<br>")
document.write("<br>")

for(var a=1; a<5; a++){
    for(var b=1; b<=5; b++){
    if(b%2==0){
        document.write("☆");
    }else{
        document.write("★");
    }}
    document.write("<br>");
}

document.write("<br>")
document.write("<br>")

for(var a=1; a<=5; a++){
    for(var b=1; b<=a; b++){
        document.write("★");
    }
    document.write("<br>");  
}