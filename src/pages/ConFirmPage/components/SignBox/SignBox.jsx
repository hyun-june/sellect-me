import { useEffect, useRef, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import "./SignBox.css";

const SignBox = ({ id, saveSign, title }) => {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      setCtx(context);
      signText(context);
    }

const preventTouchScroll = (e) => {
      if (e.cancelable) e.preventDefault();
    };
    canvas.addEventListener("touchmove", preventTouchScroll, { passive: false });

    return () => {
      canvas.removeEventListener("touchmove", preventTouchScroll);
    };
  }, []);

  const signText = (context) => {
    context.font = "4em Arial";
    context.fillStyle = "gray";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText("Sign", 145, 75);
  };

  // const canvasEventListener = (event, type) => {
  //   if (!ctx) return;

  //   const canvas = canvasRef.current;
  //   const canvasRect = canvas.getBoundingClientRect();
  //   const x =
  //     (event.clientX - canvasRect.left) * (canvas.width / canvasRect.width);
  //   const y =
  //     (event.clientY - canvasRect.top) * (canvas.height / canvasRect.height);

  //   if (type === "down") {
  //     setIsDrawing(true);
  //     setHasDrawn(false);
  //     ctx.beginPath();
  //     ctx.moveTo(x, y);
  //   } else if (type === "move" && isDrawing) {
  //     setHasDrawn(true);
  //     ctx.lineTo(x, y);
  //     ctx.stroke();
  //   } else if (type === "up" || type === "leave") {
  //     setIsDrawing(false);
  //     if (hasDrawn) {
  //       const dataUrl = canvas.toDataURL();
  //       saveSign(dataUrl);
  //     }
  //   }
  // };
  const canvasEventListener = (event, type) => {
  if (!ctx) return;

  const canvas = canvasRef.current;
  const canvasRect = canvas.getBoundingClientRect();

  let x, y;

   if (event.touches && event.touches.length > 0) {
    // 터치 중 (터치 중일 때)
    x = (event.touches[0].clientX - canvasRect.left) * (canvas.width / canvasRect.width);
    y = (event.touches[0].clientY - canvasRect.top) * (canvas.height / canvasRect.height);
  } else if (event.changedTouches && event.changedTouches.length > 0) {
    // 터치 종료 시
    x = (event.changedTouches[0].clientX - canvasRect.left) * (canvas.width / canvasRect.width);
    y = (event.changedTouches[0].clientY - canvasRect.top) * (canvas.height / canvasRect.height);
  } else if (event.clientX && event.clientY) {
    // 마우스 이벤트
    x = (event.clientX - canvasRect.left) * (canvas.width / canvasRect.width);
    y = (event.clientY - canvasRect.top) * (canvas.height / canvasRect.height);
  } else {
    return; // 유효하지 않은 이벤트
  }

  if (type === "down") {
    setIsDrawing(true);
    setHasDrawn(false);
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else if (type === "move" && isDrawing) {
    setHasDrawn(true);
    ctx.lineTo(x, y);
    ctx.stroke();
  } else if (type === "up" || type === "leave") {
    setIsDrawing(false);
    if (hasDrawn) {
      const dataUrl = canvas.toDataURL();
      saveSign(dataUrl);
    }
  }

  if (event.cancelable) event.preventDefault();
};

  const deleteSign = () => {
    const canvas = canvasRef.current;
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      signText(ctx);
      saveSign(null);
    }
  };

  return (
    <div className="sign_container">
      <span className="sign_title">{title}</span>

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
        }}   onTouchStart={(e) => canvasEventListener(e, "down")}
  onTouchMove={(e) => canvasEventListener(e, "move")}
  onTouchEnd={(e) => canvasEventListener(e, "up")}
      ></canvas>
      <button onClick={deleteSign}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default SignBox;
