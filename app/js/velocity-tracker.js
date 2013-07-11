define(['log'], function (log) {
  function VelocityTracker() {
    this.move_x = 0;
    this.move_y = 0;
    this.dx = 0;
    this.dy = 0;
    this.dt = 0;
  };

  VelocityTracker.prototype = {
    addMovement : function (ev) {
      this.dx = ev.clientX - this.move_x;
      this.dy = ev.clientY - this.move_y;

      this.move_x = ev.clientX;
      this.move_y = ev.clientY;

      var now = ev.timeStamp || (new Date()).getTime();
      this.dt = now - this.timestamp;
      this.timestamp = now;
    },

    computeCurrentVelocity : function () {
      if (this.dt > 0) {
        return { x : this.dx / this.dt,
                 y : this.dy / this.dt
               };
      }
      return { x : 0, y : 0 };
    }
  };

  return VelocityTracker;
});
