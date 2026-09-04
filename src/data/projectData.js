// ============================================================
// PROJECT DATA — Edit this file to update project information
// ============================================================

export const projectData = {
  name: "Legal Metrology Compliance Scanner",
  tagline: "Scan. Detect. Validate.",
  subtitle:
    "Transforming packaged commodity inspection into a faster, smarter and evidence-backed process.",
  sihYear: "2026",
  problemStatementId: "26034",
  teamName: "D-VISTA",
  githubUrl: "#",
  linkedinUrl: "#",
  contactEmail: "team@inspectai.dev",

  mandatoryFields: [
    "MRP",
    "Net Quantity",
    "Manufacturing / Import Date",
    "Batch Number",
    "Manufacturer / Packer / Importer Name",
    "Manufacturer Address",
    "Consumer Care Details",
    "Country of Origin",
  ],

  problems: [
    {
      icon: "Clock",
      title: "Slow Inspection Process",
      desc: "Manual label reading consumes significant officer time per product.",
    },
    {
      icon: "UserX",
      title: "Manual Verification",
      desc: "Each field must be checked individually, leading to oversight.",
    },
    {
      icon: "AlertTriangle",
      title: "Human Inconsistency",
      desc: "Results vary across officers, batches and inspection sessions.",
    },
    {
      icon: "BarChart2",
      title: "Limited Coverage",
      desc: "Officers can only inspect a fraction of available products.",
    },
    {
      icon: "FileX",
      title: "Evidence Management",
      desc: "Linking physical evidence to documented violations is difficult.",
    },
    {
      icon: "BookOpen",
      title: "Time-Consuming Documentation",
      desc: "Preparing compliance reports takes hours of manual effort.",
    },
  ],

  innovations: [
    {
      icon: "Scan",
      title: "Adaptive Product Scanning",
      desc: "Capture only the information required for inspection. Smart cropping and focus on label regions.",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: "Zap",
      title: "Early Detection & Reduced Scanning",
      desc: "Avoid repeated scanning when required information is already extracted and validated.",
      gradient: "from-violet-500 to-purple-400",
    },
    {
      icon: "Tag",
      title: "SKU + Batch-Level Tracking",
      desc: "Track products at batch level instead of relying only on product names for accurate enforcement.",
      gradient: "from-amber-500 to-orange-400",
    },
    {
      icon: "CheckSquare",
      title: "Smart Spot Checking",
      desc: "Support efficient verification of repeated product units across multiple batches.",
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      icon: "Shield",
      title: "Evidence-Backed Compliance",
      desc: "Every inspection result is connected with visual evidence from the product label.",
      gradient: "from-rose-500 to-pink-400",
    },
    {
      icon: "Layers",
      title: "Text + Image Verification",
      desc: "Support verification of product information across text extraction and visual image sources.",
      gradient: "from-sky-500 to-blue-400",
    },
    {
      icon: "TrendingUp",
      title: "Inspection Intelligence",
      desc: "Help identify violation patterns and prioritize inspections based on compliance data.",
      gradient: "from-indigo-500 to-violet-400",
    },
  ],

  workflowSteps: [
    {
      id: 1,
      title: "Start Inspection",
      desc: "Officer initiates a new inspection session in the system.",
      icon: "PlayCircle",
    },
    {
      id: 2,
      title: "Scan Product",
      desc: "Product barcode or SKU is scanned to retrieve product profile.",
      icon: "Scan",
    },
    {
      id: 3,
      title: "Capture Product Label",
      desc: "Camera captures the product packaging for label analysis.",
      icon: "Camera",
    },
    {
      id: 4,
      title: "OCR Text Detection",
      desc: "Optical Character Recognition extracts all visible text from the label.",
      icon: "Type",
    },
    {
      id: 5,
      title: "Field Extraction",
      desc: "Intelligent parsing identifies mandatory declaration fields.",
      icon: "Search",
    },
    {
      id: 6,
      title: "Compliance Validation",
      desc: "Extracted values are validated against legal metrology rules.",
      icon: "CheckCircle",
    },
    {
      id: 7,
      title: "Violation Detection",
      desc: "Missing or invalid declarations are flagged with details.",
      icon: "AlertOctagon",
    },
    {
      id: 8,
      title: "Evidence-Based Report",
      desc: "Compliance report generated with linked image evidence.",
      icon: "FileText",
    },
    {
      id: 9,
      title: "Dashboard Update",
      desc: "Inspection results update the analytics dashboard in real time.",
      icon: "BarChart2",
    },
  ],

  // journey: [
  //   {
  //     step: 1,
  //     title: "Problem Selection",
  //     date: "#" ,
  //     desc: "Identified Legal Metrology enforcement as a critical pain point for inspectors across India.",
  //     icon: "Target",
  //   },
  //   {
  //     step: 2,
  //     title: "Research & Analysis",
  //     date: "#" ,
  //     desc: "Studied existing inspection workflows and spoke with domain experts.",
  //     icon: "BookOpen",
  //   },
  //   {
  //     step: 3,
  //     title: "Legal Metrology Requirements",
  //     date: "#" ,
  //     desc: "Mapped all mandatory declaration fields under Legal Metrology (Packaged Commodities) Rules.",
  //     icon: "Scale",
  //   },
  //   {
  //     step: 4,
  //     title: "Identifying Challenges",
  //     date:"#" ,
  //     desc: "Documented the key bottlenecks in current manual inspection processes.",
  //     icon: "AlertTriangle",
  //   },
  //   {
  //     step: 5,
  //     title: "Solution Design",
  //     date: "#" ,
  //     desc: "Designed the inspection assistance workflow, data model and UI/UX.",
  //     icon: "Layers",
  //   },
  //   {
  //     step: 6,
  //     title: "Prototype Development",
  //     date: "#" ,
  //     desc: "Built the core prototype with OCR pipeline, validation engine and reporting.",
  //     icon: "Code2",
  //   },
  //   {
  //     step: 7,
  //     title: "Testing & Improvements",
  //     date: "#" ,
  //     desc: "Tested with real product samples, refined accuracy and improved UI.",
  //     icon: "TestTube",
  //   },
  //   {
  //     step: 8,
  //     title: "SIH 2026",
  //     date: "#" ,
  //     desc: "Presenting our solution to national judges and mentors at Smart India Hackathon 2026.",
  //     icon: "Trophy",
  //   },
  // ],

  // impact: [
  //   { value: "70%", label: "Faster Inspection", icon: "Zap" },
  //   { value: "500+", label: "Products Processable", icon: "Package" },
  //   { value: "8", label: "Compliance Fields Checked", icon: "CheckCircle" },
  //   { value: "3×", label: "Coverage Increase", icon: "TrendingUp" },
  //   { value: "90%", label: "Reduced Documentation Time", icon: "Clock" },
  //   { value: "100%", label: "Evidence-Backed Reports", icon: "Shield" },
  // ],
};
