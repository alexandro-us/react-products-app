import axios from "axios";
import { Product } from "../interfaces/interfaces";

export const getProducts = async() => {
    try {
        const resp = await axios.get<Product[]>('https://gnk.onm.mybluehost.me/products_api/');
        // console.log(resp.data);
        return resp.data;
    } catch (error) {
        console.log({error});
        return [];
    }
};