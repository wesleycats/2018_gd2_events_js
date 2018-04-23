import EventEmitter from './utils/eventemitter.utils';

class Enemy extends EventEmitter {

    speed = 10;
    health = 100;

    constructor(name = "NoName"){
        super();
        this.name = name;
    }

    getDamage(damage = 5){
        this.health -= damage;
        console.log(this.name + " has been hit for " + damage);
        if(this.health <= 0){
            this.emit('death');
        }
    }
}

export default Enemy;
