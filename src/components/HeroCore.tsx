"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const BLUE = 0x3b82f6;
const GOLD = 0xc9a55c;

function getSize(container: HTMLElement) {
  const vv = window.visualViewport;
  return {
    width: container.clientWidth || vv?.width || window.innerWidth,
    height: container.clientHeight || vv?.height || window.innerHeight,
  };
}

export default function HeroCore() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const { width, height } = getSize(container);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const blueLight = new THREE.PointLight(BLUE, 2.5);
    blueLight.position.set(5, 3, 5);
    scene.add(blueLight);
    const goldLight = new THREE.PointLight(GOLD, 1.5);
    goldLight.position.set(-4, -2, 3);
    scene.add(goldLight);

    const scale = isMobile ? 0.75 : 1;
    const wheelGeo = new THREE.TorusGeometry(2.2 * scale, 0.08, 8, isMobile ? 32 : 48);
    const wheelMat = new THREE.MeshPhongMaterial({
      color: GOLD,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
      shininess: 120,
    });
    const wheel = new THREE.Mesh(wheelGeo, wheelMat);
    scene.add(wheel);

    const hubGeo = new THREE.TorusGeometry(0.6 * scale, 0.04, 6, 24);
    const hubMat = new THREE.MeshBasicMaterial({
      color: BLUE,
      transparent: true,
      opacity: 0.7,
    });
    const hub = new THREE.Mesh(hubGeo, hubMat);
    scene.add(hub);

    const bodyGeo = new THREE.SphereGeometry(1.4 * scale, isMobile ? 8 : 12, isMobile ? 6 : 8);
    bodyGeo.scale(2.2, 0.5, 0.9);
    const bodyMat = new THREE.MeshPhongMaterial({
      color: BLUE,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      shininess: 80,
    });
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.set(0, 0, -0.5);
    scene.add(body);

    const ringGeo = new THREE.TorusGeometry(3.2 * scale, 0.015, 8, isMobile ? 48 : 80);
    const ringMat = new THREE.MeshBasicMaterial({
      color: BLUE,
      transparent: true,
      opacity: 0.15,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    scene.add(ring1);
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring2.rotation.x = Math.PI / 2;
    scene.add(ring2);

    camera.position.z = isMobile ? 10 : 8;

    let mouseX = 0;
    let mouseY = 0;

    const setPointer = (clientX: number, clientY: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      mouseX = clientX / w - 0.5;
      mouseY = clientY / h - 0.5;
    };

    const onMove = (e: MouseEvent) => setPointer(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) setPointer(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    let raf = 0;
    const animate = () => {
      raf = requestAnimationFrame(animate);

      wheel.rotation.z += 0.012;
      hub.rotation.z -= 0.02;
      body.rotation.y += 0.003;
      ring1.rotation.z += 0.008;
      ring2.rotation.y += 0.006;

      const targetX = mouseX * (isMobile ? 1 : 1.5);
      const targetY = -mouseY * (isMobile ? 0.8 : 1.2);
      wheel.position.x += (targetX - wheel.position.x) * 0.04;
      wheel.position.y += (targetY - wheel.position.y) * 0.04;
      body.position.x = wheel.position.x * 0.3;
      body.position.y = wheel.position.y * 0.3;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const { width: w, height: h } = getSize(container);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    window.visualViewport?.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      window.visualViewport?.removeEventListener("resize", onResize);
      renderer.dispose();
      wheelGeo.dispose();
      wheelMat.dispose();
      hubGeo.dispose();
      hubMat.dispose();
      bodyGeo.dispose();
      bodyMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
    />
  );
}
