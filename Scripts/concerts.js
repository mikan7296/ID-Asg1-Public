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
        src: "Media/concert_images/AQ_5TH.jpg",
        button_id : "7",
        preview : {
            Digest: "https://www.youtube.com/embed/b_2-q8eFsGM"
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
let windowResizeDebounce = false
let filter_buttons = document.querySelectorAll(".filter-button")

$(window).resize(function() {
    width = $(window).width();;
    if (windowResizeDebounce) {
        return
    }
    if (width < 1000) {
        windowResizeDebounce = true
        // Disable Filters
        for (let k in filters) {
            filters[k] = false
        }
        for (let i = 0; i < filter_buttons.length; i++) {
            filter_buttons[i].classList.remove("active")
        }
    // Hide Filters
    updateConcertList()
    setTimeout(() => {
        windowResizeDebounce = false
    }, 200)
    } else {
        $("#mobile-dropdown-container").addClass("hidden")
    }
  });

//really unique id
let container = document.getElementById("123w123")


//function to make element using document.createElement() + arguments
function makeElementpls(name,
    parent,
    classToAdd=false,
    innerHTML=false,
    src=false,
    href=false,
    id=false) {
    let element = document.createElement(name)
    if (classToAdd) {
        $(element).addClass(classToAdd) //jquery to add multiple classes in 1 line
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

    let post = makeElementpls("div",container,"post flex column fw ") // Post
    let postTitle = makeElementpls("h3",post,"post-title nomargin",name) //Post title
    let postTags = makeElementpls("div",post,"post-tags flex") //Post tags flex container
    let postBody = makeElementpls("div",post,"post-body flex column") //Post body elements
    let postBodyImageContainer = makeElementpls("div",postBody,"post-body-image") //Concert image Container
    let postBodyImageImg = makeElementpls("img",postBodyImageContainer,("fw fh"),false,src) //Concert image
    let postBodyH3 = makeElementpls("h3",postBody,false,name) //Concert name
    let postBodyP = makeElementpls("p",postBody,false,desc) //Concert description
    let gallery = makeElementpls("div",postBody,"gallery",false,false,false,"gallery"+id) //Gallery container
    let galleryHeader = makeElementpls("div",gallery,"gallery-header flex nomargin",false,false,false,"header"+id) //Gallery header for buttons
    let galleryTitle = makeElementpls("h3",galleryHeader,"gallery-title","Gallery") //Gallery text
    let galleryButton = makeElementpls("h3",galleryHeader,"gallery-button","[Show]",false,false,id) //Show/hide button

    let supportText = makeElementpls("h3",postBody,false,"Official Links:") //Support text
    let supportButtons = makeElementpls("div",postBody,"support-buttons") //Support buttons container

    for (let i = 0; i < tags.length; i++) { //Add tags to container
        let tag = makeElementpls("div",postTags,["tag",(tags[i].toLowerCase().replace(" ","") + "-filter")],tags[i])
    }
    
    for (let key in links) { //Add support links to container
        value = links[key]
        key = key.toString().replace("_"," ") //replace key underscores with spaces
        let link = makeElementpls("a",supportButtons,false,key,false,value)
    }
}

//Filters
$(".filter-button").click(function() {
    //Toggle filters
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
//Update the page with filters
function updateConcertList() {
    let toShow = []
    let toHide = []
    //Adds selected ones to toShow and non-filtered ones to toHide
    for (let key in filters) {
        value = filters[key]
        if (value) {
            toShow.push("."+key)
        } else {
            toHide.push("."+key)
        }
    }
    //Hides all in toHide
    for (let i = 0; i < toHide.length; i++) {
        let tags = document.querySelectorAll(toHide[i])
        for (let i = 0; i < tags.length; i++) {
            parentsCL = tags[i].parentElement.parentElement.classList
            parentsCL.add("hidden")
        }
    }
    //Shows all in toShow as long as the post has one of the selected tags, eg (1 hide 1 show = show)
    for (let i = 0; i < toShow.length; i++) {
        let tags = document.querySelectorAll(toShow[i])
        for (let i = 0; i < tags.length; i++) {
            parentsCL = tags[i].parentElement.parentElement.classList
            parentsCL.remove("hidden")
        }
    }
    //If all filters are disabled, show all
    if (toShow.length == 0) {
        let posts = document.querySelectorAll(".post")
        for (let i = 0; i < posts.length; i++) {
            posts[i].classList.remove("hidden")
        }
        window.scrollTo(0, 0);
    }
}

//Gallery toggle buttons
$(".gallery-button").click(function() {
    let concert = liveConcerts[this.id]
    let preview = concert.preview
    let id = concert.button_id
    let gallery = document.getElementById("gallery"+id)
    let header = document.getElementById("header"+id)
    //If showing, hide and change text
    if (this.innerHTML == "[Hide]") {
        this.innerHTML = "[Show]"
        //For each key in preview, remove the image
        for (let key in preview) {
            document.getElementById("content"+id+key).remove()
        }
    } 
    else { //Else add and change text
        this.innerHTML = "[Hide]"
        //For each key in preview, add the image
        for (let key in preview) {
            value = preview[key];
            let galleryItemContainer = makeElementpls("div",gallery,"text-center",false,false,false,"content"+id+key) //The container
            let galleryItem = makeElementpls("div",galleryItemContainer,"gallery-item") //The container for individual items
            let galleryItemName = makeElementpls("h3",galleryItem,"gallery-item-name nomargin",key.replace("_"," ")) //The name of the item
            if (value) {
                let video = makeElementpls("iframe",galleryItem,false,false,value)
                video.height = "315"
                video.width = "560"
            }
            else {
                let text = makeElementpls("p",galleryItem,"nomargin","No preview available")
            }
            
        }
    }
    
})

const mb_dropdown = document.getElementById("mobile-dropdown")
const mb_dropdown_container = document.getElementById("mobile-dropdown-container")

$("#mobile-dropdown>img").click(function() {
    $("#mobile-dropdown-container").toggleClass("hidden")
});
