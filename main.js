
$(document).ready(function () {
    let main = $('#p1');
    let inf = $('.information-panel').children('.panel');
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
                opacity:1
            })
            t.add({
                targets:'#p3',
                top:220,
                opacity:1
            })
            t.add({
                targets: '#p2',
                top: 110,
                opacity:1
            })
            t.add({
                targets: '#p1',
                translateZ: -20
            }) 
            
            
        }else{
            let tl = anime.timeline({
                easing:'linear',
                duration:150
            })
            tl.add({
                targets: '#p1',
                translateZ: 20
            }) 
            tl.add({
                targets: '#p2',
                top: 0,
                opacity:0,
            })
            tl.add({
                targets:'#p3',
                top:0,
                opacity:0,
            })
            tl.add({
                targets:'#p4',
                top:0,
                opacity:0
            })
    
        }
        $('.panel').toggleClass('hiden');
    });
});