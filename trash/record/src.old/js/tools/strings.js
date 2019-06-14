
import valids  from './valids'

const strMoney = (value) => {

  let money = Number(value)
  if (Number.isNaN(money) || money < 0) return '0.00'

  let num = money > 9999 ? 0 : 2;
  return money ? (money / 100).toFixed(num) : '0.00';
}

const strTime = value => {
  if (!valids.isType(value, 'Number')) return 0;
  const MINUTE = 60 * 1000;
  let minutes = Math.floor(value / MINUTE);
  let seconds = Math.floor((value - (minutes * MINUTE)) / 1000);
  //console.log(minutes,seconds)

  return (minutes === 0 && seconds === 0) ? '已过期' : ((minutes === 0) ? `${seconds}秒` : `${minutes}分 ${seconds}秒`);
}
// 支付类型
const strPayType = value => {
  return ['银行卡', '微信', '支付宝', '云闪付'][value - 1]
}

export default {
  strMoney,
  strTime,
  strPayType
}