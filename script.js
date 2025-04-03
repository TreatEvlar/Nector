// navbar open and close

function openNav(){
    var nav = document.querySelector(".navbar ul");
    nav.classList.add("active");
}

function closeNav(){
    var nav = document.querySelector(".navbar ul");
    nav.classList.remove("active");
}


// navbar sticky on scroll

window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})


// product-page section

const cards = [
    {img:"./images/Screenshot 2025-04-02 101110.png",subheading:'IcyHeat',heading:'Avure Skincare',price:'$52.50'},
    {img:"./images/Screenshot 2025-04-02 101128.png",subheading:'Hair Serum',heading:'Smoothie',price:'$63.00'},
    {img:"./images/Screenshot 2025-04-02 101150.png",subheading:'Natural Oil',heading:'Screen serum',price:'$52.50'}
]

document.getElementById('product-box').innerHTML=cards.map(ing => `
    <div class="image-container">
        <img src="${ing.img}" alt="">
        <button id="invisible">Quick Add</button>
        <h1>${ing.subheading}</h1>
        <h2>${ing.heading}</h2>
        <h3>${ing.price}</h3>
        <button id="visible">Quick Add</button>
    </div>
    `).join('')

// blog section start.

const card = [
    {img:"./images/ocimum-tenuiflorum-holy-basil-sacred-basil-shyama-tulsi-rama-tulsi-queen-herbs-scaled.jpg",heading:'From Farm to Bottle: How Our Family Brings You Pure, Organic Goodness and Lasting Wellness.'},
    {img:"./images/matcha-green-tea-1296x728-feature.webp ",heading:'Elevate Your Health Naturally: A Comprehensive Introduction to Detox Drinks Benefits'},
    {img:"./images/photos-product-mini_matchaArtboard_2.webp",heading:'Embrace Wellness Daily: The Magic of Organic Detox Drinks Introduction for a Healthier You'}
]

document.getElementById('blog-box').innerHTML=card.map(ing => `
    <div class="blog-container">
        <img src="${ing.img}" alt="">
        <h1>${ing.heading}</h1>
    </div>
    `).join('')