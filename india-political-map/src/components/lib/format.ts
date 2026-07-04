export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatCrore(value: number) {
  return `₹${(value / 10000000).toFixed(0)} Cr`;
}