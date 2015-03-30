var Player = require('./player');

var Terrans = function (name) {

    this.name = name;
    this.type = "human";
    this.isAlive = true;
    this.way = [{x: 200, y: 300}, {x: 405, y: 407}, {x: 790, y: 590}];
    this.speed = 50;
    this.lastPlace = {
        x: 10,
        y: 15
    };
    this.canRun = true;
    this.health = 100;
    this.power = 30;

    /*Нанесение ударов противнику, вычитая величину силы игрока(power)
     из количества здоровья противника(health)*/
    this.fight = function (enemy) {

        /* Проверяем жив ли наш персонаж */
        if(this.isAlive === false){
            return this.name + " can't fight because he is dead :( ";
        }

        /* Проверяем расстояние между персонажами если противник в пределах досягаемости - наносим удар */
        var distance = Math.floor(Math.sqrt(Math.pow((enemy.lastPlace.x - this.lastPlace.x), 2) + Math.pow((enemy.lastPlace.y - this.lastPlace.y), 2)));
        if (distance <= 20) {
            if (enemy.health > this.power) {
                enemy.health = enemy.health - this.power;

            } else if (enemy.health <= this.power) {

                enemy.isAlive = false;
                return enemy.name + " can't fight and can't move because he is dead :( ";

            }
            return enemy.name + " health left - " + enemy.health;
        } else {
            return "Enemy to far for fighting";
        }
    };
    return this;
};

Terrans.prototype = new Player();
Terrans.constructor = Terrans;

module.exports = Terrans;
