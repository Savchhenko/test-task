import Card from "./Card";
import "../index.css";

const headphones = [
    {
        index: 1,
        img: "images/product1.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        oldPrice: 3527,
    },
    {
        index: 2,
        img: "images/product2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        index: 3,
        img: "images/product3.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        index: 4,
        img: "images/product1.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
    },
    {
        index: 5,
        img: "images/product2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        index: 6,
        img: "images/product3.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
];

const Products1 = () => {
    return (
        <section>
            <h3 className="products-title">Наушники</h3>
            <div className="products">
                {
                    headphones.map(item => <Card props={item} key={item.index} />)
                }
            </div>
        </section>
     );
};

export default Products1;
