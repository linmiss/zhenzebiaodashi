'use strict'
/**
 * 先不管花色 等最后判断的时候再判断花色否相等
 * 因为有的要判断花色有的不判断花色，比如 顺子 同花顺 首先只判断牌型 再根据字典中出现的次数决定事顺子，
 * 还是同花顺(如果出现一次那就不是顺子和同花了)
 */

console.time('time');
/**
 * 查找x出现的次数 function
 * @param {*} a arr 
 * @param {*} x 要查的值
 */
//在数组中查找所有出现的x，并返回一个包含匹配索引的数组
function findAllIndex(a, x) {
    var results = [],
        len = a.length,
        pos = 0;
    while (pos < len) {
        pos = a.indexOf(x, pos);
        if (pos === -1) {//未找到就退出循环完成搜索
            break;
        }
        results.push(pos);//找到就存储索引
        pos += 1;//并从下个位置开始搜索
    }
    return results;
}
 
/**
 * 建立一个poker字典然后查index
 */

//高牌  (最大牌：A-K-Q-J-9 最小牌：2-3-4-5-7）

let arr1 = [],
poker1 = [14,13,12,11,10,9,8,7,6,5,4,3,2],
poker2 =    [13,12,11,10,9,8,7,6,5,4,3,2],
poker3 =       [12,11,10,9,8,7,6,5,4,3,2],
poker4 =          [11,10,9,8,7,6,5,4,3,2],
poker5 =             [10,9,8,7,6,5,4,3,2];
for(let i = 0 ; i < 9; i++) {
    for(let j = i ; j < 9; j++) {
        for(let m = j ;m < 9 ; m++) {
            for(let n = m ; n < 9; n++) {
                for(let k = n; k < 9; k++) {
                    let arr = [];
                    arr.push(`${poker1[i]}`);
                    arr.push(`${poker2[j]}`);
                    arr.push(`${poker3[m]}`);
                    arr.push(`${poker4[n]}`);
                    arr.push(`${poker5[k]}`);
                   
                    //删除顺子
                    if(arr.toString() != '14,13,12,11,10' &&
                       arr.toString() != '13,12,11,10,9'  &&
                       arr.toString() != '12,11,10,9,8' &&
                       arr.toString() != '11,10,9,8,7' &&
                       arr.toString() != '10,9,8,7,6' &&
                       arr.toString() != '9,8,7,6,5' &&
                       arr.toString() != '8,7,6,5,4' &&
                       arr.toString() != '7,6,5,4,3' &&
                       arr.toString() != '6,5,4,3,2'
                    ) {
                        arr1.push(arr.toString());
                    }
                }
            }
        }
    }
};
arr1.reverse();
//console.log(arr1);

//一对 （最大牌：A-A-K-Q-J 最小牌：2-2-3-4-5）   待处理完
let poker6 = ['14,14','13,13','12,12','11,11','10,10',
              '9,9','8,8','7,7','6,6','5,5','4,4','3,3','2,2'],
    poker7 = [14,13,12,11,10,9,8,7,6,5,4,3,2],
    poker8 =    [13,12,11,10,9,8,7,6,5,4,3,2],
    poker9 =       [12,11,10,9,8,7,6,5,4,3,2],
    arr2 = [];

    for(let i = 0; i < poker6.length; i++) {
        for(let j = 0; j < poker7.length - 2; j++) {
            for(let m = j; m < poker8.length - 1; m++) {
                for(let n = m; n < poker9.length; n++) {
                    let p =  poker6[i].substr(0,poker6[i].indexOf(','));
                    if(parseInt(p) != poker7[j] &&
                       parseInt(p) != poker8[m] &&
                       parseInt(p) != poker9[n]
                    ) {
                        let arr = [];
                        arr.push(`${poker6[i]}`);
                        arr.push(`${poker7[j]}`);
                        arr.push(`${poker8[m]}`);
                        arr.push(`${poker9[n]}`);
                        arr2.push(arr.toString().split(',').sort((a, b) => b - a).toString());
                    }
                    
                }
            }
        }
    };
arr2.reverse();

//两对：（最大牌：A-A-K-K-Q 最小牌：2-2-3-3-4）
let arr3 = [],
    poker10 = ['14,14','13,13','12,12','11,11','10,10',
              '9,9','8,8','7,7','6,6','5,5','4,4','3,3','2,2'],
    poker11 = ['13,13','12,12','11,11','10,10',
              '9,9','8,8','7,7','6,6','5,5','4,4','3,3','2,2'],
    poker12 = [14,13,12,11,10,9,8,7,6,5,4,3,2];
    for(let i = 0; i < poker10.length - 1; i++) {
        for(let m = i ; m < poker11.length; m++) {
            for(let n = 0; n < poker12.length; n++) {
                let arr = [];
                let a = poker10[i].substr(0,poker10[i].indexOf(',')),//截取poker10 的 14
                    b = poker11[m].substr(0,poker11[m].indexOf(','));
                    //去重
                if(parseInt(a) != poker12[n] && parseInt(b) != poker12[n]) {
                    arr.push(`${poker10[i]}`);
                    arr.push(`${poker11[m]}`);
                    arr.push(`${poker12[n]}`);
                    arr3.push(arr.toString().split(',').sort((a, b) => b - a).toString());
                }
                
            }
        }
    };
arr3.reverse();

//三条：三同张加两单张。（最大牌：A-A-A-K-Q 最小牌：2-2-2-3-4
let poker13 = ['14,14,14','13,13,13','12,12,12','11,11,11','10,10,10',
                '9,9,9','8,8,8','7,7,7','6,6,6','5,5,5','4,4,4','3,3,3','2,2,2'],
    poker14 = [14,13,12,11,10,9,8,7,6,5,4,3,2],
    poker15 =    [13,12,11,10,9,8,7,6,5,4,3,2];
let arr4 = [];
for(let i = 0; i < poker10.length; i++) {
    for(let m = 0; m < poker11.length - 1; m++) {
        for(let n = m; n < poker12.length - 1; n++) {
            //console.log( poker10[i].substr(0,poker10[i].indexOf(',')) );//string
            //console.log(typeof poker11[m].toString()) //string
            //console.log(typeof poker12[n]) //string 
            //去掉重复的
            let c = poker13[i].substr(0,poker13[i].indexOf(','));//获取第一张牌，不能重复
            if(parseInt(c) != poker14[m] && parseInt(c) != poker15[n]) {
                let arr = [];
                arr.push(`${poker13[i]}`);
                arr.push(`${poker14[m]}`);
                arr.push(`${poker15[n]}`);
                //从大到小排列的
                arr4.push( arr.toString().split(",").sort((a,b) => b - a).toString() );
            }
            
        }
    }
}
//从小到大：（取反）
arr4.reverse();

//顺子：花色不一样的顺子。（最大牌：A-K-Q-J-10 最小牌：A-2-3-4-5）
let arr5 = [
    '14,5,4,3,2',
    '6,5,4,3,2',
    '7,6,5,4,3',
    '8,7,6,5,4',
    '9,8,7,6,5',
    '10,9,8,7,6',
    '11,10,9,8,7',
    '12,11,10,9,8',
    '13,12,11,10,9',
    '14,13,12,11,10'
]

//同花：同一花色,不同顺序。（最大牌：A-K-Q-J-9 最小牌：2-3-4-5-7）
let arr6 = arr1 ;

//葫芦：最大牌：A-A-A-K-K 最小牌：2-2-2-3-3
let arr7 = [],
    poker17 = ['14,14,14','13,13,13','12,12,12','11,11,11','10,10,10',
                '9,9,9','8,8,8','7,7,7','6,6,6','5,5,5','4,4,4','3,3,3','2,2,2'],
    poker18 = ['14,14','13,13','12,12','11,11','10,10',
              '9,9','8,8','7,7','6,6','5,5','4,4','3,3','2,2'];
    for(let i = 0; i < poker17.length; i++) {
        for(let j = 0; j < poker18.length; j++) {
            let d = poker17[i].substr(0,poker17[i].indexOf(',')),
                f = poker18[j].substr(0,poker18[j].indexOf(','));
            if(parseInt(d) != parseInt(f)) {
                let arr = [];
                arr.push(`${poker17[i]}`);
                arr.push(`${poker18[j]}`);
                arr7.push( arr.toString().split(",").sort((a,b) => b - a).toString() );
            }  
        }
    };

arr7.reverse();
//console.log(arr7);

//四条: 四张相同牌型，花色不同 ，最大牌：A-A-A-A-K 最小牌：2-2-2-2-3
let poker19 = ['14,14,14,14','13,13,13,13','12,12,12,12','11,11,11,11','10,10,10,10',
                '9,9,9,9','8,8,8.8','7,7,7.7','6,6,6,6','5,5,5,5','4,4,4,4','3,3,3,3','2,2,2,2'],
    poker20 = [14,13,12,11,10,9,8,7,6,5,4,3,2],
    arr8 = [];
    for(let i = 0; i < poker19.length; i++) {
        for(let j = 0; j < poker20.length; j++) {
            let m = poker19[i].substr(0,poker19[i].indexOf(','));
            if(parseInt(m) != poker20[j]) {
                let arr = [];
                arr.push(`${poker19[i]}`);
                arr.push(`${poker20[j]}`);
                arr8.push( arr.toString().split(",").sort((a,b) => b - a).toString() );
            }
        }
    };

arr8.reverse();
//console.log(arr8);

//同花顺:最大牌：K-Q-J-10-9 最小牌：A-2-3-4-5
let arr9 = arr5;
//console.log(arr9);

/**
 * 字典建立完成！
 */
let poker_all = [...arr1, ...arr2, ...arr3, ...arr4, ...arr5, ...arr6, ...arr7, ...arr8, ...arr9];

//console.log(poker_all.length);

/**
 * 下面进行比较大小
 */

//牌的面值和花色处理
let fs = require('fs');

//获取data数据
var data = JSON.parse(fs.readFileSync("./match.json"));
//console.log(data);


//牌型处理面值
function handleNum(name) {
    //面值
    const re = /[0-9A-Z]+/g;

    let num = name.match(re);
        
    num = num.toString().replace(/T/g, '10')
                            .replace(/J/g, '11')
                            .replace(/Q/g, '12')
                            .replace(/K/g, '13')
                            .replace(/A/g, '14');

    num = num.split(",").sort((a, b) => b - a).toString();

    return  num;
};

//花色处理函数
function handleColor(name) {
    //花色处理
     const re1 = /[a-z]/g;

     let color = name.match(re1);

     color = color.sort().reverse().toString();

     return color;
}

/**
 * 牌型大小判断
 */
for (let i = 0; i < data.matches.length; i++) {
    let alice = data.matches[i].alice,
        bob = data.matches[i].bob;
    
    let alice_num = handleNum(alice),
        alice_color = handleColor(alice);

    let bob_num = handleNum(bob),
        bob_color = handleColor(bob);
    //console.log(alice_num);
    //console.log(alice_color);
    //console.log(poker_all.indexOf(alice_num));
    
    //看num出现的次数 index数组：[]
    let occ_num_alice = findAllIndex(poker_all,alice_num),
        occ_num_bob = findAllIndex(poker_all,bob_num);
    //console.log(occ_num_alice.length);
    //判断出现的次数
    if(occ_num_alice.length == 1 && occ_num_bob.length == 1) {

        if(occ_num_alice[0] > occ_num_bob[0]) {
            data.matches[i].result = 1 ;
        }else if(occ_num_alice[0] < occ_num_bob[0]) {
            data.matches[i].result = 2 ;
        }else {
            data.matches[i].result = 0 ;
        }

    }else if(occ_num_alice.length == 1 && occ_num_bob.length == 2) {

        if(bob_color == 's,s,s,s,s' ||
           bob_color == 'h,h,h,h,h' ||
           bob_color == 'd,d,d,d,d' ||
           bob_color == 'c,c,c,c,c' 
        ) 
        {
           if(occ_num_alice[0] > occ_num_bob[1]) {
                 data.matches[i].result = 1 ;
           }else if(occ_num_alice[0] < occ_num_bob[1]) {
                 data.matches[i].result = 2 ;
           }else {
                 data.matches[i].result = 0 ;
           }

        }else {

           if(occ_num_alice[0] > occ_num_bob[0]) {
                 data.matches[i].result = 1 ;
           }else if(occ_num_alice[0] < occ_num_bob[0]) {
                 data.matches[i].result = 2 ;
           }else {
                 data.matches[i].result = 0 ;
           }

        }
        
    }else if(occ_num_alice.length == 2 && occ_num_bob.length == 1) {

        if(alice_color == 's,s,s,s,s' ||
           alice_color == 'h,h,h,h,h' ||
           alice_color == 'd,d,d,d,d' ||
           alice_color == 'c,c,c,c,c' 
        ) 
        {
           if(occ_num_alice[1] > occ_num_bob[0]) {
                 data.matches[i].result = 1 ;
           }else if(occ_num_alice[1] < occ_num_bob[0]) {
                 data.matches[i].result = 2 ;
           }else {
                 data.matches[i].result = 0 ;
           }

        }else {

           if(occ_num_alice[0] > occ_num_bob[0]) {
                 data.matches[i].result = 1 ;
           }else if(occ_num_alice[0] < occ_num_bob[0]) {
                 data.matches[i].result = 2 ;
           }else {
                 data.matches[i].result = 0 ;
           }

        }
    }else { //length都是：２
       　
        if( //两手牌都是同花
            (
                alice_color == 's,s,s,s,s' ||
                alice_color == 'h,h,h,h,h' ||
                alice_color == 'd,d,d,d,d' ||
                alice_color == 'c,c,c,c,c'
            )
            && 
            (
               bob_color == 's,s,s,s,s' ||
               bob_color == 'h,h,h,h,h' ||
               bob_color == 'd,d,d,d,d' ||
               bob_color == 'c,c,c,c,c'
            )
        ) {
            if(occ_num_alice[1] > occ_num_bob[1]) {
                data.matches[i].result = 1;
            }else if (occ_num_alice[1] < occ_num_bob[1]) {
                data.matches[i].result = 2;
            }else {
                data.matches[i].result = 0;
            }
        }else if( //第一手是同花
            (
                alice_color == 's,s,s,s,s' ||
                alice_color == 'h,h,h,h,h' ||
                alice_color == 'd,d,d,d,d' ||
                alice_color == 'c,c,c,c,c'
            )
            && 
            (
               bob_color !== 's,s,s,s,s' ||
               bob_color !== 'h,h,h,h,h' ||
               bob_color !== 'd,d,d,d,d' ||
               bob_color !== 'c,c,c,c,c'
            )
        ) {
            if(occ_num_alice[1] > occ_num_bob[0]) {
                data.matches[i].result = 1;
            }else if (occ_num_alice[1] < occ_num_bob[0]) {
                data.matches[i].result = 2;
            }else {
                data.matches[i].result = 0;
            }
        }else if( //第二手牌是同花
            (
                alice_color !== 's,s,s,s,s' ||
                alice_color !== 'h,h,h,h,h' ||
                alice_color !== 'd,d,d,d,d' ||
                alice_color !== 'c,c,c,c,c'
            )
            && 
            (
               bob_color == 's,s,s,s,s' ||
               bob_color == 'h,h,h,h,h' ||
               bob_color == 'd,d,d,d,d' ||
               bob_color == 'c,c,c,c,c'
            )
        ) {
            if(occ_num_alice[0] > occ_num_bob[1]) {
                data.matches[i].result = 1;
            }else if (occ_num_alice[0] < occ_num_bob[1]) {
                data.matches[i].result = 2;
            }else {
                data.matches[i].result = 0;
            }
        }else {//都不是同花
            if(occ_num_alice[0] > occ_num_bob[0]) {
                data.matches[i].result = 1;
            }else if (occ_num_alice[0] < occ_num_bob[0]) {
                data.matches[i].result = 2;
            }else {
                data.matches[i].result = 0;
            }
        }

    };

    console.log(data.matches[i].result, i+1);
};
console.timeEnd('time');