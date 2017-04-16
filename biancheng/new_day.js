
'use strict'

const chs = '23456789abcdef';

/**
 * 定义一个poker class
 */
class Poker {
    constructor(n) {
        //poker's num:
        this.num = n % 13 ;
        this.ch = chs[this.num];
        //poker's color
        this.color = n / 13 | 0;
    }

    toString() {
        return this.ch ;
    }
}

let pokers = [];
for (let i = 0; i < 52; i++) {
    pokers.push( new Poker(i) );
};

/**
 * 牌型判断 
 */

//同花顺:最大牌：K-Q-J-10-9 最小牌：A-2-3-4-5
let p = function(a){ 
    if( a.mainColor ){
        var nums = [0,0,0,0,0,0,0,0,0,0,0,0,0],
        arr = a.filter(function(p){
            var ok = p.color === a.mainColor;
            if(ok){
                nums[p.num]++;
            }
            return ok;
        });
        if( nums.join("").match(/111110*$/) ){
            return "p" + a[0].ch;
        }else if( nums.join("").match(/^11110.*1$/) ){
            return "p1";
        }
    }
};

//四条: 四张相同牌型，花色不同 ，最大牌：A-A-A-A-K 最小牌：2-2-2-2-3
let o = (a) => {
    let index1 = a.lastIndex[4],
        index2;
    if( index1 != -1 ){
        index2 = a.nums.search( /[^04][04]*$/ );
        return "o"+chs[index1]+chs[index2];
    } 
};

//葫芦：最大牌：A-A-A-K-K 最小牌：2-2-2-3-3
let n = function(a){
    var index1 = a.nums.lastIndexOf(3),
        index2;
    if( index1 != -1 && (index2 = a.lastIndex[3] === index1 ? a.nums.search( /2[^2]*$/ ) : a.lastIndex[3] ) != -1 ){
        //console.log( a+"" );
        return "n"+chs[index1]+chs[index2];
    }
};

//同花：同一花色,不同顺序。（最大牌：A-K-Q-J-9 最小牌：2-3-4-5-7）
let m = function(a){
    if( a.mainColor ){
        a.reverse();
        return "m" + a.filter(function(p){
                return a.mainColor === p.color;
            }).join("").substring(0,5);
    }
};

//顺子：花色不一样的顺子。（最大牌：A-K-Q-J-10 最小牌：A-2-3-4-5）
let l = function(a){
    var nums = a.nums.replace(/[^01]/g,"1");
    if( nums.match(/111110*$/) ){
        return "l" + a[0].ch;
    }else if( nums.match(/^11110.*1$/) ){
        return "l1";
    }
};

//三条：三同张加两单张。（最大牌：A-A-A-K-Q 最小牌：2-2-2-3-4
let k = function(a){
    var index1 = a.lastIndex[3],
        index2,
        index3;
    if( index1 != -1 ){
        index2 = a.lastIndex[1];
        index3 = a.nums.search(/1[03]*1[03]*$/);
        return "k"+chs[index1]+chs[index2]+chs[index3];
    }
};

//两对：（最大牌：A-A-K-K-Q 最小牌：2-2-3-3-4
let j = function(a){
    var index1 = a.lastIndex[2],
        index2,
        index3;
    if( index1 != -1 & (index2 = a.nums.search(/2[01]*2[01]*$/) ) != -1 ){
        index3 = a.nums.search(/20*20*20*$/) === -1 ? a.lastIndex[1] : a.nums.search(/20*20*20*$/);
        return "j"+chs[index1]+chs[index2]+chs[index3];
    }
};

//一对：（最大牌：A-A-K-Q-J 最小牌：2-2-3-4-5
let i = function(a){
    var index1 = a.lastIndex[2];
    if( index1 != -1 ){
        return "i" + chs[index1] + a.str.replace( new RegExp(chs[index1],"g"), "" ).substring(0,5);
    }
};

//高牌：花色和面值都不同
let h = function(a){
    return a.str;
};

let score = function(arg){

    var colors = [0,0,0,0],
        nums = [0,0,0,0,0,0,0,0,0,0,0,0,0],
        str = "",
        lastIndex = [-1,-1,-1,-1,-1],
        mainColor,
        a = [].map.call(arg, function(p){
            var poker = pokers[p];
            colors[poker.color]++;
            if( colors[poker.color] === 5 ){
                mainColor = poker.color;
            }
            var times = nums[poker.num]++;
            lastIndex[ times ] = poker.num;
            return poker;
        });
    a.sort(function(p1,p2){
        return p1.num - p2.num;
    });
    a.colors = colors;
    a.mainColor = mainColor;
    a.nums = nums.join("");
    a.str = a.join("");
    a.lastIndex = lastIndex;
    return p(a) || o(a) || n(a) || m(a) || l(a) || k(a) || j(a) || i(a) || h(a);
};



const num_show=["0","1","2","3","4","5","6","7","8","9","T","J","Q","K","A"];
const color_type=["s","h","d","c"];

/**
 * 牌型转换
 * string => arr 
 */

function convert(str) {
    let arr = [];
    for (var i = 0; i < str.length; i += 2) {
        //面值
        var num_num = num_show.indexOf((str.substring(i, i + 2))[0]);
        //color
        var num_color = color_type.indexOf((str.substring(i, i + 2))[1]);
        var num = num_num + (num_color * 13);
        arr.push(num);
    }
    return arr ;
}
//console.log( convert("AsKsQsJsTs").sort((a,b) => a - b) );
//console.log( score(convert("AsKsQsJsTs").sort((a,b) => a - b) ))

/**
 * 大小比较
 */

//牌处理
let fs = require('fs');

let data  = JSON.parse(fs.readFileSync('./match.json'));

console.log(data.matches.length);

for(let i = 0; i < data.matches.length; i++) {
    //alice bob's poker
    let alice = score( convert(data.matches[i].alice) ),
        bob = score( convert(data.matches[i].bob) );
        console.log(alice, bob);
}