'use strict'
/**
 * 建立一个poker字典然后查index
 */

//高牌

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
                    
                    //console.log(arr);
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

//一对 （最大牌：A-A-K-Q-J 最小牌：2-2-3-4-5）
let poker6 = ['14,14','13,13','12,12','11,11','10,10',
              '9,9','8,8','7,7','6,6','5,5','4,4','3,3','2,2'],
    poker7 = [13,12,11,10,9,8,7,6,5,4,3,2],
    poker8 =    [12,11,10,9,8,7,6,5,4,3,2],
    poker9 =       [11,10,9,8,7,6,5,4,3,2];

    for(let i = 0; i < 10; i++) {
        for(let j = i; j < 10; j++) {
            for(let m = j; m < 10; m++) {
                for(let n = j; n < 10; n++) {
                    let arr = [];
                    arr.push(`${poker6[i]}`);
                    arr.push(`${poker7[j]}`);
                    arr.push(`${poker8[m]}`);
                    arr.push(`${poker9[n]}`);
                    //console.log(arr.toString().split());
                }
            }
        }
    }

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
                let a = poker10[i].substr(0,poker10[i].indexOf(',')),
                    b = poker11[m].substr(0,poker11[m].indexOf(','));
                if(parseInt(a) != poker12[n] && parseInt(b) != poker12[n]) {
                    arr.push(`${poker10[i]}`);
                    arr.push(`${poker11[m]}`);
                    arr.push(`${poker12[n]}`);
                    //console.log(arr.toString().split(',').sort((a, b) => b - a).toString());
                    arr3.push(arr.toString().split(',').sort((a, b) => b - a).toString());
                }
                
            }
        }
    };
//console.log(arr3)
arr3.reverse();
//console.log(arr3);



//三条：三同张加两单张。（最大牌：A-A-A-K-Q 最小牌：2-2-2-3-4
let poker13 = ['14,14,14','13,13,13','12,12,12','11,11,11','10,10,10',
                '9,9,9','8,8,8','7,7,7','6,6,6','5,5,5','4,4,4','3,3,3','2,2,2'],
    poker14 = [14,13,12,11,10,9,8,7,6,5,4,3,2],
    poker15 =    [13,12,11,10,9,8,7,6,5,4,3,2];
let arr4 = [];
for(let i = 0; i < poker10.length; i++) {
    for(let m = 0; m < poker11.length - 1; m++) {
        for(let n = m; n < poker12.length; n++) {
            //console.log( poker10[i].substr(0,poker10[i].indexOf(',')) );//string
            //console.log(typeof poker11[m].toString()) //string
            //console.log(typeof poker12[n]) //string 
            //去掉重复的
            let num = poker13[i].substr(0,poker13[i].indexOf(','));//获取第一张牌，不能重复
            if(parseInt(num) != poker14[m] && parseInt(num) != poker15[n]) {
                let arr = [];
                arr.push(`${poker13[i]}`);
                arr.push(`${poker14[m]}`);
                arr.push(`${poker15[n]}`);
                //console.log(arr)
                //console.log(arr.toString().split(",").sort((a,b) => b - a).toString());
                //从大到小排列的
                arr4.push( arr.toString().split(",").sort((a,b) => b - a).toString() );
            }
            
        }
    }
}
//从小到大：（取反）
arr4.reverse();
//console.log(arr4)
