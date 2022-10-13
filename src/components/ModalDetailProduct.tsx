import React from 'react'
import { Product } from '../interfaces/interfaces';
import { DetailProduct } from './DetailProduct';

interface props{
    product: Product | null
}

export const ModalProductDetail = ({product}: props) => {
    return (
            <div className="modal fade" tabIndex={-1} id="modalProduct"  aria-labelledby="modalProduct" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content br-20 bg-white-15 p-30">
                    <div className="modal-header">
                        <h5 className="modal-title c-text fs-30 fw-800" id="modalProduct">Detalles del producto</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {
                            product &&
                            <DetailProduct product={product}/>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="custom-btn custom-btn-primary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div>
    )
}
