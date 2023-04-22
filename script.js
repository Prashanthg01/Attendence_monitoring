var cars = ["1VE19EC001", "1VE19EC002","1VE19EC003","1VE19EC004","1VE19EC005","1VE19EC006","1VE19EC007","1VE19EC008","1VE19EC009","1VE19EC010","1VE19EC011","1VE19EC012","1VE19EC013","1VE19EC014","1VE19EC015","1VE19EC016","1VE19EC017","1VE19EC018","1VE19EC019","1VE19EC020","1VE19EC021" ,"1VE19EC022" ,"1VE19EC023" ,"1VE19EC024" ,"1VE19EC025" ,"1VE19EC026" ,"1VE19EC027" ,"1VE19EC028" ,"1VE19EC029" ,"1VE19EC030" ,"1VE19EC031" ,"1VE19EC032" ,"1VE19EC033" ,"1VE19EC034" ,"1VE19EC035" ,"1VE19EC036" ,"1VE19EC037" ,"1VE19EC038" ,"1VE19EC039" ,"1VE19EC040" ,"1VE19EC041" ,"1VE19EC042" ,"1VE19EC043" ,"1VE19EC044" ,"1VE19EC045" ,"1VE19EC046" ,"1VE19EC047" ,"1VE19EC048" ,"1VE19EC049" ,"1VE19EC050" ,"1VE19EC051" ,"1VE19EC052" ,"1VE19EC053" ,"1VE19EC054" ,"1VE19EC055" ,"1VE19EC056" ,"1VE19EC057" ,"1VE19EC058" ,"1VE19EC059" ,"1VE19EC060" ,"1VE19EC061" ,"1VE19EC062" ,"1VE19EC063" ,"1VE19EC064" ,"1VE19EC065" ,"1VE19EC066" ,"1VE19EC067" ,"1VE19EC068" ,"1VE19EC069" ,"1VE19EC070" ,"1VE19EC071" ,"1VE19EC072" ,"1VE19EC073" ,"1VE19EC074" ,"1VE19EC075" ,"1VE19EC076" ,"1VE19EC077" ,"1VE19EC078" ,"1VE19EC079" ,"1VE19EC080" ,"1VE19EC081" ,"1VE19EC082" ,"1VE19EC083" ,"1VE19EC084" ,"1VE19EC085" ,"1VE19EC086" ,"1VE19EC087" ,"1VE19EC088" ,"1VE19EC089" ,"1VE19EC090" ,"1VE19EC091" ,"1VE19EC092" ,"1VE19EC093" ,"1VE19EC094" ,"1VE19EC095" ,"1VE19EC096" ,"1VE19EC097" ,"1VE19EC098","1VE19EC099","1VE19EC100" ,"1VE19EC101" ,"1VE19EC102" ,"1VE19EC103" ,"1VE19EC104" ,"1VE19EC105" ,"1VE19EC106" ,"1VE19EC107" ,"1VE19EC108" ,"1VE19EC109" ,"1VE19EC110" ,"1VE19EC111" ,"1VE19EC112" ,"1VE19EC113" ,"1VE19EC114" ,"1VE19EC115" ,"1VE19EC116" ,"1VE19EC117" ,"1VE19EC118" ,"1VE19EC119" ,"1VE19EC120"];
var x = "";
var count = 1;
var z =cars.length;
var y = "";
var a = "";

function appendArray() {
    if(count<z) {
        x = cars[count];
        y+= cars[count-1]+ "<br>";
        document.getElementById("info").innerHTML = x;
        count++;
    } else {
        count = 0;
    }
}

function attendence() {
    document.getElementById("presents").innerHTML = y;
    document.getElementById("absentes").innerHTML = a;
}

function appendabsentes() {
    if(count<z) {
        x = cars[count];
        a+= cars[count-1]+ "<br>";
        document.getElementById("info").innerHTML = x;
        count++;
    } else {
        count = 0;
    }
}

var anum = 0;
var pnum = 0;
document.querySelector(".sub").style.display = "none";
document.querySelector(".tr-2").style.display = "none";
document.querySelector(".button-3").addEventListener("click", function() {
    document.querySelector(".button-30").style.display = "none";
    document.querySelector(".display").style.display = "none";
    document.querySelector(".sub").style.display = "block";
    document.querySelector(".ab").style.display = "block";
    document.querySelector(".pr").style.display = "block";
    document.querySelector(".ab").innerHTML = anum;
    document.querySelector(".pr").innerHTML = pnum;
    attendence();
    document.querySelector(".tr-2").style.display = "block";
    window.print();
});

document.querySelector(".btn-5").addEventListener("click", function() {
    document.querySelector(".tr-2").style.display = "block";
});

document.querySelector(".button-1").addEventListener("click", function() {
    anum++;
});

document.querySelector(".btn-31").addEventListener("click", function() {
    pnum++;
});