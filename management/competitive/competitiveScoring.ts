import type { CompetitiveCapability, CompetitiveRecord } from "./competitiveStudy";

export type WeightedCoverage = {
  score: number;
  evidenceCompleteness: number;
  knownWeight: number;
  zeroWeight: number;
  totalWeight: number;
  unknownWeight: number;
  notApplicableWeight: number;
};

export function calculateWeightedCoverage(record: CompetitiveRecord, weights: Record<CompetitiveCapability, number>): WeightedCoverage {
  let knownWeight = 0;
  let zeroWeight = 0;
  let totalWeight = 0;
  let unknownWeight = 0;
  let notApplicableWeight = 0;
  for (const capability of Object.keys(weights) as CompetitiveCapability[]) {
    const state = record.capabilities[capability];
    const weight = weights[capability];
    if (state === "N/A") {
      notApplicableWeight += weight;
      continue;
    }
    totalWeight += weight;
    if (state === 1) knownWeight += weight;
    else if (state === 0) zeroWeight += weight;
    else if (state === "?") unknownWeight += weight;
  }
  const knownDecisionWeight = knownWeight + zeroWeight;
  return { score: knownDecisionWeight === 0 ? 0 : Math.round((knownWeight / knownDecisionWeight) * 100), evidenceCompleteness: totalWeight === 0 ? 0 : Math.round((knownDecisionWeight / totalWeight) * 100), knownWeight, zeroWeight, totalWeight, unknownWeight, notApplicableWeight };
}
