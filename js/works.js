$(function(){
  prjArr.forEach(function(v){
    let {id, title, slogun} = v
    title = title.join('-') //join은 배열을 문자열로 바꿈
    
    $('.works-content').append(`
    <figure>
      <a href="./detail.php?id=${id}">
        <div>
          <img src="./img/works/site${id}.jpg" alt>
        </div>
        <figcaption>
          <h2>${title}</h2>
          <p>
            <span>${slogun}</span>
            <span>${slogun}</span>
            <span>${slogun}</span>
          </p>
        </figcaption>
      </a>  
    </figure>
    `)
  })//forEach

  var isStartMotion = true 
  var rafId
  var scrollMotion = function () {
    if(!isStartMotion) return
    isStartMotion = false
    rafId = requestAnimationFrame(function(){
      //code start
      $('.works-content figure').each(function(){
        let t = $(this).offset().top
        let h = $(this).innerHeight()
        let meta = 0 + (scry - (t - winh*.5 + h*.5))*0.05
        if(meta > 11){meta = 11}
        if(meta < -11){meta = -11}
        $(this).find('img').css({'transform':`scale(1.3) translateY(${meta}%)`})
      })//ecah

      let scrRange = $(document).innerHeight() - winh
      let moveRange = winw - $('.bg-text').innerWidth()
      let x = (scry / scrRange) * moveRange
      $('.bg-text').css({'transform':`translateX(${x}px)`})

      //code end
      isStartMotion = true
    }) //requestAnimationFrame
  } //scrollMotion

  scrollMotion()
  $(window).scroll(function(){
    scrollMotion()
  }).resize(function(){
    scrollMotion()
  })//window event


let mx
let my


$(window).mousemove(function(e){
  tx = e.clientX -40
  ty = e.clientY -40
  
})

let cx = 0
let tx = 0
let cy = 0
let ty = 0

setInterval(function(){
  cx += (tx - cx) * .1
  cy += (ty - cy) * .1
  $('.cursor').css({
    'left':cx,
    'top':cy,
  })
},20)

  $('.works-content figure').mouseenter(function(){
    $('.cursor').css({'transform':'scale(1)'})
  }).mouseleave(function(){
    $('.cursor').css({'transform':'scale(0)'})
  })

  



})//ready