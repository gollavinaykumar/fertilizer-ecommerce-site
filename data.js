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
const checkout_Items = document.getElementById("check-out-items");

const MAIN_EL = document.getElementById("main-content");
const CART_EL = document.getElementById("cart-quantity");
const cart_items = document.getElementById("cart-items");
const total_cart = document.getElementById("totalCart");



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

        count = count + 1;
        CART_EL.innerHTML = count;

        const cart_product_div = Product_div(product.name, product.price, product.image, 1);
        cart_items.appendChild(cart_product_div);

    })

    PRODUCT_INFO.append(PRODUCT_IMAGE, PRODUCT_NAME, PRODUCT_PRICE, ADD_TO_CART_BTN);
    return PRODUCT_INFO;
}

let addTotal = 0;
const divEl4 = document.createElement("div");
divEl4.classList.add("total-cart");
const pEl1 = document.createElement("p");
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
            addTotal = addTotal - productprice;
            pEl1.innerHTML = "Total cart value : $ " + addTotal;
        }

    })

    const spanEl = document.createElement("h3");
    spanEl.innerHTML = count1;

    const buttonEl1 = document.createElement("button");
    buttonEl1.innerHTML = "+";
    buttonEl1.addEventListener("click", () => {

        spanEl.innerHTML = ++count1;
        addTotal = addTotal + productprice;
        pEl1.innerHTML = "Total cart value : $ " + addTotal;
    })

    const Buy_now = document.createElement("button");
    Buy_now.innerHTML = "proceed to checkout";
    Buy_now.addEventListener("click", () => {
        const buy = buy_Item_div(productname, productimage, productprice, count1);
        checkout_Items.appendChild(buy);
    })

    const remove_cart = document.createElement("button");
    remove_cart.innerHTML = "remove Cart";
    remove_cart.addEventListener("click", () => {

        divEl.parentElement.removeChild(divEl);
        CART_EL.innerHTML = --count;
        addTotal = addTotal - productprice * count1;
        pEl1.innerHTML = "Total cart value : $ " + addTotal;
    })


    addTotal += productprice;
    pEl1.innerHTML = "Total cart value : $ " + addTotal;


    divEl.append(imageEl, PEl, priceEl, buttonEl, spanEl, buttonEl1, Buy_now, remove_cart);
    return divEl;
}
pEl1.innerHTML = "Total cart value : $ " + addTotal;
divEl4.appendChild(pEl1);
total_cart.appendChild(divEl4);


function buy_Item_div(productname, productimage, productprice, productquantity) {

    const divEl3 = document.createElement("div");
    divEl3.classList.add("buy_item");
    const divEl1 = document.createElement("div");
    divEl1.style.margin = "10px";

    const orderSummary = document.createElement("h3");
    orderSummary.innerHTML = "Order Summary";

    const order_product_name = document.createElement("p");
    order_product_name.innerHTML = "Product Name : " + productname;

    const order_product_price = document.createElement("p");
    order_product_price.innerHTML = "Product Price : $" + productprice;

    const order_product_quantity = document.createElement("p");
    order_product_quantity.innerHTML = "Product quantity :" + productquantity;

    const amount = productquantity * productprice;

    const TotalAmount = document.createElement("h3");
    TotalAmount.innerHTML = "Total Amount : $ " + amount;

    const paymentMethods = document.createElement("h3");
    paymentMethods.innerHTML = "payment methods";

    const emi = document.createElement("input");
    emi.setAttribute("type", "checkbox");

    const spanEl = document.createElement("span");
    spanEl.innerHTML = "EMI";

    const cashOnDelivery = document.createElement("input");
    cashOnDelivery.setAttribute("type", "checkbox");

    const spanEl1 = document.createElement("span");
    spanEl1.innerHTML = "Cash on delivery";

    const payNow = document.createElement("button");
    payNow.id = "paynow";
    payNow.innerHTML = "Pay now";
    payNow.addEventListener("click", () => {
        alert("product ordered");
    })



    const divEl2 = document.createElement("div");
    divEl2.classList.add("img1");
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", productimage);


    const closeBtn = document.createElement("button");
    closeBtn.classList.add("closeBtn");
    closeBtn.innerHTML = "X";
    closeBtn.addEventListener("click", () => {
        divEl3.parentElement.removeChild(divEl3);
    })
    divEl2.append(imgEl, closeBtn);



    divEl1.append(orderSummary, order_product_name, order_product_price, order_product_quantity, TotalAmount, paymentMethods, emi, spanEl, cashOnDelivery, spanEl1, payNow);
    divEl3.append(divEl1, divEl2);
    return divEl3;
}

MAIN_EL.appendChild(PRODUCT_INFO);





