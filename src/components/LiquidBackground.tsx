"use client";

import { useEffect, useRef } from "react";

const VERT = `
  attribute vec2 position;
  varying vec2 v_texCoord;
  void main() {
    v_texCoord = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const FRAG = `
  precision highp float;
  uniform float u_time;
  uniform vec2 u_pointer;
  varying vec2 v_texCoord;

  void main() {
    vec2 uv = v_texCoord;
    vec2 mouse = u_pointer;

    float color = 0.0;
    vec2 p = uv * 3.0;

    for (float i = 1.0; i < 6.0; i++) {
      p.x += 0.3 / i * sin(i * 3.0 * p.y + u_time * 0.1 + mouse.x * 2.0) + 1.0;
      p.y += 0.3 / i * sin(i * 3.0 * p.x + u_time * 0.1 + mouse.y * 2.0) + 1.5;
    }

    color = 0.5 + 0.5 * sin(p.x + p.y);

    vec3 obsidian = vec3(0.07, 0.07, 0.08);
    vec3 cyan = vec3(0.0, 0.94, 1.0);
    vec3 gold = vec3(0.79, 0.65, 0.36);

    vec3 finalColor = mix(obsidian, cyan * 0.12, color);
    finalColor += pow(color, 8.0) * 0.14;
    finalColor += gold * pow(color, 12.0) * 0.1;

    float dist = distance(uv, mouse);
    float hotspot = smoothstep(0.35, 0.0, dist);
    finalColor += cyan * hotspot * 0.14;
    finalColor += gold * hotspot * hotspot * 0.06;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}

function getViewport() {
  const vv = window.visualViewport;
  return {
    width: vv?.width ?? window.innerWidth,
    height: vv?.height ?? window.innerHeight,
    offsetX: vv?.offsetLeft ?? 0,
    offsetY: vv?.offsetTop ?? 0,
  };
}

/** Map screen coords → 0–1 UV (WebGL: y=0 at bottom). */
function toPointerUV(clientX: number, clientY: number) {
  const { width, height, offsetX, offsetY } = getViewport();
  const x = (clientX - offsetX) / width;
  const y = 1.0 - (clientY - offsetY) / height;
  return {
    x: Math.min(1, Math.max(0, x)),
    y: Math.min(1, Math.max(0, y)),
  };
}

export default function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const program = gl.createProgram();
    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    if (!program || !vs || !fs) return;

    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLoc = gl.getUniformLocation(program, "u_time");
    const pointerLoc = gl.getUniformLocation(program, "u_pointer");

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    let targetX = 0.5;
    let targetY = 0.5;
    let smoothX = 0.5;
    let smoothY = 0.5;
    let touching = false;

    const setFromClient = (clientX: number, clientY: number) => {
      const uv = toPointerUV(clientX, clientY);
      targetX = uv.x;
      targetY = uv.y;
    };

    const onPointerMove = (e: PointerEvent) => {
      // Mouse: always track. Touch/stylus: track while finger is down.
      if (e.pointerType === "mouse" || touching) {
        setFromClient(e.clientX, e.clientY);
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      touching = true;
      setFromClient(e.clientX, e.clientY);
      smoothX = targetX;
      smoothY = targetY;
    };

    const onPointerUp = () => {
      touching = false;
    };

    const resize = () => {
      const { width, height } = getViewport();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();

    // Capture phase so touches on buttons/links still move the bg
    const opts: AddEventListenerOptions = { passive: true, capture: true };
    document.addEventListener("pointermove", onPointerMove, opts);
    document.addEventListener("pointerdown", onPointerDown, opts);
    document.addEventListener("pointerup", onPointerUp, opts);
    document.addEventListener("pointercancel", onPointerUp, opts);
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", resize);
    window.visualViewport?.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("scroll", resize);

    let raf = 0;
    const render = (time: number) => {
      const t = time * 0.001;

      // Gentle idle drift on touch devices when finger is lifted
      if (isTouchDevice && !touching) {
        targetX = 0.5 + 0.22 * Math.sin(t * 0.18);
        targetY = 0.5 + 0.18 * Math.cos(t * 0.14);
      }

      const speed = touching ? 0.28 : 0.1;
      smoothX += (targetX - smoothX) * speed;
      smoothY += (targetY - smoothY) * speed;

      gl.uniform1f(timeLoc, t);
      gl.uniform2f(pointerLoc, smoothX, smoothY);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove", onPointerMove, opts);
      document.removeEventListener("pointerdown", onPointerDown, opts);
      document.removeEventListener("pointerup", onPointerUp, opts);
      document.removeEventListener("pointercancel", onPointerUp, opts);
      window.removeEventListener("resize", resize);
      window.removeEventListener("orientationchange", resize);
      window.visualViewport?.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("scroll", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      style={{ width: "100%", height: "100dvh" }}
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
