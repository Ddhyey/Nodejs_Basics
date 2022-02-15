var counter1 = 0;
var onePublicMethod = function () {
    return 'you already called this function ' + (++counter1) + ' times';
};

var counter2 = 0;
var anotherPublicMethod = function () {
    return 'you already called this function ' + (++counter2) + ' times';
}

module.exports = {
    functionA: onePublicMethod,
    functionB: anotherPublicMethod
};

var Line = function (x1, y1, x2, y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
};

Line.prototype.length = function () {
    return Math.sqrt(
        Math.pow(Math.abs(this.x1 - this.x2), 2) +
        Math.pow(Math.abs(this.y1 - this.y2), 2)
    );
};

module.exports.create = function (x1, y1, x2, y2) {
    return new Line(x1, y1, x2, y2);
};