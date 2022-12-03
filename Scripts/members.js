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
    instagram: "https://www.instagram.com/anju_inami/",
    twitter: "https://twitter.com/anju_inami",
    web: "https://anjuinami.com/",
    colour: "rgb(245, 149, 75)",
    subunit: "CYaRon",
    origin: "Saitama Prefecture"
  },
  {
    id: 2,
    name: "Aida Rikako",
    kanjiname: "逢田梨香子",
    nickname: "Rikyako",
    birthday: "8 August 1992",
    character: "Sakurauchi Riko",
    img: "Media/members/aqoursclub_cast_2.png",
    instagram: "https://www.instagram.com/aida_rikako_/",
    twitter: "https://twitter.com/Rikako_Aida",
    web: "https://rikakoaida.com/",
    colour: "rgb(255, 135, 135)",
    subunit: "Guilty Kiss",
    origin: "Tokyo Prefecture"
  },
  {
    id: 3,
    name: "Suwa Nanaka",
    kanjiname: "諏訪ななか",
    nickname: "Suwawa",
    birthday: "2 November 1994",
    character: "Matsuura Kanan",
    img: "Media/members/aqoursclub_cast_3.png",
    instagram: "https://www.instagram.com/n.suwawagram/",
    twitter: "https://twitter.com/suwananaka",
    web: "https://stay-luck.com/talent/suwa-nanaka/",
    colour: "rgb(72, 202, 172)",
    subunit: "AZALEA",
    origin: "Saitama Prefecture"
  },
  {
    id: 4,
    name: "Komiya Arisa",
    kanjiname: "小宮有紗",
    nickname: "Arisha",
    birthday: "5 February 1994",
    character: "Kurosawa Dia",
    img: "Media/members/aqoursclub_cast_4.png",
    instagram: "https://www.instagram.com/arisakomiya_official/",
    twitter: "https://twitter.com/box_komiyaarisa",
    web: "https://komiya-arisa.net/",
    colour: "rgb(235, 94, 94)",
    subunit: "AZALEA",
    origin: "Tochigi Prefecture"
  },
  {
    id: 5,
    name: "Saito Shuka",
    kanjiname: "斉藤朱夏",
    nickname: "Shukashuu",
    birthday: "16 August 1996",
    character: "Watanabe You",
    img: "Media/members/aqoursclub_cast_5.png",
    instagram: "https://www.instagram.com/08saito_shuka16/",
    twitter: "https://twitter.com/Saito_Shuka",
    web: "https://ameblo.jp/shuka-saito/",
    colour: "rgb(72, 177, 219)",
    subunit: "CYaRon",
    origin: "Saitama Prefecture"
  },
  {
    id: 6,
    name: "Kobayashi Aika",
    kanjiname: "小林愛香",
    nickname: "Aikyan",
    birthday: "23 October 1993",
    character: "Tsushima Yoshiko",
    img: "Media/members/aqoursclub_cast_6.png",
    instagram: "https://www.instagram.com/kyanstagram_/",
    twitter: "https://twitter.com/aikyan_",
    web: "https://lineblog.me/kobayashi_aika/",
    colour: "rgb(171, 171, 171)",
    subunit: "Guilty Kiss",
    origin: "Kanagawa Prefecture",
  },
  {
    id: 7,
    name: "Takatsuki Kanako",
    kanjiname: "高槻かなこ",
    nickname: "Kin-chan",
    birthday: "25 September 1993",
    character: "Kunikida Hanamaru",
    img: "Media/members/aqoursclub_cast_7.png",
    instagram: "https://www.instagram.com/kanako.tktk/",
    twitter: "https://twitter.com/Kanako_tktk/",
    web: "https://www.amuse.co.jp/artist/A8758/",
    colour: "rgb(206, 188, 33)",
    subunit: "AZALEA",
    origin: "Kobe, Hyogo Prefecture"
  },
  {
    id: 8,
    name: "Suzuki Aina",
    kanjiname: "鈴木愛奈",
    nickname: "Ainya",
    birthday: "23 July 1995",
    character: "Ohara Mari",
    img: "Media/members/aqoursclub_cast_8.png",
    instagram: "https://www.instagram.com/ainasuzuki_info/",
    twitter: "https://twitter.com/aina_suzuki723",
    web: "https://fc-suzukiaina.com/mob/index.php?site=SA&ima=4141",
    colour: "rgb(173, 73 ,221)",
    subunit: "Guilty Kiss",
    origin: "Hokkaido Prefecture"
  },
  {
    id: 9,
    name: "Furihata Ai",
    kanjiname: "降幡愛",
    nickname: "Furirin",
    birthday: "19 February 1994",
    character: "Kurosawa Ruby",
    img: "Media/members/aqoursclub_cast_9.png",
    instagram: "https://www.instagram.com/furihatagram/",
    twitter: "https://twitter.com/furihata_ai",
    web: "https://fc-furihataai.com/mob/pageShw.php?site=AI&ima=4259&cd=login_door",
    colour: "rgb(227, 112, 185)",
    subunit: "CYaRon",
    origin: "Nagano Prefecture"
  },
];

// Subunit members grouped by ID
cyaron = [1, 5, 9];
guilty_kiss = [2, 6, 8];
azalea = [3, 4, 7];

const animSpeed = 400;

let width = $(window).width();

let slidePosition = 1;
let currentSubunit = cyaron;

$(window).resize(function() {
  width = $(window).width();;
  scrollLeft(Infinity);
  slidePosition = 1;
  updateActiveButtons()
});


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
    $(`#${i}_background_clr`).css("background-color",member.colour);
    $(`#${i}_name`).text(member.name);
    $(`#${i}_birthday`).text(`${member.birthday}, ${calculateAge(member.birthday)}`);

    $(`#${i}_biography`).text(`${member.name} was born on ${member.birthday} in ${member.origin} , Japan. 
    Her nickname is ${member.nickname} and she plays the character "${member.character}".
    She is part of the subunit ${member.subunit}.`);

    $(`#${i}_image`).attr('src', member.img);
    $(`#${i}_image_mobile`).attr('src', member.img);
    $(`#${i}_instagram`).attr('href', member.instagram).attr('target', '_blank');
    $(`#${i}_twitter`).attr('href', member.twitter).attr('target', '_blank');
    $(`#${i}_web`).attr('href', member.web).attr('target', '_blank');
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

$(".member-image").click(function (){
  $(this).attr("display", "block");
});