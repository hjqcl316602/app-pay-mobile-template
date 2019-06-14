
/************************* 获取指定dom的宽高 ***************************/

const getOffset = (ele) => {
  //let dom = this.refs.qr
  return {
    width: ele.offsetWidth,
    height: ele.offsetHeight
  }
}

/************************* 页面的开锁 ***************************/

// 在一个可滑动列表页弹出一个全屏蒙层，蒙层固定，中间一块显示消息框，当用手滑动蒙层空白处时，滑动事件会穿透到底部列表页，导致列表页的滑动

const isLock = (bool = false) => {
  if (bool) {
    let cssStr = "overflow-y: hidden; height: 100%;";
    document.getElementsByTagName('html')[0].style.cssText = cssStr;
    document.body.style.cssText = cssStr;
  } else {
    let cssStr = "overflow-y: auto; height: auto;";
    document.getElementsByTagName('html')[0].style.cssText = cssStr;
    document.body.style.cssText = cssStr;
  }
  // 下面需要这两行代码，兼容不同浏览器
  document.body.scrollTop = 0;
  window.scroll(0, 0);
}

export default {
  getOffset,
  isLock
}