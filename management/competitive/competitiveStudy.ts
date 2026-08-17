export type BinaryState = 1 | 0 | "?" | "N/A";
export type EvidenceStatus = "PRIMARY_SOURCE" | "ATTACHMENT_HYPOTHESIS" | "LOCAL_IMPLEMENTATION" | "UNVERIFIED";

export type CompetitiveCapability =
  | "governanceInventory"
  | "evidenceProvenance"
  | "runtimeObservability"
  | "offlineField"
  | "vendorIndependence"
  | "leastPrivilege"
  | "claimGates";

export type CompetitiveRecord = {
  id: string;
  name: string;
  region: "GLOBAL" | "EUROPE" | "CASTUO";
  segment: "AI_GOVERNANCE" | "ASSURANCE_EVIDENCE" | "FIELD_EDGE" | "CONTROL_PLANE";
  evidenceStatus: EvidenceStatus;
  sourceIds: readonly string[];
  limitation: string;
  capabilities: Record<CompetitiveCapability, BinaryState>;
};

const unknownCapabilities = {
  governanceInventory: "?",
  evidenceProvenance: "?",
  runtimeObservability: "?",
  offlineField: "?",
  vendorIndependence: "?",
  leastPrivilege: "?",
  claimGates: "?",
} as const;

export const competitiveSources = [
  { id: "SRC-CREDO-SDK-2026", label: "Credo AI SDK article", url: "https://www.credo.ai/blog/introducing-the-credo-ai-sdk-build-ai-governance-into-your-existing-workflows", type: "PRIMARY_SOURCE" },
  { id: "SRC-IBM-GOV-2026", label: "IBM watsonx.governance model governance", url: "https://www.ibm.com/products/watsonx-governance/model-governance", type: "PRIMARY_SOURCE" },
  { id: "SRC-FIDDLER-HOME-2026", label: "Fiddler AI platform", url: "https://www.fiddler.ai/", type: "PRIMARY_SOURCE" },
  { id: "SRC-MICROSOFT-PURVIEW-2026", label: "Microsoft Purview AI security and compliance", url: "https://learn.microsoft.com/en-us/purview/ai-microsoft-purview", type: "PRIMARY_SOURCE" },
  { id: "SRC-SNOW-ACT-2026", label: "ServiceNow AI Control Tower release", url: "https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-expands-AI-Control-Tower-to-discover-observe-govern-secure-and-measure-AI-deployed-across-any-system-in-the-enterprise/default.aspx", type: "PRIMARY_SOURCE" },
  { id: "SRC-PAL-ONTOLOGY-2026", label: "Palantir Ontology documentation", url: "https://palantir.com/docs/foundry/ontology/overview/", type: "PRIMARY_SOURCE" },
  { id: "SRC-ATTACHMENTS-2026", label: "User-provided competitive hypotheses", url: "attachment:pasted_content_6.txt;attachment:pasted_content_7.txt", type: "ATTACHMENT_HYPOTHESIS" },
] as const;

export const competitiveRecords: readonly CompetitiveRecord[] = [
  {
    id: "COMP-CREDO",
    name: "Credo AI",
    region: "GLOBAL",
    segment: "AI_GOVERNANCE",
    evidenceStatus: "PRIMARY_SOURCE",
    sourceIds: ["SRC-CREDO-SDK-2026"],
    limitation: "Official SDK article supports inventory and workflow integration; field/offline and claim-gate equivalence are not demonstrated.",
    capabilities: { governanceInventory: 1, evidenceProvenance: "?", runtimeObservability: "?", offlineField: "?", vendorIndependence: "?", leastPrivilege: "?", claimGates: "?" },
  },
  {
    id: "COMP-IBM",
    name: "IBM watsonx.governance",
    region: "GLOBAL",
    segment: "AI_GOVERNANCE",
    evidenceStatus: "PRIMARY_SOURCE",
    sourceIds: ["SRC-IBM-GOV-2026"],
    limitation: "Official documentation supports factsheets, evaluation, monitoring and third-party model governance; offline field operation and claim authorization are not demonstrated.",
    capabilities: { governanceInventory: 1, evidenceProvenance: 1, runtimeObservability: 1, offlineField: "?", vendorIndependence: 1, leastPrivilege: "?", claimGates: "?" },
  },
  {
    id: "COMP-FIDDLER",
    name: "Fiddler AI",
    region: "GLOBAL",
    segment: "ASSURANCE_EVIDENCE",
    evidenceStatus: "PRIMARY_SOURCE",
    sourceIds: ["SRC-FIDDLER-HOME-2026"],
    limitation: "Official product page supports observe/evaluate/enforce and provider breadth; independent evidence of field continuity and CASTÚO-style claim authorization is absent.",
    capabilities: { governanceInventory: 1, evidenceProvenance: "?", runtimeObservability: 1, offlineField: "?", vendorIndependence: 1, leastPrivilege: "?", claimGates: "?" },
  },
  {
    id: "COMP-MICROSOFT",
    name: "Microsoft Purview",
    region: "GLOBAL",
    segment: "AI_GOVERNANCE",
    evidenceStatus: "PRIMARY_SOURCE",
    sourceIds: ["SRC-MICROSOFT-PURVIEW-2026"],
    limitation: "Official documentation supports classification, DLP, audit, retention and AI activity controls; offline field evidence generation is not demonstrated.",
    capabilities: { governanceInventory: 1, evidenceProvenance: "?", runtimeObservability: 1, offlineField: "?", vendorIndependence: "?", leastPrivilege: 1, claimGates: "?" },
  },
  {
    id: "COMP-SERVICENOW",
    name: "ServiceNow AI Control Tower",
    region: "GLOBAL",
    segment: "CONTROL_PLANE",
    evidenceStatus: "PRIMARY_SOURCE",
    sourceIds: ["SRC-SNOW-ACT-2026"],
    limitation: "Official release supports discovery, observation, governance, security, integrations and measurement; independent validation and offline field operation remain unknown.",
    capabilities: { governanceInventory: 1, evidenceProvenance: "?", runtimeObservability: 1, offlineField: "?", vendorIndependence: 1, leastPrivilege: 1, claimGates: "?" },
  },
  {
    id: "COMP-PALANTIR",
    name: "Palantir Foundry Ontology",
    region: "GLOBAL",
    segment: "CONTROL_PLANE",
    evidenceStatus: "PRIMARY_SOURCE",
    sourceIds: ["SRC-PAL-ONTOLOGY-2026"],
    limitation: "Official documentation supports operational ontology, actions, functions and granular governance; claim authorization, offline field and evidence passport equivalence are not demonstrated.",
    capabilities: { governanceInventory: "?", evidenceProvenance: "?", runtimeObservability: "?", offlineField: "?", vendorIndependence: 1, leastPrivilege: 1, claimGates: "?" },
  },
  {
    id: "COMP-VIDIMUS-HYP",
    name: "Vidimus",
    region: "EUROPE",
    segment: "ASSURANCE_EVIDENCE",
    evidenceStatus: "ATTACHMENT_HYPOTHESIS",
    sourceIds: ["SRC-ATTACHMENTS-2026"],
    limitation: "User-provided description only; requires primary-source verification before any binary cell becomes demonstrated.",
    capabilities: unknownCapabilities,
  },
  {
    id: "COMP-HYDRUS-HYP",
    name: "Hydrus",
    region: "EUROPE",
    segment: "ASSURANCE_EVIDENCE",
    evidenceStatus: "ATTACHMENT_HYPOTHESIS",
    sourceIds: ["SRC-ATTACHMENTS-2026"],
    limitation: "User-provided description only; requires primary-source verification before competitive use.",
    capabilities: unknownCapabilities,
  },
  {
    id: "COMP-PRAXEDO-HYP",
    name: "Praxedo",
    region: "EUROPE",
    segment: "FIELD_EDGE",
    evidenceStatus: "ATTACHMENT_HYPOTHESIS",
    sourceIds: ["SRC-ATTACHMENTS-2026"],
    limitation: "User-provided description only; requires primary-source verification of offline sync, field evidence and integrations.",
    capabilities: unknownCapabilities,
  },
  {
    id: "COMP-NOMADIA-HYP",
    name: "Nomadia",
    region: "EUROPE",
    segment: "FIELD_EDGE",
    evidenceStatus: "ATTACHMENT_HYPOTHESIS",
    sourceIds: ["SRC-ATTACHMENTS-2026"],
    limitation: "User-provided description only; usage figures and capability claims are not treated as verified.",
    capabilities: unknownCapabilities,
  },
  {
    id: "COMP-CASTUO",
    name: "CASTÚO-SYSTEM",
    region: "CASTUO",
    segment: "CONTROL_PLANE",
    evidenceStatus: "LOCAL_IMPLEMENTATION",
    sourceIds: ["SRC-ATTACHMENTS-2026"],
    limitation: "Local contracts and tests support several controls; N5/N6, field validation, commercial evidence and remote assurance remain unclaimed.",
    capabilities: { governanceInventory: 1, evidenceProvenance: 1, runtimeObservability: 1, offlineField: "?", vendorIndependence: "?", leastPrivilege: 1, claimGates: 1 },
  },
] as const;

export const competitiveScenarios = {
  BALANCED: { label: "Balanced", weights: { governanceInventory: 1, evidenceProvenance: 1, runtimeObservability: 1, offlineField: 1, vendorIndependence: 1, leastPrivilege: 1, claimGates: 1 } },
  EVIDENCE_FIRST: { label: "Evidence-first", weights: { governanceInventory: 1, evidenceProvenance: 3, runtimeObservability: 2, offlineField: 1, vendorIndependence: 2, leastPrivilege: 1, claimGates: 3 } },
  FIELD_FIRST: { label: "Field-first", weights: { governanceInventory: 1, evidenceProvenance: 2, runtimeObservability: 1, offlineField: 3, vendorIndependence: 2, leastPrivilege: 1, claimGates: 2 } },
  ENTERPRISE_FIRST: { label: "Enterprise-first", weights: { governanceInventory: 3, evidenceProvenance: 1, runtimeObservability: 2, offlineField: 1, vendorIndependence: 2, leastPrivilege: 3, claimGates: 2 } },
} as const;

export const competitiveCapabilityLabels: Record<CompetitiveCapability, string> = {
  governanceInventory: "Governance inventory",
  evidenceProvenance: "Evidence / provenance",
  runtimeObservability: "Runtime observability",
  offlineField: "Offline field",
  vendorIndependence: "Vendor independence",
  leastPrivilege: "Least privilege",
  claimGates: "Claim gates",
};
