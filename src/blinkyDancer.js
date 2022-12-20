var BlinkyDancer = function (top, left, timeBetweenSteps) {
  // console.log('1');
  Dancer.call(this, top, left, timeBetweenSteps);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;



BlinkyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};