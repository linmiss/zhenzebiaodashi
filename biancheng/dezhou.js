<<<<<<< HEAD
//皇家同花顺:最大牌：A-K-Q-J-10
let sameColor_s = ["s", "s", "s", "s", "s"].toString(),
    sameColor_h = ["h", "h", "h", "h", "h"].toString(),
    sameColor_d = ["d", "d", "d", "d", "d"].toString(),
    sameColor_c = ["c", "c", "c", "c", "c"].toString();


=======
"use strict"

//皇家同花顺
>>>>>>> 209e6cb463f64fc1e0b232a695e2a6f891c65d4c
var huangJiaTHS = (num, color) => {
    if (num == [10, 11, 12, 13, 14].toString() && (sameColor_s == color || sameColor_h == color || sameColor_d == color || sameColor_c == color)) {
        return true;
    } else {
        return false;
    }

};

<<<<<<< HEAD
//console.log(huangJiaTHS([10, 11, 12, 13, 14], ["h", "h", "h", "h","h"]));
//同花顺:最大牌：K-Q-J-10-9 最小牌：A-2-3-4-5
var tongHuaS = (num, color) => {
    for (let i = 1; i < num.length; i++) {
        if ((num[i] == num[i - 1] + 1 || num == [2, 3, 4, 5, 14]) && (sameColor_s == color || sameColor_h == color || sameColor_d == color || sameColor_c == color)) {
            return true;
=======
console.log(huangJiaTHS([10, 11, 12, 13, 14], ["s", "h", "d", "c"]));
//同花顺
var tongHuaS = (num, color) => {
    for (let i = 1; i < num.length; i++) {
        if (num[i] == num[i - 1] + 1) {
            return num;
>>>>>>> 209e6cb463f64fc1e0b232a695e2a6f891c65d4c
        } else {
            num = null;
        }
    }
    return num;
};

<<<<<<< HEAD
//console.log(tongHuaS([2, 3, 4, 5, 14], ["d", "d", "d", "d", "d"]))

//四条: 四张相同牌型，花色不同 ，最大牌：A-A-A-A-K 最小牌：2-2-2-2-3
var siTiao = (num, color) => {
    if (sameColor_s != color && sameColor_h != color && sameColor_d != color && sameColor_c != color) {
        for (let i = 0; i < num.length - 2; i++) {
            if ((num[i] == num[i + 1] && num[3] != num[4]) ||
                ((num[i + 1] == num[i + 2] && num[3] == num[4]) && num[0] != num[1])) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }

};

//console.log(siTiao([3, 3, 3, 3, 10] , ["c", "c", "s", "c", "c"]));


//葫芦：最大牌：A-A-A-K-K 最小牌：2-2-2-3-3
var huLu = (num, color) => {
    for (var i = 0; i < 2; i++) {
        if (num[i] == num[i + 1] && num[3] == num[4]) {
            return true;
        } else if (num[0] == num[1] && num[2] == num[3] == num[4]) {
            return true;
        } else {
            return false;
        }
    }
};

//console.log( huLu([2,2,2,4,4]) );

//同花：同一花色,不同顺序。（最大牌：A-K-Q-J-9 最小牌：2-3-4-5-7）

var tongHua = (num, color) => {
    if (color == sameColor_s || sameColor_h || sameColor_d || sameColor_c) {
        for (var i = 0; i < num.length - 1; i++) {
            if (num[i] != num[i + 1] && (num[0] != num[1] - 1 || num[3] != num[4] - 1)) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

//console.log( tongHua([3,4,5,6,6] , ['h','h','h','h','h']) ); 有问题。



//顺子：花色不一样的顺子。（最大牌：A-K-Q-J-10 最小牌：A-2-3-4-5

var shuZi = (num, color) => {
    if (sameColor_s != color && sameColor_h != color && sameColor_d != color && sameColor_c != color) {
        for (var i = 0; i < num.length - 1; i++) {
            if (num[i] == num[i + 1] - 1) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
};
//console.log(shuZi([2,4,4,5,6],["c", "c", "s", "c", "c"]));

//三条：三同张加两单张。（最大牌：A-A-A-K-Q 最小牌：2-2-2-3-4

var sanTiao = (num, color) => {
    if (num[0] == num[1] == num[2] && num[3] != num[4]) {
        return true;
    } else if (num[1] == num[2] == num[3] && num[0] != num[4]) {
        return true;
    } else if (num[2] == num[3] == num[4] && num[0] != num[1]) {
        return true;
    } else {
        return false;
    }
}
console.log(sanTiao([1, 2, 2, 2, 4]));

//两对：（最大牌：A-A-K-K-Q 最小牌：2-2-3-3-4

//一对：（最大牌：A-A-K-Q-J 最小牌：2-2-3-4-5
=======


$.getJSON("./match.json", function(data, status) {
>>>>>>> 209e6cb463f64fc1e0b232a695e2a6f891c65d4c

    const re = /[0-9A-Z]+/g;
    const re1 = /[a-z]/g;

    /* 牌型处理函数 */
    function deal(data) {

        for(let i = 0; i < data.matches.length; i++) {

            // var num = data.matches[i].alice.match(re);
            // console.log(num);
            console.log(data.length)
        }

    }

    deal();

<<<<<<< HEAD
$.getJSON("./match.json", function(data, status) {
    let arrAlice_num = [],
        arrAlice_color = [],
        arrBob_num = [],
        arrBob_color = [];

    const re = /[0-9A-Z]+/g;
    const re1 = /[a-z]/g;

    //console.log(data.matches.length);
    for (let i = 0; i < data.matches.length; i++) {
        var alice = data.matches[i].alice,
            bob = data.matches[i].bob;
        var num1 = alice.match(re); //面值
        var color1 = alice.match(re1); //花色

        /*  10 = T ; 11 = J ; 12 = Q ; 13 = K ;  14 = A  */

        /* alice*/
        var num1 = num1.toString().replace(/T/g, '10');
        var num1 = num1.toString().replace(/J/g, '11');
        var num1 = num1.toString().replace(/Q/g, '12');
        var num1 = num1.toString().replace(/K/g, '13');
        var num1 = num1.toString().replace(/A/g, '14');
        //console.log(num1);
        var num1 = num1.split(",").sort((a, b) => a - b);
        var color1 = color1.sort((a, b) => b - a);
        arrAlice_num.push(num1);
        arrAlice_color.push(color1);

        //console.log(color1);

    };
    //console.log(arrAlice_num);
    //console.log(arrAlice_color);
=======

    //console.log(data.matches.length);
    // for (let i = 0; i < data.matches.length; i++) {
    //
    //     /* alice */
    //     var alice = data.matches[i].alice,
    //         bob = data.matches[i].bob;
    //     var num1 = alice.match(re); //面值
    //     var color1 = alice.match(re1); //花色
    //
    //     /*  10 = T ; 11 = J ; 12 = Q ; 13 = K ;  14 = A  */
    //     var num1 = num1.toString().replace(/T/g, '10');
    //     var num1 = num1.toString().replace(/J/g, '11');
    //     var num1 = num1.toString().replace(/Q/g, '12');
    //     var num1 = num1.toString().replace(/K/g, '13');
    //     var num1 = num1.toString().replace(/A/g, '14');
    //     //console.log(num);
    //     var num1 = num1.split(",").sort((a, b) => a - b);
    //     var color1 = color1.sort((a, b) => b - a);
    //     console.log(num1);
    //     //console.log(color1);
    //     //console.log("-----------");
    // };
>>>>>>> 209e6cb463f64fc1e0b232a695e2a6f891c65d4c

});