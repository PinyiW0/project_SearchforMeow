import"./main-5a20e1ee.js";$(document).ready(function(){$(".shelter").data("aos","fade-up"),jQuery(window).width()<992?($("h1,.shelterIcon").addClass("animate__animated animate__bounceInDown"),$(".shelter .row").eq(3).find(".col-10").addClass("aos-init").attr("data-aos","fade-up")):$("h1,.shelterIcon").removeClass("animate__animated animate__bounceInDown"),AOS.init({disable:!1,startEvent:"DOMContentLoaded",initClassName:"aos-init",animatedClassName:"aos-animate",useClassNames:!1,disableMutationObserver:!1,debounceDelay:50,throttleDelay:99,offset:90,delay:0,duration:400,easing:"ease",once:!1,mirror:!1,anchorPlacement:"top-bottom"}),$(".dropBtn").click(function(e){e.preventDefault(),$(".expand_more").toggleClass("active")}),$(".item0").click(function(e){e.preventDefault(),$(".dropBtn").text("全部"),$(".dropBtn").append("<span>expand_more</span>").find("span").addClass("material-symbols-outlined expand_more active"),setTimeout(()=>{$(".material-symbols-outlined").removeClass("active")},.02*1e3)}),$(".item1").click(function(e){e.preventDefault(),$(".dropBtn").text("北部"),$(".dropBtn").append("<span>expand_more</span>").find("span").addClass("material-symbols-outlined expand_more active"),setTimeout(()=>{$(".material-symbols-outlined").removeClass("active")},.02*1e3)}),$(".item2").click(function(e){e.preventDefault(),$(".dropBtn").text("中部"),$(".dropBtn").append("<span>expand_more</span>").find("span").addClass("material-symbols-outlined expand_more active"),setTimeout(()=>{$(".material-symbols-outlined").removeClass("active")},.02*1e3)}),$(".item3").click(function(e){e.preventDefault(),$(".dropBtn").text("南部"),$(".dropBtn").append("<span>expand_more</span>").find("span").addClass("material-symbols-outlined expand_more active"),setTimeout(()=>{$(".material-symbols-outlined").removeClass("active")},.02*1e3)}),$(".item4").click(function(e){e.preventDefault(),$(".dropBtn").text("東部"),$(".dropBtn").append("<span>expand_more</span>").find("span").addClass("material-symbols-outlined expand_more active"),setTimeout(()=>{$(".material-symbols-outlined").removeClass("active")},.02*1e3)}),$(".item5").click(function(e){e.preventDefault(),$(".dropBtn").text("離島"),$(".dropBtn").append("<span>expand_more</span>").find("span").addClass("material-symbols-outlined expand_more active"),setTimeout(()=>{$(".material-symbols-outlined").removeClass("active")},.02*1e3)}),$(".AllBtn").click(function(e){e.preventDefault(),$(".shelterArea .col-10").fadeOut(300),setTimeout(()=>{$(".shelterArea .col-10").fadeIn(500)},.3*1e3)}),$(".NorthernBtn").click(function(e){e.preventDefault(),$(".northern").siblings(":not(.northern)").fadeOut(300),setTimeout(()=>{$(".northern").fadeIn(500)},.3*1e3)}),$(".CentralBtn").click(function(e){e.preventDefault(),$(".central").siblings(":not(.central)").fadeOut(300),setTimeout(()=>{$(".central").fadeIn(500)},.3*1e3)}),$(".SouthernBtn").click(function(e){e.preventDefault(),$(".southern").siblings(":not(.southern)").fadeOut(300),setTimeout(()=>{$(".southern").fadeIn(500)},.3*1e3)}),$(".EasternBtn").click(function(e){e.preventDefault(),$(".eastern").siblings(":not(.eastern)").fadeOut(300),setTimeout(()=>{$(".eastern").fadeIn(500)},.3*1e3)}),$(".OffshoreIslandBtn").click(function(e){e.preventDefault(),$(".offshoreIsland").siblings(":not(.offshoreIsland)").fadeOut(300),setTimeout(()=>{$(".offshoreIsland").fadeIn(500)},.3*1e3)}),$(".favor").click(function(e){e.preventDefault(),$(this).stop().toggleClass("addFavor zoom").css("zoom","1.5"),setTimeout(()=>{$(this).css("zoom","1")},.03*1e3)}),$(".one .picItem1").click(function(e){e.preventDefault(),$(".one .mainPicItem1").siblings().not(".group1").addClass("opacity-0"),setTimeout(()=>{$(".one .mainPicItem1").siblings().not(".group1").addClass("d-none"),$(".one .mainPicItem1").removeClass("d-none"),setTimeout(()=>{$(".one .mainPicItem1").removeClass("opacity-0")},.01*1e3)},.3*1e3)}),$(".one .picItem2").click(function(e){e.preventDefault(),$(".one .mainPicItem2").siblings().not(".group1").addClass("opacity-0"),setTimeout(()=>{$(".one .mainPicItem2").siblings().not(".group1").addClass("d-none"),$(".one .mainPicItem2").removeClass("d-none"),setTimeout(()=>{$(".one .mainPicItem2").removeClass("opacity-0")},.01*1e3)},.3*1e3)}),$(".one .picItem3").click(function(e){e.preventDefault(),$(".one .mainPicItem3").siblings().not(".group1").addClass("opacity-0"),setTimeout(()=>{$(".one .mainPicItem3").siblings().not(".group1").addClass("d-none"),$(".one .mainPicItem3").removeClass("d-none"),setTimeout(()=>{$(".one .mainPicItem3").removeClass("opacity-0")},.01*1e3)},.3*1e3)}),$(".one .picItem4").click(function(e){e.preventDefault(),$(".one .mainPicItem4").siblings().not(".group1").addClass("opacity-0"),setTimeout(()=>{$(".one .mainPicItem4").siblings().not(".group1").addClass("d-none"),$(".one .mainPicItem4").removeClass("d-none"),setTimeout(()=>{$(".one .mainPicItem4").removeClass("opacity-0")},.01*1e3)},.3*1e3)}),$(".two .picItem1").click(function(e){e.preventDefault(),$(".two .mainPic").attr("src","../assets/images/shelter/2/1.jpg")}),$(".two .picItem2").click(function(e){e.preventDefault(),$(".two .mainPic").attr("src","../assets/images/shelter/2/2.jpg")}),$(".two .picItem3").click(function(e){e.preventDefault(),$(".two .mainPic").attr("src","../assets/images/shelter/2/3.jpg")}),$(".two .picItem4").click(function(e){e.preventDefault(),$(".two .mainPic").attr("src","../assets/images/shelter/2/4.jpg")}),$(".three .picItem1").click(function(e){e.preventDefault(),$(".three .mainPic").attr("src","../assets/images/shelter/3/1.jpg")}),$(".three .picItem2").click(function(e){e.preventDefault(),$(".three .mainPic").attr("src","../assets/images/shelter/3/2.png")}),$(".three .picItem3").click(function(e){e.preventDefault(),$(".three .mainPic").attr("src","../assets/images/shelter/3/3.jpg")}),$(".three .picItem4").click(function(e){e.preventDefault(),$(".three .mainPic").attr("src","../assets/images/shelter/3/4.jpg")}),$(".four .picItem1").click(function(e){e.preventDefault(),$(".four .mainPic").attr("src","../assets/images/shelter/4/1.jpg")}),$(".four .picItem2").click(function(e){e.preventDefault(),$(".four .mainPic").attr("src","../assets/images/shelter/4/2.jpg")}),$(".four .picItem3").click(function(e){e.preventDefault(),$(".four .mainPic").attr("src","../assets/images/shelter/4/3.jpg")}),$(".four .picItem4").click(function(e){e.preventDefault(),$(".four .mainPic").attr("src","../assets/images/shelter/4/4.jpg")}),$(".five .picItem1").click(function(e){e.preventDefault(),$(".five .mainPic").attr("src","../assets/images/shelter/5/1.jpg")}),$(".five .picItem2").click(function(e){e.preventDefault(),$(".five .mainPic").attr("src","../assets/images/shelter/5/2.jpg")}),$(".five .picItem3").click(function(e){e.preventDefault(),$(".five .mainPic").attr("src","../assets/images/shelter/5/3.jpg")}),$(".five .picItem4").click(function(e){e.preventDefault(),$(".five .mainPic").attr("src","../assets/images/shelter/5/4.jpg")}),$(".six .picItem1").click(function(e){e.preventDefault(),$(".six .mainPic").attr("src","../assets/images/shelter/6/1.jpg")}),$(".six .picItem2").click(function(e){e.preventDefault(),$(".six .mainPic").attr("src","../assets/images/shelter/6/2.jpg")}),$(".six .picItem3").click(function(e){e.preventDefault(),$(".six .mainPic").attr("src","../assets/images/shelter/6/3.jpg")}),$(".six .picItem4").click(function(e){e.preventDefault(),$(".six .mainPic").attr("src","../assets/images/shelter/6/4.jpg")}),$(".pageMark").click(function(e){e.preventDefault(),$(this).addClass("paginationActive"),$(this).parent().siblings().find("a").removeClass("paginationActive")}),$(".backPage").click(function(e){e.preventDefault(),$(this).parent().siblings().find(".paginationActive").parent().prev().find(".pageMark").addClass("paginationActive"),$(this).parent().siblings().find(".paginationActive").parent().next().find(".pageMark").removeClass("paginationActive")}),$(".nextPage").click(function(e){e.preventDefault(),$(this).parent().siblings().find(".paginationActive").parent().next().find(".pageMark").addClass("paginationActive"),$(this).parent().siblings().find(".paginationActive").parent().prev().find(".pageMark").removeClass("paginationActive")})});
