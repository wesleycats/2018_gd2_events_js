import Enemy from './enemy';

console.log('main file working');

const endBoss = new Enemy();

endBoss.addListener('death',
                    () => console.log('ik zie dat de enemy dood is gegaan'));

endBoss.getDamage(20);
endBoss.getDamage(10);
endBoss.getDamage(70);
console.log(endBoss);