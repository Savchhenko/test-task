const headphones = [
    {
        img: "../assets/product1.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        oldPrice: 3527,
    },
    {
        img: "../assets/product2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img: "../assets/product3.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
        img: "../assets/product1.png",
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
    },
    {
        img: "../assets/product2.png",
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
    },
    {
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
            headphones.map(item => <Card props={item}/>)
        }
    </section>
  );
};

export default Products1;