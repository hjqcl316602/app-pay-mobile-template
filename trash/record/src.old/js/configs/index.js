let configs = {
  'KEY_PRIVATE':'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAJ7sumXyGv3sNUvOtHrrW4tPjdBvRDHN+PSl7qH17iTZu7IgwnfvVwGawGsZsCwggk0T+ZefrAw4nUsoLGs0MoCeIgCA/BjYYFZzyPJXLCKP90FBglnTQRz1W6TXVJKCTm2hc5a495k3jLA78WgtWk6sdgAc3lqU4bPj/h30DO5tAgMBAAECgYBiRsPRrRCx+3LNySpkZMy8blqlDVlfbx7HsyDJePpmQVrHgWigoBnuvRLGaCFAeG37WiHbeHr9J7llM5ecR6/+SxnGTb3QB3fIlMKExDWPr13TfCWlT7rMheUYLMNWXQ9r0OsCBEpFegi9yifYy9Lj/9dtb8ZfL2O+nnMGt157QQJBAOnTpW3XRlgslC/UTkJifhwFNXU6xaKHyR77++g8Uc6XDiY1+BG0oh2/wN8BFHSU+N6FKWUsVBLdApZvUUjqFl0CQQCt/sSk0HT0MSfxc5rVzQ944cmi30+uuVaptc0kgzHpdFiwULwWcPwDZ/s9PlVNk75HgSMuTOgej6Yj1nZXR5dRAkBsRwG4F5QPiLUmYN3Mh+d1+kODAbA7Tz2nB3DjXetUC0cWEq/JIyhfNkiN++YJBmMoR+mfXCOiiI2GNA4kAaJRAkEAmHl1K5U9mCxne3C6U/fCQkVi5Kba9huWtVwK7J9HovSBL+lgGi5iuj1p7o5sRHJfQdwJz243z2hEyI0M4YlsMQJBAIneReh0GQzcSj3Yc3vbN3Hmfl7XfOmJ8s+vl9keheAUbcnfTo0yiRR+CcbTyH8pkhnq0Dfiise7uUHVgD/o53I=',
  
  'KEY_PUBLIC':'',
  
}

configs['IS_LOCAL'] = function(){
    return window.location.href.indexOf('localhost') > -1 ||　window.location.href.indexOf('192.168') > -1 || window.location.href.indexOf('127.0') > -1 
}();

configs['HTTP'] =  window.location.assign ;

configs['PROD_HTTP'] = configs['IS_LOCAL'] ? 'http://dev.bstchain.com/pay':'/pay';

configs['TIME_VALID'] = 10 * 60 * 1000 ;

configs['TIME_PAY_RESULT'] = 5 * 1000 ; // 多少时间重复请求，支付结果

export default  configs