import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Navigation, Monitor, Settings, Users, Info, X, 
  Compass, Shield, Activity, Eye, EyeOff, Radio, Cpu, Zap, Ship, BookOpen
} from 'lucide-react';
import { cn } from '../lib/utils';
import { terms } from '../data/terms';

// --- TYPES ---
interface BridgeHotspotData {
  ico: string;
  cat: string;
  name: string;
  txt: string;
  slug?: string;
}

const BRIDGE_HOTSPOTS: BridgeHotspotData[] = [
  {
    ico: '🖥️', cat: 'NAVIGATION', name: 'ECDIS', slug: 'ecdis',
    txt: 'Electronic Chart Display and Information System. A computer-based navigation system that complies with IMO regulations as an alternative to paper charts, providing real-time positioning and route monitoring.'
  },
  {
    ico: '📡', cat: 'SURVEILLANCE', name: 'Radar/ARPA', slug: 'radar',
    txt: 'Radio Detection and Ranging with Automatic Radar Plotting Aid. Used to detect other vessels, landmasses, and obstacles, providing range, bearing, and collision avoidance data.'
  },
  {
    ico: '🕹️', cat: 'CONTROL', name: 'Engine Telegraph', slug: 'engine-order-telegraph',
    txt: 'The primary control interface used by the officer on watch to communicate desired speed and direction to the engine room, typically featuring dual levers for twin-engine vessels.'
  },
  {
    ico: '🎡', cat: 'STEERING', name: 'Autopilot/Helm', slug: 'autopilot-pid-controller',
    txt: 'The steering control station. Features a manual helm for precise maneuvering and an autopilot system for maintaining a steady course during long passages.'
  },
  {
    ico: '📊', cat: 'MONITORING', name: 'Conning Display', slug: 'conning-display',
    txt: 'A centralized information hub showing critical navigation data such as heading, speed through water, depth, wind speed/direction, and engine RPM.'
  },
  {
    ico: '📻', cat: 'COMMUNICATION', name: 'GMDSS Station', slug: 'gmdss',
    txt: 'Global Maritime Distress and Safety System. An integrated communications suite using satellite and VHF/MF/HF radio to ensure ship-to-shore safety and distress alerting.'
  },
  {
    ico: '💺', cat: 'COMFORT', name: 'Pilot Chair', slug: 'pilot-chair',
    txt: 'Ergonomically designed seating for the officer on watch or pilot, providing a clear 360-degree view of the horizon and immediate access to all bridge consoles.'
  }
];

export const BridgeDiagram3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const hotspotsRef = useRef<THREE.Mesh[]>([]);
  const blinkingLedsRef = useRef<THREE.Mesh[]>([]);
  
  const [selectedHotspot, setSelectedHotspot] = useState<BridgeHotspotData | null>(null);
  const [isAutoRotate, setIsAutoRotate] = useState(false);
  const isAutoRotateRef = useRef(isAutoRotate);
  const [hoveredHotspot, setHoveredHotspot] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Handle Escape key to close modal
  useEffect(() => {
    isAutoRotateRef.current = isAutoRotate;
  }, [isAutoRotate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedHotspot) {
          setSelectedHotspot(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Reset refs for clean initialization (especially for StrictMode)
    hotspotsRef.current = [];
    blinkingLedsRef.current = [];

    // --- SCENE SETUP ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1c20);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.set(15, 12, 15);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minDistance = 5;
    controls.maxDistance = 40;
    controls.autoRotate = isAutoRotate;
    controls.autoRotateSpeed = 3.0; // Increased speed for better visibility
    controlsRef.current = controls;

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 0.8);
    mainLight.position.set(10, 20, 10);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const fillLight = new THREE.PointLight(0x4488ff, 0.5);
    fillLight.position.set(-10, 5, -10);
    scene.add(fillLight);

    // --- MATERIALS ---
    const mats = {
      console: new THREE.MeshStandardMaterial({ color: 0xbdc3c7, roughness: 0.5, metalness: 0.3 }),
      desk: new THREE.MeshStandardMaterial({ color: 0xdcdde1, roughness: 0.4, metalness: 0.2 }),
      screen: new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.1, metalness: 0.8, emissive: 0x112233 }),
      chair: new THREE.MeshStandardMaterial({ color: 0x3498db, roughness: 0.7, metalness: 0.1 }),
      floor: new THREE.MeshStandardMaterial({ color: 0xecf0f1, roughness: 0.9, metalness: 0.05 }),
      metal: new THREE.MeshStandardMaterial({ color: 0x95a5a6, roughness: 0.3, metalness: 0.8 }),
      hotspot: new THREE.MeshBasicMaterial({ color: 0x3498db, transparent: true, opacity: 0.6, depthWrite: false })
    };

    // --- GEOMETRY ---
    const bridgeGroup = new THREE.Group();
    scene.add(bridgeGroup);

    // Floor
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), mats.floor);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    bridgeGroup.add(floor);

    // Walls (Side and Back)
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xbdc3c7, roughness: 0.8 });
    
    // Back Wall
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(60, 20, 1), wallMat);
    backWall.position.set(0, 10, 25);
    bridgeGroup.add(backWall);

    // Left Wall
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(1, 20, 50), wallMat);
    leftWall.position.set(-30, 10, 0);
    bridgeGroup.add(leftWall);

    // Right Wall
    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(1, 20, 50), wallMat);
    rightWall.position.set(30, 10, 0);
    bridgeGroup.add(rightWall);

    // Front Bulkhead (Panoramic Window)
    const bulkheadGroup = new THREE.Group();
    bulkheadGroup.position.set(0, 10, -10);
    bridgeGroup.add(bulkheadGroup);

    // Top section
    const wallTop = new THREE.Mesh(new THREE.BoxGeometry(60, 6, 1), wallMat);
    wallTop.position.y = 7;
    bulkheadGroup.add(wallTop);

    // Bottom section
    const wallBot = new THREE.Mesh(new THREE.BoxGeometry(60, 4, 1), wallMat);
    wallBot.position.y = -8;
    bulkheadGroup.add(wallBot);

    // Side Pillars (Only at the very edges)
    const leftPillar = new THREE.Mesh(new THREE.BoxGeometry(2, 10, 1.2), wallMat);
    leftPillar.position.set(-29, 0, 0);
    bulkheadGroup.add(leftPillar);

    const rightPillar = new THREE.Mesh(new THREE.BoxGeometry(2, 10, 1.2), wallMat);
    rightPillar.position.set(29, 0, 0);
    bulkheadGroup.add(rightPillar);

    // Central Pillars for 3-window look
    const midPillar1 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 10, 1.2), wallMat);
    midPillar1.position.set(-10, 0, 0);
    bulkheadGroup.add(midPillar1);

    const midPillar2 = new THREE.Mesh(new THREE.BoxGeometry(1.5, 10, 1.2), wallMat);
    midPillar2.position.set(10, 0, 0);
    bulkheadGroup.add(midPillar2);

    // Ceiling
    const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), mats.floor);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = 20;
    bridgeGroup.add(ceiling);

    // Extended Bow of the Vessel
    const bowGroup = new THREE.Group();
    bowGroup.position.set(0, -5, -40);
    bridgeGroup.add(bowGroup);

    const bowMat = new THREE.MeshStandardMaterial({ color: 0x2c3e50, roughness: 0.7 });
    const containerMat = new THREE.MeshStandardMaterial({ color: 0x3498db, roughness: 0.6 });
    const hatchMat = new THREE.MeshStandardMaterial({ color: 0xc0392b, roughness: 0.8 });
    
    // Long Hull/Bow shape
    const bowBase = new THREE.Mesh(new THREE.BoxGeometry(40, 10, 200), bowMat);
    bowBase.position.z = -90;
    bowGroup.add(bowBase);

    // Hatch Covers (Red) - More of them
    for (let i = 0; i < 6; i++) {
      const hatch = new THREE.Mesh(new THREE.BoxGeometry(30, 1, 15), hatchMat);
      hatch.position.set(0, 5.5, -15 - (i * 30));
      bowGroup.add(hatch);

      // Add stacks of containers
      const stackHeight = 2 + Math.floor(Math.random() * 3);
      for (let h = 0; h < stackHeight; h++) {
        for (let j = -1; j <= 1; j++) {
          const container = new THREE.Mesh(new THREE.BoxGeometry(8, 4, 20), containerMat);
          container.position.set(j * 10, 7 + (h * 4.2), -15 - (i * 30));
          bowGroup.add(container);
        }
      }
    }

    // Railing along the sides of the bow
    const railMat = new THREE.MeshStandardMaterial({ color: 0xbdc3c7, metalness: 0.8 });
    const leftRail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 200), railMat);
    leftRail.position.set(-19, 6, -90);
    bowGroup.add(leftRail);

    const rightRail = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 200), railMat);
    rightRail.position.set(19, 6, -90);
    bowGroup.add(rightRail);

    // Forecastle Mast (Very Forward)
    const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.5, 20), railMat);
    mast.position.set(0, 15, -180);
    bowGroup.add(mast);

    const crossBar = new THREE.Mesh(new THREE.BoxGeometry(10, 0.3, 0.3), railMat);
    crossBar.position.set(0, 22, -180);
    bowGroup.add(crossBar);

    // Console Construction
    const consoleGroup = new THREE.Group();
    bridgeGroup.add(consoleGroup);

    const createConsoleSegment = (width: number, angle: number, x: number, z: number) => {
      const segment = new THREE.Group();
      
      // Base
      const base = new THREE.Mesh(new THREE.BoxGeometry(width, 4, 3), mats.console);
      base.position.y = 2;
      base.castShadow = true;
      segment.add(base);

      // Desk Top
      const top = new THREE.Mesh(new THREE.BoxGeometry(width + 0.2, 0.4, 4), mats.desk);
      top.position.y = 4.2;
      top.position.z = 0.5;
      top.castShadow = true;
      segment.add(top);

      // Angled Screen Panel
      const panel = new THREE.Mesh(new THREE.BoxGeometry(width, 3, 0.5), mats.console);
      panel.position.y = 5.5;
      panel.position.z = -1.2;
      panel.rotation.x = -Math.PI / 6;
      segment.add(panel);

      // Screens
      const screenCount = Math.floor(width / 4);
      for (let i = 0; i < screenCount; i++) {
        const screenGroup = new THREE.Group();
        const screen = new THREE.Mesh(new THREE.PlaneGeometry(3.5, 2.2), mats.screen);
        screenGroup.add(screen);
        
        // Screen Frame
        const frame = new THREE.Mesh(new THREE.BoxGeometry(3.7, 2.4, 0.1), mats.metal);
        frame.position.z = -0.05;
        screenGroup.add(frame);

        screenGroup.position.set((i - (screenCount - 1) / 2) * 4, 5.6, -1.4);
        screenGroup.rotation.x = -Math.PI / 6;
        segment.add(screenGroup);
        
        // Screen Glow
        const glow = new THREE.PointLight(0x00aaff, 0.3, 6);
        glow.position.copy(screenGroup.position);
        glow.position.z += 0.5;
        segment.add(glow);
      }

      // Buttons/Keyboards on desk
      const btnCount = Math.floor(width / 2);
      for (let i = 0; i < btnCount; i++) {
        const isLed = Math.random() > 0.7;
        const btnMat = isLed 
          ? new THREE.MeshStandardMaterial({ color: 0x00ff00, emissive: 0x00ff00, emissiveIntensity: 1 }) 
          : mats.metal;
        
        const btn = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.4), btnMat);
        btn.position.set((i - (btnCount - 1) / 2) * 1.5, 4.4, 1.2);
        segment.add(btn);

        if (isLed) {
          blinkingLedsRef.current.push(btn);
        }
      }

      segment.rotation.y = angle;
      segment.position.set(x, 0, z);
      return segment;
    };

    // Main Center Console
    const centerConsole = createConsoleSegment(12, 0, 0, 0);
    consoleGroup.add(centerConsole);

    // Left Angled Console
    const leftConsole = createConsoleSegment(8, Math.PI / 6, -9, 2);
    consoleGroup.add(leftConsole);

    // Right Angled Console
    const rightConsole = createConsoleSegment(8, -Math.PI / 6, 9, 2);
    consoleGroup.add(rightConsole);

    // Pilot Chairs
    const createChair = (x: number, z: number) => {
      const chair = new THREE.Group();
      
      // Base/Pedestal
      const base = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.8, 3, 16), mats.metal);
      base.position.y = 1.5;
      chair.add(base);

      // Seat
      const seat = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.8, 2.5), mats.chair);
      seat.position.y = 3.4;
      chair.add(seat);

      // Backrest
      const back = new THREE.Mesh(new THREE.BoxGeometry(2.5, 3.5, 0.6), mats.chair);
      back.position.set(0, 5.5, -1);
      back.rotation.x = 0.1;
      chair.add(back);

      // Armrests
      const armGeo = new THREE.BoxGeometry(0.4, 0.4, 1.8);
      const armL = new THREE.Mesh(armGeo, mats.metal);
      armL.position.set(1.4, 4.2, 0);
      chair.add(armL);
      const armR = armL.clone();
      armR.position.x = -1.4;
      chair.add(armR);

      chair.position.set(x, 0, z);
      chair.rotation.y = Math.PI;
      return chair;
    };

    bridgeGroup.add(createChair(-4, 6));
    bridgeGroup.add(createChair(4, 6));

    // Controls (Visual Details)
    const createControls = (parent: THREE.Group, x: number, y: number, z: number) => {
      // Throttle
      const throttleBase = new THREE.Mesh(new THREE.BoxGeometry(1, 0.2, 1.5), mats.metal);
      throttleBase.position.set(x, y, z);
      parent.add(throttleBase);

      const lever = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1, 8), mats.metal);
      lever.position.set(x, y + 0.5, z);
      lever.rotation.x = 0.5;
      parent.add(lever);

      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 8), mats.console);
      knob.position.set(x, y + 1, z + 0.2);
      parent.add(knob);
    };

    createControls(centerConsole, 2, 4.4, 1.5);
    createControls(centerConsole, -2, 4.4, 1.5);

    // Steering Wheel (Helm)
    const helmBase = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1), mats.console);
    helmBase.position.set(0, 4.5, 1.5);
    centerConsole.add(helmBase);

    const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.8, 0.15, 8, 24), mats.metal);
    wheel.position.set(0, 5.2, 2.2);
    wheel.rotation.x = Math.PI / 6;
    centerConsole.add(wheel);

    // --- HOTSPOTS ---
    const addHotspot = (x: number, y: number, z: number, data: BridgeHotspotData) => {
      const g = new THREE.SphereGeometry(2.2, 32, 32); // Even larger hit area
      const m = new THREE.MeshBasicMaterial({ 
        color: 0x00aaff, 
        transparent: true, 
        opacity: 0.3, 
        depthTest: false, // Always on top for better interaction
        depthWrite: false 
      });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(x, y, z);
      mesh.userData = { ...data, isHotspot: true };
      bridgeGroup.add(mesh);
      hotspotsRef.current.push(mesh);

      // Core point
      const core = new THREE.Mesh(
        new THREE.SphereGeometry(0.4, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      mesh.add(core);

      // Glowing ring
      const ringGeo = new THREE.TorusGeometry(1.8, 0.1, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x00aaff, transparent: true, opacity: 0.8 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      mesh.add(ring);
      (mesh as any).ring = ring;
    };

    addHotspot(0, 6.5, -1.5, BRIDGE_HOTSPOTS[4]); // Conning (Center)
    addHotspot(-4, 6.5, -1.5, BRIDGE_HOTSPOTS[1]); // Radar (Left)
    addHotspot(4, 6.5, -1.5, BRIDGE_HOTSPOTS[0]); // ECDIS (Right)
    addHotspot(0, 5.5, 2.5, BRIDGE_HOTSPOTS[3]); // Helm
    addHotspot(2, 5, 1.5, BRIDGE_HOTSPOTS[2]); // Telegraph
    addHotspot(-9, 6.5, 0.5, BRIDGE_HOTSPOTS[5]); // GMDSS (Far Left)
    addHotspot(4, 3, 6, BRIDGE_HOTSPOTS[6]); // Chair

    // Radar Sweep Animation
    const radarSweep = new THREE.Mesh(
      new THREE.PlaneGeometry(0.1, 1.1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.8 })
    );
    radarSweep.position.set(-4, 5.6, -1.35);
    radarSweep.rotation.x = -Math.PI / 6;
    bridgeGroup.add(radarSweep);

    // Sea Horizon (Window View)
    const horizonGeo = new THREE.PlaneGeometry(400, 200);
    const horizonMat = new THREE.MeshBasicMaterial({ 
      color: 0x87ceeb, 
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9
    });
    const horizon = new THREE.Mesh(horizonGeo, horizonMat);
    horizon.position.set(0, 40, -80);
    bridgeGroup.add(horizon);

    const seaGeo = new THREE.PlaneGeometry(400, 200);
    const seaMat = new THREE.MeshBasicMaterial({ color: 0x2980b9 });
    const sea = new THREE.Mesh(seaGeo, seaMat);
    sea.rotation.x = -Math.PI / 2;
    sea.position.set(0, -0.5, -100);
    bridgeGroup.add(sea);

    // Heading Indicator (Center Screen)
    const headingInd = new THREE.Mesh(
      new THREE.RingGeometry(0.8, 1, 32),
      new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.6 })
    );
    headingInd.position.set(0, 5.6, -1.35);
    headingInd.rotation.x = -Math.PI / 6;
    bridgeGroup.add(headingInd);

    // Scrolling Marquee (Right Screen)
    const marqueeCanvas = document.createElement('canvas');
    marqueeCanvas.width = 512;
    marqueeCanvas.height = 128;
    const ctx = marqueeCanvas.getContext('2d');
    const marqueeTexture = new THREE.CanvasTexture(marqueeCanvas);
    
    const marqueeScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(3.5, 0.8),
      new THREE.MeshBasicMaterial({ map: marqueeTexture, transparent: true })
    );
    marqueeScreen.position.set(4, 5.2, -1.35);
    marqueeScreen.rotation.x = -Math.PI / 6;
    bridgeGroup.add(marqueeScreen);

    let marqueeX = 512;
    const updateMarquee = () => {
      if (!ctx) return;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, 512, 128);
      ctx.fillStyle = '#00ff00';
      ctx.font = 'bold 40px monospace';
      ctx.fillText('SYSTEM STATUS: ALL SYSTEMS OPERATIONAL - HEADING 284° - SPEED 18.5 KTS - DEPTH 42M - WIND 12 KTS NW', marqueeX, 80);
      marqueeX -= 2;
      if (marqueeX < -2000) marqueeX = 512;
      marqueeTexture.needsUpdate = true;
    };

    // --- INTERACTION ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let pointerDownPos = { x: 0, y: 0 };
    let potentialHotspot: THREE.Object3D | null = null;

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current) return;
      pointerDownPos = { x: event.clientX, y: event.clientY };
      
      // Raycast on down to "capture" the hotspot and prevent OrbitControls from dragging
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.set(x, y);
      raycaster.setFromCamera(mouse, camera);
      
      const intersects = raycaster.intersectObjects(hotspotsRef.current, true);
      if (intersects.length > 0) {
        let target: THREE.Object3D | null = intersects[0].object;
        while (target && !target.userData.isHotspot && target.parent) {
          target = target.parent;
        }
        if (target && target.userData.isHotspot) {
          potentialHotspot = target;
          // FOOLPROOF: Disable OrbitControls so it doesn't rotate the camera
          controls.enabled = false;
          event.stopPropagation();
        }
      } else {
        potentialHotspot = null;
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!containerRef.current || !rendererRef.current) return;
      
      // Update mouse position for UI label
      setMousePos({ x: event.clientX, y: event.clientY });

      const rect = containerRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.set(x, y);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hotspotsRef.current, true);

      if (intersects.length > 0) {
        let target: THREE.Object3D | null = intersects[0].object;
        while (target && !target.userData.isHotspot && target.parent) {
          target = target.parent;
        }
        if (target && target.userData.isHotspot) {
          setHoveredHotspot(target.userData.name);
          containerRef.current.style.cursor = 'pointer';
          return;
        }
      }
      
      setHoveredHotspot(null);
      containerRef.current.style.cursor = 'grab';
    };

    const onPointerUp = (event: PointerEvent) => {
      // Always re-enable controls on up
      controls.enabled = true;

      if (!containerRef.current || !rendererRef.current) return;
      
      const moveDist = Math.sqrt(
        Math.pow(event.clientX - pointerDownPos.x, 2) + 
        Math.pow(event.clientY - pointerDownPos.y, 2)
      );
      
      // If we were "down" on a hotspot, we trigger it on up. 
      // Since we disabled OrbitControls on down, the camera hasn't moved, 
      // so we can be very lenient with the "click" distance.
      if (potentialHotspot && moveDist < 100) {
        const data = potentialHotspot.userData as BridgeHotspotData;
        setSelectedHotspot(data);
        setIsAutoRotate(false);
        event.stopPropagation();
      } else if (moveDist < 10 && !potentialHotspot) {
        // Clicked empty space, close current selection
        setSelectedHotspot(null);
      }
      
      potentialHotspot = null;
    };

    const canvas = renderer.domElement;
    canvas.style.touchAction = 'none';
    // Use capture phase to ensure we get the event before OrbitControls
    canvas.addEventListener('pointerdown', onPointerDown, { capture: true });
    canvas.addEventListener('pointermove', onPointerMove as any);
    canvas.addEventListener('pointerup', onPointerUp, { capture: true });

    // --- ANIMATION LOOP ---
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Sync auto-rotate state
      controls.autoRotate = isAutoRotateRef.current;
      controls.autoRotateSpeed = 4.0;
      controls.update();
      
      updateMarquee();
      
      // Radar sweep rotation
      radarSweep.rotation.z += 0.05;

      // Pulse hotspots
      const time = Date.now() * 0.005;
      hotspotsRef.current.forEach(h => {
        const s = 1 + Math.sin(time) * 0.2;
        h.scale.set(s, s, s);
        
        // Update ring orientation and internal pulse
        if ((h as any).ring) {
          (h as any).ring.lookAt(camera.position);
          (h as any).ring.rotation.z += 0.02;
        }
      });

      // Blinking LEDs
      blinkingLedsRef.current.forEach((led, i) => {
        const blink = Math.sin(time * 2 + i) > 0;
        (led.material as THREE.MeshStandardMaterial).emissiveIntensity = blink ? 1 : 0.1;
      });

      renderer.render(scene, camera);
    };
    animate();

    // --- RESIZE HANDLER ---
    const resizeObserver = new ResizeObserver(() => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
      if (canvas) {
        canvas.removeEventListener('pointerdown', onPointerDown);
        canvas.removeEventListener('pointermove', onPointerMove as any);
        canvas.removeEventListener('pointerup', onPointerUp);
      }
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isAutoRotate;
      controlsRef.current.autoRotateSpeed = 4.0;
      controlsRef.current.update();
    }
  }, [isAutoRotate]);

  return (
    <div className="relative bg-slate-900 overflow-hidden transition-all duration-500 w-full h-[600px] rounded-3xl shadow-2xl border border-slate-800 group">
      <div ref={containerRef} className="w-full h-full cursor-move" />

      {/* UI Overlay */}
      <div className="absolute top-6 left-6 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-1">
            <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
              <Navigation size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Navigation Room</h3>
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">Bridge Console 3D</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-2 z-10">
        <button
          onClick={() => setIsAutoRotate(!isAutoRotate)}
          className={cn(
            "p-3 rounded-xl backdrop-blur-md border transition-all shadow-lg",
            isAutoRotate 
              ? "bg-blue-600 border-blue-500 text-white" 
              : "bg-slate-900/80 border-white/10 text-slate-400 hover:text-white"
          )}
          title={isAutoRotate ? "Stop Rotation" : "Start Rotation"}
        >
          {isAutoRotate ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Hotspot Detail Modal */}
      <AnimatePresence>
        {selectedHotspot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute z-[100] pointer-events-none inset-x-4 bottom-20 md:inset-x-auto md:right-8 md:bottom-8 md:w-96"
          >
            <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] relative overflow-hidden pointer-events-auto">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600" />
              
              <button 
                onClick={() => setSelectedHotspot(null)}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-blue-500/10 rounded-3xl flex items-center justify-center text-4xl shadow-inner border border-blue-500/10">
                  {selectedHotspot.ico}
                </div>
                <div>
                  <span className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-[0.3em] mb-1.5 block">{selectedHotspot.cat}</span>
                  <h4 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight leading-none">{selectedHotspot.name}</h4>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-blue-50/50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/30">
                  <p className="text-blue-900 dark:text-blue-300 text-[10px] font-black uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                    <BookOpen size={14} />
                    Lexicon Explanation
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed font-medium">
                    {terms.find(t => t.slug === selectedHotspot.slug)?.definition || selectedHotspot.txt}
                  </p>
                </div>
                
                <div className="flex items-start gap-3 text-slate-500 dark:text-slate-400">
                  <Info size={16} className="mt-1 shrink-0" />
                  <p className="text-xs italic leading-relaxed">
                    {selectedHotspot.txt}
                  </p>
                </div>
                
                <div className="pt-4">
                  <button 
                    onClick={() => setSelectedHotspot(null)}
                    className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
                  >
                    Dismiss Console
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Label - Now follows mouse */}
      <AnimatePresence>
        {hoveredHotspot && !selectedHotspot && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              x: mousePos.x,
              y: mousePos.y - 40
            }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
            className="fixed top-0 left-0 pointer-events-none z-[200] -translate-x-1/2 -translate-y-full"
          >
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl border border-blue-400/50 flex items-center gap-2 whitespace-nowrap">
              <Activity size={14} className="animate-pulse" />
              {hoveredHotspot}
            </div>
            {/* Arrow */}
            <div className="w-3 h-3 bg-blue-600 rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b border-blue-400/50" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      <div className="absolute bottom-6 left-6 hidden md:block">
        <div className="bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Interactive Hotspots</span>
          </div>
          <div className="w-px h-3 bg-slate-200" />
          <span className="text-[10px] text-slate-500">Drag to rotate • Scroll to zoom • Click to View Lexicon</span>
        </div>
      </div>
    </div>
  );
};
