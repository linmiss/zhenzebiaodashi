/**
 * Created by luyunstaff021 on 17-3-6.
 */
var chs = "23456789abcdef";
var Poker = function(n){
    this.num = n % 13;
    this.ch = chs[this.num];
    //this.show = "2,3,4,5,6,7,8,9,10,J,Q,K,A".split(",")[this.num];
    this.color = n / 13 | 0;
    // this.color = "♠♥♣♦"[n / 13 | 0];
    this.toString = function(){
        return this.ch;
    };
};
var pokers = [];
for (var i = 0; i < 52; i++) {
    pokers.push( new Poker(i) );
};

var z = function(a){ //同花顺
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
            return "z" + a[0].ch;
        }else if( nums.join("").match(/^11110.*1$/) ){
            return "z1";
        }
    }
};
var y = function(a){ //四条
    var index1 = a.lastIndex[4],
        index2;
    if( index1 != -1 ){
        index2 = a.nums.search( /[^04][04]*$/ );
        return "y"+chs[index1]+chs[index2];
    }
};
var x = function(a){ //葫芦
    var index1 = a.nums.lastIndexOf(3),
        index2;
    if( index1 != -1 && (index2 = a.lastIndex[3] === index1 ? a.nums.search( /2[^2]*$/ ) : a.lastIndex[3] ) != -1 ){
        //console.log( a+"" );
        return "x"+chs[index1]+chs[index2];
    }
};
var w = function(a){ //同花
    if( a.mainColor ){
        a.reverse();
        return "w" + a.filter(function(p){
                return a.mainColor === p.color;
            }).join("").substring(0,5);
    }
};
var v = function(a){ //顺子
    var nums = a.nums.replace(/[^01]/g,"1");
    if( nums.match(/111110*$/) ){
        return "v" + a[0].ch;
    }else if( nums.match(/^11110.*1$/) ){
        return "v1";
    }
};
var u = function(a){ //三条
    var index1 = a.lastIndex[3],
        index2,
        index3;
    if( index1 != -1 ){
        index2 = a.lastIndex[1];
        index3 = a.nums.search(/1[03]*1[03]*$/);
        return "u"+chs[index1]+chs[index2]+chs[index3];
    }
};
var t = function(a){ //两对
    var index1 = a.lastIndex[2],
        index2,
        index3;
    if( index1 != -1 & (index2 = a.nums.search(/2[01]*2[01]*$/) ) != -1 ){
        index3 = a.nums.search(/20*20*20*$/) === -1 ? a.lastIndex[1] : a.nums.search(/20*20*20*$/);
        return "t"+chs[index1]+chs[index2]+chs[index3];
    }
};
var s = function(a){ //一对
    var index1 = a.lastIndex[2];
    if( index1 != -1 ){
        return "s" + chs[index1] + a.str.replace( new RegExp(chs[index1],"g"), "" ).substring(0,5);
    }
};
var r = function(a){ //高牌
    return a.str;
};

var score = function(arg){
    // var arg = arguments;
    // if( ({}).toString.call( arguments[0] ) === "[object Array]" ){
    //     arg = arguments[0];
    // }
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
    return y(a) || z(a) || x(a) || w(a) || v(a) || u(a) || t(a) || s(a) || r(a);
};

var c = [];
console.log("begin random:");
for (var i = 0; i < 100000; i++) {
    var temp = [];
    for (var j = 0; j < 7; j++) {
        temp[j] = Math.random() * 52 | 0;
    };
    c.push(temp);
};
var d = +new Date;
console.log("begin execute:");
for (var i = 0; i < c.length; i++) {
    score( c[i] );
};
console.log(+new Date - d );