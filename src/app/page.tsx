"use client"
import { useEffect, useRef } from "react";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) {
      throw new Error("objectがnull");
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("context取得失敗");
    }
    // 黒い長方形を描画する
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, ctx.canvas.width / 2, ctx.canvas.height / 2);
  }, []);

  return (
    <div>
      ほげ
      <canvas ref={canvasRef} width={600} height={450} />
    </div>
  );
}
