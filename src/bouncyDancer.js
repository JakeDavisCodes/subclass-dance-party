var BouncyDancer = function (top, left, timeBetweenSteps) {
  // console.log('1');
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncy"></span>');

};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;



BouncyDancer.prototype.step = function () {

  // Dancer.prototype.step.call(this, this.timeBetweenSteps);

  // while (!!this) {


  // }
  this.setPosition(this.top, this.left);
};