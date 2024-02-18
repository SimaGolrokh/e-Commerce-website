const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav class="navbar"></nav>
    <div class="nav">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"  />

        <img src="img/dark-logo.png" class="brand-logo" alt="">
        <div class="nav-items">
            
            <ul id="navbar" class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="product.html" class="link">shop</a></li>
            <li class="link-item"><a href="about.html" class="link"> About</a></li>
            <li class="link-item"><a href="contact.html" class="link">contact</a></li>
            <li class="link-item"><a href="cart.html" class="link"><i class="fas fa-shopping-bag"></i></a></li>
            <li class="link-item"><a href="user.html" class="link"><i class="fas fa-user"></i></a></li>
            <a href="#" id=" close"><i class="far fa-times"></i></a>

         </ul>
        </div>
    </div>
        <div id="mobile">
            <i id="bar" class="fas fa-bars"></i>
            <a href="cart.html"><i class="fas fa-shopping-bag"></i></a>
            <a href="user.html"><i class="fas fa-user"></i></a>
        </div>
        
    `;
}

createNav();

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

