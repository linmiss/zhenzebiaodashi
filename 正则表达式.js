/**
 * Created by luyunstaff021 on 17-2-22.
 */

const str = 'abcdef';

console.log(str.search('b')); // 1 index

console.log(str.substring(1, 4)); // bcd 包含开始位置，不包括结束位置

console.log(str.substring(1)); //bcdef

console.log(str.charAt(4)); //e 具体位置的字符


const strs = 'abc-12-u-o'

console.log(strs.split('u'));

//eg1 :

var str1 = '12,87 76 -ddf e dd 89 ff76 9';

var re = /\d+/g;

console.log(str1.match(re)); //[ '12', '87', '76', '89', '76', '9' ]


/* eg2 */
var str2 = 'Abcdefg';
// var re = new RegExp("a",'i');// i = ignore 就是不分大小写，如果没有的话就要区分大小写
var re1 = /a/i; //true
var re2 = /a/; //false
console.log(re1.test(str2), re2.test(str2));

/* eg3 */
var str3 = 'asdf 234 vdfafda 454';

var re3 = /\d/; //digital数字的,匹配数字

console.log(str3.search(re3)); //5

/* eg 4*/
var str4 = 'sdf e4535 fdfda 454 454rtt 7';

var re4 = /\d/; // '4'
var re5 = /\d/g; //global全球的
console.log(str4.match(re4)); // [ '4', index: 5, input: 'sdf e4535 fdfda 454 454rtt 7' ]
console.log(str4.match(re5)); // [ '4', '5', '3', '5', '4', '5', '4', '4', '5', '4', '7' ]

var re6 = /\d+/g; //    + 表示/d 数字是任意长度
console.log(str4.match(re6)); //[ '4535', '454', '454', '7' ]

/* eg 5 */

var str5 = 'abcadef';

console.log(str5.replace('a', 'T')); // Tbcadef
console.log(str5.replace(/a/, 'T')); // Tbcadef
console.log(str5.replace(/a/g, 'T')); // TbcTde
console.log(str5.replace(/a|c/g, 'E')); //EbEEdef | 的意思就是“和”

// eg 6

var str6 = '1a2 abc ee 1c2';
var re7 = /1[abc]2/g; // [] : 的意思 1a2或者1b2或者1c2
//  [0-9] :0到9 [a-z]:a到z的所有字母
// [0-9a-z] :
// [^a] : 除了a以外的所有的东西
// [^0-9a-zA-Z] : 除了0到9字母以外的所有的
console.log(str6.match(re7)); //[ '1a2', '1c2' ]

//eg 7

var str7 = '<dfdfaaffdsft554t.....>fdafa'
var re8 = /<.+>/g //. 表示所有的东西,任意字符(英文，数字等)
console.log(str7.replace(re8, '***')); // ***fdafa

/*
    \d digital
    \D [^0-9] 非数字

    \w word [a-z0-9_] 包括数字、字母、下划线
    \W [^a-z0-9_] 除了数字 字母 下划线 以外的所有

    \s space 空白
    \S 除了空白以外的
      { n , m } 最少 n次，最多 m 次。
      { n ,  } 最少 n次，最多 不限。
      {   , m } 最少 不限，最多 m 次。
      { n }  正好n次
       ' + ' == {1,}
       ' * ' == {0,} //不建议使用
        /^ $/  ^ $ ： 表示行首 行尾

        \b  匹配单词边界

 */

//eg 8
var str8 = '  fdfa  fd afa fdafaa ffrgfg ';
console.log(str8.replace(/\s+/g, '*')); //*fdfa*fd*afa*fdafaa*ffrgfg*

//eg 9
var str9 = '我的qq是：111122336 , a16你的是 1234567？';
var re = /[1-9]\d{4,10}/g;

console.log(str9.match(re)); //[ '111122336', '1234567' ]


/*

邮箱的校验

 */