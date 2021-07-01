//中介类
function Game() {
    //行
    this.row = 20;
    //列
    this.col = 20;
    // 初始化
    this.init();
    //将new出的蛇类对象添加到属性上
    this.snake = new Snake();
}

Game.prototype.init = function() {
    //创建表格节点
    this.dom = document.createElement('table');

    var tr,td;

    //遍历行
    for(var i=0;i<this.row;i++) {
        tr = document.createElement('tr');
        //遍历列
        for(var j=0;j<this.col;j++) {
            td = document.createElement('td');
            tr.appendChild(td);
        }
        this.dom.appendChild(tr);
    }

    document.getElementById('app').appendChild(this.dom);
}

Game.prototype.setColor = function(row,col,color) {
    this.dom.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].style.background = color;
}

Game.prototype.clear = function() {
    for(var i=0;i<this.row;i++) {
        for(var j=0;j<this.col;j++) {
            this.dom.getElementsByTagName('tr')[i].getElementsByTagName('td')[j].style.background = 'white';
        }
    }
}

var timer = setInterval(function() {
    //这个游戏的渲染本质是 清屏--更新--渲染
    //清屏
    game.clear();
    //更新
    game.snake.update();
    //渲染
    game.snake.render();
},1000)