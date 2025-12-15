export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  image: string;
  goal?: string;
  role?: string;
  pipeline?: string;
  techHighlights?: string[];
  performanceNotes?: string;
  media?: string;
  lessonsLearned?: string;
}

export const projects: Project[] = [
  {
    id: "ue5-environment-optimization",
    title: "UE5 Environment Optimization Slice",
    category: "Performance",
    summary: "Vertical slice optimization showcasing LODs, texel density, and lighting bakes.",
    tags: ["UE5", "Optimization", "LODs", "Lighting"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1000",
    goal: "Achieve 60 FPS on mid-range hardware for a high-fidelity forest environment.",
    role: "Technical Artist",
    pipeline: "Blender -> UE5 -> RenderDoc",
    techHighlights: [
      "Implemented HLODs for distant geometry",
      "Standardized texel density to 5.12 px/cm",
      "Baked static lighting with GPU Lightmass",
      "Configured Soft Object References to reduce memory footprint"
    ],
    performanceNotes: "Reduced draw calls from 3500 to 1200. GPU time per frame dropped from 22ms to 14ms.",
    lessonsLearned: "Importance of establishing triangle budgets early in the production phase."
  },
  {
    id: "master-material-breakdown",
    title: "Master Material + Instances Breakdown",
    category: "Shaders",
    summary: "Modular master material handling 90% of game assets with optimized complexity.",
    tags: ["UE5", "Materials", "Shaders", "Blueprints"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000",
    goal: "Create a single uber-shader that supports vertex painting, detail maps, and weather effects.",
    role: "Technical Artist",
    pipeline: "UE5 Material Editor",
    techHighlights: [
      "Used Material Layers for non-destructive blending",
      "Implemented cheap contrast function for better blending",
      "Static Switch Parameters for cost-saving feature toggles"
    ],
    performanceNotes: "Base instruction count kept under 120 instructions for opaque materials.",
    lessonsLearned: "Balancing flexibility with shader complexity is key for artist adoption."
  },
  {
    id: "niagara-vfx-mini",
    title: "Niagara VFX Mini Series",
    category: "VFX",
    summary: "Collection of performant particle effects using GPU simulation.",
    tags: ["Niagara", "VFX", "Simulation", "Real-time"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    goal: "Create cinematic quality VFX that run efficiently on console targets.",
    role: "VFX Artist / Tech Art",
    pipeline: "Houdini -> UE5 Niagara",
    techHighlights: [
      "GPU simulation for high particle counts",
      "Distance culling implementation",
      "Texture atlas usage for varied smoke sprites"
    ],
    performanceNotes: "Maintained >60FPS with 50k active particles in scene.",
    lessonsLearned: "Overdraw is the silent killer in VFX performance."
  },
  {
    id: "blender-ue5-pipeline",
    title: "Blender → UE5 Asset Pipeline",
    category: "Tools",
    summary: "Automated pipeline for correct scaling, pivoting, and naming conventions.",
    tags: ["Python", "Blender", "Automation", "Tools"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
    goal: "Eliminate manual import errors and standardize asset setup.",
    role: "Tools Programmer",
    pipeline: "Python Scripting",
    techHighlights: [
      "One-click export with correct .fbx settings",
      "Automatic collision mesh generation based on suffix",
      "LOD chain auto-naming"
    ],
    performanceNotes: "Reduced asset import time by roughly 40% per asset.",
    lessonsLearned: "Artists will only use tools if they are faster than the manual way."
  },
  {
    id: "profiling-fps-case-study",
    title: "Profiling & FPS Improvement",
    category: "Optimization",
    summary: "Deep dive into Unreal Insights to identify and fix a major bottleneck.",
    tags: ["Unreal Insights", "RenderDoc", "Profiling", "C++"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    goal: "Identify the cause of a 200ms hitch during streaming.",
    role: "Technical Artist",
    pipeline: "Unreal Insights, csv profile",
    techHighlights: [
      "Identified texture streaming pool exhaustion",
      "Analyzed Tick time for expensive actors",
      "Optimized skeletal mesh update rates"
    ],
    performanceNotes: "Eliminated the hitch entirely. Stabilized frametime to 16.6ms.",
    lessonsLearned: "Don't guess; profile first."
  },
  {
    id: "naming-validator-tool",
    title: "Naming Validator / Budget Calculator",
    category: "Tools",
    summary: "Editor Utility Widget to enforce project naming conventions and polygon budgets.",
    tags: ["Blueprints", "Editor Utility", "UI", "Quality Control"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    goal: "Keep the project clean and within memory budgets automatically.",
    role: "Tools Developer",
    pipeline: "UE5 Editor Utility Widgets",
    techHighlights: [
      "Regex pattern matching for asset names",
      "Visual warning system for high-poly assets",
      "Batch renaming functionality"
    ],
    performanceNotes: "N/A (Editor Tool)",
    lessonsLearned: "Immediate feedback loops prevent technical debt buildup."
  }
];

export const skills = [
  { category: "Core Engines", items: ["Unreal Engine 5", "Unity (legacy)"] },
  { category: "DCC Tools", items: ["Blender", "Houdini", "Substance Designer", "Photoshop"] },
  { category: "Programming", items: ["Python", "HLSL/GLSL", "Blueprints", "C++ (Basic)"] },
  { category: "Performance", items: ["RenderDoc", "Unreal Insights", "GPU Profiling", "LOD Management"] }
];

export const site = {
  resumeUrl: "/resume.pdf"
};
