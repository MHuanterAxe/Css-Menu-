
$(document).ready(function () {
    let main = $('#p1');
    let inf = $('.information-panel').children('.panel');
    console.log(inf);
    main.mousedown(function () { 
        anime ({
            targets: '.panel',
            translateZ:-10,
            top: 0,
            easing: 'linear'
        })  
        anime({
            targets: '#p1',
            translateZ: 10
        }) 
        anime({
            targets: ['#p2', '#p3'],
            opacity: 0,
            duration: 3000
        })
    });
});