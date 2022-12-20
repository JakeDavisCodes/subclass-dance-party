$(document).ready(function() {
  window.dancers = [];
  window.snottyDancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    console.log(dancerMakerFunctionName);

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction($('body').height() * Math.random(), $('body').width() * Math.random(), Math.random() * 700 + 100);

    $('.danceFloor').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.lineUp').on('click', function(event) {
    let increment = $('body').height() / window.dancers.length;
    for (let i = 0; i < window.dancers.length; i++) {
      dancers[i].setPosition(increment * i, 10);

    }

  });

  $('.kick').on('click', function(event) {
    $('.danceFloor').html('');
    window.dancers = [];
    window.snottyDancers = [];

  });
});
