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

export const add = (products: any) => {
    return instance.post('/products', products);
};
export const removeItem = (id: any) => {
    return instance.delete(`/products/${id}`);
};
export const updateItem = (id: any, products: any) => {
    return instance.put(`/products/${id}`, products);
};


