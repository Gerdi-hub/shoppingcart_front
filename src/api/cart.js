import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const api = "http://localhost:8089/api/cart";

export const fetchCartItems = () => axios.get(`${api}/all-products`);
export const fetchCartTotal = () => axios.get(`${api}/total-cost`);
export const fetchCartTax = () => axios.get(`${api}/total-tax`);
export const fetchCartFullTotal = () => axios.get(`${api}/total-with-tax`);
export const addProductToCart = (product) => axios.post(`${api}/post`, product);
export const removeProductFromCart = (name) => axios.delete(`${api}/delete/${name}`);
