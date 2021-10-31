function Lock() {
  this.keys = [];
}
Lock.prototype.createKey = function () {
  var key = {};
  this.keys.push(key);
  return key;
};
Lock.prototype.check = function (key) {
  return this.keys.indexOf(key) !== -1;
};
Lock.prototype.expire = function (key) {
  this.keys.splice(this.keys.indexOf(key), 1);
};
