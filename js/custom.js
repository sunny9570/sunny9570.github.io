$(function () {


    const tt = 0.3;

    const tl = gsap.timeline();

    tl.from('.intro .de01', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de02', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de03', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de04', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de06', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })
    tl.from('.intro .de05', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 1,
        // ease: 'bounce'
    })

    tl.from('.intro h2', {
        scale: 0.5,
        opacity: 0,
        duration: tt * 3,
    })


    tl.from('.intro .title01', {
        opacity: 0,
        duration: tt * 3,
        // ease: 'bounce'
    })

    tl.from('.intro .title02', {
        opacity: 0,
        duration: tt * 3,
    })

    tl.from('.intro .title03', {
        opacity: 0,
        duration: tt * 3,
    })

    tl.from('.intro .title04', {
        opacity: 0,
        duration: tt * 3,
    })

    tl.from('.intro .title05', {
        opacity: 0,
        duration: tt * 3,
    })

    tl.from('.intro .title06', {
        scale: 2,
        opacity: 0,
        duration: tt * 4,
    })

    $('.content').fullpage({
        anchors: ['intro', 'pt01', 'pt02', 'pt03', 'TRAINING', 'PROFILE'],
        scrollOverflow: false,


        onLeave: function (o, d) {
            console.log(o.index, d.index);

            let n = d.index;

            $('.gnb li')
                .eq(n)
                .addClass('on')
                .siblings()
                .removeClass('on')
        },


        afterLoad: function (o, d) {

            let n = d.index;


            $('.gnb ul li')
                .eq(n - 1)
                .addClass('on')
                .siblings()
                .removeClass('on');

            if (n === 4 || n === 5 || n === 6) {
                $('.header').addClass('on');
                $('.gnb').addClass('on');
            } else {
                $('.header').removeClass('on');
                $('.gnb').removeClass('on');
            }
        },

    });



    const slide = new Swiper('.trainingslide', {
        effect: "cube",
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        freeMode: true,
        speed: 1500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 80,
            shadowScale: 0.7,
        },

        navigation: {
            nextEl: '.training .arrows .next',
            prevEl: '.training .arrows .prev',

        },



        // pagination: {
        //     el: '.main_visual_slide .dots',
        //     clickable: true,
        // },
    });



    $('.training .link button').on('click', function (e) {
        let idx = $(this).index();//0,1
        $('.training .itm')
            .eq(idx)
            .addClass('on')
            .siblings()
            .removeClass('on')

        $(this).parent().addClass('on').siblings().removeClass('on');


        slide.slideToLoop(idx)
    });


})