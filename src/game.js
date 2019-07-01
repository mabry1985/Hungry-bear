export let bear = {
  foodLevel: 20,
  sleepLevel: 120,
  moodLevel: 0,
  setHunger: function () {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return 'You got eaten!';
      }

      if (this.foodLevel === 25 || this.foodLevel === 50 || this.foodLevel === 75) {
        this.bearPoop();
      } else if (this.foodLevel === 100) {
        this.bearPuke();
      }

      if (this.foodLevel === 10) {
        this.bearMood();
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

  bearMood: function () {
    const moodInterval = setInterval(() => {
      this.moodLevel++;
      if (this.moodLevel === 120) {
        return 'You got eaten.';
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

  bearPoop: function () {
    return "That's one POOPY bear!!";
  },

  bearPuke: function () {
    this.foodLevel = 20;
    return 'BLAARRGGGHHHH!!!!!';
  },
};

bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));
