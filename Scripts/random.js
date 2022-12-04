const liveConcerts = [
    {
        name: "Love Live! Sunshine!! Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~",
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at Vantelin Dome, Belluna Dome and Tokyo Dome, it features the entirety of Aqours",
        links: {
            Windy_Stage : "https://www.lovelive-anime.jp/uranohoshi/sp_6thlive_w.php",
            Sunny_Stage : "https://www.lovelive-anime.jp/uranohoshi/sp_6thlive.php",
            Ocean_Stage : "https://www.lovelive-anime.jp/uranohoshi/sp_6thlive.php"},
        tags: ["Aqours","Live"],
        src: "Media/concert_images/AQ_6TH.png",
        button_id : "0",
        preview: {
            Windy_Stage : false,
            Sunny_Stage : "https://www.youtube.com/embed/wWMPFWfn_5U",
            Ocean_Stage : "https://www.youtube.com/embed/WPOWDse4GHs"
        },
        full_img: "Media/full/AQ_6TH.webp",
    },
    {
        name: "Love Live! Sunshine!! Aqours EXTRA LoveLive! ~DREAMY CONCERT 2021~",
        desc: "Love Live! Sunshine!! Aqours EXTRA LoveLive! ~DREAMY CONCERT 2021~ is a concert held at PIA Arena MM in Yokohama, it features the entirety of Aqours",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_extra2021.php",
        },
        tags: ["Aqours","Live"],
        src: "Media/concert_images/DC2021.png",
        button_id : "1",
        preview : {
            Dreamy_Concert : "https://www.youtube.com/embed/eG4z8-Ay5O4"
        },
        full_img: "Media/full/DC2021.webp",
    },
    {
        name: "Love Live! Sunshine!! AZALEA 2nd LoveLive! ~Amazing Travel DNA Reboot~",
        desc: "Love Live! Sunshine!! AZALEA 2nd LoveLive! ~Amazing Travel DNA Reboot~ is a concert held at Yokohama Arena, it features the subunit AZALEA.",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_AZ2.php",
        },
        tags: ["AZALEA", "Live"],
        src: "Media/concert_images/AZL_2ND.png",
        button_id : "2",
        preview : {
            AZALEA : false
        },
        full_img: "Media/full/AZL_2ND.webp",
    },
    {   
        name: "Love Live! Sunshine!! CYaRon! 2nd LoveLive! ~Dai Kakumei☆Wake Up Kingdom~",
        desc: "Love Live! Sunshine!! CYaRon! 2nd LoveLive! ~Dai Kakumei☆Wake Up Kingdom~ is a concert held at Makuhari Messe Event Hall, it features the subunit CYaRon!.",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_CYR.php",
        },
        tags: ["CYaRon", "Live"],
        src: "Media/concert_images/CYR_2ND.png",
        button_id : "3",
        preview : {
            CYaRon : "https://www.youtube.com/embed/wCxogyBGjZg"
        },
        full_img: "Media/full/CYR_2ND.webp",
    },
    {
        name: "Love Live! Sunshine!! Guilty Kiss 2nd LoveLive! ~Return To Love ♡ Kiss Kiss Kiss~",
        desc: "Love Live! Sunshine!! Guilty Kiss 2nd LoveLive! ~Return To Love ♡ Kiss Kiss Kiss~ is a concert held at Tokyo Garden Theatre, it features the subunit Guilty Kiss.",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_GK.php",
        },
        tags: ["Guilty Kiss", "Live"],
        src: "Media/concert_images/GK_2ND.png",
        button_id: "4",
        preview : {
            Guilty_Kiss : "https://www.youtube.com/embed/_DzwK7w9PyU"
        },
        full_img: "Media/full/GK_2ND.webp",
    },
    {
        name: "Love Live! Sunshine!! Aqours ONLINE LoveLive! White Island ",
        desc: "Love Live! Sunshine!! Aqours ONLINE LoveLive! White Island is one of two online concerts performed by Aqours, it features the entirety of Aqours",
        links: {
            Website: "https://lovelive-anime.jp/uranohoshi/sp_countdown.php",
                },
        tags: ["Aqours", "Online"],
        src: "Media/concert_images/AQ_WI.webp",
        button_id : "5",
        preview : {
            Digest: "https://www.youtube.com/embed/eW-RvKAc_r0"
        },
        full_img: "Media/full/AQ_OL.webp",
    },
    {
        name: "Love Live! Sunshine!! Aqours ONLINE LoveLive! Lost World ",
        desc: "Love Live! Sunshine!! Aqours ONLINE LoveLive! Lost World is one of two online concerts performed by Aqours, it features the entirety of Aqours",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_onlinelive.php",
        },
        tags: ["Aqours", "Online"],
        src: "Media/concert_images/AQ_LW.png",
        button_id : "6",
        preview : {
            Digest: "https://www.youtube.com/embed/eW-RvKAc_r0"
        },
        full_img: "Media/full/AQ_OL.webp",
    },
    {
        name: "Love Live! Sunshine!! Aqours 5th LoveLive! ~Next SPARKLING!!~",
        desc: "Love Live! Sunshine!! Aqours 5th LoveLive! ~Next SPARKLING!!~ is a concert held at Metlife Dome, it features the entirety of Aqours",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_5thlive.php",
        },
        tags: ["Aqours", "Live"],
        src: "Media/concert_images/AQ_5TH.png",
        button_id : "7",
        preview : {
            Digest: "https://www.youtube.com/embed/b_2-q8eFsGM"
        },
        full_img: "Media/full/AQ_5TH.webp",
    }
]
let counter = 1
let oldNum = 0

const randomize = () => {
    while (true) {
        let  num = Math.floor(Math.random() * liveConcerts.length)
        var concert = liveConcerts[num]
        if (num != oldNum) {
            oldNum = num
            break
        }
    }
    $("#concert-advert-title"+counter).text(concert.name)
    $("#concert-advert-image"+counter).attr("src", concert.full_img)
    $("#concert-advert-text"+counter).text(concert.desc)
    counter++
}



const makenew = function () {
    slides= document.getElementById("slides")
    clone = $("#tochange").clone(true).appendTo(slides)
    clone.attr("id","tochange"+counter)
    clone.find("#concert-advert-title").attr("id","concert-advert-title"+counter)
    clone.find("#concert-advert-image").attr("id","concert-advert-image"+counter)
    clone.find("#concert-advert-text").attr("id","concert-advert-text"+counter)
    randomize()
    scrollRight(1)
}

let width = $(window).width();

$(window).resize(function() {
    width = $(window).width();;
});

function scrollRight(pages) {
$('#slides').stop().animate({scrollLeft:"+="+(pages*width)}, 4000)
}


window.setInterval(function(){
    makenew()
}, 30000);
