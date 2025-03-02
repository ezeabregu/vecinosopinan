export const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "B"; // Billones (B)
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // Millones (M)
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"; // Miles (K)
  } else {
    return num; // Si es menor que 1000, lo mostramos tal cual
  }
};
