export default function Brick(level, bricks, canvas, brick){
    const amountOfBricksInLine = 5;
    brick.width = canvas.width / amountOfBricksInLine - 12;

    let newBricks = [];
    if(!bricks) {
        return [];
    }
    // if all the levels are filled
    if (bricks.length >= amountOfBricksInLine * level) {
        return;
    }

    // Brick Formation here
    for (let i = 0; i < amountOfBricksInLine * level; i++) {
        let newBrick = new singleBrick(
            brick.x + brick.width + 10,
            brick.y,
            brick.width,
            brick.height,
            brick.colors
        );
        newBricks.push(newBrick);
        // newBrick.draw();
        brick.x += brick.width + 10;
        if (brick.x + brick.width > canvas.width) {
            brick.x = 0.5;
            brick.y += brick.height + 10;
        }
    }
    return newBricks;


};

class singleBrick {
    constructor(x, y, w, h, c) {
        this.x = x - w;
        this.y = y;
        this.width = w;
        this.height = h;
        this.colors = c;
        this.broke = false;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.broke ? "rgb(1, 20, 73)" : this.colors[1];
        ctx.strokeStyle = this.broke ? "rgb(1, 20, 73)" : "rgb(1, 20, 73)";
        ctx.lineWidth = 5;
        ctx.fillStyle = this.broke ? "rgb(1, 20, 73)" : this.colors[1];
        ctx.showBlur = 0;
        ctx.shadowColor = "blue";
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.fill();
    }
}
 

