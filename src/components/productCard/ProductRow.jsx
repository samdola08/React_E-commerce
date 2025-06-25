import React, { useState, useMemo } from "react";
import ProductCard from "./index";

const ProductRow = ({ products = [], perPage = 10 }) => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(products.length / perPage);

  const currentData = useMemo(() => {
    return products.slice((page - 1) * perPage, page * perPage);
  }, [products, page, perPage]);

  if (!Array.isArray(products)) {
    console.error("ProductRow ➜ 'products' is not an array", products);
    return <p style={{ color: "red" }}>⚠️ Invalid product data!</p>;
  }

  return (
    <div>
      <div className="productRow">
        {currentData.map((product) => (
          <div className="item" key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>

      <div className="pager d-flex gap-2 justify-content-center mt-4">
        {[...Array(pageCount)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`btn ${i + 1 === page ? "btn-success" : "btn-outline-success"}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductRow;
