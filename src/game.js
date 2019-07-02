import $ from 'jquery';

export let bear = {
  foodLevel: 10,
  sleepLevel: 120,
  moodLevel: 0,
  setHunger: function () {
    const hungerInterval = setInterval(() => {
      this.foodMeter();
      this.sleepMeter();
      this.moodMeter();
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        console.log( 'You got eaten!');
      }

      if (this.foodLevel === 25 || this.foodLevel === 50 || this.foodLevel === 75) {
        this.bearPoop();
      } else if (this.foodLevel >= 100) {
        this.bearPuke();
      }

      if (this.foodLevel <= 10) {
        this.setMood();
      }
    }, 1000);
  },

  setSleep: function () {
    const sleepInterval = setInterval(() => {
      this.sleepLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(sleepInterval);
      }

      if (this.sleepLevel <= 0) {
        clearInterval(sleepInterval);
        setTimeout( () => {
          this.sleepyBear()
        }, 10000);
      }
    }, 1000);
  },

  setMood: function () {
    const moodInterval = setInterval(() => {
      this.moodLevel++;
      if (this.didYouGetEaten() == true) {
        clearInterval(moodInterval);
      }
    }, 1000);
  },

  sleepyBear: function () {
    this.sleepLevel = 120;
    this.setSleep();
    console.log("That's one sleepy bear.");
  },

  pokeBear: function () {
    clearTimeout(this.sleepyBear());
    this.sleepLevel = 60;
    this.setSleep();
    return 'RAAWWWWRRRR!!!!';
  },

  didYouGetEaten: function () {
    if (this.moodLevel >= 60 || this.foodLevel <= 0) {
      return true;
    } else {
      return false;
    }
  },

  feed: function (foodAmount, sleepAmount) {
    let _this = this;
    return function (food) {
      _this.foodLevel += foodAmount;
      _this.sleepLevel += sleepAmount;
      return `The bear ate the ${food}!`;
    };
  },

  bearPoop: function () {
    console.log("That's one POOPY bear!!");
  },

  bearPuke: function () {
    this.foodLevel = 20;
    console.log ('"BLAARRGGGHHHH!!!!!", Oh no, he threw up!');
  },
  //==============================================================
  //Vitals Meters ================================================

  foodMeter() {
    $('#food').html('<meter id="food-meter" min="0" max="100" low="33" high="66" optimum="80" value="' + this.foodLevel + '"></meter>')
    console.log("======================");
    console.log("food: " + this.foodLevel);
  },

  sleepMeter() {
    $('#sleep').html('<meter id="sleep-meter" min="0" max="120" low="33" high="66" optimum="80" value="' + this.sleepLevel + '"></meter>')
    console.log("sleep: " + this.sleepLevel);
  },

  moodMeter() {
    $('#mood').html('<meter id="mood-meter" min="0" max="60" low="35" high="15" optimum="20" value="' + this.moodLevel + '"></meter>')
    console.log("mood: " + this.moodLevel);
    console.log(this.didYouGetEaten());
  },
};

bear.eatBerry = bear.feed(5, -5);
bear.eatPizza = bear.feed(10, -10);
bear.eatCake = bear.feed(15, -20);
bear.eatYuck = bear.feed(-10, -50);
bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));