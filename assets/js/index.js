 $(document).ready(()=>{
     $(window).scroll(()=>{
         if(this.scrollY > 20){
             $('.navbar').addClass('sticky')
         }else{
            $('.navbar').removeClass('sticky')
         }
     })

     //script do toggle-bar menu/navbar

     $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass('active')
         $('.menu-btn i').toggleClass('active')
     })

 }) 