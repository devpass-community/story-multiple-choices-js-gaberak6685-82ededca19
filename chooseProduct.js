function chooseProduct(segment) {
  switch (segment) {
    case "Bebida":
      return "Soda";
    case "Fruta":
      return "Maça";
    case "Higiente":
      return "Sabonete";
    default:
      return null;
  }
}

module.exports = chooseProduct;
