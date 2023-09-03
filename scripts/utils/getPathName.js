export const getOriginPathName = () => {
  const pathname = window.location.href
    .replace("boutique.html", "")
    .replace("a-propos.html", "")
    .replace("produit.html", "");
  return pathname;
};
