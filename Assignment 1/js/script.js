const menu = {
    breakfast: [
        {
            img: 'menu1.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu2.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu3.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu1.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        }, {
            img: 'menu2.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu3.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu1.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu2.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        }, {
            img: 'menu3.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu1.jpg',
            name: 'Chicken Burger Breakfast',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        }
    ],
    lunch: [

        {
            img: 'menu1.jpg',
            name: 'Chicken Burger Lunch',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu2.jpg',
            name: 'Chicken Burger Lunch',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu3.jpg',
            name: 'Chicken Burger Lunch',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        }
    ],
    dinner: [

        {
            img: 'menu1.jpg',
            name: 'Chicken Burger Dinner',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu2.jpg',
            name: 'Chicken Burger Dinner',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu3.jpg',
            name: 'Chicken Burger Dinner',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu1.jpg',
            name: 'Chicken Burger Dinner',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        }, {
            img: 'menu2.jpg',
            name: 'Chicken Burger Dinner',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu3.jpg',
            name: 'Chicken Burger Dinner',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu1.jpg',
            name: 'Chicken Burger Dinner',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        },
        {
            img: 'menu2.jpg',
            name: 'Chicken Burger Dinner',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        }, {
            img: 'menu3.jpg',
            name: 'Chicken Burger Dinner',
            description: 'Ipsum ipsum clita erat amet dolor justo diam',
            price: '$115'
        }
    ]
}

const tabs = document.querySelectorAll(".tab");
const menuList = document.getElementById("menu-list");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        // remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        const selectedMenu = tab.dataset.menu;
        renderMenu(menu[selectedMenu]);
    })
})

const generateColumn = (items) => `
      <div>
        ${items.map(item => `
          <div class="menu-item">
            <img src="assets/${item.img}" alt="Food" />
            <div class="item-content">
              <h4>${item.name}</h4>
              <p>${item.description}</p>
            </div>
            <span class="price">${item.price}</span>
          </div>
        `).join('')}
      </div>
    `;

const renderMenu = (items) => {
    const leftItems = items.slice(0, Math.ceil(items.length / 2));
    const rightItems = items.slice(Math.ceil(items.length / 2));
    menuList.innerHTML = generateColumn(leftItems) + generateColumn(rightItems);
}

renderMenu(menu.breakfast);