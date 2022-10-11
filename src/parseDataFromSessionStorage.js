const parseDataFromSessionStorage = () => {
    const items = [];
    let data = sessionStorage.getItem("products");
    if (data !== null) {
        data = data.split("},");
        for (let i = 0; i < data.length - 1; i++) {
            data[i] += "}";
        };
        for (let i = 0; i < data.length; i++) {
            items.push(JSON.parse(data[i]));
        }
    }

    return items;
};

export default parseDataFromSessionStorage;