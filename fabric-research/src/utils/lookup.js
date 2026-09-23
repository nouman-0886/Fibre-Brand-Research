import fabrics from "../data/fabrics.json";
import brands from "../data/brands.json";

export function getFabricById(id) {
  return fabrics.find((f) => f.id === id) || null;
}

export function getBrandById(id) {
  return brands.find((b) => b.id === id) || null;
}

export function getBrandMaterials(brand) {
  if (!brand) return [];
  return brand.materials
    .map((id) => getFabricById(id))
    .filter(Boolean);
}

export function searchBrands(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return brands.filter((b) => b.name.toLowerCase().includes(q));
}

export function scoreBand(score) {
  if (score >= 8) return { label: "Buy freely", color: "var(--green)" };
  if (score >= 6) return { label: "Certify it", color: "var(--blue)" };
  if (score >= 4) return { label: "Keep it long", color: "var(--gold)" };
  if (score >= 2) return { label: "Rarely", color: "var(--rust)" };
  return { label: "Only if forced", color: "var(--red)" };
}

export { fabrics, brands };
