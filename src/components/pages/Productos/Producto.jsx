import "./Producto.css";

export default function Producto({img, product, altt}) {
    return(
        <div className="product">
            <div className="product-img">
                <img src={img} alt={altt} />
            </div>
            <div className="product-name">
                <h3>{product}</h3>
            </div>
        </div>

    )
}