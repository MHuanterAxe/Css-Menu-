
$(document).ready(function () {
    let main = $('#p1');
    let inf = $('.panel').children('h1');
    console.log(inf);
    main.mousedown(function () { 
        if($('.panel').hasClass('hiden')){
            let t = anime.timeline({
                easing: 'cubicBezier(.5, .05, .1, .3)',
                duration:200
            })
            t.add({
                targets:'#p4',
                top:330,
                translateZ: 5
            })
            t.add({
                targets:'#p3',
                top:220,
                translateZ: 4
            })
            t.add({
                targets: '#p2',
                top: 110,
                translateZ: 3
            })
            t.add({
                targets: ['#p1',inf],
                translateZ: -2,
                color:'rgb(0,0,0)'
            }) 
            
            
        }else{
            let tl = anime.timeline({
                easing: 'cubicBezier(.5, .05, .1, .3)',
                duration:200
            })
            tl.add({
                targets: ['#p1',inf],
                translateZ: 2,
            }) 
            tl.add({
                targets: '#p2',
                top: 20,
                translateZ: -3
            })
            tl.add({
                targets:'#p3',
                top:40,
                translateZ: -4
            })
            tl.add({
                targets:'#p4',
                top:60,
                translateZ: -5

            })
    
        }
        $('.panel').toggleClass('hiden');
    });
});