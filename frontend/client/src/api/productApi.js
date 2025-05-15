export const updateProduct = async (productId, productData) => {
    const response = await fetch(`http://localhost:5000/api/products/${productId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
    });
    return response.json();
};
