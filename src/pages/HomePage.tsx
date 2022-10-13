import React, { useEffect, useState } from 'react';
import { CardProduct } from '../components/CardProduct';
import { DetailProduct } from '../components/DetailProduct';
import { ModalProductDetail } from '../components/ModalDetailProduct';
import { useProducs } from '../hooks/useProducs';
import { useWindowDimensions } from '../hooks/useWindowDimensions';
import { Product } from '../interfaces/interfaces';
import './style.css';

export const HomePage = () => {

    const {isLoading, products} = useProducs();
    const [product, setProduct] = useState<Product | null>(null);
    const [productSearch, setProductSearch] = useState<Product[]>([]);
    const {width} = useWindowDimensions();


    const handleChangeQuery = (e: any) => {
        e.preventDefault();
        let value = e.target.value.toLowerCase();

        if(value.length === 0){
            setProductSearch(products);
        }
        if(value.length >= 3){
            let result = products.filter(p => p.title.toLowerCase().includes(value));
            setProductSearch(result);
        }
    }

    useEffect(() => {
      if(products.length >= 0){
        setProductSearch(products);
      }
    }, [products]);
    
  return (
    <div className='container'>
        <div className='col-12'>
            <div className="row">
                <div className='col-lg-8 col-12'>
                    <div className='box-search'>
                        <form className="d-flex mt-4" role="search">
                            <input className="form-control me-2" type="text" onChange={handleChangeQuery} placeholder="Search" aria-label="Search"/>
                        </form>
                    </div>
                    <div className='content'>
                        <ModalProductDetail product={product}/>
                        {
                            (isLoading) ?
                            <div className='text-center'>
                                <div className="lds-ellipsis">
                                    <div></div><div></div><div></div><div></div>
                                </div>
                            </div>
                            : 
                            
                            <div className={`row mt-4 justify-content-between ${width < 520 ? 'row-cols-2' : 'row-cols-3'}`}>
                                {
                                    productSearch.map(
                                        p => (width > 995)
                                        ? <div  key={p.id}
                                            onClick={() => setProduct(p)}>
                                            <CardProduct product={p}/>
                                        </div>
                                        : <div data-bs-toggle="modal" data-bs-target="#modalProduct" key={p.id}
                                            onClick={() => setProduct(p)}>
                                            <CardProduct product={p}/>
                                        </div>
                                )
                                }
                            </div>
                        }
                    </div>
                </div>
                <div className='content-detail col-4 text-center justify-content-center'>
                    {
                        (!product) ? 
                        <div className="alert alert-primary mt-4" role="alert">
                            Seleciona un prudcto
                        </div>
                        : <DetailProduct product={product}/>
                    }
                </div>
            </div>
        </div>
    </div>
  );
}
