import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import { formatPrice } from "../components/ProductItem";
import NotFound from "./NotFound";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <NotFound />;

  return (
    <article className="detail">
      <Link to="/products" className="back">
        Quay lại danh sách
      </Link>
      <span className="tag">{product.category}</span>
      <h1>{product.name}</h1>
      <p className="price">{formatPrice(product.price)}</p>
      <p>{product.description}</p>

      <dl className="specs">
        <dt>Mã sản phẩm</dt>
        <dd>{product.id}</dd>
        <dt>Danh mục</dt>
        <dd>{product.category}</dd>
      </dl>
    </article>
  );
}

export default ProductDetail;
