/**
 * Created by luyunstaff021 on 17-2-22.
 */

const  str = 'abcdef';

console.log(str.search('b')); // 1 index

console.log(str.substring(1,4)); // bcd 包含开始位置，不包括结束位置

console.log(str.substring(1)); //bcdef

console.log(str.charAt(4)); //e 具体位置的字符


const strs = 'abc-12-u-o'

console.log(strs.split('u'));

//eg1 :

var str1 = '12,87 76 -ddf e dd 89 ff76 9';

var re = /\d+/g ;

console.log(str1.match(re)); //[ '12', '87', '76', '89', '76', '9' ]


/* eg2 */
var str2 = 'Abcdefg';
// var re = new RegExp("a",'i');// i = ignore 就是不分大小写，如果没有的话就要区分大小写
var re1 = /a/i; //true
var re2= /a/;  //false
console.log(re1.test(str2),re2.test(str2));

/* eg3 */
var str3 = 'asdf 234 vdfafda 454';

var re3 = /\d/ ;   //digital数字的,匹配数字

console.log(str3.search(re3)); //5

/* eg 4*/
var str4 = 'sdf e4535 fdfda 454 454rtt 7';

var re4 = /\d/; // '4'
var re5 = /\d/g;  //global全球的
console.log(str4.match(re4));// [ '4', index: 5, input: 'sdf e4535 fdfda 454 454rtt 7' ]
console.log(str4.match(re5));// [ '4', '5', '3', '5', '4', '5', '4', '4', '5', '4', '7' ]

var re6 = /\d+/g; // + 表示/d 数字是任意长度
console.log(str4.match(re6)); //[ '4535', '454', '454', '7' ]

/* eg 5 */

var str5 = 'abcadef';

console.log(str5.replace('a','T')); // Tbcadef
console.log(str5.replace(/a/,'T')); // Tbcadef
console.log(str5.replace(/a/g,'T')); // TbcTdef

fgf 