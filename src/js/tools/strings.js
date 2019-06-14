
import valids  from './valids'

/************************* 格式化钱 ***************************/

const strMoney = (value) => {

  let money = Number(value)
  if (Number.isNaN(money) || money < 0) return '0.00'

  let num = money > 9999 ? 0 : 2;
  return money ? (money / 100).toFixed(num) : '0.00';
}

/************************* 格式化时间 ***************************/

const strTime = value => {
  if (!valids.isType(value, 'Number')) return 0;
  const MINUTE = 60 * 1000;
  let minutes = Math.floor(value / MINUTE);
  let seconds = Math.floor((value - (minutes * MINUTE)) / 1000);
  //console.log(minutes,seconds)

  return (minutes === 0 && seconds === 0) ? '已过期' : ((minutes === 0) ? `${seconds}秒` : `${minutes}分 ${seconds}秒`);
}

/************************* 枚举支付类型 ***************************/
 
const strPayType = value => {
  return ['银行卡', '微信', '支付宝', '云闪付'][value - 1]
}


const encodeReserveRE = /[!'()*]/g;

const commaRE = /%2C/g;

const encodeReserveReplacer =  (c) => {
    return '%' + c.charCodeAt(0).toString(16);
};

/************************* 编码字符串 ***************************/

const encode =   (str) =>{
    return encodeURIComponent(str)
        .replace(encodeReserveRE, encodeReserveReplacer)
        .replace(commaRE, ',');
};


/************************* 解码字符串 ***************************/

const decode = decodeURIComponent;

/************************* 字符串转对象 ***************************/

const parseQuery = (query) =>{

    var res = {};

    query = query.trim().replace(/^(\?|#|&)/, '');

    if (!query) {
        return res
    }

    query.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        var key = decode(parts.shift());
        var val = parts.length > 0 ?
            decode(parts.join('=')) :
            null;

        if (res[key] === undefined) {
            res[key] = val;
        } else if (Array.isArray(res[key])) {
            res[key].push(val);
        } else {
            res[key] = [res[key], val];
        }
    });

    return res
}

/************************* 对象转字符串 ***************************/

const stringifyQuery = (obj) => {
    let decode = decodeURIComponent;
    var res = obj ? Object.keys(obj).map(function (key) {
        var val = obj[key];

        if (val === undefined) {
            return ''
        }

        if (val === null) {
            return encode(key)
        }

        if (Array.isArray(val)) {
            var result = [];
            val.forEach(function (val2) {
                if (val2 === undefined) {
                    return
                }
                if (val2 === null) {
                    result.push(encode(key));
                } else {
                    result.push(encode(key) + '=' + encode(val2));
                }
            });
            return result.join('&')
        }

        return encode(key) + '=' + encode(val)
    }).filter(function (x) {
        return x.length > 0;
    }).join('&') : null;
    return res ? ("?" + res) : ''
}

/************************* 对象转字符串，获取指定的key值 ***************************/

const query = (string) => {
    let object = parseQuery(string);
    
    return function(key){ 
        return object[key]
    }
}


export default {
  strMoney,
  strTime,
  strPayType,
  parseQuery,
  stringifyQuery,
  query,
  encode,
  decode
}