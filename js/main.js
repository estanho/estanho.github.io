console.log ("1.8");

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

$(document).ready(async function(){  

    var postsNumber = 0;

    const posts = await loadJSON();
    await loadPostsCarousel(posts);
    postsNumber = loadFirstPostsSiteContent(posts,postsNumber);
    
    $morePosts = $(".posts");

    $morePosts.click(function (){
        //Posts
        postsNumber = loadPostsSiteContent(posts,postsNumber);
    });
  
    // Mobile
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    //Click event on Toggle Menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    });
    
    // Click to scroll top
    $('.move-up span').click(() =>{
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });

    //AOS Instance
    AOS.init();
});

async function loadJSON (){
    
    let posts;

    await $.getJSON( "../posts.json", (data) => {
        posts = data.posts;
    })
    .done(function() { console.log('*1 - 🟢 getJSON request succeeded!'); })
    .fail(function(jqXHR, textStatus, errorThrown) { console.log('*1 - 🔴 getJSON request failed! ' + textStatus); })
    .always(function() { console.log('*1 - 🟢 getJSON request ended!'); });
    
    return posts;
}

function loadPostsCarousel (posts) {
    console.log("2 - Load Carousel!");
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

    console.log("3 - Load Icons!");
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
}

function loadFirstPostsSiteContent(posts, postsNumber) {
    for(postsNumber; postsNumber < 4; postsNumber++){
        $(".posts").append(
            `<hr>
            <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                <div class="post-image">
                    <div>
                        <img src="${posts[postsNumber].image}" class="img" alt="blog1">
                    </div>
                    <div class="post-info flex-row">
                        <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                        <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;Janeiro 14, 2022</span>
                    </div>
                </div>
                <div class="post-title">
                    <a href="#">${posts[postsNumber].title}</a>
                    <p>${posts[postsNumber].description}</p>
                    <button class="btn post-btn">Read More &nbsp;<i class="fas fa-arrow-right"></i></button>
                </div>
            </div>`);
    }

    $(".posts").append(`<button class="btn more-btn">Read More &nbsp;<i></i></button>`);

    return postsNumber;
}

function loadPostsSiteContent(posts, postsNumber) {
    let aux = postsNumber;
    for(postsNumber; postsNumber < (aux+4); postsNumber++){
        if(postsNumber < posts.length){
            $(".more-btn").before(
                `<hr>
                <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                    <div class="post-image">
                        <div>
                            <img src="${posts[postsNumber].image}" class="img" alt="blog1">
                        </div>
                        <div class="post-info flex-row">
                            <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                            <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;Janeiro 14, 2022</span>
                        </div>
                    </div>
                    <div class="post-title">
                        <a href="#">${posts[postsNumber].title}</a>
                        <p>${posts[postsNumber].description}</p>
                        <button class="btn post-btn">Read More &nbsp;<i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>`);
        }
    }

    return postsNumber;
}