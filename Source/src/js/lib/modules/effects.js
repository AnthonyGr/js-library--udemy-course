import $ from "../core";

$.prototype.animateOverTime = function (duration, callback, final) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complaction = Math.min(timeElapsed / duration, 1);

    callback(complaction);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof final === "function") {
        final();
      }
    }
  }

  return _animateOverTime;
};

$.prototype.fadeIn = function (duration, display, final) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || "block";

    const _fadeIn = (complaction) => {
      this[i].style.opacity = complaction;
    };

    const ani = this.animateOverTime(duration, _fadeIn, final);
    requestAnimationFrame(ani);
  }

  return this;
};

$.prototype.fadeOut = function (duration, final) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = (complaction) => {
      this[i].style.opacity = 1 - complaction;
      if (complaction === 1) {
        this[i].style.display = "none";
      }
    };

    const ani = this.animateOverTime(duration, _fadeOut, final);
    requestAnimationFrame(ani);
  }

  return this;
};

$.prototype.fadeToggle = function (duration, display, final) {
  for (let i = 0; i < this.length; i++) {
    if (window.getComputedStyle(this[i]).display === "none") {
      this[i].style.display = display || "block";
      const _fadeIn = (complaction) => {
        this[i].style.opacity = complaction;
      };
      const ani = this.animateOverTime(duration, _fadeIn, final);
      requestAnimationFrame(ani);
    } else {
      const _fadeOut = (complaction) => {
        this[i].style.opacity = 1 - complaction;
        if (complaction === 1) {
          this[i].style.display = "none";
        }
      };

      const ani = this.animateOverTime(duration, _fadeOut, final);
      requestAnimationFrame(ani);
    }
  }

  return this;
};
