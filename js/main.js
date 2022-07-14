
$.get( "./posts.json", function(data) {
    data.posts.forEach(function(post,index){
        $(".owl-carousel").append(
            `<div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                <img src="${post.image}" alt="post-1">
                <div class="blog-title">
                    <h3>${post.title}</h3>
                    <button class="btn btn-blog">Ler mais</button>
                    <span>${post.data}</span>
                </div>
            </div>`);
            console.log('Foi');
    });
});

const responsive = {
    0: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function(){
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    //Click event on Toggle Menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });

    // Owl Carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // Click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    //AOS Instance
    AOS.init();
});