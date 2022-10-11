import "../index.css";
import Card from "./Card";

const headphones = [
    {
        index: 1,
        img: "images/product4.png",
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
    },
    {
        index: 2,
        img: "images/product5.png",
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
    },
    {
        index: 3,
        img: "images/product6.png",
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
    }
];

const Products2 = () => {
    return (
        <section className="padding-bottom">
            <h3 className="section-title">Беспроводные наушники</h3>
            <div className="products">
                {
                    headphones.map(item => <Card item={item} key={item.index} />)
                }
            </div>
        </section>
    );
};

export default Products2;