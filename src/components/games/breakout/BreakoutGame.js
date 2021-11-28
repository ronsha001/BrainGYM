import React, { useEffect, useRef } from "react";
import "./BreakoutGame.css";
import Navbar from "../../Nav";
import { BallMovement } from "./BallMovement";
import data from "./data";
import WallCollision from "./util/WallCollision";
import Paddle from "./Paddle";
import Brick from "./Brick";
import BrickCollision from "./util/BrickCollision";
import PaddleHit from "./util/PaddleHit";
import PlayerStats from "./PlayerStats";
import AllBroken from "./util/AllBroken";
import ResetBall from "./util/ResetBall";

let bricks = [];

let { ballObj, paddleProps, brickObj, player } = data;

let ctx = 0;
export default function BreakOutGame() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      ctx =
        window.location.href != "http://localhost:3000/breakout"
          ? null
          : canvas.getContext("2d");

      if (window.location.href != "http://localhost:3000/breakout") {
        player.lives = 5;
        player.level = 0;
        player.score = 0;
        paddleProps.x = 0;
        ResetBall(ballObj, canvas, paddleProps);
        bricks.length = 0;
      }

      if (ctx != null) {

        paddleProps.y = canvas.height - 30;
        // Assign Bricks
        let newBrickSet = Brick(player.level, bricks, canvas, brickObj);

        if (newBrickSet && newBrickSet.length > 0) {
          bricks = newBrickSet;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Display PlayerStats
        PlayerStats(ctx, player, canvas);
        // Display Bricks

        if (player.lives === 0) {
          playerIsDead();
        }
        function playerIsDead() {
          alert("Game Over! Press ok to restart ");
          player.lives = 5;
          player.level = 0;
          player.score = 0;
          paddleProps.x = 0;
          ResetBall(ballObj, canvas, paddleProps);
          bricks.length = 0;
        }
        bricks.map((brick) => {
          return brick.draw(ctx);
        });
        // Handle Ball Movement
        BallMovement(ctx, ballObj);

        // Check all broken
        AllBroken(bricks, player, canvas, ballObj, paddleProps);

        // Ball and Wall Collision
        WallCollision(ballObj, canvas, player, paddleProps);

        // Brick Collision
        let collision;

        for (let i = 0; i < bricks.length; i++) {
          collision = BrickCollision(ballObj, bricks[i]);

          if (collision.hit && !bricks[i].broke) {
            if (collision.axis === "X") {
              ballObj.dx *= -1;
              bricks[i].broke = true;
            } else if (collision.axis === "Y") {
              ballObj.dy *= -1;
              bricks[i].broke = true;
            }
            player.score += 10;
          }
        }

        Paddle(ctx, canvas, paddleProps);
        // Paddle + Ball Collision
        PaddleHit(ballObj, paddleProps);

        requestAnimationFrame(render);
      }
    };
    render();
  }, []);

  return (
    <>
      <Navbar></Navbar>

      <div className="breakout-game-content">
        <canvas
          ref={canvasRef}
          className="breakout-canvas"
          onMouseMove={(event) => {
            paddleProps.x = event.clientX - paddleProps.width / 2;
          }}
          height="500px"
          width={window.innerWidth}
        />
      </div>
    </>
  );
}
