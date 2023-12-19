let products = [
  {
    categories: "coffee",
    image: "../assets/images/coffee/coffee-1.jpg",
    tittle: "Irish coffee",
    description:
      "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
    price: "$7.00",
  },
  {
    categories: "coffee",
    image: "../assets/images/coffee/coffee-2.jpg",
    tittle: "Kahlua coffee",
    description:
      "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
    price: "$7.00",
  },
  {
    categories: "coffee",
    image: "../assets/images/coffee/coffee-3.jpg",
    tittle: "Honey raf",
    description: "Espresso with frothed milk, cream and aromatic honey",
    price: "$5.50",
  },
  {
    categories: "coffee",
    image: "../assets/images/coffee/coffee-4.jpg",
    tittle: "Ice cappuccino",
    description: "Cappuccino with soft thick foam in summer version with ice",
    price: "$5.00",
  },
  {
    categories: "coffee",
    image: "../assets/images/coffee/coffee-5.jpg",
    tittle: "Espresso",
    description: "Classic black coffee",
    price: "$4.50",
  },
  {
    categories: "coffee",
    image: "../assets/images/coffee/coffee-6.jpg",
    tittle: "Latte",
    description:
      "Espresso coffee with the addition of steamed milk and dense milk foam",
    price: "$5.50",
  },
  {
    categories: "coffee",
    image: "../assets/images/coffee/coffee-7.jpg",
    tittle: "Latte macchiato",
    description: "Espresso with frothed milk and chocolate",
    price: "$5.50",
  },
  {
    categories: "coffee",
    image: "../assets/images/coffee/coffee-8.jpg",
    tittle: "Coffee with cognac",
    description: "Fragrant black coffee with cognac and whipped cream",
    price: "$6.50",
  },
  {
    categories: "tea",
    image: "../assets/images/tea/tea-1.jpg",
    tittle: "Moroccan",
    description:
      "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
    price: "$4.50",
  },
  {
    categories: "tea",
    image: "../assets/images/tea/tea-2.jpg",
    tittle: "Ginger",
    description: "Original black tea with fresh ginger, lemon and honey",
    price: "$5.00",
  },
  {
    categories: "tea",
    image: "../assets/images/tea/tea-3.jpg",
    tittle: "Cranberry",
    description: "Invigorating black tea with cranberry and honey",
    price: "$5.00",
  },
  {
    categories: "tea",
    image: "../assets/images/tea/tea-4.jpg",
    tittle: "Sea buckthorn",
    description:
      "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
    price: "5.50",
  },
  {
    categories: "dessert",
    image: "../assets/images/dessert/dessert-1.jpg",
    tittle: "Marble cheesecake",
    description:
      "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
    price: "$3.50",
  },
  {
    categories: "dessert",
    image: "../assets/images/dessert/dessert-2.jpg",
    tittle: "Red velvet",
    description: "Layer cake with cream cheese frosting",
    price: "$4.00",
  },
  {
    categories: "dessert",
    image: "../assets/images/dessert/dessert-3.jpg",
    tittle: "Cheesecakes",
    description:
      "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
    price: "$4.50",
  },
  {
    categories: "dessert",
    image: "../assets/images/dessert/dessert-4.jpg",
    tittle: "Creme brulee",
    description:
      "Delicate creamy dessert in a caramel basket with wild berries",
    price: "$4.00",
  },
  {
    categories: "dessert",
    image: "../assets/images/dessert/dessert-5.jpg",
    tittle: "Pancakes",
    description: "Tender pancakes with strawberry jam and fresh strawberries",
    price: "$4.50",
  },
  {
    categories: "dessert",
    image: "../assets/images/dessert/dessert-6.jpg",
    tittle: "Honey cake",
    description: "Classic honey cake with delicate custard",
    price: "$4.50",
  },
  {
    categories: "dessert",
    image: "../assets/images/dessert/dessert-7.jpg",
    tittle: "Chocolate cake",
    description: "Cake with hot chocolate filling and nuts with dried apricots",
    price: "$5.50",
  },
  {
    categories: "dessert",
    image: "../assets/images/dessert/dessert-8.jpg",
    tittle: "Black forest",
    description:
      "A combination of thin sponge cake with cherry jam and light chocolate mousse",
    price: "$6.50",
  },
];

const productList = document.querySelector("[data-product-list]");
const buttonsCategory = document.querySelectorAll("[data-button-category]");
function activeButton(value){
    let current = '';
    buttonsCategory.forEach((button) => {
            if (value.toUpperCase() == button.innerText.toUpperCase()) {
              button.classList.add("active");
              current = button.innerText.toUpperCase()
            } else {
              button.classList.remove("active");
            }
          });
    return current;
}
function createMarcup(cardList){
    const markup = cardList.map(({ image, tittle, description, price }) => `
    <li class="menu-card__item" data-modal-open>
                    <div class="menu-card__image"><img  src=${image} alt=${tittle}></div>
                    <div class="menu-card__description">
                        <div class="menu-card__top">
                            <p class="menu-card__title">${tittle}</p>
                            <p class="menu-card__text">${description}</p>
                        </div>
                        <p class="menu-card__price">${price}</p>
                    </div>
    </li>
`)
.join("");
productList.innerHTML = markup;
}
function filterProduct(value){
    const currentCategory = activeButton(value)
    const cardList = products.filter(cardsCurrent => cardsCurrent.categories.toUpperCase() === currentCategory)
    createMarcup(cardList);
}

window.onload = () => {
   filterProduct("coffee");
};
