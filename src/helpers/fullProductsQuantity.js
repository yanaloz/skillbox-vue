export default function fullProductsQuantity(value) {
  const lastSymbol = +String(value).slice(-1);
  if (value > 10 && value < 15) {
    return `${value} товаров`;
  } else if (lastSymbol === 1) {
    return `${value} товар`;
  } else if (lastSymbol > 1 && lastSymbol < 5) {
    return `${value} товара`;
  } else {
    return `${value} товаров`;
  }
}
