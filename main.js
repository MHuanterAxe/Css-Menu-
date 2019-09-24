
$(document).ready(function () {
    let main = $('#p1');
    let inf = $('.panel').children('h1');
    console.log(inf);
    main.mousedown(function () { 
        if($('.panel').hasClass('hiden')){
            let t = anime.timeline({
                easing:'linear',
                duration:150
            })
            t.add({
                targets:'#p4',
                top:330,
            })
            t.add({
                targets:'#p3',
                top:220,
            })
            t.add({
                targets: '#p2',
                top: 110,
            })
            t.add({
                targets: ['#p1',inf],
                translateZ: -2,
                color:'rgb(0,0,0)'
            }) 
            
            
        }else{
            let tl = anime.timeline({
                easing:'linear',
                duration:150
            })
            tl.add({
                targets: ['#p1',inf],
                translateZ: 2,
            }) 
            tl.add({
                targets: '#p2',
                top: 20,
            })
            tl.add({
                targets:'#p3',
                top:40,
            })
            tl.add({
                targets:'#p4',
                top:60,

            })
    
        }
        $('.panel').toggleClass('hiden');
    });
});