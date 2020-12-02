const objectToArray = (data) => {
    const values = Object.values(data);
    const keys = Object.keys(data);
    const costArr = [];
    keys.forEach((item, index) => {
        costArr.push({ name: item, cost: values[index] });
    });
    return costArr;
};

export default objectToArray;
