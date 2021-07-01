//中介类
function Game() {
    //行
    this.row = 20;
    //列
    this.col = 20;
    // 初始化
    this.init();
    //实例化蛇类,将new出的蛇类对象添加到属性上
    this.snake = new Snake();
    //执行定时器任务
    this.start();
    //事件监听
    this.bindEvent();
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
Game.prototype.bindEvent = function() {
    document.addEventListener('keydown',(e) => {
        switch (e.keyCode) {
            case 37:
                this.snake.direction = 'L';
                break;
            case 38:
                this.snake.direction = 'U';
                break;
            case 39:
                this.snake.direction = 'R';
                break;
            case 40:
                this.snake.direction = 'D';
                break;

        }
    },false)
}
Game.prototype.start = function() {
    this.timer = setInterval(function() {
        //这个游戏的渲染本质是 清屏--更新--渲染
        //清屏
        game.clear();
        //更新
        game.snake.update();
        //渲染
        game.snake.render();
    },1000)
}