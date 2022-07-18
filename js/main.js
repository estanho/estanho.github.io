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

    var posts;

    // Load json
    $.getJSON( "../posts.json", (data) => {
        posts = data.posts;
    });

    // Carousel
    $.when().then(() => {
        posts.forEach((post) => {
            $(".owl-carousel").append(
                `<div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                    <img src="${post.image}" alt="post-1">
                    <div class="blog-title">
                        <h3>${post.title}</h3>
                        <button class="btn btn-blog">Ler mais</button>
                        <span>${post.day}</span>
                    </div>
                </div>`);
            });
    })
    .done(() => {
        $(".blog .container").append(`
            <div class="owl-navigation">
            <span class="owl-nav-prev"><i class="fas fa-long-arrow-alt-left"></i></span>
            <span class="owl-nav-next"><i class="fas fa-long-arrow-alt-right"></i></span>
            </div>`
        );

        $('.owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,
            dots: false,
            nav: true,
            navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
            responsive: responsive
        });
    });
    
    $(window).scroll(function() {
        if($(window).scrollTop() == $(document).height() - $(window).height()) {
            $(".posts").append(
                `<hr>
                <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                    <div class="post-image">
                        <div>
                            <img src="./assets/images_posts/background_test.jpg" class="img" alt="blog1">
                        </div>
                        <div class="post-info flex-row">
                            <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                            <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;Janeiro 14, 2022</span>
                            <span>2 Comentários</span>
                        </div>
                    </div>
                    <div class="post-title">
                        <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, hic?</a>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, 
                            repellendus molestias esse officia pariatur libero, illo sunt iure 
                            accusantium aliquid dicta eum porro consequuntur dolorem non eos! 
                            Quam commodi molestias quae repellat alias aliquam reprehenderit 
                            nesciunt esse dolores eum! Illum!
                        </p>
                        <button class="btn post-btn">Read More &nbsp;<i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>`);
        }
    });
    

    // Mobile
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    //Click event on Toggle Menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });
    
    // Click to scroll top
    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    //AOS Instance
    AOS.init();

    console.log ("1.1");
});