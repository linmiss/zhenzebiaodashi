

"use strict"


//皇家同花顺
const huangJiaTHS = ( num ,color ) => {
    if (num  == [10,11,12,13,14] && color == ["s","h","d","c"]) {
      return num ;
    }else {
        num = null;
    }
    return num ;
};

//同花顺
const tongHuaS = ( num ,color) => {
    for(let i = 1 ; i < num.length ; i++) {
        if (num[i] == num[i-1]+1) {
           return num ;
        }else {
            num = null;
        }
    }
    return num ;
};


$.getJSON("./data.json",function (data,status) {
    
    const re = /[0-9A-Z]+/g;
    const re1=/[a-z]/g;

    for(let i = 0 ; i < data.poker.length; i++) {
        var bobo = data.poker[i].bobo,
            coco = data.poker[i].coco;
        var num = bobo.match(re); //面值
        var color = coco.match(re1); //花色
        /*  10 = T ; 11 = J ; 12 = Q ; 13 = K ;  14 = A  */
        var num = num.toString().replace(/T/g,'10');
        var num = num.toString().replace(/J/g,'11');
        var num = num.toString().replace(/Q/g,'12');
        var num = num.toString().replace(/K/g,'13');
        var num = num.toString().replace(/A/g,'14');
        //console.log(num);
        var num = num.split(",").sort( (a,b) => a-b );
        //console(num);
    };

});

