//5张牌
console.time('time');

var fs=require("fs");
var file="./result.json";
var Json=JSON.parse(fs.readFileSync('./biancheng/five_cards_with_ghost.json'));

var show=["0","1","2","3","4","5","6","7","8","9","T","J","Q","K","A"];
var type=["s","h","d","c"];
  // var Json={matches:[{"alice":"AsAhQsQhQc","bob":"KsKhKdKc2c","result":2}]}

var Poker =  function(n){//标识扑克牌
  this.num = (n%13)+2;
  this.ch = this.num > 9 ? ("abcdef"[this.num-10]) : this.num;
  this.color = "♠♥♣♦"[n/13 | 0];
}

var change=function(str){//字符串反转
  return str.split("").reverse().join("");
}

var z = function(arg){ //同花顺
  var a = arg,
    t = a[0];
  for (var i = 1; i < a.length; i++) {
    if( a[i].color === t.color && a[i].num === t.num + 1 ){
      t = a[i];
    }else if( i === a.length-1 && t.num === 5 && a[i].num === 14 && a[i].color === t.color){
      t = a[0];
    }else{
      return;
    }
  };
  return "z" + t.ch;
};
var y = function(arg){ //四条
  var a = arg.map(function(p){
      return p.ch;
    }).join(""),
    mat = a.match(/(\w*)(\w)\2\2\2(\w*)/);

  if( mat ){
    return "y"+mat[2]+mat[1]+mat[3];
  }
};
var x = function(arg){ //葫芦
  var a = arg.map(function(p){
      return p.ch;
    }).join(""),
    mat;

  if( mat = a.match(/(\w)\1(\w)\2\2/) ){
    return "x" + mat[2] + mat[1];
  }else if( mat = a.match(/(\w)\1\1(\w)\2/) ){
    return "x" + mat[1] + mat[2];
  }
};
var w = function(arg){ //同花
  var a = arg,
    t = a[0];
  for (var i = 1; i < a.length; i++) {
    if( a[i].color === t.color ){
      t = a[i];
    }else{
      return;
    }
  };
  return "w" + change(arg.map(function(p){
      return p.ch;
    }).join(""));
};
var v = function(arg){ //顺子
    var b=arg.map(function(p){
      return p.ch;
    }).join("")
    var a = arg,
        t = a[0];
    for (var i = 1; i < a.length; i++) {
        if( a[i].num === t.num + 1 ){
            t = a[i];
        }else if( i === a.length-1 && t.num === 5 && a[i].num === 14){
            t = a[0];
        }else{
            return; 
        }
    };
    return "v" + t.ch;
};

var u = function(arg){ //三条
  var a = arg.map(function(p){
      return p.ch;
    }).join(""),
    mat;

  if( mat = a.match(/(\w*)(\w)\2\2(\w*)/) ){
    return "u" + mat[2] + change(mat[1] + mat[3]);
  }
};
var t = function(arg){ //两对
  var a = arg.map(function(p){
      return p.ch;
    }).join(""),
    mat;
  if( mat = a.match(/(\w*)(\w)\2(\w)\3(\w*)/) ){
    return "t" + mat[3] + mat[2] + mat[1] + mat[4];
  }else if( mat = a.match(/(\w)\1(\w)(\w)\3/) ){
    return "t" + mat[3] + mat[1] + mat[2];
  }
};
var s = function(arg){ //一对
  var a = arg.map(function(p){
      return p.ch;
    }).join(""),
    mat;
  if( mat = a.match(/(\w*)(\w)\2(\w*)/) ){
    return "s" + mat[2] + change(mat[1] + mat[3]);
  }
};
var r = function(arg){ //高牌
  var a=arg.map(function(p){
    return p.ch;
  }).join("");
  return "r"+ change(a);
};

var level=function(poker){// 等级判断
  var arr=trans(poker)
  var a=arr.map(function(p){
    return new Poker(p);
  }).sort(function(p1,p2){
    return p1.num - p2.num;
  });
  return z(a) || y(a) || x(a) || w(a) || v(a) || u(a) || t(a) || s(a) || r(a);
}



var trans=function(str){//输入字符串转换
  var arr=[];
  for(var i=0;i<str.length;i+=2){
    var n= show.indexOf((str.substring(i,i+2))[0]);
    var m= type.indexOf((str.substring(i,i+2))[1]);
    var num=(n-2)+(m*13);
    arr.push(num);
  }
  return arr;
}

var obj=Json.matches;
var confirmed=function(obj) {//验证函数
  var count = 0;
  for (var i = 0; i < obj.length; i++) {
    var s1 = level(obj[i].alice);
    var s2 = level(obj[i].bob);
    var outcome = s1 > s2 ? 1 : s1 == s2 ? 0 : 2
    var result = obj[i].result;
    if (outcome != result) {
      console.log(i);
      count++;
    }
  }
  if(count == 0){
      console.log("验证"+i+"条");
      console.log("恭喜验证通过！");
   }else{
      console.log("验证失败");
   }
}
confirmed(obj);

console.timeEnd('time');
