import instance from "./instance";

if (localStorage.getItem('user')) {
    var users = JSON.parse(localStorage.getItem('user') || '');
}

export const getProducts = () => {
    return instance.get('/products');
};

export const getProduct = (id: number | string | undefined) => {
    return instance.get(`/products/${id}`);
};


