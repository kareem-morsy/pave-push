document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  const ConvertHtmlData =(title,date,image_url,descrption) => {
    const content= document.createElement('div');
    const kareem = 
    `
    <img class="event-img" src=${image_url}></img>
    <h1 class="evet-title">${title}</h1>
    <span class="event-date">${date}</span>
    <p class="event-desc">${descrption}</p>
    `
    content.innerHTML += kareem;
    console.log("contentzzzzzz",content)
    return content.innerHTML;
  }

  var calendar = new FullCalendar.Calendar(calendarEl, {
    
    initialView: 'dayGridMonth',
    initialDate: '2023-03-01',
    height : 650,


    // eventDidMount: function (info) {
    //   var tooltip = new Tooltip(info.el, {
    //     title: info.event.extendedProps.eventContent.html,
    //     placement: 'left',
    //     trigger: 'hover',
    //     container: 'body'
    //   });

    
      
    // },
    
    
    events: [{
        id : "d",
        title: 'All Day Event',
        description: ConvertHtmlData("Event 1", "1992-12-10","https://www.google.com/search?q=event&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjH6Z2Ih9b9AhVkTqQEHTKZDy0Q_AUoAXoECAEQAw&biw=1366&bih=643&dpr=1#imgrc=6hl641v5j1RFVM", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout" ),
        start: '2023-03-04',
        eventContent :  { html: ConvertHtmlData("Event 2", "1992-12-10","https:www.kareem.com/15X15", "decriptio for the event" ) },
        backgroundColor : '#f8f8f8',
        textColor : '#000',
        borderColor : '#f8f8f8'
      },
      {
        title: 'All Day Event',
        description: ConvertHtmlData("Event 2", "1992-12-10","https://www.google.com/search?q=event&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjH6Z2Ih9b9AhVkTqQEHTKZDy0Q_AUoAXoECAEQAw&biw=1366&bih=643&dpr=1#imgrc=6hl641v5j1RFVM", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout" ),
        start: '2023-03-13',
        eventContent :  { html: ConvertHtmlData("Event 2", "1992-12-10","https:www.kareem.com/15X15", "decriptio for the event" ) },
        backgroundColor : '#f8f8f8',
        textColor : '#000',
        borderColor : '#f8f8f8'
      }
      ,{
        title: 'All Day Event',
        description: ConvertHtmlData("Event 2", "1992-12-10","https://www.google.com/search?q=event&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjH6Z2Ih9b9AhVkTqQEHTKZDy0Q_AUoAXoECAEQAw&biw=1366&bih=643&dpr=1#imgrc=6hl641v5j1RFVM", "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout" ),
        start: '2023-03-12',
        eventContent :  { html: ConvertHtmlData("Event 2", "1992-12-10","https:www.kareem.com/15X15", "decriptio for the event" ) },
        backgroundColor : '#f8f8f8',
        textColor : '#000',
        borderColor : '#f8f8f8'
      }
    ],
    eventRender: function(info) {
      
      

      
    },
    eventMouseEnter: function (info) {
      // var tooltip = '<div class="tooltipevent" style="width:100px;height:20px;background:#ccc;position:absolute;z-index:10001;"><h1>' + info.event.title + '<h1></div>';
        // var tooltip = '<div class="tooltip"><h1>' + info.event.extendedProps.description+'=========='+ info.event.extendedProps.eventContent.html + '<h1></div>';
        var positionz=$(info.el).offset();

        var screenWidth=$( window ).width();
        console.log(screenWidth)

        if (positionz.left <='774.6500244140625') {
          console.log('aaaaa')
          var tooltip = '<div class="tooltipz">' + info.event.extendedProps.description+ '</div>';

        }
        else{
          console.log('bbbbbb')

          var tooltip = '<div class="tooltip">' + info.event.extendedProps.description+ '</div>';

        }
      var $tooltip = $(tooltip).appendTo(info.el);


      

      console.log(positionz)
      
      $(info.el).mouseleave(function (e) {
          $(info.el).css('z-index', 10000);
          $('.tooltip').remove();
          $('.tooltipz').remove();
          $('.tooltip').hide();
          $('.tooltipz').hide();
          // $tooltip.fadeIn('500');
          // $tooltip.fadeTo('10', 1.9);
      })
    }
  });
 

  calendar.render();
});





































$('.slick-cards').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 2100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 428,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


const navi = document.querySelector('#NavBarr')

function stickynavbarr() {
  if (window.scrollY >= 100) {
    navi.classList.add('stickyy');
  } else {
    navi.classList.remove('stickyy');
  }
}


//scroll navbar
const navbar = document.querySelector('#NavBar');

function stickynavbar() {
  if (window.scrollY >= 100) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}




window.addEventListener('scroll', stickynavbar);
$(".mobile-header").hide();

$(".exit-icon").click(function () {
  $(".mobile-header").toggle();
})


// document.addEventListener('DOMContentLoaded', function() {
//   var calendarEl = document.getElementById('calendar');
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     initialView: 'dayGridMonth',
//     height : '600px',
//     dateClick: function() {
//       alert('a day has been clicked!');
//     },
//     events: [

//       {
//         id: 'a',
//         title: 'my event',
//         start: '2023-03-01',
//         className : 'eDetails',
//         color: 'yellow',    // an option!
//         textColor: 'black',  // an option!
//         url: '/myfeed.php',
//         method: 'POST',
//         extraParams: {
//           custom_param1: 'something',

//           custom_param2: 'somethingelse'
//         },
//         description : 'dfdfdf fdfdfd fdfd',
//         hover : 'dfdfdf fdfdfd fdfd',

//       }
//     ],



//   });
//   calendar.render();
// });



// var calender_data = [
//   {
//     id: 'a',
//     title: 'my event',
//     start: '2023-03-01',
//     className : 'eDetails',
//     color: 'yellow',    // an option!
//     textColor: 'black',  // an option!
//     url: '/myfeed.php',
//     description: '<span>kkksdf fskdfnsd dsfkdsfk</span>',
//     hover : 'mmmmm',

//   }
// ];
// var KTCalendarBasic = function() {

//     return {
//         //main function to initiate the module
//         init: function() {

//             var calendarEl = document.getElementById('calendar');
//             var calendar = new FullCalendar.Calendar(calendarEl, {
//                 plugins: [ 'bootstrap', 'interaction', 'dayGrid', 'timeGrid', 'list' ],
//                 themeSystem: 'bootstrap',
//                 header: {
//                     left: 'prev,next today',
//                     center: 'title',
//                     right: 'dayGridMonth,timeGridWeek,timeGridDay'
//                 },

//                 height: 800,
//                 contentHeight: 780,
//                 aspectRatio: 3,  // see: https://fullcalendar.io/docs/aspectRatio

//                 nowIndicator: true,

//                 views: {
//                     dayGridMonth: { buttonText: 'month' },
//                     timeGridWeek: { buttonText: 'week' },
//                     timeGridDay: { buttonText: 'day' }
//                 },

//                 defaultView: 'dayGridMonth',
//                 defaultDate: "2023-03-02",

//                 editable: false,
//                 eventLimit: true, // allow "more" link when too many events
//                 navLinks: true,
//                 events: calender_data,

//                 eventRender: function(info) {
//                     var element = $(info.el);
//                     element.find('.fc-title').prop('data-info','kimo Kimo');

//                 }
//             });

//             calendar.render();
//         }
//     };
// }();

// jQuery(document).ready(function() {
//     KTCalendarBasic.init();
// });