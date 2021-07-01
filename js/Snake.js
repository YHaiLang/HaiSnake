//蛇类
function Snake() {
    //初始化身体
    this.body = [
        {row:3,col:5},
        {row:3,col:4},
        {row:3,col:3},
        {row:3,col:2}
    ]
    this.direction = 'R';
}

//蛇的渲染
Snake.prototype.render = function() {
    //蛇头渲染
    game.setColor(this.body[0].row,this.body[0].col,'pink');
    //蛇身体渲染
    for(var i=1;i<this.body.length;i++) {
        game.setColor(this.body[i].row,this.body[i].col,'cyan');
    }
}


//蛇的运动
Snake.prototype.update = function() {
    //蛇不同方向的运动
    switch (this.direction) {
        case 'R':
            this.body.unshift({row:this.body[0].row,col:this.body[0].col + 1});
            break;
        case 'D':
            this.body.unshift({row:this.body[0].row + 1,col:this.body[0].col});
            break;
        case 'L':
            this.body.unshift({row:this.body[0].row,col:this.body[0].col - 1});
            break;
        case 'U':
            this.body.unshift({row:this.body[0].row - 1,col:this.body[0].col});
            break;
    }
    //末尾删除
    this.body.pop();
}