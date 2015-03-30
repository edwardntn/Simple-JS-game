var j = 0;
var i = 0;

var vector = function (x1, y1, callback) {
    /* Проверяем жив ли наш персонаж */
    if (this.isAlive === false ){
        return callback (this.name + " can't move more, because our " + this.type + " is dead :(");
    }
    /* Проверяем не дошел ли наш персонаж до конца маршрута */
    if (x1 > 750 || y1 > 540){
        return callback("Sorry! You can't go! There no way!");
    }
    var path = {
        x: this.way[i].x,
        y: this.way[j].y
    };
    /* Вычисляем расстояние */
    var vectorLength = Math.floor(Math.sqrt(Math.pow((path.x - x1), 2) + Math.pow((path.y - y1), 2)));

    /* Вычисляем коэффициент */
    var k = 10 / (vectorLength / this.speed);

    /* Получаем текущие координаты нашего объекта зная координаты начала и конца пути и коэффициент */
    var x = Math.round(k * (path.x - x1) / 10 + x1);
    var y = Math.round(k * (path.y - y1) / 10 + y1);

    /* Вызываем функцию корректировки движения в соответствии с заданным маршрутом */
    this.lastPlace.x = compareX(x, this.way);
    this.lastPlace.y = compareY(y, this.way);


    function compareX(x, way) {
        if (x >= way[i].x) {
            x = way[i].x;
            i++;
            path.x = way[i].x;

        }
        return x;
    };

    function compareY(y, way) {

        if (y >= way[j].y) {
            y = way[j].y;
            j++;
            path.y = way[j].y;
        }
        return y;
    };


    return callback(null, this.lastPlace);

};

module.exports = vector;
