import "./Producto.css";

export default function Producto({img, product}) {
    return(
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-name">
                <h3>{product}</h3>
            </div>
        </div>

    )
}