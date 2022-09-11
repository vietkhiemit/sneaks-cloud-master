let cart: any[] = [];
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart") as string);
}

export const addToCart = (newProduct: any, next: () => void) => {
  const existProduct = cart.find((product) => product.id === newProduct.id);
  if (!existProduct) {
    cart.push(newProduct);
  } else {
    existProduct.quantity++;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  next();
};
