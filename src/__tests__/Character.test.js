import Bowerman from '../js/Bowerman';
import Swordsman from '../js/Swordsman';

test('should correctly create a Bowerman character', () => {
  const character = new Bowerman('Robin');
  expect(character.name).toBe('Robin');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('should level up a character correctly', () => {
  const character = new Swordsman('Arthur');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(48); // 40 * 1.2
  expect(character.defence).toBe(12); // 10 * 1.2
  expect(character.health).toBe(100);
});

test('should throw an error when trying to level up a dead character', () => {
  const character = new Swordsman('Arthur');
  character.health = 0;
  expect(() => character.levelUp()).toThrow("Can't level up a dead character");
});

test('should correctly apply damage to a character', () => {
  const character = new Bowerman('Robin');
  character.damage(50);
  expect(character.health).toBeCloseTo(62.5); // 100 - 50 * (1 - 0.25)
});
