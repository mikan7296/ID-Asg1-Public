const liveConcerts = [
    {
        name: "Love Live! Sunshine!! Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~",
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
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
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
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
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
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
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
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
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
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
        name: "Love Live! Sunshine!! Aqours ONLINE LoveLive! ",
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
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
        name: "Love Live! Sunshine!! Aqours ONLINE LoveLive! ",
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
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
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
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

const randomize = () => {
    num = liveConcerts[Math.floor(Math.random() * liveConcerts.length)]
    $("#concert-advert-title").text(num.name)
    $("#concert-advert-image").attr("src", num.full_img)
    $("#concert-advert-text").text(num.desc)
}

randomize()

window.setInterval(function(){
    randomize()
}, 15000);
