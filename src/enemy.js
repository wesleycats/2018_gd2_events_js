import EventEmitter from './utils/eventemitter.utils';

class Enemy extends EventEmitter {

    speed = 10;
    health = 100;

    constructor(){
        super();
    }

    getDamage(damage = 5){
        this.health -= damage;
        if(this.health <= 0){
            this.emit('death');
        }
    }
}

export default Enemy;