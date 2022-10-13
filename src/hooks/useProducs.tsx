import { useEffect, useState } from "react";
import { Product } from "../interfaces/interfaces";
import { getProducts } from "../services/api";

export const useProducs = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [products, setproducts] = useState<Product[]>([])


    useEffect(() => {
        getData();
    }, [])
    
    const getData = async() => {
        setIsLoading(true);
        const resp  = await getProducts();
        setproducts(resp);
        setIsLoading(false);
    }
    

  return {
    isLoading,
    products,
    setproducts
  }
}
