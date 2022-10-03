import Card from "./Card";

const headphones = [
    {
        index: 1,
        img: "../assets/product1.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        oldPrice: 3527,
    },
    {
        index: 2,
        img: "../assets/product2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        index: 3,
        img: "../assets/product3.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        index: 4,
        img: "../assets/product1.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
    },
    {
        index: 5,
        img: "../assets/product2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        index: 6,
        img: "../assets/product3.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
];

const Products1 = () => {
    return (
        <section>
            <h3>Наушники</h3>
            {
                headphones.map(item => <Card props={item} key={item.index} />)
            }
        </section>
     );
};

export default Products1;
