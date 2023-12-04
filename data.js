const products = [
    {
        id: 0,
        name: "Ampligo",
        image: 'A.jpg',
        price: 1200,
    },
    {
        id: 1,
        name: "calaris",
        image: "b.png",
        price: 500,
    },
    {
        id: 2,
        name: "coucal",
        image: "c.png",
        price: 750,
    },
    {
        id: 3,
        name: "pexalon",
        image: "d.jpg",
        price: 2050,
    },
    {
        id: 4,
        name: "dupoint",
        image: "h.jpg",
        price: 2000,
    },
    {
        id: 5,
        name: "silicon",
        image: "s.jpg",
        price: 20,
    }

];
const rootEl = document.getElementById("root");
const cart_Product = document.createElement("p");

const MAIN_EL = document.getElementById("main-content");
const CART_EL = document.getElementById("cart-quantity");
const cart_items = document.getElementById("cart-items");
let count = 0;
products.forEach((ele) => {
    const OUTPUT = createProduct(ele);
    MAIN_EL.appendChild(OUTPUT);
})

function createProduct(product) {
    const PRODUCT_INFO = document.createElement("div");
    PRODUCT_INFO.classList.add("product");

    const PRODUCT_IMAGE = document.createElement("img");
    PRODUCT_IMAGE.setAttribute("src", product.image);


    const PRODUCT_NAME = document.createElement("p");
    PRODUCT_NAME.innerHTML = product.name;

    const PRODUCT_PRICE = document.createElement("p");
    PRODUCT_PRICE.innerHTML = "$" + product.price;

    const ADD_TO_CART_BTN = document.createElement("button");
    ADD_TO_CART_BTN.innerHTML = "ADD TO CART";
    ADD_TO_CART_BTN.classList.add("addToCartBtn");
    ADD_TO_CART_BTN.addEventListener("click", () => {
        debugger;
        count = count + 1;
        CART_EL.innerHTML = count;
        const cart_product_div = Product_div(product.name, product.price, product.image, 1);
        cart_items.appendChild(cart_product_div);
    })

    PRODUCT_INFO.append(PRODUCT_IMAGE, PRODUCT_NAME, PRODUCT_PRICE, ADD_TO_CART_BTN);
    return PRODUCT_INFO;
}
function Product_div(productname, productprice, productimage, count1) {
    const divEl = document.createElement("div");
    divEl.classList.add("cart-product-info");
    const PEl = document.createElement("p");
    PEl.innerHTML = productname;

    const imageEl = document.createElement("img");
    imageEl.setAttribute("src", productimage);

    const priceEl = document.createElement("p");
    priceEl.innerHTML = "$" + productprice;

    const buttonEl = document.createElement("button");
    buttonEl.innerHTML = "-";
    buttonEl.addEventListener("click", () => {
        if (count1 > 1) {
            spanEl.innerHTML = --count1;
        }
    })

    const spanEl = document.createElement("h3");
    spanEl.innerHTML = count1;

    const buttonEl1 = document.createElement("button");
    buttonEl1.innerHTML = "+";
    buttonEl1.addEventListener("click", () => {
        spanEl.innerHTML = ++count1;
    })

    const Buy_now = document.createElement("button");
    Buy_now.innerHTML = "proceed to checkout";

    const remove_cart = document.createElement("button");
    remove_cart.innerHTML = "remove Cart";
    remove_cart.addEventListener("click", () => {
        divEl.parentElement.removeChild(divEl);
        CART_EL.innerHTML = --count;
    })
    divEl.append(imageEl, PEl, priceEl, buttonEl, spanEl, buttonEl1, Buy_now, remove_cart);
    return divEl;
}

MAIN_EL.appendChild(PRODUCT_INFO);





