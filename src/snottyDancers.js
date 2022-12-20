var SnottyDancer = function (top, left, timeBetweenSteps) {
  // console.log('1');
  Dancer.call(this, top, left, timeBetweenSteps / 40);
  this.rotation = 0;
  this.top = top;
  this.left = left;
  this.timeBetweenSteps;
  this.speed = timeBetweenSteps / 20;
  this.$node = $('<span class="snotty"></span>');

};

SnottyDancer.prototype = Object.create(Dancer.prototype);
SnottyDancer.prototype.constructor = SnottyDancer;

SnottyDancer.prototype.step = function () {

  Dancer.prototype.step.call(this);

  let sibling = this.findClosestSibling();
  if (sibling === undefined) {
    return;
  }

  // let angle = Math.atan(this.top - sibling.top, this.left - sibling.left);

  // this.top += Math.sin(angle) * this.speed;
  // this.left += Math.cos(angle) * this.speed;

  // angle = 180 / Math.PI;
  // console.log(Math.sin(angle));

  this.top += (sibling.top - this.top) / this.speed;
  this.left += (sibling.left - this.left) / this.speed;

  this.setPosition(this.top, this.left);
};

SnottyDancer.prototype.findClosestSibling = function () {
  var closest, closestDist;
  if (window.dancers.length < 1) {
    return undefined;
  }
  for (let i = 0; i < window.dancers.length; i ++) {
    if (window.dancers[i] instanceof SnottyDancer || window.dancers[i] instanceof BlinkyDancer) {
      continue;
    }
    let topDist = Math.abs(this.top - window.dancers[i].top);
    let leftDist = Math.abs(this.left - window.dancers[i].left);
    let dist = Math.floor(Math.pow((Math.pow(topDist, 2) + Math.pow(leftDist, 2)), 0.5));

    if (!closest && !closestDist) {
      closest = window.dancers[i];
      closestDist = dist;
    } else if (dist < closestDist) {
      closestDist = dist;
      closest = window.dancers[i];
    }

  }

  return closest;

};