

const useCart = () => {
  let cart: any[] = [];

  const getCart = () => {
    if (typeof window !== 'undefined' && window.localStorage) {
      if (localStorage.getItem('cart')) {
        return cart = JSON.parse(localStorage.getItem('cart') as string)
      }
      return cart = []
    }

  }

  const addToCart = (newProduct: any, next: () => void) => {
    getCart()
    const existProduct = cart.find((product: any) => product.id === newProduct.id);
    if (!existProduct) {
      cart.push({ ...newProduct, quantity: 1 });
    } else {
      existProduct.quantity++;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  };

  const increaseItemInCart = (id: any, next: () => void) => {
    cart.find((product: any) => product.id === id).quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  };

  const decreaseItemInCart = (id: any, next: () => void) => {
    const currenProduct = cart.find((product: any) => product.id === id);
    currenProduct.quantity--;
    // nếu sản phẩm giảm nhỏ hơn 1 thì xóa
    if (currenProduct.quantity < 1) {
      const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
      if (confirm) {
        cart = cart.filter((item: any) => item.id !== currenProduct.id);
      } else {
        currenProduct.quantity = 1;
      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    next();
  };

  const removeItemInCart = (id: number) => {
    getCart()
    const confirm = window.confirm('Bạn có muốn xóa sản phẩm này không?');
    if (confirm) {
      cart = cart.filter((item: any) => item.id !== id);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }


  return {
    getCart,
    addToCart,
    increaseItemInCart,
    decreaseItemInCart,
    removeItemInCart,
    cart
  };
};
export default useCart;
