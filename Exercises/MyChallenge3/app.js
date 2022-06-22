// Developing a store menu items 
const menu = [
    {
        id: 1,
        title: "Custom PC",
        price: '$' + 950.00,
        img: "./images/item-1.png",
        desc: `A full custom machine build with price x performance as your choice`
    },

    {
        id: 2,
        title: "i9 10900K",
        price: '$' + 350.00,
        img: "./images/item-2.png",
        desc: `10th Gen Intel Core i9-10900K unlocked desktop processor. Featuring Intel Turbo Boost Max Technology 3. 0, unlocked 10th Gen Intel Core desktop processors are optimized for enthusiast gamers and serious creators and help deliver high performance overclocking for an added boost.`
    },

    {
        id: 3,
        title: "Corsair H115i",
        price: '$' + 220.00,
        img: "./images/item-3.png",
        desc: `An all-in-one liquid CPU cooler built for both low noise operation and extreme CPU cooling.`
    },

    {
        id: 4,
        title: "B450M TUF",
        price: '$' + 145.00,
        img: "./images/item-4.png",
        desc: `AMD AM4 Socket: The perfect pairing for 3rd/2nd/1st Gen AMD Ryzen CPUs.`
    },

    {
        id: 5,
        title: "MSI GE76 Raider 12UHS",
        price: '$' + 4000.00,
        img: "./images/item-5.png",
        desc: `Beast desktop replacement. i9 12900HK and RTX 3080 Ti.`
    },

    {
        id: 6,
        title: "Windows Server 2022 - Essentials (OEM)",
        price: '$' + 551.00,
        img: "./images/item-6.png",
        desc: `Ideal for small businesses with up to 25 users and 50 devices.`
    }


];

const sectionCenter = document.querySelector(".section-center");

// Display products from a data set, aka array
window.addEventListener("DOMContentLoaded", function () {
    let displayData = menu.map(function (item) {

        return `<article class="menu-item">
        <img src="${item.img}"
            class="photo" width="200" height="150" alt="${item.title}" />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 id="money" class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}></p>
        </div>
    </article>`;
    });

    displayData = displayData.join("");

    sectionCenter.innerHTML = displayData;
});