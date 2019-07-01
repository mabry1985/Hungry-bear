import { bear } from './../src/game.js';

describe('HungryBear', function () {
  let fuzzy = bear;

  beforeEach(function () {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.sleepLevel = 120;
    fuzzy.name = 'Fuzzy';
    fuzzy.setHunger();
    fuzzy.setSleep();
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function () {
    expect(fuzzy.name).toEqual('Fuzzy');
    expect(fuzzy.foodLevel).toEqual(10);
    expect(fuzzy.sleepLevel).toEqual(120);
  });

  it('should have a food level of 7 after 3001 milliseconds', function () {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function () {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function () {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should return that the bear ate blueberries and the food level should go up 5', function () {
    expect(fuzzy.eatSmall('blueberries')).toEqual
    ('The bear ate the blueberries! Food level goes up 5!');
    expect(fuzzy.foodLevel).toEqual(15);
  });

  it('should have a sleep level of 117 after 3001 milliseconds', function () {
    jasmine.clock().tick(3001);
    expect(fuzzy.sleepLevel).toEqual(117);
  });

  it('should reset sleep level to 120 when sleep level is at 0', function () {
    jasmine.clock().tick(120000);
    expect(fuzzy.sleepLevel).toEqual(120);
  });

  it('should reset sleep level to 60 when sleep level is at 0 and bear is poked', function () {
    jasmine.clock().tick(120000);
    fuzzy.pokeBear();
    expect(fuzzy.sleepLevel).toEqual(60);
  });
});
