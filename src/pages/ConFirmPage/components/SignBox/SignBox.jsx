"use client";
import { useEffect, useRef, useState } from "react";

import { FaRegTrashAlt } from "react-icons/fa";

import "./SignBox.css";

const SignBox = ({ id, saveSign, title }) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      setCtx(context);
      signText(context);
    }
  }, []);

  const signText = (context) => {
    context.font = "4em Arial";
    context.fillStyle = "gray";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Sign", 145, 75);
  };

  const canvasEventListener = (event, type) => {
    if (!ctx) return;

    const canvas = canvasRef.current;
    const canvasRect = canvas.getBoundingClientRect();
    const x =
      (event.clientX - canvasRect.left) * (canvas.width / canvasRect.width);
    const y =
      (event.clientY - canvasRect.top) * (canvas.height / canvasRect.height);

    if (type === "down") {
      setIsDrawing(true);
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else if (type === "move" && isDrawing) {
      ctx.lineTo(x, y);
      ctx.stroke();
    } else if (type === "up" || type === "leave") {
      setIsDrawing(false);
      const dataUrl = canvas.toDataURL();
      saveSign(dataUrl);
    }
  };

  const deleteSign = () => {
    const canvas = canvasRef.current;
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      signText(ctx);
    }
  };

  return (
    <div className="sign_container">
      <div className="sign_title">{title}</div>

      <canvas
        id={id}
        ref={canvasRef}
        onMouseDown={(event) => {
          canvasEventListener(event, "down");
        }}
        onMouseMove={(event) => {
          canvasEventListener(event, "move");
        }}
        onMouseLeave={(event) => {
          canvasEventListener(event, "leave");
        }}
        onMouseUp={(event) => {
          canvasEventListener(event, "up");
        }}
      ></canvas>
      <button onClick={deleteSign}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default SignBox;
