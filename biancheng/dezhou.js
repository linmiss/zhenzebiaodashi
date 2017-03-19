"use strict"

//皇家同花顺:最大牌：A-K-Q-J-10
var huangJiaTHS = (num, color) => {
    if (num == [10, 11, 12, 13, 14].toString() && color == ["s", "h", "d", "c"].toString()) {
        return true;
    } else {
        return false;
    }

};

//console.log(huangJiaTHS([10, 11, 12, 13, 14], ["s", "h", "d", "c"]));
//同花顺:最大牌：K-Q-J-10-9 最小牌：A-2-3-4-5
var tongHuaS = (num, color) => {
    for (let i = 1; i < num.length; i++) {
        if ((num[i] == num[i - 1] + 1 || num == [2, 3, 4, 5, 14]) && color == ["s", "h", "d", "c"].toString()) {
            return true;
        } else {
            return false;
        }
    }
};

//console.log(tongHuaS([2, 3, 4, 5, 14],["s", "h", "d", "c"]))

//四条:最大牌：A-A-A-A-K 最小牌：2-2-2-2-3
var siTiao = (num, color) => {
    for (let i = 0; i < num.length - 2; i++) {
        if ((num[i] == num[i + 1] && num[3] != num[4]) ||
            ((num[i + 1] == num[i + 2] && num[3] == num[4]) && num[0] != num[1])) {
            return true;
        } else {
            return false;
        }
    }
};

console.log(siTiao([3, 3, 3, 3, 10]));


//葫芦：最大牌：A-A-A-K-K 最小牌：2-2-2-3-3
var huLu = (num, color) => {
    for (var i = 0; i < 2; i++) {
        if (num[i] == num[i + 1]) {

        }
    }
};

//同花：同一花色。（最大牌：A-K-Q-J-9 最小牌：2-3-4-5-7）

//顺子：花色不一样的顺子。（最大牌：A-K-Q-J-10 最小牌：A-2-3-4-5

//三条：三同张加两单张。（最大牌：A-A-A-K-Q 最小牌：2-2-2-3-4

//两对：（最大牌：A-A-K-K-Q 最小牌：2-2-3-3-4

//一对：（最大牌：A-A-K-Q-J 最小牌：2-2-3-4-5

//单牌：（最大牌：A-K-Q-J-9 最小牌：2-3-4-5-7）

/*
牌型大小：   
1、皇家同花顺＞同花顺＞四条＞葫芦＞同花＞顺子＞三条＞两队＞一对＞单牌 

2、牌点从大到小为：A、K、Q、J、10、9、8、7、6、5、4、3、2，各花色不分大小。   

3、同种牌型，对子时比对子的大小，其它牌型比最大的牌张，如最大牌张相同则比第二大的牌张，
以此类推，都相同时为相同

*/


$.getJSON("./match.json", function(data, status) {

    const re = /[0-9A-Z]+/g;
    const re1 = /[a-z]/g;
    //console.log(data.matches.length);
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