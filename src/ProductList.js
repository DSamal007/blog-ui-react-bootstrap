import React from 'react' 
class ProductList extends React.Component {
    constructor() {
        super() 
        this.state = {
            products : [
                { id: 1, name: 'marker', price: 10 },
                { id: 2, name: 'scale', price: 5 }
            ]
        }
    }

    render() {
        return(
            <div>
                <h2>Listing Products - { this.state.products.length }</h2>
                <ul>
                    { this.state.products.map(product => {
                        return <li key={product.id}>{product.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default ProductList