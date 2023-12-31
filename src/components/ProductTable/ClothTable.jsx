import ProductRow from "./ClothRow";

const ProductTable = ({ products, setProducts }) => {
  return (
    <div className="table">
      <table className="view-table">
        <thead>
          <tr>
            <th>Cloth Id</th>
            <th>Cloth Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Description</th>
            <th>Color</th>
            <th>Size</th>
            <th>M. Date</th>
            <th>Agree</th>
            <th>remove</th>
          </tr>
        </thead>

        <tbody>
          {products.map((singleProduct) => (
            <ProductRow
              key={singleProduct.id}
              singleProduct={singleProduct}
              products={products}
              setProducts={setProducts}
            />
          ))}
        </tbody>
      </table>
      <button onClick={() => setProducts([])}>Remove All</button>
    </div>
    
  );
};

export default ProductTable;
