export default function fullProductsQuantity(value) {
  const oneLastSymbol = +String(value).slice(-1);
  const twoLastSymbol = +String(value).slice(-2, 2);
  if (oneLastSymbol === 1 && twoLastSymbol !== 11) {
    return `${value} товар`;
  } else if ((oneLastSymbol > 1 && oneLastSymbol < 5) && (twoLastSymbol < 12 || twoLastSymbol > 15)) {
    return `${value} товара`;
  } else {
    return `${value} товаров`;
  }
}
