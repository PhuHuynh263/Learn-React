function ProductItem(props) {
  const { item} = props;
  return (
    <>
      <div className="product__item" >
        <img className="product__image" src={item.image} />
        <div className="product__name">{item.name}</div>
        <div className="product__price">Gia : {item.price}</div>
      </div>
    </>
  );
}

export default ProductItem;
