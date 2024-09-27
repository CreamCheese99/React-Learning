import React from 'react'


const products = [
    {
        id: 1,
        title: 'Cabbage',
        isFriut: false
    },
    {
        id: 2,
        title: 'Garlic',
        isFriut: false
    },
    {
        id: 3,
        title: 'Apple',
        isFriut: true
    }
]
function Products() {
  return (
    <div>
        {products.map(product => (
            <div 
                
                key = {product.id}
                style={{
                    color:product.isFruit ? 'purple' : 'red'
                }}
            >
                {product.title}
            </div>
        ))}
    </div>

  )
}

export default Products