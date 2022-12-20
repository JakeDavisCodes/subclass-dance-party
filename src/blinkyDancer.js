var BlinkyDancer = function (top, left, timeBetweenSteps) {
  // console.log('1');
  Dancer.call(this, top, left, timeBetweenSteps / 10);
  this.rotation = 0;
  this.top = top;
  this.left = left;
  this.timeBetweenSteps / 10;
  this.$node = $('<span class="spinny"></span>');
  // this.initRotation();

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;



BlinkyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);
  this.$node.css({'transform': 'rotate(' + this.rotation + 'deg)'});
  this.rotation += this.timeBetweenSteps / 10;
  this.setPosition(this.top, this.left);
};