"use client";

import { Mesh, Program, Renderer, Triangle } from "ogl";
import { useEffect, useRef } from "react";

type LightRaysProps = {
  raysSpeed?: number;
  mouseInfluence?: number;
  className?: string;
};

const vertexShader = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  uniform float iTime;
  uniform vec2 iResolution;
  uniform vec2 rayPos;
  uniform vec2 rayDir;
  uniform float raysSpeed;
  uniform float mouseInfluence;
  uniform vec2 mousePos;

  float rayStrength(
    vec2 raySource,
    vec2 rayRefDirection,
    vec2 coord,
    float seedA,
    float seedB,
    float speed
  ) {
    vec2 sourceToCoord = coord - raySource;
    float cosAngle = dot(normalize(sourceToCoord), rayRefDirection);
    float distance = length(sourceToCoord);
    float maxDistance = iResolution.x * 2.0;
    float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
    float fadeFalloff = clamp((iResolution.x - distance) / iResolution.x, 0.5, 1.0);
    float baseStrength = clamp(
      (0.45 + 0.15 * sin(cosAngle * seedA + iTime * speed)) +
      (0.3 + 0.2 * cos(-cosAngle * seedB + iTime * speed)),
      0.0,
      1.0
    );

    return baseStrength * lengthFalloff * fadeFalloff * max(cosAngle, 0.0);
  }

  void main() {
    vec2 coord = vec2(gl_FragCoord.x, iResolution.y - gl_FragCoord.y);
    vec2 finalRayDir = rayDir;

    if (mouseInfluence > 0.0) {
      vec2 mouseDirection = normalize(mousePos * iResolution - rayPos);
      finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
    }

    float rayOne = rayStrength(rayPos, finalRayDir, coord, 36.2214, 21.11349, 1.5 * raysSpeed);
    float rayTwo = rayStrength(rayPos, finalRayDir, coord, 22.3991, 18.0234, 1.1 * raysSpeed);
    float brightness = 1.0 - (coord.y / iResolution.y);
    vec3 color = vec3(rayOne * 0.5 + rayTwo * 0.4);

    color.r *= 0.1 + brightness * 0.8;
    color.g *= 0.3 + brightness * 0.6;
    color.b *= 0.5 + brightness * 0.5;

    gl_FragColor = vec4(color, max(color.r, max(color.g, color.b)));
  }
`;

export default function LightRays({
  raysSpeed = 0.4,
  mouseInfluence = 0,
  className = "",
}: LightRaysProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      alpha: true,
      dpr: Math.min(window.devicePixelRatio, 2),
    });
    const { gl } = renderer;
    const canvas = gl.canvas;
    canvas.style.display = "block";
    canvas.style.height = "100%";
    canvas.style.width = "100%";
    container.appendChild(canvas);

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: [1, 1] },
      rayPos: { value: [0.5, 0] },
      rayDir: { value: [0, 1] },
      raysSpeed: { value: raysSpeed },
      mouseInfluence: { value: mouseInfluence },
      mousePos: { value: [0.5, 0.5] },
    };
    const mesh = new Mesh(gl, {
      geometry: new Triangle(gl),
      program: new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms,
        transparent: true,
      }),
    });

    const resize = () => {
      const { clientHeight, clientWidth } = container;
      renderer.dpr = Math.min(window.devicePixelRatio, 2);
      renderer.setSize(clientWidth, clientHeight);
      const width = clientWidth * renderer.dpr;
      const height = clientHeight * renderer.dpr;
      uniforms.iResolution.value = [width, height];
      uniforms.rayPos.value = [width * 0.5, -height * 0.2];
    };
    const render = (time = 0) => {
      uniforms.iTime.value = time * 0.001;
      renderer.render({ scene: mesh });
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frameId: number | undefined;
    const animate = (time: number) => {
      render(time);
      frameId = window.requestAnimationFrame(animate);
    };

    if (reducedMotion.matches) {
      render();
    } else {
      frameId = window.requestAnimationFrame(animate);
    }

    return () => {
      if (frameId !== undefined) window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mesh.program.remove();
      mesh.geometry.remove();
      gl.getExtension("WEBGL_lose_context")?.loseContext();
      canvas.remove();
    };
  }, [mouseInfluence, raysSpeed]);

  return <div ref={containerRef} aria-hidden="true" className={className} />;
}
