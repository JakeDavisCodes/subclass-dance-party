var Dancer = function (top, left, timeBetweenSteps) {
  // this = Object.create(Dancer.prototype)
  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // console.log(this);
  console.log(this.timeBetweenSteps);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};