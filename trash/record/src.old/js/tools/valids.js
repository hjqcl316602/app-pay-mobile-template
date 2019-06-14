const isType = function getType(o, type) {
  return Object.prototype.toString.call(o) === `[object ${type}]`;
}

export default { 
  isType
}