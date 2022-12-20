var CircleDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="wacky"></span>');
  this.color = 'cyan';
  this.top = top;
  this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
};

CircleDancer.prototype = Object.create(Dancer.prototype);
CircleDancer.prototype.constructor = CircleDancer;


CircleDancer.prototype.step = function () {
  Dancer.prototype.step.call(this, this.timeBetweenSteps);
  // var random;
  // random = Math.floor(Math.random() * 8);
  // console.log(timeBetweenSteps);


  // if (random === 0) {
  //   this.top += 10;
  // } else if (random === 1) {
  //   this.top -= 10;
  // } else if (random === 2) {
  //   this.left += 10;
  // } else if (random === 3) {
  //   this.left -= 10;
  // } else if (random === 4) {
  //   this.left -= 10;
  //   this.top -= 10;
  // } else if (random === 5) {
  //   this.left -= 10;
  //   this.top += 10;
  // } else if (random === 6) {
  //   this.top += 10;
  //   this.left += 10;
  // } else if (random === 7) {
  //   this.top -= 10;
  //   this.left += 10;
  // }

  let topNegative = Math.floor(Math.random() * 2);
  let leftNegative = Math.floor(Math.random() * 2);

  if (topNegative === 1) {
    topNegative = -1;
  } else { topNegative = 1; }
  if (leftNegative === 1) {
    leftNegative = -1;
  } else { leftNegative = 1; }


  this.top += (topNegative * Math.floor(Math.random() * 30));
  this.left += (leftNegative * Math.floor(Math.random() * 30));

  this.$node.css({'border': + Math.floor(Math.random() * 30) + 'px solid cyan'});

  this.setPosition(this.top, this.left);
  // console.log(this.top);
};