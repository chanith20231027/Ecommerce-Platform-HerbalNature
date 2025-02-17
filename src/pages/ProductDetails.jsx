import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div className="product-details-page">
      <div className="section-header">
        <h1>Product Details</h1>
      </div>
      {/* Product details content will be added later */}
    </div>
  );
};

export default ProductDetails;
