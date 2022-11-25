const liveConcerts = [
    {
        name: "Love Live! Sunshine!! Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~",
        desc: "Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.",
        links: {
            Windy : "https://www.lovelive-anime.jp/uranohoshi/cd2.php#cd44",
            Sunny : "https://www.lovelive-anime.jp/uranohoshi/cd2.php#cd40",
            Ocean : "https://www.lovelive-anime.jp/uranohoshi/cd2.php#cd39"},
        tags: ["live","aqours"],
        src: "Media/kv.png"
    }
]


// for (const [ key, value ] of Object.entries(liveConcerts[0].links)) {
//     console.log (key,value)
// }

template = `<div class="post">
        <h3 class="post-title">Concert 1</h3>
        <div class="post-tags">
            <div class="tag">Tag 1</div>
        </div>
        <div class="post-body">
        <div class="post-body-image" >
            <img src="Media/kv.png">
        </div>
        <h3>Love Live! Sunshine!! Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~</h3>
        <p>Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~ is a concert held at 3 locations.</p>
    </div>`


let container = document.getElementById("123w123")

function makeElementpls(name,
    parent,
    classToAdd=false,
    innerHTML=false,
    src=false,) {
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
    parent.appendChild(element)
    return element
}

for (let i = 0; i < liveConcerts.length; i++) {
    let name = liveConcerts[i].name
    let desc = liveConcerts[i].desc
    let tags = liveConcerts[i].tags

    let post = makeElementpls("div",container,"post")
    let postTitle = makeElementpls("h3",post,"post-title",name) 
    let postTags = makeElementpls("div",post,"post-tags")
    let postBody = makeElementpls("div",post,"post-body")
    let postBodyImage = makeElementpls("div",postBody,"post-body-image")
    let postBodyImageImg = makeElementpls("img",postBodyImage,false,false,liveConcerts[i].src)
    let postBodyh3 = makeElementpls("h3",postBody,false,name)
    let postBodyp = makeElementpls("p",postBody,false,desc)
    for (let i = 0; i < tags.length; i++) {
        let tag = document.createElement("div")
        tag.classList.add("tag")
        tag.innerHTML = tags[i]
        postTags.appendChild(tag)
    }
}