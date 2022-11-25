const liveConcerts = [
    {
        name: "Love Live! Sunshine!! Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~",
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
        links: {
            Windy_Stage : "https://www.lovelive-anime.jp/uranohoshi/sp_6thlive_w.php",
            Sunny_Stage : "https://www.lovelive-anime.jp/uranohoshi/sp_6thlive.php",
            Ocean_Stage : "https://www.lovelive-anime.jp/uranohoshi/sp_6thlive.php"},
        tags: ["Aqours","Live"],
        src: "Media/concert_images/AQ_6TH.png"
    },
    {
        name: "Love Live! Sunshine!! Aqours EXTRA LoveLive! ~DREAMY CONCERT 2021~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_extra2021.php",
        },
        tags: ["Aqours","Live"],
        src: "Media/concert_images/DC2021.png"
    },
    {
        name: "Love Live! Sunshine!! AZALEA 2nd LoveLive! ~Amazing Travel DNA Reboot~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_AZ2.php",
        },
        tags: ["AZALEA", "Live"],
        src: "Media/concert_images/AZL_2ND.png"
    },
    {   
        name: "Love Live! Sunshine!! CYaRon! 2nd LoveLive! ~Dai Kakumei☆Wake Up Kingdom~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_CYR.php",
        },
        tags: ["CYaRon!", "Live"],
        src: "Media/concert_images/CYR_2ND.png"
    },
    {
        name: "Love Live! Sunshine!! Guilty Kiss 2nd LoveLive! ~Return To Love ♡ Kiss Kiss Kiss~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_GK.php",
        },
        tags: ["Guilty Kiss", "Live"],
        src: "Media/concert_images/GK_2ND.png"
    },
    {
        name: "Love Live! Sunshine!! Aqours ONLINE LoveLive! ",
        desc: "a",
        links: {
            Website: "https://lovelive-anime.jp/uranohoshi/sp_countdown.php",        },
        tags: ["Aqours", "Online"],
        src: "Media/concert_images/AQ_WI.png"
    },
    {
        name: "Love Live! Sunshine!! Aqours ONLINE LoveLive! ",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_onlinelive.php",
        },
        tags: ["Aqours", "Online"],
        src: "Media/concert_images/AQ_LW.png"
    },
    {
        name: "Love Live! Sunshine!! Aqours 5th LoveLive! ~Next SPARKLING!!~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_5thlive.php",
        },
        tags: ["Aqours", "Live"],
        src: "Media/concert_images/AQ_5TH.png"
    }
]

let container = document.getElementById("123w123")

function makeElementpls(name,
    parent,
    classToAdd=false,
    innerHTML=false,
    src=false,
    href=false,) {
    let element = document.createElement(name)
    if (classToAdd) {
        element.classList.add(classToAdd)
    }
    if (innerHTML) {
        element.innerHTML = innerHTML
    }
    if (src) {
        element.src = src
    }
    if (href) {
        element.href = href
    }
    parent.appendChild(element)
    return element
}

for (let i = 0; i < liveConcerts.length; i++) {
    let name = liveConcerts[i].name
    let desc = liveConcerts[i].desc
    let tags = liveConcerts[i].tags
    let links = liveConcerts[i].links

    let post = makeElementpls("div",container,"post")
    let postTitle = makeElementpls("h3",post,"post-title",name) 
    let postTags = makeElementpls("div",post,"post-tags")
    let postBody = makeElementpls("div",post,"post-body")
    let postBodyImage = makeElementpls("div",postBody,"post-body-image")
    let postBodyImageImg = makeElementpls("img",postBodyImage,false,false,liveConcerts[i].src)
    let postBodyH3 = makeElementpls("h3",postBody,false,name)
    let postBodyP = makeElementpls("p",postBody,false,desc)
    let supportButtons = makeElementpls("h3",postBody,"support-buttons","Official Links:")
    for (let i = 0; i < tags.length; i++) {
        let tag = document.createElement("div")
        tag.classList.add("tag")
        tag.innerHTML = tags[i]
        postTags.appendChild(tag)
    }
    
    for (let [key, value] of Object.entries(links)) {
        key = key.toString().replace("_"," ")
        let link = makeElementpls("a",supportButtons,false,key,false,value)

    }
}