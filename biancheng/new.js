'use strict'
/**
 * 先不管花色 等最后判断的时候再判断花色否相等
 * 因为有的要判断花色有的不判断花色，比如 顺子 同花顺 首先只判断牌型 再根据字典中出现的次数决定事顺子，
 * 还是同花顺
 */


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
 
var arr=[1,2,3,1,4,1,4,1];
findAllIndex(arr,1);//返回[0,3,5,7]
console.log(findAllIndex(arr,1))


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
                let a = poker10[i].substr(0,poker10[i].indexOf(',')),//截取poker10 的 14
                    b = poker11[m].substr(0,poker11[m].indexOf(','));
                    //去重
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



//顺子：花色不一样的顺子。（最大牌：A-K-Q-J-10 最小牌：A-2-3-4-5）
let color1 = ["s","h","d","c"],
    poker16 = [14,13,12,11,10,9,8,7,6,5,4,3,2],
    poker17 =    [13,12,11,10,9,8,7,6,5,4,3,2],
    poker18 =       [12,11,10,9,8,7,6,5,4,3,2],
    poker19 =          [11,10,9,8,7,6,5,4,3,2],
    poker20 =             [10,9,8,7,6,5,4,3,2],
    color = [];
    for(let i = 0; i < color1.length; i++) {
        for(let j = 0; j < color1.length; j++) {
            for (let m = 0; m < color1.length; m++) {
                for (let n = 0; n < color1.length; n++) {
                    for (let k = 0; k < color1.length; k++) {
                        if(color1[i] != color1[j] != color1[m] != color1[n] != color1[k]) {
                            let arr_col = [];
                            arr_col.push(color1[i]);
                            arr_col.push(color1[j]);
                            arr_col.push(color1[m]);
                            arr_col.push(color1[n]);
                            arr_col.push(color1[k]);
                            arr_col.toString().replace('c,c,c,c,c','')
                                                          .replace('d,d,d,d,d','')
                                                          .replace('h,h,h,h,h','')
                                                          .replace('s,s,s,s,s','')
                                                          .split(',');
                            //color.push(arr_col);
                            //console.log(color);
                        }
                        
                    }
                }
            }
        }
    }

