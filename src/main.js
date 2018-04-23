import Enemy from './enemy';

// we maken een 'instantie' aan van de Class Enemy
const endBoss = new Enemy("The Dragon");


// vervolgens gaan we luisteren of de endBoss schreeuwt dat hij dood gaat
endBoss.addListener('death',() => console.log('endBoss is dood. Ik zou nu iets nieuws kunnen spawnen'));

// je mag zo vaak luisteren als je wil
endBoss.addListener('death',() => console.log('endBoss is dood. Laten we de HUD updaten'));

// nu gaan we net doen of we de endBoss 3x slaan
endBoss.getDamage(20);
endBoss.getDamage(10);
endBoss.getDamage(70);
