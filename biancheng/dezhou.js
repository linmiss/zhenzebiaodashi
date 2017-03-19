"use strict"

//皇家同花顺
var huangJiaTHS = (num, color) => {
    if (num == [10, 11, 12, 13, 14].toString() && color == ["s", "h", "d", "c"].toString()) {
        return true;
    } else {
        return false;
    }

};

//console.log(huangJiaTHS([10, 11, 12, 13, 14], ["s", "h", "d", "c"]));
//同花顺
var tongHuaS = (num, color) => {
    for (let i = 1; i < num.length; i++) {
        if (num[i] == num[i - 1] + 1) {
            return num;
        } else {
            num = null;
        }
    }
    return num;
};



$.getJSON("./match.json", function(data, status) {

    const re = /[0-9A-Z]+/g;
    const re1 = /[a-z]/g;
    console.log(data.matches.length);
    for (let i = 0; i < data.matches.length; i++) {
        var alice = data.matches[i].alice,
            bob = data.matches[i].bob;
        var num1 = alice.match(re); //面值
        var color1 = alice.match(re1); //花色

        /*  10 = T ; 11 = J ; 12 = Q ; 13 = K ;  14 = A  */
        var num1 = num1.toString().replace(/T/g, '10');
        var num1 = num1.toString().replace(/J/g, '11');
        var num1 = num1.toString().replace(/Q/g, '12');
        var num1 = num1.toString().replace(/K/g, '13');
        var num1 = num1.toString().replace(/A/g, '14');
        //console.log(num);
        var num1 = num1.split(",").sort((a, b) => a - b);
        var color1 = color1.sort((a, b) => b - a);
        //console.log(num1);
        //console.log(color1);
        //console.log("-----------");
    };

});