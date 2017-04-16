'use strict'
/**
 * 建立一个poker字典然后查index
 */

//高牌
console.time('time');
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
console.log(arr1);
console.log(arr1.indexOf('13,12,11,10,9'));
console.timeEnd('time');