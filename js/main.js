$(document).ready(function() {
    $('.parallax-window').parallax({
        positionY: '-400px',
        naturalWidth: 90,
        naturalHeight: 0,
        speed: 0.4
        //imageSrc: "images/bg-screen.jpg"
    });




    $('.full-page_screen').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['home', '02', '03', '04', 'footer'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['РДМ', 'Бренды и проекты', 'производство', 'контакты', ''],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'left',

        //Scrolling
        css3: true,
        scrollingSpeed: 1500,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: false,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: true,
        interlockedSlides: true,
        resetSliders: false,
        fadingEffect: false,
        // normalScrollElements: '.section_04, .footer',
        // normalScrollElements: '.footer',
        scrollOverflow: false,
        scrollOverflowOptions: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: true,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
        //sectionsColor : ['#ff0000', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, footer',
        responsiveWidth: false,
        responsiveHeight: false,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){
            if(index == 1) {
                $('.orange-logo').css({'opacity':'0'});
            }
            if(index == 2) {
                $('.white-logo').css({'opacity':'0'});
            }

            if(index == 3) {
                $('.orange-logo').css({'opacity':'0'});
            }

            if(index == 4) {
                $('.orange-logo').css({'opacity':'0'});
            }

            if(index == 5) {
                $('.white-logo').css({'opacity':'0'});
            }

            if(index == 3 && nextIndex == 4){
    if($('.thirdAnim').hasClass('activesList3')) {
        return true;
    }
    return false;
}

if(index == 3 && nextIndex == 2){
    if(!($('.firstAnim').hasClass('activesList1'))) {
        return true;
    }
    return false;
}
            },

            afterLoad: function(anchorLink, index){
                if(index == 1) {
                    $('.logo2').css({'display':'none'});
                    $('.white-logo').css({'opacity':'0'});
                    $('.orange-logo').css({'opacity':'1'});
                }
                if(index == 2) {
                    $('.logo2').css({'display':'none'});
                    $('.orange-logo').css({'opacity':'0'});
                    $('.white-logo').css({'opacity':'1'});

                }
                if(index == 3) {
                    $('.logo2').css({'display':'none'});
                    $('.white-logo').css({'opacity':'0'});
                    $('.orange-logo').css({'opacity':'1'});
                }
                if(index == 4) {
                    $('.logo2').css({'display':'none'});
                    $('.white-logo').css({'opacity':'0'});
                    $('.orange-logo').css({'opacity':'1'});
                }
                if(index == 5) {
                    $('.logo2').css({'display':'block'});
                    $('.orange-logo').css({'opacity':'0'});
                    $('.white-logo').css({'opacity':'1'});
                }
            },

        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    var flagLogo = 0;
    $(".burger-menu").on('click', function(){
        $(this).addClass('open-menu');
        $('body').addClass('open-menu');
        $('.parallax-mirror').css('transition', '0.5s');
    });

    $(".hidden-btn_menu").on('click', function(){
        $(".burger-menu").removeClass('open-menu');
        $('body').removeClass('open-menu');
        function removeTransition() {
            $('.parallax-mirror').css('transition', 'initial');
        }
        setTimeout(removeTransition, 500);
    });

    $(".btn-copyright").on('click', function(e){
        e.preventDefault();
        $('.copyright .hide-copyright').removeClass('fadeOutDown').addClass('fadeInUp show')
    });
    $(document).on('click', function(e){
        if (!$(e.target).closest(".copyright").length) {
            if ($('.copyright .hide-copyright').hasClass('fadeInUp')){
                $('.copyright .hide-copyright').removeClass('fadeInUp show').addClass('fadeOutDown');
            }
        }
    });

    setTimeout(function () {
        $('#titlesFade').css({'top':'0px','opacity':'1'});
    },3000);

    var flag = 0;
    $(window).on("scroll", function() {

        if($('body').hasClass('fp-viewing-home')) {

            if(flag == 0) {
                flag = 1;
                setTimeout(function () {
                    $('.section_01').css({'opacity': '1'});
                }, 1600);
            }
            $('.dopStyleRotate').removeClass('circlesRotateNext');
            $('.leftBlockText').removeClass('leftBlockTextFade');
            $('.rightBlockText').removeClass('rightBlockTextFade');
            $('.leftBlockTextBot').removeClass('leftBlockTextBotFade');
            $('.rightBlockTextMiddle').removeClass('rightBlockTextMiddleFade');
            $('.rightBlockTextBot').removeClass('rightBlockTextBotFade');
        } else {
            if(flag = 1) {
                flag = 0;
                $('.section_01').css({'opacity':'0'});
            }
        }
            if($(window).scrollTop() && $('body').hasClass('fp-viewing-02')) {

                //circle animate
                $('.arct2').removeClass('anim22');
                $('.arct2').addClass('anim2');

                //line animate
                $('.leftLine').removeClass('animLeftLine2');
                $('.leftLine').addClass('animLeftLine');

                $('.leftLineBot').removeClass('animLeftLine2');
                $('.leftLineBot').addClass('animLeftLine');

                $('.rightLine').removeClass('animRightLineBot2');
                $('.rightLine').addClass('animRightLineBot');

                $('.rightLineTop').removeClass('animRightLine2');
                $('.rightLineTop').addClass('animRightLine');

                $('.rightLineBot').removeClass('animRightLineBot2');
                $('.rightLineBot').addClass('animRightLineBot');

                //min circle animate
                $('.leftLineCircle').removeClass('animLeftLineCircle2');
                $('.leftLineCircle').addClass('animLeftLineCircle');

                $('.leftLineBotCircle').removeClass('animLeftLineCircle2');
                $('.leftLineBotCircle').addClass('animLeftLineCircle');

                $('.rightLineCircle').removeClass('animRightLineBotCircle2');
                $('.rightLineCircle').addClass('animRightLineBotCircle');

                $('.rightLineTopCircle').removeClass('animRightLineCircle2');
                $('.rightLineTopCircle').addClass('animRightLineCircle');

                $('.rightLineBotCircle').removeClass('animRightLineBotCircle2');
                $('.rightLineBotCircle').addClass('animRightLineBotCircle');

                setTimeout(function () {
                    $('.dopStyleRotate').addClass('circlesRotateNext');
                    $('.leftBlockText').fadeIn(1300);
                    $('.leftBlockText').addClass('leftBlockTextFade');
                    $('.rightBlockText').fadeIn(1300);
                    $('.rightBlockText').addClass('rightBlockTextFade');
                    $('.leftBlockTextBot').fadeIn(1300);
                    $('.leftBlockTextBot').addClass('leftBlockTextBotFade');
                    $('.rightBlockTextMiddle').fadeIn(1300);
                    $('.rightBlockTextMiddle').addClass('rightBlockTextMiddleFade');
                    $('.rightBlockTextBot').fadeIn(1300);
                    $('.rightBlockTextBot').addClass('rightBlockTextBotFade');
                },1500);
            } else {

                $('.arct2').addClass('anim22');
                $('.arct2').removeClass('anim2');

                //line animate
                $('.leftLine').addClass('animLeftLine2');
                $('.leftLine').removeClass('animLeftLine');

                $('.leftLineBot').addClass('animLeftLine2');
                $('.leftLineBot').removeClass('animLeftLine');

                $('.rightLine').addClass('animRightLineBot2');
                $('.rightLine').removeClass('animRightLineBot');

                $('.rightLineTop').addClass('animRightLine2');
                $('.rightLineTop').removeClass('animRightLine');

                $('.rightLineBot').addClass('animRightLineBot2');
                $('.rightLineBot').removeClass('animRightLineBot');

                //min circle animate
                $('.leftLineCircle').addClass('animLeftLineCircle2');
                $('.leftLineCircle').removeClass('animLeftLineCircle');

                $('.leftLineBotCircle').addClass('animLeftLineCircle2');
                $('.leftLineBotCircle').removeClass('animLeftLineCircle');

                $('.rightLineCircle').addClass('animRightLineBotCircle2');
                $('.rightLineCircle').removeClass('animRightLineBotCircle');

                $('.rightLineTopCircle').addClass('animRightLineCircle2');
                $('.rightLineTopCircle').removeClass('animRightLineCircle');

                $('.rightLineBotCircle').addClass('animRightLineBotCircle2');
                $('.rightLineBotCircle').removeClass('animRightLineBotCircle');
            }

        if($(window).scrollTop() && $('body').hasClass('fp-viewing-03') || $(window).scrollTop() && $('body').hasClass('fp-viewing-04')) {
            $('.dopStyleRotate').removeClass('circlesRotateNext');
            // $('.leftBlockText').fadeOut(1300);
            $('.leftBlockText').removeClass('leftBlockTextFade');
            // $('.rightBlockText').fadeOut(1300);
            $('.rightBlockText').removeClass('rightBlockTextFade');
            // $('.leftBlockTextBot').fadeOut(1300);
            $('.leftBlockTextBot').removeClass('leftBlockTextBotFade');
            // $('.rightBlockTextMiddle').fadeOut(1300);
            $('.rightBlockTextMiddle').removeClass('rightBlockTextMiddleFade');
            // $('.rightBlockTextBot').fadeOut(1300);
            $('.rightBlockTextBot').removeClass('rightBlockTextBotFade');
        }
        // }
    });




    //3 PAGE ANIMATE
    var elem = document.getElementById('containerDoted');
    if (elem.addEventListener) {
        if ('onwheel' in document) {
            // IE9+, FF17+
            elem.addEventListener("wheel", onWheel);
        } else if ('onmousewheel' in document) {
            // устаревший вариант события
            elem.addEventListener("mousewheel", onWheel);
        } else {
            // Firefox < 17
            elem.addEventListener("MozMousePixelScroll", onWheel);
        }
    } else { // IE8-
        elem.attachEvent("onmousewheel", onWheel);
    }


    //Это решение предусматривает поддержку IE8-

    function onWheel(e) {
        e = e || window.event;

        // deltaY, detail содержат пиксели
        // wheelDelta не дает возможность узнать количество пикселей
        // onwheel || MozMousePixelScroll || onmousewheel
        var delta = e.deltaY || e.detail || e.wheelDelta;

        var info = document.getElementById('delta');



        if(delta > 0 && !(delta < 0)) {
            delta = 0;
            if($('.firstAnim').find('.one').length == 0) {
                delta = 0;

                if(!($('.secondAnim').hasClass('activesList2')) && !($('.thirdAnim').hasClass('activesList3'))) {
                    var oneScroll = 0;
                    $('.firstProdText').fadeOut();
                    setInterval(function () {
                        if(oneScroll < $('.firstAnim').find('.ligt').length){
                            oneScroll++;
                            $('.firstAnim').find('.ligt').eq(oneScroll-1).removeClass('one2');
                            $('.firstAnim').find('.ligt').eq(oneScroll-1).addClass('one');
                            if($('.firstAnim').find('.one').length == $('.firstAnim').find('.ligt').length) {
                                $('.firstAnim').addClass('activesList1');
                                $('.secondProdText').fadeIn();
                                $('.thirdProdText').fadeOut();
                            }
                        }
                    },50);
                }
                return false;
            }
            if($('.firstAnim').find('.one').length == $('.firstAnim').find('.ligt').length &&
                $('.secondAnim').find('.two').length == 0 &&
                $('.thirdAnim').find('.tree').length == 0) {
                delta = 0;

                if($('.firstAnim').hasClass('activesList1') && !($('.thirdAnim').hasClass('activesList3'))) {
                    var twoScroll = 0;
                    $('.firstProdText').fadeOut();
                    $('.secondProdText').fadeOut();
                    setInterval(function () {
                        if (twoScroll <  $('.secondAnim').find('.ligt').length) {
                            twoScroll++;
                            $('.secondAnim').find('.ligt').eq(twoScroll - 1).removeClass('two2');
                            $('.secondAnim').find('.ligt').eq(twoScroll - 1).addClass('two');
                            if ($('.secondAnim').find('.two').length == $('.secondAnim').find('.ligt').length) {
                                $('.secondAnim').addClass('activesList2');
                                $('.thirdProdText').fadeIn();
                            }
                        }
                    }, 50);
                }
                return false;
            }

            if($('.firstAnim').find('.one').length == $('.firstAnim').find('.ligt').length &&
                $('.secondAnim').find('.two').length == $('.secondAnim').find('.ligt').length &&
                $('.thirdAnim').find('.tree').length == 0) {
                delta = 0;

                if($('.firstAnim').hasClass('activesList1') && $('.secondAnim').addClass('activesList2')) {
                    var treeScroll = 0;
                    $('.firstProdText').fadeOut();
                    $('.secondProdText').fadeOut();
                    $('.thirdProdText').fadeOut();
                    setInterval(function () {
                        if (treeScroll < $('.thirdAnim').find('.ligt').length) {
                            treeScroll++;
                            $('.thirdAnim').find('.ligt').eq(treeScroll - 1).removeClass('tree2');
                            $('.thirdAnim').find('.ligt').eq(treeScroll - 1).addClass('tree');
                            if($('.thirdAnim').find('.tree').length == $('.thirdAnim').find('.ligt').length) {
                                $('.thirdAnim').addClass('activesList3');
                            }
                        }
                    }, 50);
                }
                return false;
            }
        }

        if(delta < -0 && !(delta > 0)) {
            delta = 0;

            if($('.firstAnim').find('.one').length == $('.firstAnim').find('.ligt').length &&
                $('.secondAnim').find('.two').length == 0 &&
                $('.thirdAnim').find('.tree').length == 0) {
                delta = 0;

                var oneScrollBack = $('.secondAnim').find('.ligt').length;
                $('.secondProdText').fadeOut();
                $('.thirdProdText').fadeOut();
                setInterval(function () {
                    if(oneScrollBack > 0){
                        oneScrollBack--;
                        $('.firstAnim').find('.ligt').eq(oneScrollBack).removeClass('one');
                        $('.firstAnim').find('.ligt').eq(oneScrollBack).addClass('one2');
                        if($('.firstAnim').find('.one').length == 0) {
                            $('.firstAnim').removeClass('activesList1');
                            $('.firstProdText').fadeIn();
                        }
                    }
                },50);
                return false;
            }

            if($('.firstAnim').find('.one').length == $('.firstAnim').find('.ligt').length &&
                $('.secondAnim').find('.two').length == $('.secondAnim').find('.ligt').length &&
                $('.thirdAnim').find('.tree').length == 0) {
                delta = 0;

                var twoScrollBack = $('.secondAnim').find('.ligt').length;
                $('.firstProdText').fadeOut();
                $('.thirdProdText').fadeOut();
                setInterval(function () {
                    if (twoScrollBack > 0) {
                        twoScrollBack--;
                        $('.secondAnim').find('.ligt').eq(twoScrollBack).removeClass('two');
                        $('.secondAnim').find('.ligt').eq(twoScrollBack).addClass('two2');
                        if($('.secondAnim').find('.two').length == 0) {
                            $('.secondAnim').removeClass('activesList2');
                            $('.secondProdText').fadeIn();
                        }
                    }
                }, 50);
                return false;
            }

            if($('.firstAnim').find('.one').length == $('.firstAnim').find('.ligt').length &&
                $('.secondAnim').find('.two').length == $('.secondAnim').find('.ligt').length &&
                $('.thirdAnim').find('.tree').length == $('.thirdAnim').find('.ligt').length) {
                delta = 0;

                var treeScrollBack = $('.thirdAnim').find('.ligt').length;
                setInterval(function () {
                    if (treeScrollBack > 0) {
                        treeScrollBack--;
                        $('.thirdAnim').find('.ligt').eq(treeScrollBack).removeClass('tree');
                        $('.thirdAnim').find('.ligt').eq(treeScrollBack).addClass('tree2');
                        if ($('.thirdAnim').find('.tree').length == 0) {
                            $('.thirdAnim').removeClass('activesList3');
                            $('.firstProdText').fadeOut();
                            $('.secondProdText').fadeOut();
                            $('.thirdProdText').fadeIn();
                        }
                    }
                }, 50);
                return false;
            }
        }
        // info.innerHTML = +info.innerHTML + delta;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }



    //3 PAGE TEXT RENDERING


});
