document.addEventListener('DOMContentLoaded', () => {
    const productContainers = document.querySelectorAll('.product-container');
    const nxtBtns = document.querySelectorAll('.nxt-btn');
    const preBtns = document.querySelectorAll('.pre-btn');

    productContainers.forEach((item, i) => {
        let containerWidth = item.offsetWidth;

        nxtBtns[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        });

        preBtns[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        });
    });
});
