const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/light-logo.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="col">
                <li class="col-title">About</li>
                <li><a href="#" class="footer-link">about us</a></li>
                <li><a href="#" class="footer-link">delivery information</a></li>
                <li><a href="#" class="footer-link">privacy policy</a></li>
                <li><a href="#" class="footer-link">terms & condition</a></li>
                <li><a href="#" class="footer-link">contact us</a></li>
                
            </ul>
            <ul class="col">
                <li class="col-title">my account</li>
                <li><a href="#" class="footer-link">sign in</a></li>
                <li><a href="#" class="footer-link">view cart</a></li>
                <li><a href="#" class="footer-link">my wishlist</a></li>
                <li><a href="#" class="footer-link">track my order</a></li>
                <li><a href="#" class="footer-link">help</a></li>
                
            </ul>
        </div>
    </div>
    <div id="info">
    <p class="footer-title">contact</p>
    <p class="info">Address:122345,mashhad,iran </p>

    <p class="info"> support emails:help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone :180 00 00 001, 180 00 00 002</p>
    <div class="follow">
        <h4>follow us</h4>

        <div class="icon">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
        </div>
        
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    </div>

    `;
    
}

createFooter();