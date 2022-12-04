# ID-Asg1-Public

This project is a website aimed to provide the latest news about the idol group Aqours and their activities to the worldwide audience (because they're Japanese)
Website will be managed by an imaginary team called Team Amogus
## Design Process
The design for my website is absolutely horrible, it, mainly has 3 colours, grey, white and light blue. To make up for the horrible deisgn I mainly focus on the functionality part of the website.

#### -index.html
The index page starts off with a navigation bar (with a background that appears when you scroll down, very subtle), followed by a blurred hero image of the idol group with the team name on it.
The first container is static and has some information about the team with the logo and button which links to team.html, hovering over the logo also changes it into a funny gif.
The second container will change every 30seconds~ to another concert in the list under random.js, it changes with a sliding animation made using jquery's animate + javascript scrollleft + html inline block features. The slide contains an image, concert title and a short description along with a button that leads to concerts.html.
Mobile view will not have the concert image.
#### -members.html
The members page is meant to allow users visiting the site to learn more about the members of the idol group(Aqours), there are 9 members in Aqours and they're split into 3 subunits, which inspired the layout of this page. 
The user can sort by subunit which will change the content of the 3 slides to the members of the respective subunit, the active subunit shown will be indicated with a blue background. The slides can be changed using the arrows or the radio buttons, the slides features the member cards, name, birthday, age and a short bio. It also contains links to their instagram, twitter and website(actual ones). The background colour of the slides are based on the member's actual image colour.

Reducing the screen size will eventually remove the side arrows, which will resort you to using the radio buttons to scroll instead.
Further reducing the screen size will cause the member card to be positioned at the top right, so there's more space for the text.  

#### -concerts.html
This page is meant for the users to easily find past concerts performed by Aqours, each slide contains the title, tags, small image, short description, gallery and official links about the respective concert.
The official links and gallery leads to real official content.
The users can filter the concert by the tags and are able to combine the tags. The users can choose to see the official videos for the concert by clicking on the [Show] button on the gallery tab for each post.

Reducing the screen size will reset the filters and change the sidebar into a hamburger menu instead, which is the same filter function but for mobile.

#### -team.html
Basically the page with least effort, it's pure html css with some hover transitions when the burgers get hovered over. It showcases information about the members of Team Amogus with their roles in the team.

#### -Navbar 
The navbar is the same for all pages except index.html, where the background colour is transparent unless you scroll. 
Clicking on the logo will lead to index.html.
When the screen size is reduced the team logo will be removed and the 4 pages will be spread evenly on the nav bar.

#### -footer
The footer is the same throughout all 4 pages.

## Features

Feature 1 - Rotating featured live concert on index.html<br>
Feature 2 - Changing slides by subunits/changing members on the slides with arrows/radio buttons, allows users to learn about Aqours members<br><br>
Feature 3 - Dynamic concert list with filters available, feel free to add more to the array to test under concerts.js (use existing tags or add new tag buttons in concerts.html following the format if adding new tags)<br>

Additional features I wanna add: Maybe some 'join the team' button under team.html.

## Technologies Used
[JQuery](https://jquery.com/) - For literal simplification of DOM manipulation and also animate feature with JS's scrollLeft to make the slides on index.html and members.html.<br>
JavaScript - To make the changing slides content function, rotating slides function, detecting window resize function(to reset slides), injecting content into respective pages function, filtering function, filtering multiple things function, injecting more things into injected things function(gallery video in each concert post, to prevent console from flooding with errors, videos are injected only when needed and removed otherwise.)<br>
HTML,CSS- Self explanatory
## Testing
I think everything is automated.
## Credits
### Content 
Information about members/concerts taken from [Fandom](https://love-live.fandom.com/wiki/Category:Love_Live!_Sunshine!!_Voice_Actress) <br>

### Media 

Team Logo (Amogus.jpg) - https://meme.fandom.com/wiki/Amogus <br>
Index.html hero image (Aqours_artist_photo.jpg) - https://jpop.fandom.com/wiki/Aqours <br>

Subunit Logo CYaRon! - https://jpop.fandom.com/wiki/CYaRon! <br>
Subunit Logo Guilty Kiss - https://jpop.fandom.com/wiki/Guilty_Kiss <br>
Subunit Logo AZALEA - https://jpop.fandom.com/wiki/AZALEA_(group) <br>

Profile card Inami Anju (aqoursclub_cast_1) - Aqours Club 2018 CD SET/ https://love-live.fandom.com/wiki/Anju_Inami <br>
Profile card Aida Rikako (aqoursclub_cast_2) - Aqours Club 2018 CD SET/ https://love-live.fandom.com/wiki/Rikako_Aida <br>
Profile card Suwa Nanaka (aqoursclub_cast_3) - Aqours Club 2018 CD SET/ https://love-live.fandom.com/wiki/Nanaka_Suwa <br>
Profile card Komiya Arisa (aqoursclub_cast_4) - Aqours Club 2018 CD SET/ https://love-live.fandom.com/wiki/Komiya_Arisa <br>
Profile card Saito Shuka (aqoursclub_cast_5) - Aqours Club 2018 CD SET/ https://love-live.fandom.com/wiki/Shuka_Saito <br>
Profile card Kobayashi Aika (aqoursclub_cast_6) - Aqours Club 2018 CD SET/ https://love-live.fandom.com/wiki/Aika_Kobayashi <br>
Profile card Takatsuki Kanako (aqoursclub_cast_7) - Aqours Club 2018 CD SET/ https://love-live.fandom.com/wiki/Kanako_Takatsuki <br>
Profile card Suzuki Aina (aqoursclub_cast_8) - Aqours Club 2018 CD SET/ https://love-live.fandom.com/wiki/Aina_Suzuki <br>
Profile card Furihata Ai (aqoursclub_cast_9) - Aqours Club 2018 CD SET/ https://love-live.fandom.com/wiki/Furihata_Ai <br>

`Love Live! Sunshine!! Aqours 6th LoveLive! ~KU-RU-KU-RU Rock 'n' Roll TOUR~` - [Official](https://www.lovelive-anime.jp/uranohoshi/sp_6thlive_w.php) / [Fandom](https://love-live.fandom.com/wiki/Aqours_6th_LoveLive!_~KU-RU-KU-RU_Rock_%27n%27_Roll_TOUR~) <br>
`Love Live! Sunshine!! Aqours EXTRA LoveLive! ~DREAMY CONCERT 2021~` - [Official](https://www.lovelive-anime.jp/uranohoshi/sp_extra2021.php) / [Fandom](https://love-live.fandom.com/wiki/Aqours_EXTRA_LoveLive!_~DREAMY_CONCERT_2021~) <br>
`Love Live! Sunshine!! AZALEA 2nd LoveLive! ~Amazing Travel DNA Reboot~` - [Official](https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_AZ2.php) / [Fandom](https://love-live.fandom.com/wiki/AZALEA_2nd_LoveLive!_~Amazing_Travel_DNA_Reboot~) <br>
`Love Live! Sunshine!! CYaRon! 2nd LoveLive! ~Dai Kakumei☆Wake Up Kingdom~` - [Official](https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_CYR.php) / [Fandom](https://love-live.fandom.com/wiki/CYaRon!_2nd_LoveLive!_~Dai_Kakumei%E2%98%86Wake_Up_Kingdom~) <br>
`Love Live! Sunshine!! Guilty Kiss 2nd LoveLive! ~Return To Love ♡ Kiss Kiss Kiss~` [Official](https://www.lovelive-anime.jp/uranohoshi/sp_unit2021_GK.php) / [Fandom](https://love-live.fandom.com/wiki/Guilty_Kiss_2nd_LoveLive!_~Return_To_Love_%E2%99%A1_Kiss_Kiss_Kiss~) <br>
`Love Live! Sunshine!! Aqours ONLINE LoveLive! White Island` - [Official](https://lovelive-anime.jp/uranohoshi/sp_countdown.php) / [Fandom](https://love-live.fandom.com/wiki/Aqours_ONLINE_LoveLive!) <br> 
`Love Live! Sunshine!! Aqours ONLINE LoveLive! Lost World` - [Official](https://www.lovelive-anime.jp/uranohoshi/sp_onlinelive.php) / [Fandom](https://love-live.fandom.com/wiki/Aqours_ONLINE_LoveLive!) <br>
`Love Live! Sunshine!! Aqours 5th LoveLive! ~Next SPARKLING!!~` - [Official](https://www.lovelive-anime.jp/uranohoshi/sp_5thlive.php) / [Fandom](https://love-live.fandom.com/wiki/Aqours_5th_LoveLive!_%EF%BD%9ENext_SPARKLING!!%EF%BD%9E)

Instagram Icon - [Flaticon](https://www.flaticon.com/free-icon/instagram_1384031) <br>
Twitter Icon - [Flaticon](https://www.flaticon.com/free-icon/twitter_733635) <br>
Link Icon - [Flaticon](https://www.flaticon.com/free-icon/link_154843) <br>
Hamburger Menu Icon - [Flaticon](https://www.flaticon.com/free-icon/hamburger_7710488?term=hamburger&page=1&position=1&page=1&position=1&related_id=7710488&origin=search) <br>
Left Arrow Icon - [Flaticon](https://www.flaticon.com/free-icon/left-arrow_271220?related_id=271220&origin=search) <br>
Right Arrow Icon - [Flaticon](https://www.flaticon.com/free-icon/right-arrow_271228?related_id=467282&origin=search) <br>

Team Member's Hamburger Pictures - [Mcdonald's](https://www.mcdonalds.com.sg/full-menu) <br>
Team Logo hover Amogus twerk gif - [Tenor](https://tenor.com/view/among-us-twerk-thicc-among-us-twerk-funny-among-us-gif-20511920) <br>

Home page inspired by https://onibe.moe/
