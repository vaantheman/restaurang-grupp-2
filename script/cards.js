const generateImgElement = (img) => {
    const imgElement = document.createElement('img');
    imgElement.src = img;
    return imgElement;
};

const generateNameElement = (name) => {
    const nameElement = document.createElement('h3');
    nameElement.className = 'item-container__title';
    nameElement.innerText = name;
    return nameElement;
};

const generatePriceElement = (price) => {
    const priceElement = document.createElement('p');
    priceElement.className = 'item-container__price';
    priceElement.innerText = price;
    return priceElement;
};

const generateInfoElement = (dsc) => {
    const infoElement = document.createElement('p');
    infoElement.className = 'item-container__dsc';
    infoElement.innerText = dsc;
    return infoElement;
};

export const createItemCards = (foodList) => {
    foodList.forEach((item) => {
        const itemWrapper = document.getElementById('item-wrapper');
        const itemContainer = document.createElement('div');
        itemContainer.className = 'item-container';

        itemContainer.appendChild(generateImgElement(item.img));
        itemContainer.appendChild(generateNameElement(item.name));
        itemContainer.appendChild(generateInfoElement(item.dsc));
        itemContainer.appendChild(generatePriceElement(item.price));

        itemWrapper.appendChild(itemContainer);
    });
};