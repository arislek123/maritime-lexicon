import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Anchor, Navigation, Box, Settings, Users, Coffee, 
  Layers, Brain, History, Info, X, Globe, ChevronDown,
  Compass, Shield, Scale, Cookie, Calendar, Search, MessageSquare,
  ArrowLeft, Activity, Gauge, Wind, Maximize2, Minimize2, HelpCircle,
  Eye, EyeOff
} from 'lucide-react';
import { cn } from '../lib/utils';

// --- TYPES ---
interface HotspotData {
  ico: string;
  cat: string;
  name: string;
  txt: string;
  slug: string;
  sect?: string;
}

// --- MARITIME TERMS DATA ---
const HOTSPOTS: HotspotData[] = [
  {
    ico: '📏', cat: 'LOAD LINE', name: 'Plimsoll Mark',
    txt: 'A symbol on the ship\'s hull that indicates the maximum depth to which the vessel may be safely loaded.',
    slug: 'plimsoll-line',
    sect: 'hull'
  },
  {
    ico: '🟥', cat: 'CARGO HOLD', name: 'Hatch Covers',
    txt: 'Steel structures used to seal the cargo holds, ensuring the ship remains weathertight.',
    slug: 'hatch-cover',
    sect: 'deck'
  },
  {
    ico: '⚙', cat: 'MOORING', name: 'Windlass',
    txt: 'A machine used on ships to let go and heave up the anchors and their chains.',
    slug: 'windlass',
    sect: 'mooring'
  },
  {
    ico: '⚓', cat: 'ANCHORING', name: 'Bower Anchor',
    txt: 'The primary anchor carried at the bow of the ship for securing the vessel to the seabed.',
    slug: 'anchor',
    sect: 'hull'
  },
  {
    ico: '⚓', cat: 'MANOEUVRING', name: 'Bow Thruster',
    txt: 'A propulsion device built into the bow to provide lateral thrust, aiding in maneuverability.',
    slug: 'bow-thruster',
    sect: 'mooring'
  },
  {
    ico: '🏭', cat: 'EXHAUST', name: 'Main Funnel',
    txt: 'A structure used to expel exhaust gases from the main and auxiliary engines.',
    slug: 'funnel',
    sect: 'super'
  },
  {
    ico: '🏢', cat: 'SUPERSTRUCTURE', name: 'Accommodation Block',
    txt: 'The superstructure housing the crew\'s living quarters, offices, and the navigation bridge.',
    slug: 'superstructure',
    sect: 'super'
  },
  {
    ico: '🛟', cat: 'LIFE-SAVING', name: 'SOLAS Lifeboat',
    txt: 'A rigid, enclosed vessel designed for the emergency evacuation of crew in life-threatening situations.',
    slug: 'lifeboat',
    sect: 'super'
  },
  {
    ico: '⚙', cat: 'PROPULSION', name: 'Propeller & Rudder',
    txt: 'The propulsion and steering assembly that moves and directs the ship through the water.',
    slug: 'propeller',
    sect: 'prop'
  },
  {
    ico: '⛽', cat: 'BUNKERING', name: 'Bunker Manifold',
    txt: 'The station where fuel and oil are transferred between the ship and a supply barge or shore facility.',
    slug: 'bunker',
    sect: 'deck'
  },
  {
    ico: '🔢', cat: 'NAVIGATION', name: 'Draft Marks',
    txt: 'A series of numbers on the hull used to measure the vertical distance from the keel to the waterline.',
    slug: 'draft',
    sect: 'hull'
  },
  {
    ico: '🪜', cat: 'ACCESS', name: 'Accommodation Ladder',
    txt: 'A retractable staircase on the ship\'s side used for boarding and disembarking.',
    slug: 'accommodation-ladder',
    sect: 'deck'
  },
  {
    ico: '📡', cat: 'NAVIGATION', name: 'Radar Mast',
    txt: 'A vertical structure supporting radar scanners and antennas used for navigation and communication.',
    slug: 'radar',
    sect: 'super'
  },
  {
    ico: '🚢', cat: 'DECK', name: 'Forecastle',
    txt: 'The forward part of the upper deck, typically raised, housing mooring equipment and stores.',
    slug: 'forecastle',
    sect: 'deck'
  },
  {
    ico: '🛡️', cat: 'HULL', name: 'Bulwark',
    txt: 'An extension of the ship\'s side above the deck level, acting as a protective railing for crew.',
    slug: 'bulwark',
    sect: 'hull'
  }
];

export const VesselDiagram3D: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [tooltip, setTooltip] = useState<{ name: string; x: number; y: number } | null>(null);
  const [xray, setXray] = useState(false);
  const [currentView, setCurrentView] = useState('side');

  // Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const hotspotsRef = useRef<THREE.Mesh[]>([]);
  const shipRef = useRef<THREE.Group | null>(null);
  const interiorRef = useRef<THREE.Group | null>(null);
  const hullMeshesRef = useRef<THREE.Mesh[]>([]);
  
  const CAM_PRESETS: Record<string, { r: number; th: number; ph: number; tx: number; ty: number; tz: number }> = {
    side: { r: 200, th: 1.2, ph: 1.18, tx: 0, ty: 0, tz: 0 },
    bow:  { r: 90, th: 0.08, ph: 1.2, tx: 75, ty: 2, tz: 0 },
    stern: { r: 85, th: 3.1, ph: 1.25, tx: -80, ty: 2, tz: 0 },
    above: { r: 180, th: 1.2, ph: 0.22, tx: 0, ty: 0, tz: 0 },
    prop: { r: 55, th: 3.08, ph: 1.38, tx: -88, ty: -8, tz: 0 },
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    // --- RENDERER ---
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: true,
      logarithmicDepthBuffer: true
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    rendererRef.current = renderer;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x6a8aaa); // daylight sky blue-grey
    scene.fog = new THREE.FogExp2(0x7a9aaa, 0.0008);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 1.0, 4000);
    const initialCam = CAM_PRESETS.side;
    camera.position.set(
      initialCam.r * Math.sin(initialCam.ph) * Math.sin(initialCam.th) + initialCam.tx,
      initialCam.r * Math.cos(initialCam.ph) + initialCam.ty,
      initialCam.r * Math.sin(initialCam.ph) * Math.cos(initialCam.th) + initialCam.tz
    );
    camera.lookAt(initialCam.tx, initialCam.ty, initialCam.tz);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 600;
    controls.minDistance = 8;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // --- LIGHTING ---
    scene.add(new THREE.AmbientLight(0x8ab0cc, 3.5));
    const sun = new THREE.DirectionalLight(0xfff8f0, 5);
    sun.position.set(100, 220, 80);
    sun.castShadow = true;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.camera.left = -200; sun.shadow.camera.right = 200;
    sun.shadow.camera.top = 140; sun.shadow.camera.bottom = -140;
    sun.shadow.camera.far = 800; sun.shadow.bias = -0.0003;
    scene.add(sun);

    const fill = new THREE.DirectionalLight(0xaaccdd, 1.2);
    fill.position.set(-80, 60, -60);
    scene.add(fill);
    scene.add(new THREE.HemisphereLight(0x88aacc, 0x334455, 0.9));

    // --- MATERIALS ---
    const mats = {
      hullBlk: new THREE.MeshStandardMaterial({ color: 0x1a2030, roughness: 0.75, metalness: 0.35 }),
      hullRed: new THREE.MeshStandardMaterial({ color: 0x8c1c10, roughness: 0.85, metalness: 0.12 }),
      deckGrn: new THREE.MeshStandardMaterial({ color: 0x3d6040, roughness: 0.88, metalness: 0.05 }),
      deckGrnLt: new THREE.MeshStandardMaterial({ color: 0x4a7050, roughness: 0.86, metalness: 0.05 }),
      hatchRed: new THREE.MeshStandardMaterial({ color: 0x8b1e0e, roughness: 0.82, metalness: 0.1 }),
      hatchDk: new THREE.MeshStandardMaterial({ color: 0x6a1508, roughness: 0.88, metalness: 0.08 }),
      white: new THREE.MeshStandardMaterial({ color: 0xdde8ec, roughness: 0.45, metalness: 0.15 }),
      superW: new THREE.MeshStandardMaterial({ color: 0xcdd8dc, roughness: 0.44, metalness: 0.18 }),
      superLt: new THREE.MeshStandardMaterial({ color: 0xb8c4c8, roughness: 0.46, metalness: 0.16 }),
      steel: new THREE.MeshStandardMaterial({ color: 0x8a9ea0, roughness: 0.38, metalness: 0.72 }),
      steelDk: new THREE.MeshStandardMaterial({ color: 0x4a5a6c, roughness: 0.55, metalness: 0.62 }),
      steelMid: new THREE.MeshStandardMaterial({ color: 0x6a7a88, roughness: 0.45, metalness: 0.65 }),
      gold: new THREE.MeshStandardMaterial({ color: 0xc89a3c, roughness: 0.28, metalness: 0.65, emissive: 0xc89a3c, emissiveIntensity: 0.06 }),
      bronze: new THREE.MeshStandardMaterial({ color: 0xb07830, roughness: 0.2, metalness: 0.88 }),
      glass: new THREE.MeshStandardMaterial({ color: 0x5588aa, roughness: 0.04, metalness: 0.3, transparent: true, opacity: 0.28 }),
      coam: new THREE.MeshStandardMaterial({ color: 0x3d5040, roughness: 0.85, metalness: 0.12 }),
      funnelBk: new THREE.MeshStandardMaterial({ color: 0x2a2e34, roughness: 0.88, metalness: 0.08 }),
      funnelBeige: new THREE.MeshStandardMaterial({ color: 0xd2c4a8, roughness: 0.6, metalness: 0.1 }),
      funnelBlue: new THREE.MeshStandardMaterial({ color: 0x2b5ca5, roughness: 0.5, metalness: 0.2 }),
      hotspot: new THREE.MeshBasicMaterial({ color: 0xc89a3c, transparent: true, opacity: 0.6, depthWrite: false })
    };

    // --- SHIP CONSTRUCTION ---
    const ship = new THREE.Group();
    scene.add(ship);
    shipRef.current = ship;

    const hullSec = [
      [108, 0.1], [107, 0.4], [106, 0.9], [105, 1.6], [104, 2.5], [102, 3.8],
      [100, 5.4], [98, 7.0], [96, 8.8], [94, 10.4], [92, 11.8], [88, 13.6],
      [82, 15.0], [72, 15.8], [62, 16.0], [24, 16.0], [-24, 16.0], [-60, 16.0], [-72, 16.0],
      [-82, 16.0], [-90, 16.0], [-100, 16.0], [-115, 16.0], [-125, 14.0], [-135, 10.0], [-142, 5.0], [-145, 1.0],
    ];

    // Hull Construction Helper
    function makeHullMesh(mat: THREE.MeshStandardMaterial, yBot: number, yTop: number, beamOffset = 0) {
      const N = hullSec.length;
      const pos: number[] = [];
      hullSec.forEach(([x, hz]) => {
        const bz = hz + beamOffset;
        pos.push(x, yBot, -bz); pos.push(x, yBot, bz); pos.push(x, yTop, bz); pos.push(x, yTop, -bz);
      });
      const idx: number[] = [];
      for (let i = 0; i < N - 1; i++) {
        const a = i * 4, b = (i + 1) * 4;
        idx.push(a + 0, b + 0, b + 3, a + 0, b + 3, a + 3);
        idx.push(a + 1, a + 2, b + 2, a + 1, b + 2, b + 1);
        idx.push(a + 0, a + 1, b + 1, a + 0, b + 1, b + 0);
        idx.push(a + 3, b + 3, b + 2, a + 3, b + 2, a + 2);
      }
      idx.push(0, 3, 2, 0, 2, 1);
      const L = (N - 1) * 4;
      idx.push(L + 0, L + 1, L + 2, L + 0, L + 2, L + 3);

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(pos), 3));
      geo.setIndex(idx);
      geo.computeVertexNormals();
      const m2 = mat.clone();
      m2.side = THREE.DoubleSide;
      const mesh = new THREE.Mesh(geo, m2);
      mesh.castShadow = true; mesh.receiveShadow = true;
      return mesh;
    }

    const hullBlk = makeHullMesh(mats.hullBlk, -2.0, 11.48); // Slightly below 11.5
    ship.add(hullBlk);
    hullMeshesRef.current.push(hullBlk);

    const hullRed = makeHullMesh(mats.hullRed, -10.3, -2.02); // Slightly below -2.0
    ship.add(hullRed);
    hullMeshesRef.current.push(hullRed);

    const hullGold = makeHullMesh(mats.gold, -2.01, -1.99, 0.02); // Proud of the hull to avoid side-flicker
    ship.add(hullGold);

    // Shaped Deck Helper
    function makeShapedDeck(y: number, height: number, mat: THREE.Material) {
      const shape = new THREE.Shape();
      shape.moveTo(hullSec[0][0], hullSec[0][1] - 0.05); // Slightly inside to avoid side-flicker
      for (let i = 1; i < hullSec.length; i++) shape.lineTo(hullSec[i][0], hullSec[i][1] - 0.05);
      for (let i = hullSec.length - 1; i >= 0; i--) shape.lineTo(hullSec[i][0], -hullSec[i][1] + 0.05);
      shape.closePath();

      const geo = new THREE.ExtrudeGeometry(shape, { depth: height, bevelEnabled: false });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = Math.PI / 2;
      mesh.position.y = y + height;
      mesh.castShadow = true; mesh.receiveShadow = true;
      return mesh;
    }

    // Main Deck
    const deck = makeShapedDeck(11.5, 0.1, mats.deckGrn); // Sits on top of hullBlk
    ship.add(deck);

    // Raised Forecastle (forward part of deck)
    const fcSec = hullSec.filter(s => s[0] >= 58);
    const fcShape = new THREE.Shape();
    fcShape.moveTo(fcSec[0][0], fcSec[0][1] - 0.05);
    for (let i = 1; i < fcSec.length; i++) fcShape.lineTo(fcSec[i][0], fcSec[i][1] - 0.05);
    for (let i = fcSec.length - 1; i >= 0; i--) fcShape.lineTo(fcSec[i][0], -fcSec[i][1] + 0.05);
    fcShape.closePath();
    const fcGeo = new THREE.ExtrudeGeometry(fcShape, { depth: 3, bevelEnabled: false });
    const forecastle = new THREE.Mesh(fcGeo, mats.deckGrn);
    forecastle.rotation.x = Math.PI / 2;
    forecastle.position.y = 14.51; // Offset from deck
    ship.add(forecastle);

    // Bulwark (Perimeter Railing)
    const bulwarkPath = new THREE.Shape();
    bulwarkPath.moveTo(hullSec[0][0], hullSec[0][1]);
    for (let i = 1; i < hullSec.length; i++) bulwarkPath.lineTo(hullSec[i][0], hullSec[i][1]);
    for (let i = hullSec.length - 1; i >= 0; i--) bulwarkPath.lineTo(hullSec[i][0], -hullSec[i][1]);
    bulwarkPath.closePath();

    const bulwarkHole = new THREE.Path();
    bulwarkHole.moveTo(hullSec[0][0] - 0.3, hullSec[0][1] - 0.3);
    for (let i = 1; i < hullSec.length; i++) bulwarkHole.lineTo(hullSec[i][0] + (hullSec[i][0] < 0 ? 0.3 : -0.3), hullSec[i][1] - 0.3);
    for (let i = hullSec.length - 1; i >= 0; i--) bulwarkHole.lineTo(hullSec[i][0] + (hullSec[i][0] < 0 ? 0.3 : -0.3), -hullSec[i][1] + 0.3);
    bulwarkHole.closePath();
    bulwarkPath.holes.push(bulwarkHole);

    const bulwarkGeo = new THREE.ExtrudeGeometry(bulwarkPath, { depth: 1.5, bevelEnabled: false });
    const bulwark = new THREE.Mesh(bulwarkGeo, mats.hullBlk);
    bulwark.rotation.x = Math.PI / 2;
    bulwark.position.y = 13.02; // Offset from deck top
    ship.add(bulwark);

    // Bollards
    const bollardGeo = new THREE.CylinderGeometry(0.4, 0.4, 1.2, 8);
    const bollardPos = [
      [70, 11, 14], [70, 11, -14], [30, 11, 14], [30, 11, -14],
      [-30, 11, 14], [-30, 11, -14], [-70, 11, 14], [-70, 11, -14]
    ];
    bollardPos.forEach(([x, y, z]) => {
      const b = new THREE.Mesh(bollardGeo, mats.steelDk);
      b.position.set(x, y + 0.6, z);
      ship.add(b);
    });

    // Bulbous Bow
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(4.2, 20, 20), mats.hullRed);
    bulb.scale.set(1.6, 0.88, 0.88);
    bulb.position.set(104, -7.5, 0);
    ship.add(bulb);

    // Hatches
    const hatchX = [45, 16, -13, -42, -71];
    hatchX.forEach((hx) => {
      const coaming = new THREE.Mesh(new THREE.BoxGeometry(26, 2.2, 22), mats.coam);
      coaming.position.set(hx, 12.7, 0);
      ship.add(coaming);
      const cover = new THREE.Mesh(new THREE.BoxGeometry(24, 1.5, 20), mats.hatchRed);
      cover.position.set(hx, 14.4, 0);
      ship.add(cover);
    });

    // Superstructure (Accommodation Block - Redesigned for realism based on photo)
    const superGroup = new THREE.Group();
    superGroup.position.set(-105, 11.5, 0); // Set to 11.5 to have contact with deck
    ship.add(superGroup);

    // Foundation Plate (Dark separation)
    const superBase = new THREE.Mesh(new THREE.BoxGeometry(34, 0.5, 30), mats.steelDk);
    superBase.position.y = -0.25;
    superGroup.add(superBase);

    const superLevels = [
      { w: 32, d: 28, h: 5, y: 0, m: mats.superW },   // Main Deck level
      { w: 28, d: 26, h: 5, y: 5, m: mats.superW },   // Level 2
      { w: 24, d: 24, h: 5, y: 10, m: mats.superW },  // Level 3
      { w: 20, d: 22, h: 5, y: 15, m: mats.superLt }, // Level 4
      { w: 18, d: 20, h: 5, y: 20, m: mats.superLt }, // Level 5
      { w: 16, d: 18, h: 6, y: 25, m: mats.superW }    // Bridge level
    ];

    superLevels.forEach((level, idx) => {
      // Main Block
      const block = new THREE.Mesh(new THREE.BoxGeometry(level.w, level.h, level.d), level.m);
      block.position.y = level.y + level.h / 2;
      superGroup.add(block);

      // Red Deck Top (Walkway)
      const deckTop = new THREE.Mesh(new THREE.BoxGeometry(level.w + 0.2, 0.1, level.d + 0.2), mats.superW);
      deckTop.position.y = level.y + level.h;
      superGroup.add(deckTop);

      // Simple Railings (White lines)
      const railGeo = new THREE.BoxGeometry(level.w + 0.4, 0.8, 0.1);
      const railF = new THREE.Mesh(railGeo, mats.white);
      railF.position.set(0, level.y + level.h + 0.4, level.d / 2 + 0.1);
      superGroup.add(railF);
      const railA = railF.clone();
      railA.position.z = -level.d / 2 - 0.1;
      superGroup.add(railA);

      // Bridge Wings
      if (idx === superLevels.length - 1) {
        const wingGeo = new THREE.BoxGeometry(6, 4, 42);
        const wings = new THREE.Mesh(wingGeo, level.m);
        wings.position.y = level.y + 3;
        superGroup.add(wings);
        
        const wingTop = new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.1, 42.2), mats.superW);
        wingTop.position.y = level.y + 5;
        superGroup.add(wingTop);
      }
    });

    // Funnel (Redesigned: Tall, Tapered, Beige with Blue Band)
    const funnelGroup = new THREE.Group();
    funnelGroup.position.set(-6, 15, 0); // Positioned on the aft part of the superstructure base
    superGroup.add(funnelGroup);
    
    // Tapered Funnel Body
    const funnelPoints = [];
    funnelPoints.push(new THREE.Vector2(3.5, 0));
    funnelPoints.push(new THREE.Vector2(3.0, 18));
    funnelPoints.push(new THREE.Vector2(2.5, 22));
    const funnelGeo = new THREE.LatheGeometry(funnelPoints, 4); // Square-ish taper
    const funnelBody = new THREE.Mesh(funnelGeo, mats.funnelBeige);
    funnelBody.rotation.y = Math.PI / 4;
    funnelGroup.add(funnelBody);

    // Blue Band with Logo 'L'
    const bandGeo = new THREE.CylinderGeometry(3.1, 3.2, 4, 4);
    const band = new THREE.Mesh(bandGeo, mats.funnelBlue);
    band.rotation.y = Math.PI / 4;
    band.position.y = 12;
    funnelGroup.add(band);

    // Black Top & Exhaust Pipes
    const funnelCap = new THREE.Mesh(new THREE.BoxGeometry(5.5, 1.5, 5.5), mats.funnelBk);
    funnelCap.position.y = 22.5;
    funnelGroup.add(funnelCap);

    const pipeGeo = new THREE.CylinderGeometry(0.5, 0.5, 4, 8);
    for (let i = 0; i < 3; i++) {
      const pipe = new THREE.Mesh(pipeGeo, mats.funnelBk);
      pipe.position.set((i - 1) * 1.2, 24, 0);
      funnelGroup.add(pipe);
    }
    
    // Smoke System
    const smokeGeo = new THREE.BufferGeometry();
    const smokeCount = 70;
    const smokePos = new Float32Array(smokeCount * 3);
    for (let i = 0; i < smokeCount; i++) {
      smokePos[i * 3] = (Math.random() - 0.5) * 4;
      smokePos[i * 3 + 1] = Math.random() * 26;
      smokePos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    smokeGeo.setAttribute('position', new THREE.BufferAttribute(smokePos, 3));
    const smokeMat = new THREE.PointsMaterial({ color: 0x888888, size: 1.6, transparent: true, opacity: 0.16, sizeAttenuation: true });
    const smoke = new THREE.Points(smokeGeo, smokeMat);
    smoke.position.y = 26;
    funnelGroup.add(smoke);

    // Radar Scanners
    const radarGroup = new THREE.Group();
    radarGroup.position.set(-95, 43, 0);
    ship.add(radarGroup);
    const radar1 = new THREE.Mesh(new THREE.BoxGeometry(6.5, 0.3, 1.3), mats.white);
    radar1.position.y = 5;
    radarGroup.add(radar1);
    const radar2 = new THREE.Mesh(new THREE.BoxGeometry(4.5, 0.2, 1), mats.steelMid);
    radar2.position.y = 7;
    radarGroup.add(radar2);

    // Radar Mast
    const radarMast = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 1.2, 12, 8), mats.white);
    radarMast.position.set(-95, 43, 0);
    ship.add(radarMast);

    // Deck Crane (White, Aft)
    const craneGroup = new THREE.Group();
    craneGroup.position.set(-135, 15.2, -10);
    ship.add(craneGroup);
    
    const craneBase = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.5, 4, 12), mats.white);
    craneGroup.add(craneBase);
    
    const craneArm = new THREE.Mesh(new THREE.BoxGeometry(12, 0.8, 0.8), mats.white);
    craneArm.position.set(5, 3, 0);
    craneArm.rotation.z = -0.3;
    craneGroup.add(craneArm);

    // Free-fall Lifeboat (High-Fidelity Stern Ramp)
    const lifeboatRamp = new THREE.Group();
    lifeboatRamp.position.set(-132, 11.5, 0); // Moved to the very end of the deck
    ship.add(lifeboatRamp);

    const rampAngle = Math.PI + Math.PI / 4; // 225 degrees (points aft and down)
    
    // Ramp Structure (White Steel Frame)
    const rampMat = mats.white;
    const lbFrameGeo = new THREE.BoxGeometry(16, 0.4, 0.4);
    
    // Main rails
    const railL = new THREE.Mesh(lbFrameGeo, rampMat);
    railL.rotation.z = rampAngle;
    railL.position.set(4, 6, 2.5); // Adjusted X to keep it at the stern
    lifeboatRamp.add(railL);
    const railR = railL.clone();
    railR.position.z = -2.5;
    lifeboatRamp.add(railR);

    // Vertical/Diagonal supports (A-frame look)
    const supportGeo = new THREE.BoxGeometry(0.4, 12, 0.4);
    const supL = new THREE.Mesh(supportGeo, rampMat);
    supL.position.set(0, 6, 2.5);
    supL.rotation.z = -0.2;
    lifeboatRamp.add(supL);
    const supR = supL.clone();
    supR.position.z = -2.5;
    lifeboatRamp.add(supR);

    const supL2 = supL.clone();
    supL2.position.set(8, 2, 2.5);
    supL2.rotation.z = 0.4;
    lifeboatRamp.add(supL2);
    const supR2 = supL2.clone();
    supR2.position.z = -2.5;
    lifeboatRamp.add(supR2);

    // Cross bars
    for (let i = 0; i < 4; i++) {
      const cross = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 5), rampMat);
      const t = i / 3;
      cross.position.set(8 - t * 12, 2 + t * 8, 0);
      cross.rotation.z = rampAngle;
      lifeboatRamp.add(cross);
    }

    // Detailed Lifeboat (Red, angled down)
    const lifeboatGroup = new THREE.Group();
    lifeboatGroup.rotation.z = rampAngle - Math.PI / 2; // Pointing along the ramp
    lifeboatGroup.position.set(4, 8.5, 0);
    lifeboatRamp.add(lifeboatGroup);

    // Lifeboat Hull (Tapered, Red)
    const lbPoints = [];
    lbPoints.push(new THREE.Vector2(0, 0));
    lbPoints.push(new THREE.Vector2(1.4, 0.8));
    lbPoints.push(new THREE.Vector2(1.6, 4.5));
    lbPoints.push(new THREE.Vector2(1.0, 5.5));
    lbPoints.push(new THREE.Vector2(0, 6.0));
    const lbHullGeo = new THREE.LatheGeometry(lbPoints, 16);
    const lbHull = new THREE.Mesh(lbHullGeo, new THREE.MeshStandardMaterial({ color: 0xcc2200, roughness: 0.3 }));
    lbHull.position.y = -3.0;
    lifeboatGroup.add(lbHull);

    // Lifeboat Windows (Cockpit)
    const lbWindow = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.0, 2.0), mats.glass);
    lbWindow.position.y = 1.5;
    lifeboatGroup.add(lbWindow);

    // Small Propeller on Lifeboat
    const lbProp = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 1.0, 8), mats.bronze);
    lbProp.rotation.z = Math.PI / 2;
    lbProp.position.y = -3.2;
    lifeboatGroup.add(lbProp);

    // Accommodation Ladder (Stowed on side)
    const makeLadder = (side: number) => {
      const ladderGroup = new THREE.Group();
      ladderGroup.position.set(-60, 11.5, 16.2 * side);
      ship.add(ladderGroup);

      const ladderMain = new THREE.Mesh(new THREE.BoxGeometry(15, 0.4, 1.5), mats.steel);
      ladderMain.position.x = -7.5;
      ladderGroup.add(ladderMain);

      // Rails
      const railTop = new THREE.Mesh(new THREE.BoxGeometry(15, 0.1, 0.1), mats.steel);
      railTop.position.set(-7.5, 1.2, 0.7);
      ladderGroup.add(railTop);
      const railBot = railTop.clone();
      railBot.position.z = -0.7;
      ladderGroup.add(railBot);

      // Vertical supports
      for (let i = 0; i < 6; i++) {
        const sup = new THREE.Mesh(new THREE.BoxGeometry(0.1, 1.2, 0.1), mats.steel);
        sup.position.set(-i * 3, 0.6, 0.7);
        ladderGroup.add(sup);
        const sup2 = sup.clone();
        sup2.position.z = -0.7;
        ladderGroup.add(sup2);
      }
    };
    makeLadder(1);
    makeLadder(-1);

    // Side SOLAS Lifeboats on Davits
    const makeSideLifeboat = (side: number) => {
      const lbGroup = new THREE.Group();
      lbGroup.position.set(-105, 21, 16.5 * side);
      ship.add(lbGroup);

      // Davits (Gravity type)
      const davitGeo = new THREE.BoxGeometry(1, 8, 1);
      const davitF = new THREE.Mesh(davitGeo, mats.steel);
      davitF.position.set(3, 0, 0);
      davitF.rotation.z = -0.2;
      lbGroup.add(davitF);
      const davitA = davitF.clone();
      davitA.position.x = -3;
      lbGroup.add(davitA);

      // Lifeboat (Enclosed type)
      const boat = new THREE.Mesh(new THREE.CapsuleGeometry(1.4, 4, 8, 16), new THREE.MeshStandardMaterial({ color: 0xff6600, roughness: 0.3 }));
      boat.rotation.z = Math.PI / 2;
      boat.position.y = -1;
      lbGroup.add(boat);
      
      // Windows
      const win = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.6, 1.5), mats.glass);
      win.position.y = 0.5;
      boat.add(win);
    };
    makeSideLifeboat(1);
    makeSideLifeboat(-1);

    // Propeller & Rudder
    const propGroup = new THREE.Group();
    propGroup.position.set(-145, -5, 0);
    ship.add(propGroup);
    
    // Hub & Boss Cap (Lathe for smoothness)
    const hubPoints = [];
    for (let i = 0; i <= 10; i++) {
      const x = (i / 10) * 6;
      const r = 2.2 + Math.sin((i / 10) * Math.PI) * 0.8;
      hubPoints.push(new THREE.Vector2(r, x));
    }
    const hubGeo = new THREE.LatheGeometry(hubPoints, 32);
    const hub = new THREE.Mesh(hubGeo, mats.bronze);
    hub.rotation.z = Math.PI / 2;
    hub.position.x = 3;
    propGroup.add(hub);
    
    const bossCapGeo = new THREE.CylinderGeometry(0.5, 2.2, 3, 20);
    const bossCap = new THREE.Mesh(bossCapGeo, mats.bronze);
    bossCap.rotation.z = -Math.PI / 2;
    bossCap.position.x = -4.5;
    propGroup.add(bossCap);
    
    // Professional Skewed Blades
    const bladeShape = new THREE.Shape();
    bladeShape.moveTo(0, 0);
    bladeShape.quadraticCurveTo(3, 1, 4, 5);
    bladeShape.quadraticCurveTo(3, 9, 0, 10);
    bladeShape.quadraticCurveTo(-3, 9, -4, 5);
    bladeShape.quadraticCurveTo(-3, 1, 0, 0);
    
    const bladeExtrudeSettings = { depth: 0.3, bevelEnabled: true, bevelThickness: 0.2, bevelSize: 0.2, bevelSegments: 3 };
    const bladeGeo = new THREE.ExtrudeGeometry(bladeShape, bladeExtrudeSettings);

    for (let i = 0; i < 4; i++) {
      const bladeContainer = new THREE.Group();
      bladeContainer.rotation.x = i * (Math.PI / 2);
      propGroup.add(bladeContainer);

      const blade = new THREE.Mesh(bladeGeo, mats.bronze);
      blade.rotation.y = Math.PI / 2; 
      blade.rotation.z = 0.45; // Pitch
      blade.position.set(0, 2.5, 0);
      bladeContainer.add(blade);
    }

    const rudder = new THREE.Mesh(new THREE.BoxGeometry(8, 19, 1.4), mats.hullRed);
    rudder.position.set(-152, -13.5, 0);
    ship.add(rudder);

    // Windlass (Ultra Detail)
    const windlassGroup = new THREE.Group();
    windlassGroup.position.set(78, 15.2, 0);
    ship.add(windlassGroup);
    
    const foundation = new THREE.Mesh(new THREE.BoxGeometry(9, 0.8, 22), mats.steelDk);
    foundation.position.y = -0.4;
    windlassGroup.add(foundation);

    const mainShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 20, 16), mats.steelMid);
    mainShaft.rotation.x = Math.PI / 2;
    mainShaft.position.y = 3.5;
    windlassGroup.add(mainShaft);

    // Gypsies (Notched Wheels)
    const gypsyGeo = new THREE.CylinderGeometry(2.5, 2.5, 3.5, 12);
    const gypsyL = new THREE.Mesh(gypsyGeo, mats.steelDk);
    gypsyL.rotation.x = Math.PI / 2;
    gypsyL.position.set(0, 3.5, 6.55);
    windlassGroup.add(gypsyL);
    const gypsyR = gypsyL.clone();
    gypsyR.position.z = -6.55;
    windlassGroup.add(gypsyR);
    
    // Warping heads
    const warpHead = new THREE.Group();
    const wPart1 = new THREE.Mesh(new THREE.CylinderGeometry(1.5, 2.6, 1.5, 16), mats.steelDk);
    const wPart2 = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.2, 2.0, 16), mats.steelDk);
    wPart2.position.y = 1.75;
    warpHead.add(wPart1, wPart2);
    warpHead.rotation.x = Math.PI / 2;
    
    const warpL = warpHead.clone();
    warpL.position.set(0, 3.5, 10.5);
    windlassGroup.add(warpL);
    const warpR = warpHead.clone();
    warpR.rotation.x = -Math.PI / 2;
    warpR.position.set(0, 3.5, -10.5);
    windlassGroup.add(warpR);
    
    // Heavy Frames
    const frameGeo = new THREE.BoxGeometry(4.5, 8, 2);
    const frameL = new THREE.Mesh(frameGeo, mats.steelDk);
    frameL.position.set(0, 3.5, 3.5);
    windlassGroup.add(frameL);
    const frameR = frameL.clone();
    frameR.position.z = -3.5;
    windlassGroup.add(frameR);
    
    // Motor & Gearbox
    const motor = new THREE.Mesh(new THREE.BoxGeometry(5, 5, 5), mats.steelDk);
    motor.position.set(-5, 2.5, 0);
    windlassGroup.add(motor);
    const gearBox = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 3, 12), mats.steelDk);
    gearBox.rotation.x = Math.PI / 2;
    gearBox.position.set(-1.5, 3.5, 0);
    windlassGroup.add(gearBox);

    // Brake Handwheels
    const wheelGeo = new THREE.TorusGeometry(2.2, 0.3, 8, 24);
    const wheelL = new THREE.Mesh(wheelGeo, mats.steelMid);
    wheelL.position.set(-2.5, 7.5, 6);
    wheelL.rotation.y = Math.PI / 2;
    windlassGroup.add(wheelL);
    const wheelR = wheelL.clone();
    wheelR.position.z = -6;
    windlassGroup.add(wheelR);

    // Chain Stoppers
    const stopperGeo = new THREE.BoxGeometry(4, 2.5, 5);
    const stopperL = new THREE.Mesh(stopperGeo, mats.steelDk);
    stopperL.position.set(88, 16.4, 6.55);
    ship.add(stopperL);
    const stopperR = stopperL.clone();
    stopperR.position.z = -6.55;
    ship.add(stopperR);

    // Anchor Chain & Anchor
    const chainGroup = new THREE.Group();
    ship.add(chainGroup);
    const chainLinkGeo = new THREE.TorusGeometry(0.4, 0.15, 8, 12);
    for (let i = 0; i < 24; i++) {
      const link = new THREE.Mesh(chainLinkGeo, mats.steelDk);
      const t = i / 23;
      // Route from windlass (78) through stopper (88) to hawse pipe (96)
      const x = 78 + t * 18;
      // Stay on deck (y=21.2 at gypsy top) until stopper (x=88, t=0.55), then drop to hawse (y=4)
      let y, z;
      if (t < 0.55) {
        y = 21.2 - (t / 0.55) * 4.8; // Drop from 21.2 to 16.4
        z = 6.55;
      } else {
        const t2 = (t - 0.55) / 0.45;
        y = 16.4 - t2 * 12.4; // Drop from 16.4 to 4.0
        z = 6.55 + t2 * 2.25; // From stopper (6.55) to hawse (8.8)
      }
      link.position.set(x, y, z);
      link.rotation.y = Math.PI / 2;
      link.rotation.x = i % 2 === 0 ? 0 : Math.PI / 2;
      chainGroup.add(link);
      
      const linkPort = link.clone();
      linkPort.position.z = -z;
      chainGroup.add(linkPort);
    }

    // Bower Anchors (Stockless pattern matching photo)
    const makeAnchor = (side: number) => {
      const anchor = new THREE.Group();
      anchor.position.set(98, 3.5, 9.5 * side); 
      anchor.rotation.z = -0.35;
      anchor.rotation.y = side === 1 ? -0.2 : Math.PI + 0.2; 
      anchor.scale.set(0.25, 0.25, 0.25); 
      
      // Shank (Long vertical part)
      const shank = new THREE.Mesh(new THREE.BoxGeometry(1.2, 14, 1.2), mats.steelMid);
      anchor.add(shank);
      
      // Ring at the top
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.3, 8, 24), mats.steelMid);
      ring.position.y = 7.5;
      anchor.add(ring);
      
      // Heavy Crown & Flukes (Stockless design)
      const crown = new THREE.Mesh(new THREE.BoxGeometry(8, 4, 4), mats.steelMid);
      crown.position.y = -7;
      anchor.add(crown);

      const flukeGeo = new THREE.BoxGeometry(2, 8, 1);
      const flukeL = new THREE.Mesh(flukeGeo, mats.steelMid);
      flukeL.position.set(3, -5, 0);
      flukeL.rotation.z = 0.3;
      anchor.add(flukeL);

      const flukeR = flukeL.clone();
      flukeR.position.x = -3;
      flukeR.rotation.z = -0.3;
      anchor.add(flukeR);
      
      const hawse = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.3, 8, 24), mats.hullBlk);
      hawse.position.set(96, 4, 8.8 * side);
      hawse.rotation.y = Math.PI / 2;
      ship.add(hawse);
      
      return anchor;
    };
    ship.add(makeAnchor(1));
    ship.add(makeAnchor(-1));

    // Plimsoll Mark (Visual)
    const plimsollGroup = new THREE.Group();
    ship.add(plimsollGroup);
    const plimsollMat = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });
    
    const makePlimsoll = (side: number) => {
      const g = new THREE.Group();
      g.position.set(0, -1, 16.1 * side);
      
      // Circle
      const circleGeo = new THREE.TorusGeometry(1.2, 0.15, 8, 32);
      const circle = new THREE.Mesh(circleGeo, plimsollMat);
      circle.rotation.y = side === 1 ? 0 : Math.PI;
      g.add(circle);
      
      // Horizontal Line
      const lineGeo = new THREE.BoxGeometry(4, 0.3, 0.1);
      const line = new THREE.Mesh(lineGeo, plimsollMat);
      g.add(line);
      
      return g;
    };
    plimsollGroup.add(makePlimsoll(1));
    plimsollGroup.add(makePlimsoll(-1));

    // Draft Marks (Visual)
    const draftGroup = new THREE.Group();
    ship.add(draftGroup);
    const draftMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    
    const makeDraftMarks = (side: number) => {
      const g = new THREE.Group();
      g.position.set(104, -5, 3.5 * side);
      
      for (let i = 0; i < 8; i++) {
        const line = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.2, 0.1), draftMat);
        line.position.y = i * 1.5;
        g.add(line);
      }
      return g;
    };
    draftGroup.add(makeDraftMarks(1));
    draftGroup.add(makeDraftMarks(-1));

    // --- HOTSPOTS ---
    const addHotspot = (x: number, y: number, z: number, data: HotspotData) => {
      const g = new THREE.SphereGeometry(3, 16, 16);
      const m = mats.hotspot.clone();
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set(x, y, z);
      mesh.userData = data;
      ship.add(mesh);
      hotspotsRef.current.push(mesh);
    };

    addHotspot(0, -1, 16.2, HOTSPOTS[0]); // Plimsoll
    addHotspot(0, 14.2, 0, HOTSPOTS[1]);  // Hatches
    addHotspot(88, 16, 7, HOTSPOTS[2]);   // Windlass
    addHotspot(106, 4, 8, HOTSPOTS[3]);    // Anchor
    addHotspot(96, -2.5, 0, HOTSPOTS[4]); // Bow Thruster
    addHotspot(-111, 40, 0, HOTSPOTS[5]);  // Funnel
    addHotspot(-105, 25, 0, HOTSPOTS[6]);  // Superstructure
    addHotspot(-105, 21, 15.5, HOTSPOTS[7]); // Lifeboat
    addHotspot(-115, -5, 0, HOTSPOTS[8]); // Propeller - Moved further back and down
    addHotspot(0, 12.5, 15, HOTSPOTS[9]); // Bunker
    addHotspot(112, -2, 4, HOTSPOTS[10]); // Draft Marks Bow
    addHotspot(-60, 8, 16.2, HOTSPOTS[11]); // Accommodation Ladder - Moved slightly up
    addHotspot(-95, 48, 0, HOTSPOTS[12]); // Radar Mast
    addHotspot(77, 14, 0, HOTSPOTS[13]); // Forecastle
    addHotspot(0, 11.5, 16, HOTSPOTS[14]); // Bulwark

    // --- INTERIOR (X-Ray) ---
    const interior = new THREE.Group();
    interior.visible = false;
    ship.add(interior);
    interiorRef.current = interior;
    const iMat = new THREE.MeshStandardMaterial({ color: 0x4a6a88, transparent: true, opacity: 0.55 });
    for (let x of [68, 44, 16, -12, -40, -65, -80]) {
      const bh = new THREE.Mesh(new THREE.BoxGeometry(0.5, 20, 30), iMat);
      bh.position.set(x, 0, 0);
      interior.add(bh);
    }

    // --- OCEAN ---
    const oceanGeom = new THREE.PlaneGeometry(4000, 4000, 64, 64);
    const ocean = new THREE.Mesh(oceanGeom, new THREE.MeshStandardMaterial({
      color: 0x1a4060, roughness: 0.06, metalness: 0.18, transparent: true, opacity: 0.88
    }));
    ocean.rotation.x = -Math.PI / 2;
    ocean.position.y = -9.5;
    scene.add(ocean);
    const oceanPosAttr = oceanGeom.attributes.position;
    const initialOceanY = new Float32Array(oceanPosAttr.count);
    for (let i = 0; i < oceanPosAttr.count; i++) initialOceanY[i] = oceanPosAttr.getY(i);

    // --- INTERACTION ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (e: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hotspotsRef.current);

      if (intersects.length > 0) {
        const obj = intersects[0].object as THREE.Mesh;
        (obj.material as THREE.MeshBasicMaterial).opacity = 0.9;
        setTooltip({ name: obj.userData.name, x: e.clientX, y: e.clientY });
        containerRef.current!.style.cursor = 'pointer';
      } else {
        hotspotsRef.current.forEach(h => (h.material as THREE.MeshBasicMaterial).opacity = 0.6);
        setTooltip(null);
        containerRef.current!.style.cursor = 'grab';
      }
    };

    const onClick = (e: MouseEvent) => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(hotspotsRef.current);
      if (intersects.length > 0) {
        const data = intersects[0].object.userData as HotspotData;
        navigate(`/term/${data.slug}/`);
      }
    };

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);

    // --- ANIMATION ---
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Gentle ship roll
      ship.rotation.z = Math.sin(time * 0.22) * 0.008;
      ship.rotation.x = Math.sin(time * 0.15) * 0.003;

      // Propeller spin
      propGroup.rotation.x += 0.04;

      // Radar rotation
      radar1.rotation.y += 0.03;
      radar2.rotation.y += 0.02;

      // Smoke animation
      const positions = smokeGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < smokeCount; i++) {
        positions[i * 3 + 1] += 0.1 + Math.random() * 0.05; // Y
        if (positions[i * 3 + 1] > 26) {
          positions[i * 3 + 1] = 0;
          positions[i * 3] = (Math.random() - 0.5) * 3.5; // X
          positions[i * 3 + 2] = (Math.random() - 0.5) * 3.5; // Z
        }
        positions[i * 3] += Math.sin(time + i * 0.4) * 0.02;
      }
      smokeGeo.attributes.position.needsUpdate = true;

      // Ocean waves
      for (let i = 0; i < oceanPosAttr.count; i++) {
        const x = oceanPosAttr.getX(i);
        const z = oceanPosAttr.getZ(i);
        oceanPosAttr.setY(i, initialOceanY[i] + Math.sin(x * 0.009 + time) * 0.9 + Math.cos(z * 0.013 + time * 0.7) * 0.65);
      }
      oceanPosAttr.needsUpdate = true;

      // Hotspot pulse
      hotspotsRef.current.forEach((h, i) => {
        const s = 1 + Math.sin(time * 4 + i) * 0.25;
        h.scale.set(s, s, s);
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Loading simulation
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return p + 3 + Math.random() * 8;
      });
    }, 50);

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  // Handle X-Ray toggle
  useEffect(() => {
    if (interiorRef.current) interiorRef.current.visible = xray;
    hullMeshesRef.current.forEach(m => {
      const mat = m.material as THREE.MeshStandardMaterial;
      mat.transparent = xray;
      mat.opacity = xray ? 0.18 : 1.0;
      mat.depthWrite = !xray;
      mat.needsUpdate = true;
    });
  }, [xray]);

  // Handle View Change
  const setView = (view: string) => {
    setCurrentView(view);
    const preset = CAM_PRESETS[view];
    if (preset && controlsRef.current && cameraRef.current) {
      // Smoothly move camera
      const targetPos = new THREE.Vector3(
        preset.r * Math.sin(preset.ph) * Math.sin(preset.th) + preset.tx,
        preset.r * Math.cos(preset.ph) + preset.ty,
        preset.r * Math.sin(preset.ph) * Math.cos(preset.th) + preset.tz
      );
      cameraRef.current.position.copy(targetPos);
      controlsRef.current.target.set(preset.tx, preset.ty, preset.tz);
      controlsRef.current.update();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full h-[800px] bg-[#040d18] rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl font-mono text-[#a8c8e0]">
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Loading Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-[#030b14] flex flex-col items-center justify-center p-12 text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="mb-12 text-[#c89a3c]/10"
            >
              <Anchor size={200} />
            </motion.div>
            <h2 className="text-6xl font-black text-[#c89a3c] tracking-tighter mb-4 italic uppercase font-bebas">MV ATHENA</h2>
            <p className="text-[#a8c8e0]/30 text-xs uppercase tracking-[0.6em] mb-16 font-bold">HANDYMAX BULK CARRIER · 56 000 DWT</p>
            
            <div className="w-full max-w-lg h-px bg-[#c89a3c]/10 rounded-full overflow-hidden mb-6">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#c89a3c] to-[#f0c060]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[10px] font-black text-[#a8c8e0]/20 uppercase tracking-widest">
              LOADING HULL SYSTEMS: {Math.round(progress)}%
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Top HUD */}
      <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-start pointer-events-none z-10 bg-gradient-to-b from-[#030b14]/90 to-transparent">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-4 mb-1 pointer-events-auto">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 bg-[#c89a3c]/10 hover:bg-[#c89a3c]/20 text-[#c89a3c] rounded-lg transition-all border border-[#c89a3c]/20"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-3xl font-black text-[#c89a3c] tracking-widest italic uppercase font-bebas">MV ATHENA</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#a8c8e0]/40 text-[10px] font-bold uppercase tracking-[0.2em]">HANDYMAX BULK CARRIER · CLASS BV · FLAG LIBERIA</span>
          </div>
        </div>

        <div className="flex flex-col gap-2 pointer-events-auto">
          <button 
            onClick={() => setXray(!xray)}
            className={cn(
              "flex items-center gap-3 px-4 py-2 bg-[#030b14]/90 backdrop-blur-xl border rounded-lg text-[10px] font-black uppercase tracking-widest transition-all shadow-xl",
              xray ? "border-[#c89a3c] text-[#c89a3c]" : "border-[#c89a3c]/20 text-[#a8c8e0]/50"
            )}
          >
            {xray ? <EyeOff size={14} /> : <Eye size={14} />}
            X-Ray Hull
          </button>
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            style={{ left: tooltip.x + 20, top: tooltip.y - 20 }}
            className="fixed z-[90] bg-[#030b14]/95 border border-[#c89a3c]/40 text-[#c89a3c] px-4 py-2 rounded text-[10px] font-black uppercase tracking-widest pointer-events-none shadow-2xl"
          >
            {tooltip.name}
          </motion.div>
        )}
      </AnimatePresence>

      {/* View Selector */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2 pointer-events-auto">
        {Object.keys(CAM_PRESETS).map((view) => (
          <button
            key={view}
            onClick={() => setView(view)}
            className={cn(
              "px-4 py-2 bg-[#030b14]/80 backdrop-blur-md border rounded text-[10px] font-black uppercase tracking-widest transition-all",
              currentView === view ? "border-[#c89a3c] text-[#c89a3c]" : "border-[#c89a3c]/20 text-[#a8c8e0]/40"
            )}
          >
            {view} View
          </button>
        ))}
      </div>

      {/* Bottom HUD */}
      <div className="absolute bottom-8 left-8 z-10 flex items-center gap-8 pointer-events-none text-[10px] tracking-widest">
        <div className="flex gap-4">
          <span>HDG <b className="text-[#c89a3c] font-normal">142°</b></span>
          <span>SOG <b className="text-[#c89a3c] font-normal">13.8 kn</b></span>
          <span>RPM <b className="text-[#c89a3c] font-normal">105</b></span>
          <span>DRAFT <b className="text-[#c89a3c] font-normal">10.4 m</b></span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[9px] text-[#a8c8e0]/20 tracking-widest uppercase">
        drag·rotate &nbsp;|&nbsp; scroll·zoom &nbsp;|&nbsp; right·pan &nbsp;|&nbsp; click·inspect
      </div>
      {/* Lexicon Section */}
      <div id="lexicon-section" className="bg-[#020810] border-t border-slate-800 p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-[#c89a3c]/10 rounded-xl">
              <Compass className="text-[#c89a3c]" size={32} />
            </div>
            <div>
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase font-bebas">Maritime Lexicon</h2>
              <p className="text-[#a8c8e0]/40 text-xs uppercase tracking-widest font-bold">Standardized Vessel Terminology & Definitions</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOTSPOTS.map((term, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 bg-[#030b14] border border-slate-800/50 rounded-2xl hover:border-[#c89a3c]/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{term.ico}</span>
                  <span className="text-[9px] font-black text-[#c89a3c]/40 uppercase tracking-widest border border-[#c89a3c]/10 px-2 py-1 rounded">{term.cat}</span>
                </div>
                <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2 font-bebas">{term.name}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{term.txt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
