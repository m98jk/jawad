function jawad(n) {
  return n.split('').reverse().join('');
}
console.log(jawad('any string need to reverse'));

module.exports.jawad = jawad;
