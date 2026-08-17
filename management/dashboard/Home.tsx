import { useMemo, useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { publicIndexCrossReferences, publicIndexMeta, publicRecords } from "@shared/publicIndex";
import { assuranceRoadmap } from "@shared/assuranceRoadmap";
import { observabilitySloDefinitions, repositorySensitivityCatalog } from "@shared/p1Governance";
import { vaultProviderGates, vaultProviderGateMeta } from "@shared/vaultProviderGate";
import { competitiveCapabilityLabels, competitiveRecords, competitiveScenarios, type CompetitiveCapability } from "@shared/competitiveStudy";
import { calculateWeightedCoverage } from "@shared/competitiveScoring";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleAlert,
  CircleDot,
  CircleDashed,
  ClipboardCheck,
  Download,
  CloudOff,
  Code2,
  ExternalLink,
  FileCheck2,
  GitBranch,
  GitCommitHorizontal,
  GitPullRequest,
  Layers3,
  LockKeyhole,
  Menu,
  RadioTower,
  Search,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";

const heroImage = "/assets/castuo-hero.jpg";
const textureImage = "/assets/castuo-evidence-texture.png";
const flowImage = "/assets/castuo-flow-diagram.png";
const markImage = "/assets/castuo-mark.png";

const repositoryMap = [
  { name: "Castuo-system", role: "CORE PLATFORM", state: "CURRENT", note: "Dashboard + bounded execution", tone: "current" },
  { name: "castuo-evolution", role: "GOVERNANCE", state: "CURRENT", note: "Vocabulary, gates, evidence", tone: "current" },
  { name: "Cast-o", role: "ASSURANCE", state: "CURRENT", note: "Tests + provenance", tone: "current" },
  { name: "castuo-agro-edge", role: "EDGE / IOT", state: "SCOPED", note: "Offline buffer + MQTT", tone: "verified" },
  { name: "castuo-offline-field-operations", role: "FIELD OPS", state: "SCOPED", note: "Local workflow + recovery", tone: "pending" },
  { name: "goldfish", role: "ASSURANCE / RECOVERY", state: "PENDING", note: "Security + restore evidence", tone: "blocked" },
  { name: "ctaex-iot-pilot", role: "LABORATORY", state: "EXPERIMENTAL", note: "Connectivity-loss validation", tone: "pending" },
  { name: "agrovision-360", role: "EXPERIMENTAL", state: "EXPERIMENTAL", note: "Vision + drift research", tone: "pending" },
  { name: "castuo-strategy-knowledge-base", role: "STRATEGY", state: "PENDING", note: "Canonicality decision", tone: "blocked" },
  { name: "copia-de-cast-o-system-strategy-knowledge-base", role: "STRATEGY COPY", state: "ARCHIVE / SYNC", note: "Duplicate boundary", tone: "blocked" },
  { name: "castuo-360-v5.3", role: "WORKSPACE", state: "WORKSPACE", note: "Integrated experience", tone: "pending" },
  { name: "-Prueba-final", role: "SANDBOX", state: "EXPERIMENTAL", note: "Integration only", tone: "pending" },
  { name: "desktop-tutorial", role: "ENABLEMENT", state: "PENDING", note: "Contribution training", tone: "pending" },
  { name: "n8n", role: "UPSTREAM / FORK", state: "GOVERNED", note: "External capability boundary", tone: "pending" },
  { name: "openclaw", role: "UPSTREAM / FORK", state: "GOVERNED", note: "External capability boundary", tone: "pending" },
  { name: "Traky12", role: "ECOSYSTEM MANAGER", state: "CURRENT", note: "Public map + profile boundary", tone: "current" },
];

const integratedSystems = [
  { id: "SYS-V6", name: "CASTUO-SYSTEM v6", source: "CASTUOSYSTEMv6.html", role: "OPERATIONS / CONTROL PLANE", state: "MAPPED", tone: "verified", capabilities: "Field ops · IoT · irrigation · bioenergy", risk: "Raw artifact contains direct API fetches and innerHTML; reference-only until backend boundary is enforced." },
  { id: "SYS-QNT", name: "Quantum / Decision Layer", source: "quantum.html", role: "QUANTUM / ASSURANCE", state: "MAPPED", tone: "pending", capabilities: "Decision support · simulation · assurance", risk: "Capabilities need contract, evidence scope and reproducible runtime before promotion." },
  { id: "SYS-SAAS", name: "CASTÚO SaaS Platform", source: "CASTUO-SAAS-PLATFORM.html", role: "SAAS / FIELD PLATFORM", state: "SECURITY HOLD", tone: "blocked", capabilities: "Field notebook · traceability · integrations", risk: "Raw artifact stores API keys in localStorage and calls provider APIs from the browser; never deploy as-is." },
];

const credentialConnectors = [
  { id: "mistral", label: "Mistral AI EU", scope: "Decision support / SABIONDA", state: "NOT CONNECTED", risk: "Secret stays server-side", reference: "vault://castuo/mistral" },
  { id: "stripe", label: "Stripe", scope: "Billing / subscriptions", state: "NOT CONNECTED", risk: "Secret stays server-side", reference: "vault://castuo/stripe" },
  { id: "telegram", label: "Telegram", scope: "Operational notifications", state: "NOT CONNECTED", risk: "Bot token never enters browser", reference: "vault://castuo/telegram" },
  { id: "aemet", label: "AEMET", scope: "Weather context", state: "NOT CONNECTED", risk: "Backend proxy required", reference: "vault://castuo/aemet" },
];

const quantumScenarios = {
  resilient: { label: "Resilient field route", description: "Prioritise continuity under connectivity loss.", weights: [0.84, 0.72, 0.63] },
  assurance: { label: "Assurance-first promotion", description: "Prioritise evidence closure before promotion.", weights: [0.58, 0.91, 0.77] },
  resource: { label: "Resource-aware operation", description: "Prioritise energy and operational efficiency.", weights: [0.69, 0.62, 0.88] },
} as const;

const quantumEvidenceMetrics = [
  { label: "Field runs", value: 0, max: 12, status: "NO FIELD EVIDENCE" },
  { label: "Independent reviews", value: 0, max: 2, status: "REVIEW PENDING" },
  { label: "Signed evidence packets", value: 0, max: 3, status: "NO CLAIM" },
];

const assuranceProfile = [
  { label: "Architecture", value: 82, state: "CURRENT", tone: "blue" },
  { label: "Evidence", value: 68, state: "PARTIAL", tone: "sage" },
  { label: "Security", value: 54, state: "PARTIAL", tone: "amber" },
  { label: "Reproducibility", value: 46, state: "PARTIAL", tone: "blue" },
  { label: "Operations", value: 34, state: "PENDING", tone: "coral" },
  { label: "Commercial", value: 12, state: "NOT CLAIMED", tone: "coral" },
  { label: "Independent review", value: 0, state: "PENDING", tone: "coral" },
];

const capabilities = [
  { id: "CAP-OFFLINE-001", name: "Offline field continuity", gate: "G0", maturity: "N1", status: "verified", detail: "SQLite buffer → pending → POST → ACK", evidence: "EVID-EDGE-RUNTIME-001" },
  { id: "CAP-EVENT-001", name: "Canonical event ingestion", gate: "G0", maturity: "N1", status: "mapped", detail: "Source event normalisation is traced to edge", evidence: "EVID-CONTRACT-001" },
  { id: "CAP-VENDOR-001", name: "Vendor-independent validation", gate: "G0", maturity: "N1", status: "verified", detail: "Synthetic parity across two adapters", evidence: "EVID-VENDOR-001" },
  { id: "CAP-OBS-001", name: "Capability observability", gate: "G0", maturity: "N1", status: "blocked", detail: "Prometheus/Grafana documented, runtime pending", evidence: "EVID-OBS-DOC-001" },
  { id: "CAP-GOV-001", name: "Maturity gate promotion", gate: "G1", maturity: "N2", status: "mapped", detail: "N1–N6 with G0–G7 and GREEN-T/E/P", evidence: "EVID-PORTFOLIO-001" },
  { id: "CAP-EVIDENCE-001", name: "Evidence passport", gate: "G1", maturity: "N2", status: "mapped", detail: "Capability, contract, test, claim linkage", evidence: "EVID-VERTICAL-001" },
];

const evidence = [
  { code: "01", label: "SOURCE", title: "Field observation fixture", meta: "source-event-001.json", state: "verified", icon: RadioTower },
  { code: "02", label: "EVENT", title: "Canonical event v1", meta: "schema contract", state: "verified", icon: GitBranch },
  { code: "03", label: "EVIDENCE", title: "Runtime slice", meta: "enqueue → pending → POST → ACK", state: "verified", icon: FileCheck2 },
  { code: "04", label: "BENCHMARK", title: "Vendor parity", meta: "synthetic contract parity", state: "verified", icon: ClipboardCheck },
  { code: "05", label: "PASSPORT", title: "Promotion dossier", meta: "scope still local", state: "pending", icon: BookOpen },
  { code: "06", label: "CLAIM", title: "No premature claim", meta: "default-deny policy", state: "blocked", icon: ShieldCheck },
];

const progressHistory = [
  { date: "17 AUG 2026", code: "EVID-07", title: "Observability mapped", copy: "goldfish monitoring paths documented; runtime proof remains pending.", state: "blocked" },
  { date: "17 AUG 2026", code: "EVID-06", title: "Vendor parity passed", copy: "Synthetic contract parity verified across edge and in-memory adapters.", state: "verified" },
  { date: "17 AUG 2026", code: "EVID-05", title: "Runtime slice passed", copy: "SQLite buffer → pending → POST → ACK verified against source commit.", state: "verified" },
  { date: "17 AUG 2026", code: "CI-04", title: "Remote gate still blocked", copy: "Run starts, then no steps are recorded; checks:read remains unavailable.", state: "blocked" },
  { date: "16 AUG 2026", code: "CTRL-03", title: "Control plane published", copy: "Six capabilities, six contracts, seven evidence items and six risks linked.", state: "verified" },
];

const ciWorkflows = [
  { name: "CI Gate", run: "32050460088", job: "Validate docs + core pytest", state: "failure", detail: "El job terminó en failure sin pasos registrados; el detalle de logs no está disponible con el permiso actual.", url: "https://github.com/Traky12/Castuo-system/actions/runs/32050460088" },
  { name: "Evidence SEV", run: "32050459908", job: "Generate SEV package", state: "failure", detail: "El paquete SEV falló; no se muestran anotaciones porque GitHub devuelve 403 al consultar Checks.", url: "https://github.com/Traky12/Castuo-system/actions/runs/32050459908" },
  { name: "CASTÚO architecture surface check", run: "32050459881", job: "surface-check", state: "failure", detail: "La comprobación de superficie terminó en failure; la causa raíz requiere logs del job.", url: "https://github.com/Traky12/Castuo-system/actions/runs/32050459881" },
  { name: "portfolio-control-plane", run: "32050459871", job: "validate-portfolio", state: "failure", detail: "El validador remoto terminó en failure; localmente el mismo control plane pasa.", url: "https://github.com/Traky12/Castuo-system/actions/runs/32050459871" },
  { name: "Evidence Matrix", run: "32050459818", job: "Validate taxonomy and regenerate check", state: "failure", detail: "La matriz de evidencia terminó en failure; no se atribuye una causa sin log accesible.", url: "https://github.com/Traky12/Castuo-system/actions/runs/32050459818" },
  { name: "External Evidence (strict)", run: "32050459807", job: "Strict external evidence verification", state: "failure", detail: "La verificación estricta terminó en failure; el resultado queda bloqueado para revisión.", url: "https://github.com/Traky12/Castuo-system/actions/runs/32050459807" },
];

const gates = [
  { gate: "G0", label: "Evidence baseline", state: "open", copy: "Control plane and local evidence exist." },
  { gate: "G1", label: "Traceable contract", state: "open", copy: "Commits and artifacts linked." },
  { gate: "G2", label: "Independent review", state: "next", copy: "Review scope and reproduce." },
  { gate: "G3", label: "Operational proof", state: "locked", copy: "Runtime metrics and SLOs required." },
  { gate: "G4", label: "Field validation", state: "locked", copy: "MQTT, partition and conflict tests." },
];

function StatusBadge({ status }: { status: string }) {
  const labels: Record<string, string> = { verified: "VERIFIED", mapped: "MAPPED", pending: "PENDING", blocked: "BLOCKED" };
  return <span className={`status-badge status-${status}`}><span className="status-dot" />{labels[status] ?? status}</span>;
}

function Metric({ value, label, note, accent = "amber" }: { value: string; label: string; note: string; accent?: string }) {
  return <div className={`metric metric-${accent}`}><div className="metric-value">{value}</div><div className="metric-label">{label}</div><div className="metric-note">{note}</div></div>;
}

export default function Home() {
  // The useAuth hook provides authentication state.
  // To implement login/logout, call logout(), or start login from an event
  // handler: onClick={() => startLogin()} (imported from "@/const"). Never call
  // startLogin() during render (no href={startLogin()}) — it mints a one-time
  // nonce cookie and must run only at the moment of navigation.
  let { user, loading, error, isAuthenticated, logout } = useAuth();
  const connectorUtils = trpc.useUtils();
  const connectorQuery = trpc.connectors.list.useQuery(undefined, { enabled: isAuthenticated });
  const permissionQuery = trpc.permissions.mine.useQuery(undefined, { enabled: isAuthenticated });
  const credentialVersionsQuery = trpc.credentials.versions.useQuery(undefined, { enabled: isAuthenticated });
  const [auditEventType, setAuditEventType] = useState("ALL");
  const [auditFrom, setAuditFrom] = useState("");
  const [auditTo, setAuditTo] = useState("");
  const auditInput = useMemo(() => ({ eventType: auditEventType === "ALL" ? undefined : auditEventType, from: auditFrom ? new Date(`${auditFrom}T00:00:00Z`) : undefined, to: auditTo ? new Date(`${auditTo}T23:59:59Z`) : undefined }), [auditEventType, auditFrom, auditTo]);
  const auditQuery = trpc.audit.mine.useQuery(auditInput, { enabled: isAuthenticated });
  const isAdmin = isAuthenticated && user?.role === "admin";
  const rotationQuery = trpc.rotations.list.useQuery(undefined, { enabled: isAdmin });
  const rotationUtils = trpc.useUtils();
  const [rollbackMinutes, setRollbackMinutes] = useState(30);
  const rotationRequest = trpc.rotations.request.useMutation({ onSuccess: () => void rotationUtils.rotations.list.invalidate() });
  const secondApproval = trpc.rotations.approveSecond.useMutation({ onSuccess: () => void rotationUtils.rotations.list.invalidate() });
  const connectorRequest = trpc.connectors.request.useMutation({
    onSuccess: (result) => {
      setRefreshMessage(`Intent ${result.requestId} recorded — ${result.state}; secret values remain in the vault boundary.`);
      void connectorUtils.connectors.list.invalidate();
    },
    onError: (requestError) => setRefreshMessage(`Connector request blocked: ${requestError.message}`),
  });

  const [activeFilter, setActiveFilter] = useState("All capabilities");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [selectedCapability, setSelectedCapability] = useState<(typeof capabilities)[number] | null>(null);
  const [repositoryQuery, setRepositoryQuery] = useState("");
  const [repositoryFilter, setRepositoryFilter] = useState("ALL");
  const [progressFilter, setProgressFilter] = useState("ALL");
  const [publicQuery, setPublicQuery] = useState("");
  const [publicStateFilter, setPublicStateFilter] = useState("ALL");
  const [roadmapPriority, setRoadmapPriority] = useState("ALL");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState("17 AUG 2026 · 17:36 UTC");
  const [refreshMessage, setRefreshMessage] = useState("Snapshot cargado desde el control plane.");
  const [selectedConnector, setSelectedConnector] = useState(credentialConnectors[0].id);
  const [credentialView, setCredentialView] = useState<"connect" | "rotate">("connect");
  const [quantumScenario, setQuantumScenario] = useState<keyof typeof quantumScenarios>("resilient");
  const [competitiveScenario, setCompetitiveScenario] = useState<keyof typeof competitiveScenarios>("BALANCED");
  const [competitiveRegion, setCompetitiveRegion] = useState("ALL");
  const [competitiveEvidence, setCompetitiveEvidence] = useState("ALL");
  const [quantumBudget, setQuantumBudget] = useState(64);
  const [isSimulating, setIsSimulating] = useState(false);
  const [quantumResult, setQuantumResult] = useState<{ score: number; decision: string; confidence: number } | null>(null);
  const filtered = useMemo(() => {
    if (activeFilter === "All capabilities") return capabilities;
    if (activeFilter === "Verified") return capabilities.filter((item) => item.status === "verified");
    if (activeFilter === "Blocked") return capabilities.filter((item) => item.status === "blocked");
    return capabilities.filter((item) => item.maturity === activeFilter);
  }, [activeFilter]);
  const filteredRepositories = useMemo(() => repositoryMap.filter((repo) => {
    const query = repositoryQuery.trim().toLowerCase();
    const matchesQuery = !query || `${repo.name} ${repo.role} ${repo.note}`.toLowerCase().includes(query);
    const matchesState = repositoryFilter === "ALL" || repo.state === repositoryFilter;
    const matchesProgress = progressFilter === "ALL" || repo.tone === progressFilter;
    return matchesQuery && matchesState && matchesProgress;
  }), [repositoryQuery, repositoryFilter, progressFilter]);
  const filteredRoadmap = useMemo(() => assuranceRoadmap.filter((item) => roadmapPriority === "ALL" || item.priority === roadmapPriority), [roadmapPriority]);
  const filteredCompetitiveRecords = useMemo(() => competitiveRecords.filter((record) => (competitiveRegion === "ALL" || record.region === competitiveRegion) && (competitiveEvidence === "ALL" || record.evidenceStatus === competitiveEvidence)), [competitiveRegion, competitiveEvidence]);
  const filteredPublicRecords = useMemo(() => publicRecords.filter((record) => {
    const query = publicQuery.trim().toLowerCase();
    const matchesQuery = !query || `${record.title} ${record.source} ${record.recordType} ${record.limitation}`.toLowerCase().includes(query);
    const matchesState = publicStateFilter === "ALL" || record.state === publicStateFilter;
    return matchesQuery && matchesState;
  }), [publicQuery, publicStateFilter]);
  const runQuantumSimulation = () => {
    setIsSimulating(true);
    setQuantumResult(null);
    window.setTimeout(() => {
      const scenario = quantumScenarios[quantumScenario];
      const score = Math.round((scenario.weights[0] * 0.35 + scenario.weights[1] * 0.4 + scenario.weights[2] * 0.25) * quantumBudget);
      const confidence = Math.round((0.62 + scenario.weights[1] * 0.25) * 100);
      setQuantumResult({ score, confidence, decision: score >= 55 ? "Proceed with bounded review" : "Hold for evidence closure" });
      setIsSimulating(false);
    }, 560);
  };

  const refreshSnapshot = () => {
    setIsRefreshing(true);
    setRefreshMessage("Actualizando snapshot…");
    window.setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated("17 AUG 2026 · 17:42 UTC");
      setRefreshMessage("Actualización completada. No se han promovido claims.");
    }, 720);
  };

  const exportAuditCsv = () => {
    const rows = auditQuery.data ?? [];
    const header = ["createdAt", "requestId", "eventType", "outcome", "actorUserId", "redactedDetail"];
    const csv = [header, ...rows.map((row) => [new Date(row.createdAt).toISOString(), row.requestId, row.eventType, row.outcome, String(row.actorUserId), row.redactedDetail])].map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `castuo-audit-${new Date().toISOString().slice(0, 10)}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  const quantumConfidence = Math.round((0.62 + quantumScenarios[quantumScenario].weights[1] * 0.25) * 100);
  const quantumFactors = [
    { label: "Continuity", value: Math.round(quantumScenarios[quantumScenario].weights[0] * 100), tone: "blue" },
    { label: "Assurance", value: Math.round(quantumScenarios[quantumScenario].weights[1] * 100), tone: "amber" },
    { label: "Resources", value: Math.round(quantumScenarios[quantumScenario].weights[2] * 100), tone: "sage" },
  ];

  return (
    <div className="app-shell">
      <aside className={`sidebar ${mobileOpen ? "sidebar-open" : ""}`}>
        <div className="brand-lockup">
          <img src={markImage} alt="CASTÚO mark" className="brand-mark" />
          <div><div className="brand-name">CASTÚO</div><div className="brand-sub">SYSTEM / CONTROL PLANE</div></div>
          <button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={18} /></button>
        </div>
        <div className="sidebar-rule" />
        <div className="nav-label">Workspace</div>
        <nav className="nav-list" aria-label="Primary navigation">
          <a className="nav-item nav-item-active" href="#overview"><span className="nav-icon"><Layers3 size={16} /></span>Overview<span className="nav-count">01</span></a>
          <a className="nav-item" href="#ecosystem"><span className="nav-icon"><GitBranch size={16} /></span>Ecosystem map<span className="nav-count">16</span></a>
          <a className="nav-item" href="#integrations"><span className="nav-icon"><Sparkles size={16} /></span>New systems<span className="nav-count">03</span></a><a className="nav-item" href="#roadmap"><span className="nav-icon"><ClipboardCheck size={16} /></span>P0/P1/P2<span className="nav-count">12</span></a><a className="nav-item" href="#public-index"><span className="nav-icon"><BookOpen size={16} /></span>Public index<span className="nav-count">29</span></a><a className="nav-item" href="#assurance"><span className="nav-icon"><ShieldCheck size={16} /></span>Assurance<span className="nav-count">R1</span></a>
          <a className="nav-item" href="#credentials"><span className="nav-icon"><LockKeyhole size={16} /></span>Secure connectors<span className="nav-count">04</span></a><a className="nav-item" href="#audit"><span className="nav-icon"><ClipboardCheck size={16} /></span>Audit log<span className="nav-count">CSV</span></a>
          <a className="nav-item" href="#quantum"><span className="nav-icon"><CircleDot size={16} /></span>Quantum lab<span className="nav-count">LAB</span></a>
          <a className="nav-item" href="#evidence"><span className="nav-icon"><FileCheck2 size={16} /></span>Evidence chain<span className="nav-count">07</span></a>
          <a className="nav-item" href="#capabilities"><span className="nav-icon"><RadioTower size={16} /></span>Capabilities<span className="nav-count">06</span></a>
          <a className="nav-item" href="#gates"><span className="nav-icon"><GitPullRequest size={16} /></span>Promotion gates<span className="nav-count">G0</span></a>
        </nav>
        <div className="nav-label nav-label-lower">System</div>
        <nav className="nav-list">
          <a className="nav-item" href="#ci"><span className="nav-icon"><TerminalSquare size={16} /></span>CI status<span className="nav-signal signal-red" /></a>
          <a className="nav-item" href="#notes"><span className="nav-icon"><BookOpen size={16} /></span>Field notes<span className="nav-count">03</span></a>
        </nav>
        <div className="sidebar-footer">
          <div className="sidebar-foot-label">CURRENT SCOPE</div>
          <div className="scope-line"><span className="scope-dot" />Local runtime + fake backend</div>
          <div className="scope-line scope-muted">No field evidence yet</div>
        </div>
      </aside>
      {mobileOpen && <button className="sidebar-overlay" onClick={() => setMobileOpen(false)} aria-label="Close navigation overlay" />}

      <main className="main-canvas">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={20} /></button>
          <div className="breadcrumb"><span>CASTÚO-SYSTEM</span><span className="crumb-separator">/</span><strong>PROGRESS DASHBOARD</strong></div>
          <div className="topbar-actions"><div className={`sync-status ${isRefreshing ? "sync-loading" : ""}`}><span className="sync-pulse" />{isRefreshing ? "Updating" : "Updated"} <strong>{lastUpdated}</strong></div><button className="refresh-button" onClick={refreshSnapshot} disabled={isRefreshing} aria-label="Refresh dashboard snapshot"><CircleDashed size={14} className={isRefreshing ? "spin" : ""} />{isRefreshing ? "SYNCING" : "REFRESH"}</button><a className="github-link" href="https://github.com/Traky12/castuo-evolution" target="_blank" rel="noreferrer"><GitCommitHorizontal size={15} />main <ExternalLink size={12} /></a></div>
        </header>

        <section id="overview" className="hero-section">
          <div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" />EVIDENCE-FIRST / SITUATION REPORT</div>
            <h1>El sistema avanza<br /><em>cuando la evidencia</em><br />cierra el circuito.</h1>
            <p className="hero-copy">Una vista viva del progreso técnico de CASTÚO-SYSTEM. Aquí la actividad no se convierte en claim hasta que el contrato, la implementación y la prueba están unidos.</p>
            <div className="hero-actions"><a href="#evidence" className="button button-amber">Trace the evidence <ArrowUpRight size={15} /></a><a href="#gates" className="text-link">See what blocks promotion <ArrowUpRight size={14} /></a></div>
          </div>
          <div className="hero-aside"><div className="hero-aside-label">SYSTEM STATUS</div><div className="hero-status"><span className="hero-status-mark"><Check size={16} /></span><div><strong>CONTROLLED PROGRESS</strong><span>Claims remain default-deny</span></div></div><div className="hero-commit"><span>HEAD</span><code>b2ab784</code><span>EDGE TRACE</span></div></div>
          <div className="hero-coordinate">17.08<br /><span>2026</span></div>
        </section>

        <section className="metrics-strip" aria-label="Portfolio summary metrics">
          <Metric value="16" label="REPOSITORIES" note="portfolio units mapped" accent="amber" />
          <Metric value="06" label="CAPABILITIES" note="designed / tracked" accent="blue" />
          <Metric value="07" label="EVIDENCE ITEMS" note="5 linked · 2 local" accent="sage" />
          <Metric value="N1" label="MATURITY CEILING" note="promotion held at G0" accent="coral" />
          <div className="metrics-note"><span className="metrics-note-icon"><CircleAlert size={17} /></span><div><strong>One gate is still loud.</strong><span>Remote CI starts, then fails before steps are recorded.</span></div></div>
        </section>

        <section id="ecosystem" className="content-section ecosystem-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00 / ECOSYSTEM MAP</div><h2>One system.<br /><em>Many boundaries.</em></h2></div><div className="section-intro">The manager catalogs every repository without pretending that every workspace is a product or every README is evidence.</div></div><div className="repository-toolbar"><label className="repository-search"><Search size={15} /><input value={repositoryQuery} onChange={(event) => setRepositoryQuery(event.target.value)} placeholder="Search repository, role or note" /></label><select value={repositoryFilter} onChange={(event) => setRepositoryFilter(event.target.value)} aria-label="Filter repositories by management state"><option value="ALL">All management states</option><option value="CURRENT">Current</option><option value="SCOPED">Scoped</option><option value="PENDING">Pending</option><option value="EXPERIMENTAL">Experimental</option><option value="GOVERNED">Governed</option><option value="WORKSPACE">Workspace</option><option value="ARCHIVE / SYNC">Archive / sync</option></select><select value={progressFilter} onChange={(event) => setProgressFilter(event.target.value)} aria-label="Filter repositories by progress"><option value="ALL">All progress</option><option value="current">Current</option><option value="verified">Scoped / verified</option><option value="pending">Pending</option><option value="blocked">Blocked</option></select><span className="result-count">{filteredRepositories.length} / {repositoryMap.length} shown</span></div><div className="refresh-message" role="status"><span className={isRefreshing ? "status-spinner" : "status-ok"}>{isRefreshing ? <CircleDashed size={13} className="spin" /> : <Check size={13} />}</span>{refreshMessage}</div><div className="repository-grid">{filteredRepositories.map((repo) => <a className="repository-card" href={`https://github.com/Traky12/${repo.name}`} target="_blank" rel="noreferrer" key={repo.name}><div className="repository-card-top"><span className={`repo-state repo-${repo.tone}`}>{repo.state}</span><ExternalLink size={13} /></div><strong>{repo.name}</strong><span className="repo-role">{repo.role}</span><p>{repo.note}</p></a>)}</div>{filteredRepositories.length === 0 && <div className="empty-filter">No hay repositorios que coincidan con estos filtros. Prueba a limpiar la búsqueda o los estados.</div>}</section>

        <section id="public-index" className="content-section public-index-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00A / PUBLIC KNOWLEDGE & EVIDENCE INDEX</div><h2>Public read-model.<br /><em>Control plane remains authoritative.</em></h2></div><div className="section-intro">{publicIndexMeta.portfolioUnits} portfolio units · {publicIndexMeta.publicRecords} public records across {publicIndexMeta.indexedSurfaces} indexed surfaces. The index exposes only bounded, human-approved records; it never promotes private evidence, credentials or production claims.</div></div><div className="public-index-meta"><span>{publicIndexMeta.releaseState}</span><span>{publicIndexMeta.gate}</span><span>{publicIndexMeta.boundary}</span><strong>{publicIndexMeta.verifiedProductionClaims} verified production claims</strong></div><div className="public-index-toolbar"><label className="repository-search"><Search size={15} /><input value={publicQuery} onChange={(event) => setPublicQuery(event.target.value)} placeholder="Search public records, source or limitation" /></label><select value={publicStateFilter} onChange={(event) => setPublicStateFilter(event.target.value)} aria-label="Filter public records by state"><option value="ALL">All public states</option>{Array.from(new Set(publicRecords.map((record) => record.state))).sort().map((state) => <option value={state} key={state}>{state}</option>)}</select><span className="result-count">{filteredPublicRecords.length} / {publicRecords.length} records</span></div><div className="public-index-grid">{filteredPublicRecords.map((record) => <article className="public-record-card" key={record.id}><div className="public-record-top"><span className={`repo-state repo-${record.state === "BLOCKED" ? "blocked" : record.state === "EVIDENCE-SCOPED" ? "verified" : "pending"}`}>{record.state}</span><code>{String(record.id).padStart(2, "0")} / {record.recordType}</code></div><h3>{record.title}</h3><code className="public-record-source">{record.source}</code><p>{record.limitation}</p></article>)}</div><div className="public-crossref-grid">{publicIndexCrossReferences.map((reference) => <article className="public-crossref-card" key={reference.id}><div className="public-record-top"><span className="repo-state repo-blocked">{reference.state}</span><code>{reference.id}</code></div><h3>{reference.label}</h3><code className="public-record-source">{reference.source}</code><p>{reference.limitation}</p></article>)}</div></section>

        <section id="integrations" className="content-section integrations-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00B / NEW SYSTEM INTEGRATIONS</div><h2>Three systems.<br /><em>One evidence model.</em></h2></div><div className="section-intro">The uploaded artifacts are now mapped into the portfolio. Their features enter the roadmap as bounded capabilities, not as production claims.</div></div><div className="integration-grid">{integratedSystems.map((system) => <article className="integration-card" key={system.id}><div className="integration-top"><span className={`repo-state repo-${system.tone.toLowerCase()}`}>{system.state}</span><code>{system.id}</code></div><h3>{system.name}</h3><span className="integration-role">{system.role}</span><p className="integration-capabilities">{system.capabilities}</p><div className="integration-source"><span>SOURCE</span><code>{system.source}</code></div><div className={`integration-risk risk-${system.tone}`}><CircleAlert size={14} /><span>{system.risk}</span></div></article>)}</div></section>

        <section id="roadmap" className="content-section roadmap-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00B.6 / SYSTEMATIC REINFORCEMENTS</div><h2>Close the risk.<br /><em>Then earn the claim.</em></h2></div><div className="section-intro">P0 blocks promotion, P1 makes the control plane operational and P2 prepares external credibility. A planned item cannot be interpreted as evidence.</div></div><div className="roadmap-toolbar"><div className="roadmap-priority-tabs">{["ALL", "P0", "P1", "P2"].map((priority) => <button key={priority} className={roadmapPriority === priority ? "roadmap-tab active" : "roadmap-tab"} onClick={() => setRoadmapPriority(priority)}>{priority === "ALL" ? "All priorities" : priority}</button>)}</div><span className="result-count">{filteredRoadmap.length} / {assuranceRoadmap.length} controls</span></div><div className="roadmap-grid">{filteredRoadmap.map((item) => <article className={`roadmap-card roadmap-${item.priority.toLowerCase()}`} key={item.id}><div className="roadmap-card-top"><span className="roadmap-priority">{item.priority}</span><span className="roadmap-state">{item.state}</span></div><strong>{item.area}</strong><h3>{item.action}</h3><p>{item.exit}</p></article>)}</div></section>

        <section id="competitive-study" className="content-section competitive-study-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00B.7 / COMPETITIVE CAPABILITY MATRIX</div><h2>Compete on proof.<br /><em>Not on claims.</em></h2></div><div className="section-intro">Matriz binaria de capacidades: 1 = respaldada, 0 = ausente, ? = no verificable y N/A = no comparable. Las hipótesis de los adjuntos nunca se presentan como evidencia primaria.</div></div><div className="competitive-toolbar"><label>Scenario<select value={competitiveScenario} onChange={(event) => setCompetitiveScenario(event.target.value as keyof typeof competitiveScenarios)}>{Object.entries(competitiveScenarios).map(([key, scenario]) => <option value={key} key={key}>{scenario.label}</option>)}</select></label><label>Region<select value={competitiveRegion} onChange={(event) => setCompetitiveRegion(event.target.value)}><option value="ALL">All regions</option><option value="GLOBAL">Global</option><option value="EUROPE">Europe</option><option value="CASTUO">CASTÚO</option></select></label><label>Evidence<select value={competitiveEvidence} onChange={(event) => setCompetitiveEvidence(event.target.value)}><option value="ALL">All evidence states</option><option value="PRIMARY_SOURCE">Primary source</option><option value="ATTACHMENT_HYPOTHESIS">Attachment hypothesis</option><option value="LOCAL_IMPLEMENTATION">Local implementation</option></select></label><span className="result-count">{filteredCompetitiveRecords.length} / {competitiveRecords.length} records · 7 capability axes</span></div><div className="competitive-table-wrap"><table className="competitive-table"><thead><tr><th>Competitor</th><th>Weighted coverage</th>{Object.keys(competitiveCapabilityLabels).map((key) => <th key={key}>{competitiveCapabilityLabels[key as CompetitiveCapability]}</th>)}</tr></thead><tbody>{filteredCompetitiveRecords.map((record) => { const coverage = calculateWeightedCoverage(record, competitiveScenarios[competitiveScenario].weights); return <tr key={record.id}><th><strong>{record.name}</strong><small>{record.evidenceStatus.replaceAll("_", " ")}</small></th><td className="coverage-cell"><strong>{coverage.score}% proven</strong><small>{coverage.evidenceCompleteness}% evidence complete · {coverage.unknownWeight > 0 ? `${coverage.unknownWeight}w unknown` : "no unknown weight"}</small></td>{Object.keys(competitiveCapabilityLabels).map((key) => <td key={key} className={`binary-cell binary-${String(record.capabilities[key as CompetitiveCapability]).replace("?", "unknown").replace("/", "na")}`}>{String(record.capabilities[key as CompetitiveCapability])}</td>)}</tr>; })}</tbody></table></div></section>
        <section id="assurance" className="content-section assurance-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00B.5 / EXTERNAL ASSURANCE</div><h2>Make trust<br /><em>third-party readable.</em></h2></div><div className="section-intro">An assurance profile derived from concrete evidence, reproducibility, review and security. It is not a single score and never turns pending work into a claim.</div></div><div className="assurance-grid">{assuranceProfile.map((item) => <article className="assurance-row" key={item.label}><div><strong>{item.label}</strong><span>{item.state}</span></div><div className="assurance-track"><span className={`factor-fill factor-${item.tone}`} style={{ width: `${item.value}%` }} /></div><b>{item.value}%</b></article>)}</div><div className="assurance-foot"><span>GATE-R1 / EXTERNAL READABILITY</span><strong>PARTIAL</strong><span>G-COMM / COMMERCIAL EVIDENCE</span><strong>BLOCKED</strong><small>Current evidence is local and bounded. No field, paid pilot, renewal or independent review claim is asserted.</small></div></section>

        <section id="credentials" className="content-section credentials-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00C / SECURE CONNECTORS</div><h2>Credentials stay<br /><em>behind the boundary.</em></h2></div><div className="section-intro">The dashboard handles connector intent and status only. Secret values never enter this browser, localStorage or the static bundle.</div></div><div className="credential-layout"><div className="credential-list"><div className="credential-tabs"><button className={credentialView === "connect" ? "credential-tab active" : "credential-tab"} onClick={() => setCredentialView("connect")}>Connect</button><button className={credentialView === "rotate" ? "credential-tab active" : "credential-tab"} onClick={() => setCredentialView("rotate")}>Rotate / revoke</button></div>{credentialConnectors.map((connector) => <button key={connector.id} className={`credential-row ${selectedConnector === connector.id ? "selected" : ""}`} onClick={() => setSelectedConnector(connector.id)}><span className="credential-icon"><LockKeyhole size={15} /></span><span><strong>{connector.label}</strong><small>{connector.scope}</small></span><span className="credential-state">{connector.state}</span></button>)}</div><div className="credential-panel"><div className="security-indicator"><ShieldCheck size={19} /><span>NO SECRET IN FRONTEND</span></div><h3>{credentialView === "connect" ? "Request a server-side connection" : "Request rotation or revocation"}</h3><p>{credentialView === "connect" ? "Creates an auditable intent for the backend vault. The browser receives only status and a redacted reference." : "Marks the connector for operator-approved rotation. Existing values are never rendered."}</p><div className="credential-reference"><span>SELECTED CONNECTOR</span><code>{credentialConnectors.find((connector) => connector.id === selectedConnector)?.reference}</code></div><button className="button button-dark" disabled={connectorRequest.isPending || !isAuthenticated} onClick={() => connectorRequest.mutate({ connector: selectedConnector as "mistral" | "stripe" | "telegram" | "aemet", action: credentialView === "connect" ? "connect" : "rotate" })}>{connectorRequest.isPending ? "Recording intent…" : !isAuthenticated ? "Sign in to request" : credentialView === "connect" ? "Request connection" : "Request rotation"} <ArrowUpRight size={14} /></button><small className="credential-footnote">{isAuthenticated ? `${permissionQuery.data?.length ?? 0} permission grants · ${connectorQuery.data?.length ?? 0} intents · ${credentialVersionsQuery.data?.length ?? 0} credential versions · ${auditQuery.data?.[0]?.outcome ?? "no audit yet"} last audit` : "Sign in for live intent, permission and version metadata."} · no secret values rendered.</small></div></div></section>

        <section id="vault-gate" className="content-section vault-gate-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00C.1 / VAULT PROVIDER GATE</div><h2>Choose the vault.<br /><em>Keep the hold.</em></h2></div><div className="section-intro">El dashboard no selecciona ni activa un proveedor por defecto. La ejecución permanece en SECURITY_HOLD hasta contar con aprobación del propietario y del revisor de seguridad.</div></div><div className="vault-gate-meta"><span>{vaultProviderGateMeta.status}</span><strong>{vaultProviderGateMeta.approvalRequired.join(" + ")}</strong><small>Backend-only · no secrets in frontend</small></div><div className="vault-provider-grid">{vaultProviderGates.map((provider) => <article className="vault-provider-card" key={provider.provider}><div><span className="repo-state repo-blocked">{provider.status}</span><code>{provider.provider}</code></div><h3>{provider.executionBoundary}</h3><p>{provider.requirements.slice(0, 3).join(" · ")}</p><small>Fallback: {provider.fallback}</small></article>)}</div></section>
        <section id="audit" className="content-section audit-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00C.5 / AUDIT CONTROL</div><h2>Read the trail.<br /><em>Export the proof.</em></h2></div><div className="section-intro">Filters operate on redacted server events. CSV export never includes tokens, provider responses or secret payloads.</div></div><div className="audit-toolbar"><label>From<input type="date" value={auditFrom} onChange={(event) => setAuditFrom(event.target.value)} /></label><label>To<input type="date" value={auditTo} onChange={(event) => setAuditTo(event.target.value)} /></label><label>Event type<select value={auditEventType} onChange={(event) => setAuditEventType(event.target.value)}><option value="ALL">All events</option><option value="connector.connect.blocked">Connect blocked</option><option value="connector.rotate.blocked">Rotate blocked</option><option value="permission.granted">Permission granted</option><option value="permission.revoked">Permission revoked</option></select></label><button className="button button-dark" disabled={!isAuthenticated || !(auditQuery.data?.length)} onClick={exportAuditCsv}><Download size={14} /> Export CSV</button></div><div className="audit-summary"><strong>{isAuthenticated ? auditQuery.data?.length ?? 0 : 0}</strong><span>redacted events in current scope</span><span className="audit-hold">{isAuthenticated ? "SERVER FILTERED" : "SIGN IN REQUIRED"}</span></div><div className="audit-table-wrap"><table className="audit-table"><thead><tr><th>UTC</th><th>Event</th><th>Outcome</th><th>Request</th><th>Safe detail</th></tr></thead><tbody>{(auditQuery.data ?? []).slice(0, 12).map((event) => <tr key={`${event.requestId}-${event.createdAt}`}><td>{new Date(event.createdAt).toLocaleString()}</td><td><code>{event.eventType}</code></td><td><span className={`audit-outcome audit-${event.outcome}`}>{event.outcome}</span></td><td><code>{event.requestId}</code></td><td>{event.redactedDetail}</td></tr>)}</tbody></table>{!isAuthenticated && <div className="audit-empty">Sign in to inspect owner-scoped audit events.</div>}{isAuthenticated && !auditQuery.data?.length && <div className="audit-empty">No events match the current filters.</div>}</div></section>

        <section id="rotation-approval" className="content-section rotation-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00C.8 / DUAL APPROVAL</div><h2>Rotate only<br /><em>with two people.</em></h2></div><div className="section-intro">A rotation intent cannot become operational until a distinct second administrator approves it. The rollback window remains visible and bounded.</div></div><div className="rotation-layout"><div className="rotation-control"><div className="security-indicator"><ShieldCheck size={19} /><span>DEFAULT-DENY ROTATION</span></div><label>Rollback window<select value={rollbackMinutes} onChange={(event) => setRollbackMinutes(Number(event.target.value))}><option value={15}>15 minutes</option><option value={30}>30 minutes</option><option value={60}>60 minutes</option><option value={120}>120 minutes</option></select></label><button className="button button-dark" disabled={!isAdmin || rotationRequest.isPending} onClick={() => rotationRequest.mutate({ requestId: connectorQuery.data?.[0]?.requestId ?? `rotation-${Date.now()}`, connector: selectedConnector as "mistral" | "stripe" | "telegram" | "aemet", credentialVersion: credentialVersionsQuery.data?.[0]?.version ?? 1, rollbackMinutes })}>{!isAdmin ? "Admin approval required" : rotationRequest.isPending ? "Creating approval…" : "Request dual approval"} <ArrowUpRight size={14} /></button><small>Execution remains behind the vault provider boundary; this panel manages authorization only.</small></div><div className="rotation-list">{(rotationQuery.data ?? []).slice(0, 8).map((approval) => <article className="rotation-card" key={approval.id}><div><code>{approval.connector} · v{approval.credentialVersion}</code><strong>{approval.state}</strong></div><span>Rollback until {approval.rollbackUntil ? new Date(approval.rollbackUntil).toLocaleString() : "not set"}</span><small>First approver #{approval.firstApproverUserId} · second {approval.secondApproverUserId ? `#${approval.secondApproverUserId}` : "pending"}</small>{approval.state === "PENDING_SECOND" && isAdmin && <button className="button button-amber" disabled={secondApproval.isPending} onClick={() => secondApproval.mutate({ approvalId: approval.id })}>Approve as second person</button>}</article>)}{isAdmin && !rotationQuery.data?.length && <div className="audit-empty">No rotation approvals recorded.</div>}{!isAdmin && <div className="audit-empty">Two-person controls are visible to administrators only.</div>}</div></div></section>

        <section id="quantum" className="content-section quantum-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />00D / QUANTUM DECISION LAB</div><h2>Simulate the<br /><em>decision surface.</em></h2></div><div className="section-intro">A deterministic local simulation for exploring trade-offs. It is not a quantum computer, an autonomous decision or production evidence.</div></div><div className="quantum-layout"><div className="quantum-controls"><label>Scenario<select value={quantumScenario} onChange={(event) => setQuantumScenario(event.target.value as keyof typeof quantumScenarios)}>{Object.entries(quantumScenarios).map(([key, scenario]) => <option value={key} key={key}>{scenario.label}</option>)}</select></label><p>{quantumScenarios[quantumScenario].description}</p><label>Evidence budget <output>{quantumBudget}</output><input type="range" min="20" max="100" step="1" value={quantumBudget} onChange={(event) => setQuantumBudget(Number(event.target.value))} /></label><button className="button button-amber" onClick={runQuantumSimulation} disabled={isSimulating}>{isSimulating ? <><CircleDashed size={14} className="spin" /> Simulating</> : <><Sparkles size={14} /> Run bounded simulation</>}</button></div><div className="quantum-result"><div className="quantum-result-top"><span>LOCAL READOUT / NO CLAIM</span><span>{quantumResult ? `${quantumResult.confidence}% confidence` : `${quantumConfidence}% heuristic confidence`}</span></div><div className="quantum-meter-block"><div className="quantum-meter-label"><span>Evidence budget</span><strong>{quantumBudget}%</strong></div><div className="quantum-meter"><span className="meter-fill meter-amber" style={{ width: `${quantumBudget}%` }} /></div><small>Exploration capacity only · not field evidence</small></div><div className="quantum-meter-block"><div className="quantum-meter-label"><span>Confidence level</span><strong>{quantumResult ? quantumResult.confidence : quantumConfidence}%</strong></div><div className="quantum-meter"><span className="meter-fill meter-sage" style={{ width: `${quantumResult ? quantumResult.confidence : quantumConfidence}%` }} /></div><small>Heuristic confidence derived from the selected weighting</small></div><div className="quantum-factors"><div className="quantum-factors-title"><span>Scenario factors</span><span>WEIGHTED</span></div>{quantumFactors.map((factor) => <div className="quantum-factor" key={factor.label}><span>{factor.label}</span><div className="factor-track"><span className={`factor-fill factor-${factor.tone}`} style={{ width: `${factor.value}%` }} /></div><strong>{factor.value}</strong></div>)}</div><div className="quantum-evidence-chart"><div className="quantum-factors-title"><span>Evidence maturity</span><span>FIELD / INDEPENDENT</span></div>{quantumEvidenceMetrics.map((metric) => <div className="quantum-evidence-row" key={metric.label}><div className="quantum-evidence-meta"><span>{metric.label}</span><strong>{metric.value}/{metric.max}</strong></div><div className="factor-track"><span className="factor-fill factor-sage" style={{ width: `${Math.round((metric.value / metric.max) * 100)}%` }} /></div><small>{metric.status}</small></div>)}</div>{quantumResult ? <><div className="quantum-score">{quantumResult.score}<small>/ 100</small></div><h3>{quantumResult.decision}</h3><p>The result is a deterministic weighted scenario. Promote only after a real contract, execution envelope, independent review and evidence pack.</p></> : <div className="quantum-empty"><CircleDashed size={26} /><strong>Simulation ready</strong><span>Run the bounded model to produce a score.</span></div>}</div></div></section>

        <section id="evidence" className="content-section evidence-section">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />01 / EVIDENCE CHAIN</div><h2>Follow the thread.<br /><em>Not the story.</em></h2></div><div className="section-intro">The vertical slice connects a field observation to a claim. Every handoff is visible. Every missing handoff remains a blocker.</div></div>
          <div className="evidence-layout"><div className="evidence-visual"><div className="visual-frame"><img src={flowImage} alt="Abstract evidence chain diagram" /><div className="visual-caption"><span>VERTICAL SLICE / 001</span><span>LOCAL SCOPE</span></div></div><div className="evidence-quote"><span className="quote-mark">“</span><p>Runtime proof exists inside a declared scope. That is progress — not permission to overclaim.</p><span className="quote-author">ASSURANCE PRINCIPLE / 2026.08</span></div></div><div className="evidence-chain">{evidence.map((item, index) => { const Icon = item.icon; return <div className={`evidence-step evidence-${item.state}`} key={item.code}><div className="evidence-step-marker"><span>{item.code}</span><Icon size={16} /></div><div className="evidence-step-content"><div className="evidence-step-top"><span className="evidence-label">{item.label}</span><StatusBadge status={item.state} /></div><h3>{item.title}</h3><code>{item.meta}</code></div>{index < evidence.length - 1 && <div className="evidence-connector" />}</div> })}</div></div>
        </section>

        <section id="capabilities" className="content-section capability-section">
          <div className="section-heading capability-heading"><div><div className="eyebrow"><span className="eyebrow-line" />02 / CAPABILITY REGISTER</div><h2>What exists.<br /><em>What is next.</em></h2></div><div className="filter-controls"><div className="filter-search"><Search size={15} /><span>Filter register</span></div><button className="filter-select" onClick={() => setShowAll((v) => !v)}>{activeFilter}<ChevronDown size={14} /></button></div></div>
          {showAll && <div className="filter-menu"><button onClick={() => { setActiveFilter("All capabilities"); setShowAll(false); }}>All capabilities</button><button onClick={() => { setActiveFilter("Verified"); setShowAll(false); }}>Verified</button><button onClick={() => { setActiveFilter("Blocked"); setShowAll(false); }}>Blocked</button><button onClick={() => { setActiveFilter("N2"); setShowAll(false); }}>N2 only</button></div>}
          <div className="capability-table"><div className="capability-table-head"><span>CAPABILITY / CONTRACT</span><span>STATE</span><span>GATE</span><span>EVIDENCE</span></div>{filtered.map((item) => <button className="capability-row" key={item.id} onClick={() => setSelectedCapability(item)}><div className="capability-name"><span className={`capability-icon icon-${item.status}`}>{item.status === "blocked" ? <CircleAlert size={16} /> : item.status === "verified" ? <Check size={16} /> : <CircleDot size={16} />}</span><div><strong>{item.name}</strong><code>{item.id}</code><span>{item.detail}</span></div></div><StatusBadge status={item.status} /><div className="gate-cell"><span>{item.gate}</span><small>{item.maturity}</small></div><code className="evidence-code">{item.evidence}</code></button>)}</div>
          <div className="capability-hint"><CircleDot size={14} />Select a capability to inspect its evidence scope, implementation trace and promotion limit.</div>
        </section>

        <section id="history" className="content-section history-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />02B / PROGRESS HISTORY</div><h2>Make the<br /><em>movement visible.</em></h2></div><div className="section-intro">A dated sequence of what changed, what passed and what remains deliberately unresolved.</div></div><div className="history-layout"><div className="history-line">{progressHistory.map((item, index) => <div className="history-item" key={item.code}><div className="history-marker"><span className={`history-dot history-dot-${item.state}`} />{index < progressHistory.length - 1 && <span className="history-stem" />}</div><div className="history-date">{item.date}<code>{item.code}</code></div><div className="history-copy"><div className="history-title-line"><h3>{item.title}</h3><StatusBadge status={item.state} /></div><p>{item.copy}</p></div></div>)}</div><div className="history-summary"><div className="summary-label">CURRENT READOUT</div><div className="summary-number">04<span>/ 07</span></div><p>evidence items carry a verified result within a declared local scope.</p><div className="summary-bar"><span style={{ width: "57%" }} /></div><div className="summary-foot"><span>VERIFIED SCOPE</span><span>57%</span></div><a className="text-link" href="#gates">See promotion gates <ArrowUpRight size={14} /></a></div></div></section>

        <section id="gates" className="content-section gates-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />03 / PROMOTION CONTROL</div><h2>Progress has<br /><em>a threshold.</em></h2></div><div className="section-intro">The next promotion is not a reward for effort. It is a consequence of closing the missing evidence.</div></div><div className="gates-grid">{gates.map((item, index) => <div className={`gate-card gate-${item.state}`} key={item.gate}><div className="gate-top"><span className="gate-number">{item.gate}</span><span className="gate-state">{item.state === "open" ? "OPEN" : item.state === "next" ? "NEXT" : "LOCKED"}</span></div><div className="gate-line"><span className="gate-marker">{item.state === "open" ? <Check size={14} /> : item.state === "next" ? <CircleDashed size={14} /> : <span />}</span><div className="gate-track"><span style={{ width: item.state === "open" ? "100%" : item.state === "next" ? "46%" : "10%" }} /></div></div><h3>{item.label}</h3><p>{item.copy}</p>{index === 1 && <div className="gate-callout"><Sparkles size={13} />Next defensible move: N2 / G1</div>}</div>)}</div></section>

        <section id="p1" className="content-section p1-section"><div className="notes-header"><div><div className="eyebrow"><span className="eyebrow-line" />05 / P1 GOVERNANCE</div><h2>Sensitivity before<br /><em>execution.</em></h2></div><span className="ci-permission-note">DESIGN / NO RUNTIME CLAIM</span></div><p className="ci-detail-intro">La clasificación asigna una frontera mínima y un gate proporcional a cada repositorio. Los SLOs son contratos de observabilidad; todavía no representan mediciones de producción.</p><div className="p1-grid"><div className="p1-card"><div className="p1-card-heading"><strong>Repository sensitivity catalog</strong><span>{repositorySensitivityCatalog.length} surfaces</span></div><div className="p1-table">{repositorySensitivityCatalog.map((item) => <div className="p1-row" key={item.repository}><div><strong>{item.repository}</strong><span>{item.ownerBoundary} · {item.exposure}</span></div><div className={`p1-sensitivity p1-${item.sensitivity.toLowerCase()}`}>{item.sensitivity}</div><span className="p1-gate">{item.minimumGate}</span></div>)}</div></div><div className="p1-card"><div className="p1-card-heading"><strong>Runtime observability contract</strong><span>{observabilitySloDefinitions.length} SLOs</span></div><div className="p1-slo-list">{observabilitySloDefinitions.map((slo) => <div className="p1-slo" key={slo.id}><div><strong>{slo.id}</strong><span>{slo.signal} · window {slo.window}</span></div><b>{slo.target}</b><small>{slo.state === "DESIGNED_NO_RUNTIME_CLAIM" ? "DESIGN ONLY" : "EVIDENCE PENDING"}</small></div>)}</div></div></div></section>
        <section id="ci" className="content-section ci-section"><div className="ci-panel"><div className="ci-panel-main"><div className="eyebrow"><span className="eyebrow-line" />04 / CONTINUOUS INTEGRATION</div><div className="ci-title-line"><h2>Remote CI is<br /><em>still unresolved.</em></h2><div className="ci-state"><div className="ci-state-icon"><CircleAlert size={24} /></div><div><strong>FAILURE / DIAGNOSTIC BLOCKED</strong><span>Runs start, then no steps are recorded.</span></div></div></div><p className="ci-copy">The gate stays visible and stays honest. GitHub returns <code>403 checks:read</code> when annotations and logs are requested. No <code>continue-on-error</code> shortcut was added.</p><div className="ci-actions"><a href="https://github.com/Traky12/castuo-evolution/actions/workflows/portfolio-control-plane.yml" target="_blank" rel="noreferrer" className="button button-dark">Open workflow <ExternalLink size={14} /></a><span className="ci-note"><GitCommitHorizontal size={14} />Last inspected: 32047419742</span></div></div><div className="ci-panel-aside" style={{ backgroundImage: `url(${textureImage})` }}><div className="ci-aside-inner"><div className="ci-aside-label">WHAT WOULD CLOSE IT</div><div className="ci-check-list"><div><span className="check-square"><Check size={12} /></span>Read job logs and annotations</div><div><span className="check-square"><Check size={12} /></span>Confirm runner / permission path</div><div><span className="check-square"><Check size={12} /></span>Reproduce a green remote gate</div></div><div className="ci-aside-bottom"><span>BLOCKER / 01</span><CircleAlert size={18} /></div></div></div></div><div className="ci-workflow-detail"><div className="ci-detail-heading"><div><div className="eyebrow"><span className="eyebrow-line" />04B / PR #346 WORKFLOW DETAIL</div><h3>Six failures.<br /><em>One blocked diagnosis.</em></h3></div><span className="ci-permission-note">CHECKS API / 403</span></div><p className="ci-detail-intro">The runs below are real observations from the PR head. GitHub exposes the run and job conclusion, but the current integration cannot read annotations or step logs. Causes are therefore not invented.</p><div className="workflow-list">{ciWorkflows.map((workflow) => <a className="workflow-row" href={workflow.url} target="_blank" rel="noreferrer" key={workflow.run}><div className="workflow-status"><CircleAlert size={15} /><span>FAILURE</span></div><div className="workflow-main"><strong>{workflow.name}</strong><span>{workflow.job} · run {workflow.run}</span><p>{workflow.detail}</p></div><ExternalLink size={14} /></a>)}</div><div className="workflow-footer"><span><ShieldCheck size={14} /> No simulated logs</span><span><GitPullRequest size={14} /> PR #346 · head b32b255</span><a href="https://github.com/Traky12/Castuo-system/pull/346" target="_blank" rel="noreferrer">Open pull request <ExternalLink size={13} /></a></div></div></section>

        <section id="notes" className="content-section notes-section"><div className="notes-header"><div><div className="eyebrow"><span className="eyebrow-line" />FIELD NOTES / NEXT MOVES</div><h2>Keep the claims<br /><em>small enough to trust.</em></h2></div><a className="text-link" href="https://github.com/Traky12/castuo-evolution" target="_blank" rel="noreferrer">Open source register <ArrowUpRight size={14} /></a></div><div className="notes-grid"><div className="note-card note-featured"><span className="note-index">01</span><CloudOff size={22} /><h3>Run the slice against real boundaries.</h3><p>MQTT, backend, partition, duplication, reordering and conflict recovery remain the next operational proof.</p><span className="note-tag">FIELD VALIDATION</span></div><div className="note-card"><span className="note-index">02</span><Code2 size={21} /><h3>Add a second deployed provider.</h3><p>Synthetic parity passed. Vendor independence needs another implementation under the same contract.</p><span className="note-tag">VENDOR TEST</span></div><div className="note-card"><span className="note-index">03</span><RadioTower size={21} /><h3>Turn monitoring into evidence.</h3><p>Prometheus and Grafana are documented. Runtime metrics, alerts, SLOs and deployment proof are not.</p><span className="note-tag">OBSERVABILITY</span></div></div></section>

        {selectedCapability && <div className="detail-backdrop" onClick={() => setSelectedCapability(null)}><aside className="capability-drawer" onClick={(event) => event.stopPropagation()}><div className="drawer-top"><div><div className="eyebrow"><span className="eyebrow-line" />CAPABILITY DETAIL</div><code>{selectedCapability.id}</code></div><button className="drawer-close" onClick={() => setSelectedCapability(null)} aria-label="Close capability detail"><X size={18} /></button></div><StatusBadge status={selectedCapability.status} /><h2>{selectedCapability.name}</h2><p className="drawer-detail">{selectedCapability.detail}</p><div className="drawer-grid"><div><span>GATE</span><strong>{selectedCapability.gate}</strong></div><div><span>MATURITY</span><strong>{selectedCapability.maturity}</strong></div><div><span>EVIDENCE</span><strong>{selectedCapability.evidence}</strong></div></div><div className="drawer-block"><span>IMPLEMENTATION TRACE</span><code>{selectedCapability.id === "CAP-OFFLINE-001" ? "castuo-agro-edge / gateway/mqtt/db.py + sync.py" : "castuo-evolution / portfolio control plane"}</code></div><div className="drawer-block drawer-limit"><span>PROMOTION LIMIT</span><p>{selectedCapability.status === "blocked" ? "Runtime proof, metrics or remote gate evidence is still missing." : "Evidence exists, but promotion remains held until independent reproduction closes the declared scope."}</p></div><a className="button button-dark drawer-button" href="#gates" onClick={() => setSelectedCapability(null)}>Inspect promotion gate <ArrowUpRight size={14} /></a></aside></div>}

        <footer className="site-footer"><div className="footer-brand"><img src={markImage} alt="" /><span>CASTÚO-SYSTEM / PROGRESS DASHBOARD</span></div><span>Evidence snapshot · 17.08.2026</span><a href="https://github.com/Traky12/castuo-evolution" target="_blank" rel="noreferrer">Repository <ExternalLink size={12} /></a></footer>
      </main>
    </div>
  );
}
