export type VaultProvider = "HASHICORP_VAULT" | "AWS_SECRETS_MANAGER" | "AZURE_KEY_VAULT" | "GCP_SECRET_MANAGER";

export type VaultProviderGate = {
  provider: VaultProvider;
  status: "CANDIDATE" | "APPROVED" | "REJECTED";
  requirements: readonly string[];
  executionBoundary: "BACKEND_ONLY";
  fallback: "SECURITY_HOLD";
};

const commonRequirements = [
  "server-side credential resolution only",
  "least-privilege service identity",
  "rotation and revocation API",
  "audit event with redacted metadata",
  "timeout and fail-closed behavior",
  "restore and rollback evidence",
] as const;

export const vaultProviderGates: readonly VaultProviderGate[] = [
  { provider: "HASHICORP_VAULT", status: "CANDIDATE", requirements: commonRequirements, executionBoundary: "BACKEND_ONLY", fallback: "SECURITY_HOLD" },
  { provider: "AWS_SECRETS_MANAGER", status: "CANDIDATE", requirements: commonRequirements, executionBoundary: "BACKEND_ONLY", fallback: "SECURITY_HOLD" },
  { provider: "AZURE_KEY_VAULT", status: "CANDIDATE", requirements: commonRequirements, executionBoundary: "BACKEND_ONLY", fallback: "SECURITY_HOLD" },
  { provider: "GCP_SECRET_MANAGER", status: "CANDIDATE", requirements: commonRequirements, executionBoundary: "BACKEND_ONLY", fallback: "SECURITY_HOLD" },
] as const;

export const vaultProviderGateMeta = {
  selectedProvider: null,
  status: "SECURITY_HOLD",
  approvalRequired: ["owner", "security-reviewer"],
  noSecretsInFrontend: true,
} as const;
