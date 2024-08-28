import Bowerman from './js/Bowerman';
import Swordsman from './js/Swordsman';
import Magician from './js/Magician';
import Daemon from './js/Daemon';
import Undead from './js/Undead';
import Zombie from './js/Zombie';

const characters = [
  new Bowerman('Robin'),
  new Swordsman('Arthur'),
  new Magician('Merlin'),
  new Daemon('Azazel'),
  new Undead('Ghoulish'),
  new Zombie('Zed')
];

characters.forEach((char) => {
  console.log(`${char.name} (${char.type}): Level ${char.level}, Attack ${char.attack}, Defence ${char.defence}, Health ${char.health}`);
});
