var comLottoResult = new Array();
var userLottoResult = new Array();
var t;
var resultstring = "";
var count=0;
var n;
var num1 = new Array();
var num2 = new Array();
var winstring = "";
var bouns = Math.floor(Math.random()*45+1);
var bounsWin = 0;

function comLottoSet(){
    for(i=0;i<6;i++){
        n = Math.floor(Math.random()*45+1);
        num1.push(n);
        for(j=0;j<i;j++){
            if(num1[j]==num1[i] || num1[j]==bouns){
                num1.splice(i, 1);
                i=i-1;
                break;
            };
        };
    };
    comLottoResult=num1;
}

function userLottoSet(){
    for(i=0;i<6;i++){
        while(true){
            n = prompt([i+1] + "번째 값을 입력하세요 : ");
            n = parseInt(n);
            if(n>=1 && n<=45){
                num2.push(n);
                break;    
            }
            else{
                alert("잘못된 입력값입니다. 다시 입력하세요. (1~45)");
            };
        };
        for(j=0;j<i;j++){
            if(num2[j]==num2[i]){
                alert("중복된 입력값입니다.");
                num2.splice(i, 1);
                i= i-1;
                break;
            }
        };
    };
    userLottoResult = num2;
};

function sort(){
    userLottoResult.sort((a, b) => a - b);
    comLottoResult.sort((a, b) => a - b);
}

function output(){
    resultstring = "컴퓨터 : ";
    for(k=0;k<6;k++){
        resultstring = resultstring + comLottoResult[k] + "&nbsp;";
    };
    resultstring = resultstring + "<hr>" + "유저 : ";
    for(l=0;l<6;l++){
        resultstring = resultstring + userLottoResult[l] + "&nbsp";
    };
}

function bounsCheck(){
    for(i=0;i<6;i++){
        if(userLottoResult[i]==bouns){
            bounsWin = 1;
        };
    };
};

function comparison(){
    for(m=0;m<6;m++){
        for(n=0;n<6;n++){
            if(comLottoResult[m]==userLottoResult[n]){
                count++;
            };
        };
    };

    switch (count){
        case 0 || 1 || 2 :
            winstring = "꽝입니다.";
            break;
        case 3 :
            winstring = "5등입니다.";
            break;
        case 4 :
            winstring = "4등입니다.";
            break;
        case 5 :
            bounsCheck();
            switch (bounsWin){
                case 0 :
                    winstring = "3등입니다.";
                    break;
                case 1 :
                    winstring = "2등입니다.";
                    break;
            }
            break;
        case 6 :
            winstring = "1등입니다.";
            break;
    }

    resultstring = resultstring + "<hr>" + "보너스 번호 : " + bouns + "<hr>" + "일치한 갯수 : " + count + "<hr>" + "결과는 " + winstring; 
};

window.onload = function(){
    t = document.getElementById("result");
    userLottoSet();
    comLottoSet();
    sort();
    output();
    comparison();
    t.innerHTML = resultstring;
};