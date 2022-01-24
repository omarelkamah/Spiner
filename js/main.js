//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;

$(document).ready(function(){

    $(".open-popup").fadeIn(500);
    $(".click-ok").on("click", function () {
        $(".open-popup").fadeOut(500);
    });
	
	/*WHEEL SPIN FUNCTION*/
	$('.click-ok').click(function(){
		clicks ++;
		var newDegree = degree*clicks;
		totalDegree = newDegree+250;
		$('.img-spin #img-spin').each(function(){
            var stopAnimate = setTimeout(function () {
                $(".try-popup").fadeIn(400)
            }, 5000)
			
			$('#img-spin').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'
			});
		});
    });
    
    $(".try-popup .click-yes").on("click", function () {
        clicks ++;
        $(".try-popup").fadeOut(500);
		var newDegree = degree*clicks;
        totalDegree = newDegree+386;
        
		$('.img-spin #img-spin').each(function(){
            let stopAnimate = setTimeout(function () {
                $(".prize-popup").fadeIn(400, function() {
                    $('html,body').animate({
                        scrollTop: $(".comments").offset().top - 200},
                        'slow');
                });
            }, 8300)

			$('#img-spin').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'	
			});
        });
        let settime = setTimeout(function () {
            $("#confetti").fadeIn(600).delay(4200).fadeOut(400)
        }, 5000)

        let theTime = setTimeout(function () {
            $(".prize-box").css({
                "opacity": 1,
                "visibility": "visible"
            })

            if ($(window).width() <= 450 ) { 
                $(".prize-box").animate({
                    left: "42%"
                }, 1000);
                
            }else if ($(window).width() <= 600) {
                $(".prize-box").animate({
                    left: "51%"
                }, 1000);
            } else {
                $(".prize-box").animate({
                    left: "50%"
                }, 1000);
            }

        }, 10000);
    });

    $("#phone-link").on("click", function (e) {
        e.preventDefault();
        $(".prize-popup").fadeOut(500, function () {
            $(".end-popup").fadeIn(600, function () {
                $(".final-popup").fadeIn(1000, function () {
                    let theTime = setTimeout(function () {
                        $(".final-box").css({
                            "opacity": 1,
                            "visibility": "visible"
                        })
            
                        if ($(window).width() <= 450 ) { 
                            $(".final-box").animate({
                                left: "42%"
                            }, 1000);
                            
                        }else if ($(window).width() <= 600) {
                            $(".final-box").animate({
                                left: "51%"
                            }, 1000);
                        } else {
                            $(".final-box").animate({
                                left: "50%"
                            }, 1000);
                        }
            
                    }, 100);
                })
            });
        },)
    })



    // get the date 
    let date = new Date,
        day = date.getDate(),
        year = date.getFullYear(),
        dateToString = date.toString(),
        cutTheString = dateToString.slice(0, 8);

    document.getElementById("date").innerHTML = `
        ${cutTheString} ${day} ${year}
    `

});
