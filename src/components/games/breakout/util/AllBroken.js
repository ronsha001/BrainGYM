import data from "../data";
export default function AllBroken(bricks, player, canvas, ballObj, paddleProps) {
    let { brickObj } = data;
    let total = 0;
    for (let i = 0; i < bricks.length; i++) {
        if (bricks[i].broke === true) {
            total++;
        }
    }
    if (total === bricks.length) {
        
        player.level++;
        paddleProps.x = 40;
        ballObj.y = canvas.height - 20;
        ballObj.x = 50;
        ballObj.dx += 1;
        ballObj.dy += 1;
        ballObj.speed += 1;
        brickObj.y = 50;
    }

}