import { useParams } from 'react-router-dom';

const Shop = () => {
  const { categoryName } = useParams();

  return (
    <div className="shop-page">
      <div className="section-header">
        <h1>{categoryName ? `Shop ${categoryName.replace(/-/g, ' ')}` : 'Shop All Products'}</h1>
      </div>
      {/* Shop content will be added later */}
    </div>
  );
};

export default Shop;
