const random = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};
const size = () => {
    return (['Extra Small', 'Small', 'Medium', 'Large', 'Extra Large']);
};

const color = () => {
    return (['Red', 'Green', 'Blue', 'Orange', 'Yellow']);
};

const designer = () => {
    return ([
        'Ralph Lauren',
        'Alexander Wang',
        'Grayse',
        'Marc NY Performance',
        'Scrapbook',
        'J Brand Ready to Wear',
        'Vintage Havana',
        'Neiman Marcus Cashmere Collection',
        'Derek Lam 10 Crosby',
        'Jordan'
    ]);
};

const type = () => {
    return ([
        'Cashmere',
        'Cardigans',
        'Crew and Scoop',
        'V-Neck',
        'Shoes',
        'Cowl & Turtleneck'
    ]);
};

const price = () => {
    return (Math.random() * 100).toFixed(2);
};

function generate(count) {
    const data = [];
    for(let i = 0; i < count; i++) {
        const currentColor = color();
        const currentSize = size();
        const currentType = type();
        const currentDesigner = designer();
        const currentPrice = price();

        data.push({
            name: `${currentDesigner} ${currentType} ${currentColor} ${currentSize}`,
            color: currentColor,
            size: currentSize,
            designer: currentDesigner,
            type: currentType,
            price: currentPrice,
            salesPrice: currentPrice * .8
        });
    }
    return data;
}

export default generate;
