console.log('star');

 TweenMax.to('.rabbit', 1,{
    //  x:100,
    repeat:-1,
    yoyo:true,
    ease: Bounce.easeOut, y: 50
 })

 TweenMax.to('.fatty', 2,{
    //  x:100,
    rotation:15,
    transformOrigin : 'center',
    repeat:-1,
    repeatDelay:1.5,
    yoyo:true,
    ease: Power2.easeOut, x: 80
 })

 //公民的家
 TweenMax.to('.boxCenter img', 2,{
   y: -30,
   repeat: -1, //-1無限迴圈,
   yoyo: true
});