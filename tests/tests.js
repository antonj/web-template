require(['velocity-tracker'], function(VelocityTracker) {
  test( "Velocity Tracker", function() {
    var vt = new VelocityTracker();
    ok(vt, "Velocity tracker defined");
    
    var ev = {
      clientX : 0,
      clientY : 0,
      timeStamp : 1
    };
    vt.addMovement(ev);
    
    var ev2 = {
      clientX : 10,
      clientY : 20,
      timeStamp : 2
    };
    vt.addMovement(ev2);
    
    ok(vt.computeCurrentVelocity().x === 10, 'x speed should be 10 px per ms');
    ok(vt.computeCurrentVelocity().x === 10, 'x speed be the same as before');
    ok(vt.computeCurrentVelocity().y === 20, 'y speed should be 10 px per ms');
  });
});

