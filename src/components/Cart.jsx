function Cart (props) {
    const{ quantity = 0, handleBasketShow = Function.prototype } = props;

    return (
        <div className='cart blue darken-4 white-text ' onClick={handleBasketShow}>
            <i className='material-icons'>local_grocery_store</i>
            { quantity ? <sapn className='cart-quantity'>{quantity}</sapn> : null }
        </div>
    )
}

export { Cart };