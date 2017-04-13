
'use strict'

const str = '23456789abcdef';

/**
 * 定义一个poker class
 */
class Poker {
    constructor(n) {
        //poker's num:
        this.num = n % 13 ;
        this.ch = str[this.num];
        //poker's color
        this.color = n / 13 | 0;
    }

    toString() {
        return this.ch ;
    }
}

let poker = new Poker(13);
console.log(poker.num);
console.log(poker.toString());

let tongHuaShun = (arg) => { //同花顺
    let arr = arg,
        //为了比较中记录前一次的牌
        t = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i].color === t.color && arr[i].num === t.num +1 ) {
            t = arr[i];//记录上一张拍的面值
        }else if( i === arr.length -1 && t.num ===5 && arr[i] === 14 && arr[i].color === t.color) {
            //判断 14 2 3 4 5的情况也是同花顺
            t = a[0];
        }else {
            return;
        }
    };

    return "tongHuaShun" + t.ch ;
}

let siTiao = (arg) => {
    let str = arg.map( p => p.ch).join(""),
            matc;
    
}

