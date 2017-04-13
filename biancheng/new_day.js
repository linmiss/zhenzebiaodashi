
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

let tongHuaShun = function(a){ //同花顺
    if( a.mainColor ){
        var nums = [0,0,0,0,0,0,0,0,0,0,0,0,0];
        arr = a.filter(function(p){
            var ok = p.color === a.mainColor;
            if(ok){
                nums[p.num]++;
            }
            return ok;
        });
        if( nums.join("").match(/111110*$/) ){
            return "tongHuaShun" + a[0].ch;
        }else if( nums.join("").match(/^11110.*1$/) ){
            return "tongHuaShun1";
        }
    }
};

let siTiao = (a) => {//四条
    let index1 = a.lastIndex[4],
        index2;
    if( index1 != -1 ){
        index2 = a.nums.search( /[^04][04]*$/ );
        return "siTiao"+chs[index1]+chs[index2];
    } 
};

let huLu = function(a){ //葫芦
    var index1 = a.nums.lastIndexOf(3),
        index2;
    if( index1 != -1 && (index2 = a.lastIndex[3] === index1 ? a.nums.search( /2[^2]*$/ ) : a.lastIndex[3] ) != -1 ){
        //console.log( a+"" );
        return "huLu"+chs[index1]+chs[index2];
    }
};

let tongHua = function(a){ //同花
    if( a.mainColor ){
        a.reverse();
        return "tongHua" + a.filter(function(p){
                return a.mainColor === p.color;
            }).join("").substring(0,5);
    }
};

let shunZi = function(a){ //顺子
    var nums = a.nums.replace(/[^01]/g,"1");
    if( nums.match(/111110*$/) ){
        return "shunZi" + a[0].ch;
    }else if( nums.match(/^11110.*1$/) ){
        return "shunZi1";
    }
};

let sanTiao = function(a){ //三条
    var index1 = a.lastIndex[3],
        index2,
        index3;
    if( index1 != -1 ){
        index2 = a.lastIndex[1];
        index3 = a.nums.search(/1[03]*1[03]*$/);
        return "sanTiao"+chs[index1]+chs[index2]+chs[index3];
    }
};

let liangDui = function(a){ //两对
    var index1 = a.lastIndex[2],
        index2,
        index3;
    if( index1 != -1 & (index2 = a.nums.search(/2[01]*2[01]*$/) ) != -1 ){
        index3 = a.nums.search(/20*20*20*$/) === -1 ? a.lastIndex[1] : a.nums.search(/20*20*20*$/);
        return "liangDui"+chs[index1]+chs[index2]+chs[index3];
    }
};

let yiDui = function(a){ //一对
    var index1 = a.lastIndex[2];
    if( index1 != -1 ){
        return "yiDui" + chs[index1] + a.str.replace( new RegExp(chs[index1],"g"), "" ).substring(0,5);
    }
};

let gaoPai = function(a){ //高牌
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
    return tongHuaShun(a) || siTiao(a) || huLu(a) || tongHua(a) || shunZi(a) || sanTiao(a) || liangDui(a) || yiDui(a) || gaoPai(a);
};

console.log(score([2,3,4,5,6,7,8]))

