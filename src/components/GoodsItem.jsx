function GoodsItem(props) {
    const {
        id,
        name,
        description,
        price,
        full_background,
        addToBasket = Function.prototype,
    } = props;

    return (
        <div id={id} className="card" >
            <div className="card-image">
                <img src={full_background} alt={name} />
                <a className="btn-floating halfway-fab waves-effect waves-light red"
                    onClick={() =>
                        addToBasket({
                            id, name, price
                        })
                    }

                ><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <span className="right">Цена: {price}</span>
            </div>
        </div>
    );
}

export { GoodsItem };