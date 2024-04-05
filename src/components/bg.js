"use client";

import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import bgData from "./bg.json";

export default function BG() {
  const { u_intensity, u_colors, u_speed, u_scale, u_noise, u_noise_color } =
    bgData.uniforms;

  const TextureMesh = () => {
    const mesh = useRef(null);
    useFrame((state) => {
      const { clock, mouse } = state;
      if (mesh.current) {
        mesh.current.material.uniforms.u_mouse.value = [
          mouse.x / 2 + 0.5,
          mouse.y / 2 + 0.5,
        ];
        mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
      }
    });

    return React.createElement(
      "mesh",
      {
        ref: mesh,
        position: [0, 0, 0],
        scale: 3,
        rotation: [-0.75, 0.25, -0.25],
      },
      React.createElement("planeGeometry", { args: [3, 1, 2048] }),
      React.createElement("shaderMaterial", {
        fragmentShader: bgData.fragmentShader,
        vertexShader: bgData.vertexShader,

        uniforms: {
          u_intensity: { value: u_intensity },
          u_colors: {
            value: u_colors.map((colors) => new THREE.Vector4(...colors)),
          },
          u_speed: { value: u_speed },
          u_scale: { value: u_scale },
          u_noise: { value: u_noise },
          u_noise_color: { value: u_noise_color },
          u_time: { value: 0 },
          u_mouse: { value: [0, 0] },
          u_resolution: { value: [100, 100] },
        },
        wireframe: false,
        wireframeLinewidth: 0,
        dithering: false,
        flatShading: true,
        doubleSided: true,
        glslVersion: "100",
      })
    );
  };

  const texture = React.createElement(
    Canvas,
    {
      gl: {
        preserveDrawingBuffer: true,
        premultipliedAlpha: false,
        alpha: true,
        transparent: true,
        antialias: true,
        precision: "highp",
        powerPreference: "high-performance",
      },
      resize: {
        debounce: 0,
        scroll: false,
        offsetSize: true,
      },
      dpr: 1,
      camera: {
        fov: 75,
        near: 0.1,
        far: 1000,
        position: [0, 0, 2],
      },
      style: { height: "100%", width: "100%" },
    },
    React.createElement(TextureMesh)
  );

  return <div className="h-svh w-svw fixed top-0 left-0 z-[-1]">{texture}</div>;
}
