import { GoodsItem } from "./GoodsItem";
import not_found from './404.gif'

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype } = props;

    if (!goods.length) {
        /*return <h3>Not found</h3>;*/
        <img src={not_found} alt="" />
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.imdbID} {...item} addToBasket={addToBasket} />
            ))}
        </div>
    )




}

export { GoodsList };