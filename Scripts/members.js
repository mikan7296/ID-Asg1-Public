const members = [
  {},
  {
    id: 1,
    name: "Inami Anju",
    kanjiname: "伊波杏樹",
    nickname: "Anchan",
    birthday: "7 Feb 1996",
    character: "Takami Chika",
    img: "Media/members/aqoursclub_cast_1.png",
  },
  {
    id: 2,
    name: "Aida Rikako",
    kanjiname: "逢田梨香子",
    nickname: "Rikyako",
    birthday: "8 August 1992",
    character: "Sakurauchi Riko",
    img: "Media/members/aqoursclub_cast_2.png",
  },
  {
    id: 3,
    name: "Suwa Nanaka",
    kanjiname: "諏訪ななか",
    nickname: "Suwawa",
    birthday: "2 November 1994",
    character: "Matsuura Kanan",
    img: "Media/members/aqoursclub_cast_3.png",
  },
  {
    id: 4,
    name: "Komiya Arisa",
    kanjiname: "小宮有紗",
    nickname: "Arisha",
    birthday: "5 February 1994",
    character: "Kurosawa Dia",
    img: "Media/members/aqoursclub_cast_4.png",
  },
  {
    id: 5,
    name: "Saito Shuka",
    kanjiname: "斉藤朱夏",
    nickname: "Shukashuu",
    birthday: "16 August 1996",
    character: "Watanabe You",
    img: "Media/members/aqoursclub_cast_5.png",
  },
  {
    id: 6,
    name: "Kobayashi Aika",
    kanjiname: "小林愛香",
    nickname: "Aikyan",
    birthday: "23 October 1993",
    character: "Tsushima Yoshiko",
    img: "Media/members/aqoursclub_cast_6.png",
  },
  {
    id: 7,
    name: "Takatsuki Kanako",
    kanjiname: "高槻かなこ",
    nickname: "Kin-chan",
    birthday: "25 September 1993",
    character: "Kunikida Hanamaru",
    img: "Media/members/aqoursclub_cast_7.png",
  },
  {
    id: 8,
    name: "Suzuki Aina",
    kanjiname: "鈴木愛奈",
    nickname: "Ainya",
    birthday: "23 July 1995",
    character: "Ohara Mari",
    img: "Media/members/aqoursclub_cast_8.png",
  },
  {
    id: 9,
    name: "Furihata Ai",
    kanjiname: "降幡愛",
    nickname: "Furirin",
    birthday: "19 February 1994",
    character: "Kurosawa Ruby",
    img: "Media/members/aqoursclub_cast_9.png",
  },
];

// Subunit members grouped by ID
cyaron = [1, 5, 9];
guilty_kiss = [2, 6, 8];
azalea = [3, 4, 7];

const animSpeed = 400;

let width = $(window).width();

$(window).resize(function() {
  width = $(window).width();;
});

let slidePosition = 1;
let currentSubunit = cyaron;

let debounce = false;

function scrollLeft(pages) {
  if (debounce) {return}
  debounce = true
  $('#slides').stop().animate({scrollLeft:"-="+(pages*width)}, animSpeed)
  slidePosition-=pages;
  setLimit();
  updateActiveButtons();

  setTimeout(function() {
    debounce = false;
  }, animSpeed*1.5);
  
}

function scrollRight(pages) {
  if (debounce) {return}
  debounce = true
  $('#slides').stop().animate({scrollLeft:"+="+(pages*width)}, animSpeed)
  slidePosition+=pages;
  setLimit();
  updateActiveButtons();

  setTimeout(function() {
    debounce = false;
  }, animSpeed*1.5);
}

function calculateAge(birthday) {
  var age = new Date().getFullYear() - new Date(birthday).getFullYear();
  return age;
}

function updateActiveButtons() {
  $("#buttons button").removeClass("active");
  if (slidePosition == 1) {
    $("#left-button").addClass('active');
  }
  else if (slidePosition == 2) {
    $("#middle-button").addClass('active');
  }
  else if (slidePosition == 3) {
    $("#right-button").addClass('active');
  }
}

function setLimit() {
  if (slidePosition > 3) {
    slidePosition--;
  }
  else if (slidePosition < 1) {
    slidePosition++;
  }
}

function animateSubunit() {
  let percent = 0
  if (currentSubunit == cyaron) {percent = "0%"}
  else if (currentSubunit == guilty_kiss) {percent = "33%"}
  else if (currentSubunit == azalea) {percent = "66%"}
  $('#subunit-background').css('left',percent);
}

function changeSlides() {
  for (let i = 0; i <= 2; i++) {
    member = members[currentSubunit[i]]

    $(`#${i}_name`).text(member.name);
    $(`#${i}_birthday`).text(`${member.birthday}, ${calculateAge(member.birthday)}`);
    $(`#${i}_biography`).text(member.character);
    $(`#${i}_image`).attr('src', member.img);
  }
}

function changeSubunit(subunit) {
  currentSubunit = subunit;
  scrollLeft(Infinity);
  slidePosition=1;
  changeSlides();
  updateActiveButtons();
  animateSubunit();
} 

$('#left-button').click(function(){
  if (slidePosition == 2) {
    scrollLeft(1);
  }
  else if (slidePosition == 3) {
    scrollLeft(2);
  }
});

$('#middle-button').click(function(){
  if (slidePosition == 1) {
    scrollRight(1);

  } 
  else if (slidePosition == 3) {
    scrollLeft(1);
  }
});

$('#right-button').click(function(){
  if (slidePosition == 1) {
    scrollRight(2);
  } 
  else if (slidePosition == 2) {
    scrollRight(1);
  }
});

$('#prev-button').click(function(){
  scrollLeft(1)
});

$('#next-button').click(function(){
  scrollRight(1)
});

$('.mobile-prev-button').click(function(){
  scrollLeft(1)
});

$('.mobile-next-button').click(function(){
  scrollRight(1)
});




changeSlides()
updateActiveButtons()

$("img").mousedown(function(){
  return false;
});

