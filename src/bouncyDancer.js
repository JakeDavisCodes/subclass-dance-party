var BouncyDancer = function (top, left, timeBetweenSteps) {
  // console.log('1');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncy"></span>');
  this.speed = timeBetweenSteps / 20;
  this.timeBetweenSteps = 10;
  this.xDirection;
  this.yDirection;
  this.top = top;
  this.left = left;
  this.initDirection();

};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.initDirection = function () {
  let topNegative = Math.floor(Math.random() * 2);
  let leftNegative = Math.floor(Math.random() * 2);

  if (topNegative === 1) {
    this.xDirection = -1;
  } else { this.xDirection = 1; }
  if (leftNegative === 1) {
    this.yDirection = -1;
  } else { this.yDirection = 1; }

}

BouncyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this, this.timeBetweenSteps);

  /*
  if (right or left wall)
    yDirec *= -1
  if (top or bottom)
    xDirec *= -1

  top += yDirec * speed
  left += xDirec * speed
  */

  if (this.left > $('body').width() || this.left < 0) {
    this.xDirection *= -1;
  }
  if (this.top > $('body').height() || this.top < 0) {
    this.yDirection *= -1;
  }

  this.top += this.yDirection * this.speed;
  this.left += this.xDirection * this.speed;

  console.log(this.yDirection);


  this.setPosition(this.top, this.left);
};