export let bear = {
  foodLevel: 10,
  sleepLevel: 120,
  setHunger: function () {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return 'You got eaten!';
      }
    }, 1000);
  },

  setSleep: function () {
    const sleepInterval = setInterval(() => {
      this.sleepLevel--;
      if (this.sleepLevel <= 0) {
        clearInterval(sleepInterval);
        setTimeout(this.sleepyBear(), 30000);
        return "That's one sleepy bear.";
      }
    }, 1000);
  },

  sleepyBear: function () {
    this.sleepLevel = 120;
    this.setSleep();
  },

  pokeBear: function () {
    clearInterval(this.sleepyBear());
    this.sleepLevel = 60;
    this.setSleep();
    return 'RAAWWWWRRRR!!!!';
  },

  didYouGetEaten: function () {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },

  feed: function (amount) {
    let _this = this;
    return function (food) {
      _this.foodLevel += amount;
      return `The bear ate the ${food}! Food level goes up ${amount}!`;
    };
  },
};

bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));
