$( document ).ready(function(){							
    var angleSteps = 360 / $('#circle-list div').length;
    var baseAngle = 0;
    var jud = 0;
    
    function updateListPositions(){
        $('#circle-list div').each(function(index, element){
            var angle = baseAngle + (index * angleSteps);
            var center = {x:60,y:180};
            var distance = 200;
            var x = distance * Math.cos(angle * (Math.PI / 180));
            var y = distance * Math.sin(angle * (Math.PI / 180));
            $(element).css({left:center.x+x, top:center.y+y});
        });
    }
    
    function stepAngle(){
        baseAngle++;
        updateListPositions();
    }
    stepAngle();
    //var stepInterval = setInterval(stepAngle, 100);
    //setTimeout(function(){clearInterval(stepInterval);},2000);

    $(document).mousedown(function(e){
        $('.cover_set').css('animation','none'); 
        $('.suggest_doll').css('animation','none'); 
        $('.suggest_doll').css('visibility','hidden'); 
        $('.suggest_cat').css('animation','none'); 
        $('.suggest_cat').css('visibility','hidden'); 
        $('.suggest_helmet').css('animation','none'); 
        $('.suggest_helmet').css('visibility','hidden'); 
        $('.suggest_leather').css('animation','none'); 
        $('.suggest_leather').css('visibility','hidden'); 
        $('.suggest_toy').css('animation','none'); 
        $('.suggest_toy').css('visibility','hidden'); 
        $('.suggest_head').css('animation','none'); 
        $('.suggest_head').css('visibility','hidden'); 
        $('.shine').css('animation','none'); 
        $('.shine').css('visibility','hidden'); 

    });

    

    $('.img_doll').click(function() {
        $('.cover_set').css('animation','fade 4s ease');
        $('.suggest_doll').css('visibility','visible'); 
        $('.suggest_doll').css('animation','Imgfadein 2s ease'); 
        $('.shine').css('visibility','visible'); 
        $('.shine').css('animation','fadein 5s ease'); 
        baseAngle = 90;
        updateListPositions();

    });

    $('.img_cat').click(function() {
        $('.cover_set').css('animation','fade 4s ease');
        $('.suggest_cat').css('visibility','visible'); 
        $('.suggest_cat').css('animation','Imgfadein 2s ease'); 
        $('.shine').css('visibility','visible'); 
        $('.shine').css('animation','fadein 5s ease'); 
        baseAngle = -28;
        updateListPositions();
    });

    $('.img_helmet').click(function() {
        $('.cover_set').css('animation','fade 4s ease');
        $('.suggest_helmet').css('visibility','visible'); 
        $('.suggest_helmet').css('animation','Imgfadein 2s ease'); 
        $('.shine').css('visibility','visible'); 
        $('.shine').css('animation','fadein 5s ease'); 
        baseAngle = -90;
        updateListPositions();
    });

    $('.img_leather').click(function() {
        $('.cover_set').css('animation','fade 4s ease');
        $('.suggest_leather').css('visibility','visible'); 
        $('.suggest_leather').css('animation','Imgfadein 2s ease'); 
        $('.shine').css('visibility','visible'); 
        $('.shine').css('animation','fadein 5s ease'); 
        baseAngle = -150;
        updateListPositions();
    });

    $('.img_toy').click(function() {
        $('.cover_set').css('animation','fade 4s ease');
        $('.suggest_toy').css('visibility','visible'); 
        $('.suggest_toy').css('animation','Imgfadein 2s ease'); 
        $('.shine').css('visibility','visible'); 
        $('.shine').css('animation','fadein 5s ease'); 
        baseAngle = 28;
        updateListPositions();
    });

    $('.img_head').click(function() {
        $('.cover_set').css('animation','fade 4s ease');
        $('.suggest_head').css('visibility','visible'); 
        $('.suggest_head').css('animation','Imgfadein 2s ease'); 
        $('.shine').css('visibility','visible'); 
        $('.shine').css('animation','fadein 5s ease'); 
        baseAngle = 150;
        updateListPositions();
    });
});