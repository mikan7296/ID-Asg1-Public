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
            Sunny_Stage : false,
            Ocean_Stage : "https://www.youtube.com/embed/WPOWDse4GHs"
        }
    },
    {
        name: "Love Live! Sunshine!! Aqours EXTRA LoveLive! ~DREAMY CONCERT 2021~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_extra2021.php",
        },
        tags: ["Aqours","Live"],
        src: "Media/concert_images/DC2021.png",
        button_id : "1",
        preview : {
            Dreamy_Concert : "https://www.youtube.com/embed/eG4z8-Ay5O4"
        }
    },
    {
        name: "Love Live! Sunshine!! AZALEA 2nd LoveLive! ~Amazing Travel DNA Reboot~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_AZ2.php",
        },
        tags: ["AZALEA", "Live"],
        src: "Media/concert_images/AZL_2ND.png",
        button_id : "2",
        preview : {
            AZALEA : false
        }
    },
    {   
        name: "Love Live! Sunshine!! CYaRon! 2nd LoveLive! ~Dai Kakumei☆Wake Up Kingdom~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_CYR.php",
        },
        tags: ["CYaRon", "Live"],
        src: "Media/concert_images/CYR_2ND.png",
        button_id : "3",
        preview : {
            CYaRon : "https://www.youtube.com/embed/wCxogyBGjZg"
        }
    },
    {
        name: "Love Live! Sunshine!! Guilty Kiss 2nd LoveLive! ~Return To Love ♡ Kiss Kiss Kiss~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_GK.php",
        },
        tags: ["Guilty Kiss", "Live"],
        src: "Media/concert_images/GK_2ND.png",
        button_id: "4",
        preview : {
            Guilty_Kiss : "https://www.youtube.com/embed/_DzwK7w9PyU"
        }
    },
    {
        name: "Love Live! Sunshine!! Aqours ONLINE LoveLive! ",
        desc: "a",
        links: {
            Website: "https://lovelive-anime.jp/uranohoshi/sp_countdown.php",
                },
        tags: ["Aqours", "Online"],
        src: "Media/concert_images/AQ_WI.png",
        button_id : "5",
        preview : {
            Digest: "https://www.youtube.com/embed/eW-RvKAc_r0"
        }
    },
    {
        name: "Love Live! Sunshine!! Aqours ONLINE LoveLive! ",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_onlinelive.php",
        },
        tags: ["Aqours", "Online"],
        src: "Media/concert_images/AQ_LW.png",
        button_id : "6",
        preview : {
            Digest: "https://www.youtube.com/embed/eW-RvKAc_r0"
        }
    },
    {
        name: "Love Live! Sunshine!! Aqours 5th LoveLive! ~Next SPARKLING!!~",
        desc: "a",
        links: {
            Website: "https://www.lovelive-anime.jp/uranohoshi/sp_5thlive.php",
        },
        tags: ["Aqours", "Live"],
        src: "Media/concert_images/AQ_5TH.png",
        button_id : "7",
        preview : {
            Digest: "https://youtu.be/b_2-q8eFsGM"
        }
    }
]


const filters = {
    "aqours-filter" : false,
    "cyaron-filter" : false,
    "guiltykiss-filter" : false,
    "azalea-filter" : false,
    "live-filter" : false,
    "online-filter" : false,
}
let debounce = false
let filter_buttons = document.querySelectorAll(".filter-button")

$(window).resize(function() {
    width = $(window).width();;
    if (debounce) {
        return
    }
    if (width < 920) {
        debounce = true
        console.log(width)

        for (let k in filters) {
            filters[k] = false
        }

        for (let i = 0; i < filter_buttons.length; i++) {
            filter_buttons[i].classList.remove("active")
        }
    updateConcertList()
    setTimeout(() => {
        debounce = false
    }, 200)
    }
  });

let container = document.getElementById("123w123")
// container.innerHTML = ""
function makeElementpls(name,
    parent,
    classToAdd=false,
    innerHTML=false,
    src=false,
    href=false,
    id=false) {
    let element = document.createElement(name)
    if (classToAdd) {
        // element.classList.add(classToAdd)
        $(element).addClass(classToAdd)
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
    if (id) {
        element.id = id
    }
    parent.appendChild(element)
    return element
}



for (let i = 0; i < liveConcerts.length; i++) {
    let name = liveConcerts[i].name
    let desc = liveConcerts[i].desc
    let tags = liveConcerts[i].tags
    let links = liveConcerts[i].links
    let src = liveConcerts[i].src
    let id = liveConcerts[i].button_id
    let post = makeElementpls("div",container,"post")
    let postTitle = makeElementpls("h3",post,"post-title",name) 
    let postTags = makeElementpls("div",post,"post-tags")
    let postBody = makeElementpls("div",post,"post-body")
    let postBodyImage = makeElementpls("div",postBody,"post-body-image")
    let postBodyImageImg = makeElementpls("img",postBodyImage,false,false,src)
    let postBodyH3 = makeElementpls("h3",postBody,false,name)
    let postBodyP = makeElementpls("p",postBody,false,desc)
    let gallery = makeElementpls("div",postBody,"gallery",false,false,false,"gallery"+id)
    let galleryHeader = makeElementpls("div",gallery,"gallery-header flex",false,false,false,"header"+id)
    let galleryTitle = makeElementpls("h3",galleryHeader,"gallery-title","Gallery")
    let galleryButton = makeElementpls("h3",galleryHeader,"gallery-button","[Show]",false,false,id)

    
   

    let supportText = makeElementpls("h3",postBody,false,"Official Links:")
    let supportButtons = makeElementpls("div",postBody,"support-buttons")
    for (let i = 0; i < tags.length; i++) {
        let tag = document.createElement("div")
        tag.classList.add("tag")
        tag.classList.add(tags[i].toLowerCase().replace(" ","") + "-filter")
        tag.innerHTML = tags[i]
        postTags.appendChild(tag)
    }
    
    for (let key in links) {
        value = links[key]
        key = key.toString().replace("_"," ")
        // let sbinline = makeElementpls("div",supportButtons,"sbinline")
        let link = makeElementpls("a",supportButtons,false,key,false,value)
    }
}


$(".filter-button").click(function() {
    
    if (filters[this.id]) {
        filters[this.id] = false
        this.classList.remove("active")
    }
    else {
        filters[this.id] = true
        this.classList.add("active")
    }
    updateConcertList()
})

$(".gallery-button").click(function() {
    let concert = liveConcerts[this.id]
    let preview = concert.preview
    let id = concert.button_id
    let gallery = document.getElementById("gallery"+id)
    let header = document.getElementById("header"+id)
    if (this.classList.contains("active")) {
        this.classList.remove("active")
        this.innerHTML = "[Show]"
        document.getElementById("content"+id).remove()

    } 
    else {
        this.classList.add("active")
        this.innerHTML = "[Hide]"

        for (let key in preview) {
            value = preview[key];
            if (value) {
                let galleryItemContainer = makeElementpls("div",gallery,"flex-column center",false,false,false,"content"+id)
                let galleryItem = makeElementpls("div",galleryItemContainer,"gallery-item")
                let galleryItemName = makeElementpls("h4",galleryItem,"gallery-item-name",key)
                let galleryItemVideoContainer = makeElementpls("div",galleryItem,"flex-center")
                let video = document.createElement("iframe")
                video.src = value
                
                galleryItemVideoContainer.appendChild(video)
            }
            
        }
    }
    
})


function updateConcertList() {
    let toShow = []
    let toHide = []
    for (let key in filters) {
        value = filters[key]
        if (value) {
            toShow.push("."+key)
        } else {
            toHide.push("."+key)
        }
    }

    for (let i = 0; i < toHide.length; i++) {
        let tags = document.querySelectorAll(toHide[i])
        for (let i = 0; i < tags.length; i++) {
            parentsCL = tags[i].parentElement.parentElement.classList
            parentsCL.add("hidden")
        }
    }

    for (let i = 0; i < toShow.length; i++) {
        let tags = document.querySelectorAll(toShow[i])
        for (let i = 0; i < tags.length; i++) {
            parentsCL = tags[i].parentElement.parentElement.classList
            parentsCL.remove("hidden")
        }
    }

    if (toShow.length == 0) {
        let posts = document.querySelectorAll(".post")
        for (let i = 0; i < posts.length; i++) {
            posts[i].classList.remove("hidden")
        }
    }
}