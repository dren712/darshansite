"use client";

import React, { useEffect, useRef } from "react";

interface NodeItem {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  accent: boolean;
}

interface EdgeItem {
  from: string;
  to: string;
  type: "proof" | "state" | "action";
}

interface Packet {
  edgeIndex: number;
  progress: number;
  speed: number;
  color: string;
}

export const HeroVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouse = { x: -1000, y: -1000, isHovered: false };

    // Core provenance nodes
    const nodeDefs = [
      { id: "SOLANA", label: "SOLANA", sublabel: "CONSENSUS", color: "#14f195", accent: true, rx: 0.5, ry: 0.5 },
      { id: "PROOF", label: "PROOF", sublabel: "ED25519", color: "#00f0ff", accent: true, rx: 0.35, ry: 0.28 },
      { id: "AGENTS", label: "AGENTS", sublabel: "AUTONOMOUS", color: "#9945ff", accent: true, rx: 0.68, ry: 0.3 },
      { id: "AI", label: "AI", sublabel: "INFERENCE", color: "#818cf8", accent: false, rx: 0.82, ry: 0.52 },
      { id: "IDENTITY", label: "IDENTITY", sublabel: "SIWS / KEYPAIR", color: "#38bdf8", accent: false, rx: 0.2, ry: 0.48 },
      { id: "PAYMENTS", label: "PAYMENTS", sublabel: "x402 / SPL", color: "#14f195", accent: false, rx: 0.38, ry: 0.75 },
      { id: "MEMORY", label: "MEMORY", sublabel: "IRYS / ARWEAVE", color: "#c084fc", accent: false, rx: 0.7, ry: 0.72 },
    ];

    const edges: EdgeItem[] = [
      { from: "AI", to: "AGENTS", type: "action" },
      { from: "AGENTS", to: "MEMORY", type: "state" },
      { from: "IDENTITY", to: "PROOF", type: "proof" },
      { from: "AGENTS", to: "PROOF", type: "proof" },
      { from: "PROOF", to: "SOLANA", type: "proof" },
      { from: "PAYMENTS", to: "SOLANA", type: "action" },
      { from: "MEMORY", to: "SOLANA", type: "state" },
      { from: "IDENTITY", to: "PAYMENTS", type: "action" },
    ];

    let nodes: NodeItem[] = [];
    let packets: Packet[] = [];

    const resize = () => {
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect();
      const w = rect?.width || window.innerWidth;
      const h = rect?.height || 500;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = w;
      height = h;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Recompute node positions based on container aspect ratio
      nodes = nodeDefs.map((def) => {
        // Adjust for responsive screens
        const isMobile = width < 640;
        const cx = width * (isMobile ? 0.5 : 0.55);
        const cy = height * 0.5;
        const spreadX = isMobile ? width * 0.42 : Math.min(width * 0.38, 380);
        const spreadY = isMobile ? height * 0.38 : Math.min(height * 0.4, 220);

        const targetX = cx + (def.rx - 0.5) * 2 * spreadX;
        const targetY = cy + (def.ry - 0.5) * 2 * spreadY;

        return {
          id: def.id,
          label: def.label,
          sublabel: def.sublabel,
          x: targetX,
          y: targetY,
          baseX: targetX,
          baseY: targetY,
          vx: 0,
          vy: 0,
          radius: def.accent ? 5 : 4,
          color: def.color,
          accent: def.accent,
        };
      });

      // Initialize packets
      packets = edges.map((_, i) => ({
        edgeIndex: i,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
        color: i % 2 === 0 ? "#14f195" : "#00f0ff",
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Subtle dynamic displacement from mouse
      nodes.forEach((node) => {
        if (!prefersReducedMotion) {
          // Gentle organic float
          const floatOffset = Math.sin(time + node.baseX * 0.05) * 3;
          node.baseY += Math.sin(time * 0.5) * 0.02;

          if (mouse.isHovered) {
            const dx = mouse.x - node.x;
            const dy = mouse.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120 && dist > 0) {
              const force = (120 - dist) / 120;
              node.x -= (dx / dist) * force * 1.5;
              node.y -= (dy / dist) * force * 1.5;
            }
          }

          // Return to home base
          node.x += (node.baseX - node.x) * 0.04;
          node.y += (node.baseY + floatOffset - node.y) * 0.04;
        }
      });

      // Draw Edges
      edges.forEach((edge) => {
        const fromNode = nodes.find((n) => n.id === edge.from);
        const toNode = nodes.find((n) => n.id === edge.to);
        if (!fromNode || !toNode) return;

        ctx.beginPath();
        ctx.moveTo(fromNode.x, fromNode.y);
        ctx.lineTo(toNode.x, toNode.y);

        // Gradient edge
        const grad = ctx.createLinearGradient(fromNode.x, fromNode.y, toNode.x, toNode.y);
        grad.addColorStop(0, `${fromNode.color}22`);
        grad.addColorStop(0.5, "rgba(255, 255, 255, 0.12)");
        grad.addColorStop(1, `${toNode.color}22`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.setLineDash(edge.type === "proof" ? [4, 4] : []);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Draw Proof Packets
      if (!prefersReducedMotion) {
        packets.forEach((p) => {
          p.progress += p.speed;
          if (p.progress > 1) p.progress = 0;

          const edge = edges[p.edgeIndex];
          const fromNode = nodes.find((n) => n.id === edge.from);
          const toNode = nodes.find((n) => n.id === edge.to);
          if (!fromNode || !toNode) return;

          const px = fromNode.x + (toNode.x - fromNode.x) * p.progress;
          const py = fromNode.y + (toNode.y - fromNode.y) * p.progress;

          // Packet glow
          ctx.beginPath();
          ctx.arc(px, py, 2, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      // Draw Nodes
      nodes.forEach((node) => {
        const isNearMouse =
          mouse.isHovered &&
          Math.sqrt((mouse.x - node.x) ** 2 + (mouse.y - node.y) ** 2) < 50;

        // Outer Ring
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius + (isNearMouse ? 6 : 4), 0, Math.PI * 2);
        ctx.strokeStyle = isNearMouse ? node.color : `${node.color}44`;
        ctx.lineWidth = isNearMouse ? 1.5 : 1;
        ctx.stroke();

        // Node Center
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isNearMouse ? "#ffffff" : node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = isNearMouse ? 12 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Typography labels
        ctx.font = `600 11px ui-monospace, SFMono-Regular, Menlo, monospace`;
        ctx.fillStyle = isNearMouse ? "#ffffff" : "#d1d5db";
        ctx.fillText(node.label, node.x + 10, node.y - 2);

        ctx.font = `400 8.5px ui-monospace, SFMono-Regular, Menlo, monospace`;
        ctx.fillStyle = "#6b7280";
        ctx.fillText(node.sublabel, node.x + 10, node.y + 9);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      render();
    }

    return () => {
      window.removeEventListener("resize", resize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[460px] sm:min-h-[520px] pointer-events-auto">
      <canvas
        ref={canvasRef}
        className="w-full h-full block cursor-crosshair"
        aria-label="Interactive systems provenance graph showing AI, Autonomous Agents, Cryptographic Proofs, Identity, Memory, and Solana consensus"
      />
      {/* Visual coordinate indicator */}
      <div className="absolute bottom-3 right-4 hidden sm:flex items-center gap-2 font-mono text-[9px] text-text-tertiary tracking-widest uppercase pointer-events-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></span>
        PROVENANCE GRAPH · TOPOLOGY ACTIVE
      </div>
    </div>
  );
};
