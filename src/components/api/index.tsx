import instance from "./instance";

export const read = (id: number | string) => {
    const url = `/products/${id}`;
    return instance.get(url);
};