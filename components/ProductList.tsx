import React from 'react';
import Product from './Product';

const ProductList: React.FC = () => {
    const product: Product[] = [
        {
            name: 'Laptop',
            description: 'High-performance laptop for work and play',
            price: '$999',
            imageUrl: 'https://cdn.antaranews.com/cache/1200x800/2022/06/16/2-Huawei-MateBook-D-Series-11th-Gen.png'
        },

        {
            name: 'Chocolate',
            description: 'Best Gift for your partner and friends',
            price: '$999',
            imageUrl: 'https://allofresh.id/blog/wp-content/uploads/2023/05/coklat-batangan-yang-enak-1.jpg'
        },

        {
            name: 'Handphone',
            description: 'High-performance android for work and play',
            price: '$999',
            imageUrl: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/108/MTA-59720696/brd-44261_handphone-m10-plus-handphone-murah-android-10-0-6gb-ram-128gb-rom-5g-6-1inci-dual-card-sim-smartphone-promo-cuci-gudang-hp-murah_full01.jpg'
        },

        {
            name: 'Tablet',
            description: 'High-performance Tablet for work and play',
            price: '$999',
            imageUrl: 'https://www.ubuy.co.id/productimg/?image=aHR0cHM6Ly9pbWFnZXMtY2RuLnVidXkuY28uaWQvNjMzYjA2ZWFmZGVlMjY0ODMzMGZjNjdjLXByaXRvbS0xMC14MjcteDI3LXRhYmxldC5qcGc.jpg'
        }
    ]
    return (
       <> 
       <h1>Product List</h1>
    {
        product.map((product, index) => {
            return (<Product key={index} {...product} />)
        })
    }
    </>
    )
}

export default ProductList