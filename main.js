
$(document).ready(function () {
    let main = $('.main');
    let inf = $('.information-panel').children('.lesson');
    console.log(inf);
    main.mousedown(function () { 
        
        
        if(!inf.hasClass('active')){
            let informpabel = anime({
                targets: '.information-panel',
                height: 0,
                duration: 1000,
                easing: 'easeInQuad'
            })
            let blocks = anime({
                targets: '.lesson',
                translateY: -50,
                translateZ: -10,
                opcity: 0,
                duration: 1000,
                easing: 'easeInQuad'
            })
        }else{
            informpabel = anime({
                targets: '.information-panel',
                height: 150,
                duration: 1000,
                easing: 'easeInQuad'
            })
            blocks = anime({
                targets: '.lesson',
                translateY: 50,
                translateZ: 10,
                opcity: 1,
                duration: 1000,
                easing: 'easeInQuad'
    
            })
        }
        inf.toggleClass('active');
        
    });
});