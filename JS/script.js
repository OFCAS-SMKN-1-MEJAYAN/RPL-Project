    // bagian nav
    const menuToggle = document.querySelector('.menu-toggle');
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const three = document.querySelector('#three');

    menuToggle.addEventListener('click', function() {
        one.classList.toggle('show-one');
        two.classList.toggle('show-two');
        three.classList.toggle('show-three');
    });

    // JQUERY
    $(window).scroll(function() {
        var isiScroll = $(this).scrollTop();
        // $('#isi').css({
        //     'transform': 'translate(0px, ' + isiScroll / 5 + '%)'
        // })
        // $('#snippet').css({
        //     'transform': 'translate(0px, ' + isiScroll / 4 + '%)'
        // })
        if (isiScroll > $('.my-skill .skills .img-5').offset().top - 470) {
            $('.my-skill .skills .img-5').each(function(i) {
                setTimeout(function() {
                    $('.my-skill .skills .img-5').eq(i).addClass('Lmuncul')
                }, 500 * (i + 1))
            })
        }
    });