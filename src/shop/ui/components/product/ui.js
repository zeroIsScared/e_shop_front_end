
const Product = (props) => {   
    const {name, price} = props.productObject;

    return (
   <div>
    <h2>{name}</h2>
    <p>{price}</p>
  </div>
    )
}

export default Product;