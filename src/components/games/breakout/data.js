export default {
    ballObj: {
        x: 20,
        y: 120,
        dx: 3,
        dy: 3,
        rad: 12,
        speed: 5,
    },
    brickObj: {
        x: 0.5,
        y: 50,
        window: 800 / 10 - 1,
        height: 20,
        density: 2,
        colors: ["blue", "lightblue"],
    },
    player: {
        name: "Ron",
        lives: 5,
        score: 0,
        level: 1,
    },
    paddleProps: {
        height: 15,
        width: 150,
        x: 100,
        color: "orange",
    }
};