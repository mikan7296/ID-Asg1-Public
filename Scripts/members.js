const members = [
    {},
    {
      id : 1,
      name: "Inami Anju",
      kanjiname: "伊波杏樹",
      nickname: "Anchan",
      birthday: "1996-02-07",
      character: "Takami Chika",
      img: "Media/aqoursclub_cast_1.png",
     
    },
    {
      id: 2,
      name: "Aida Rikako",
      kanjiname: "逢田梨香子",
      nickname: "Rikyako",
      birthday: "1992-08-08",
      character: "Sakurauchi Riko",
      img: "Media/aqoursclub_cast_2.png",
    },
    {
      id: 3,
      name: "Suwa Nanaka",
      kanjiname: "諏訪ななか",
      nickname: "Suwawa",
      birthday: "1994-11-02",
      character: "Matsuura Kanan",
      img: "Media/aqoursclub_cast_3.png",
    },
    {
      id: 4,
      name: "Komiya Arisa",
      kanjiname: "小宮有紗",
      nickname: "Arisha",
      birthday: "1994-02-05",
      character: "Kurosawa Dia",
      img: "Media/aqoursclub_cast_4.png",
    },
    {
      id: 5,
      name: "Saito Shuka",
      kanjiname: "斉藤朱夏",
      nickname: "Shukashuu",
      birthday: "1996-08-16",
      character: "Watanabe You",
      img: "Media/aqoursclub_cast_5.png",
    },
    {
      id: 6,
      name: "Kobayashi Aika",
      kanjiname: "小林愛香",
      nickname: "Aikyan",
      birthday: "1993-10-23",
      character: "Tsushima Yoshiko",
      img: "Media/aqoursclub_cast_6.png",
    },
    {
      id: 7,
      name: "Takatsuki Kanako",
      kanjiname: "高槻かなこ",
      nickname: "Kin-chan",
      birthday: "1993-09-25",
      character: "Kunikida Hanamaru",
      img: "Media/aqoursclub_cast_7.png",
    },
    {
      id: 8,
      name: "Suzuki Aina",
      kanjiname: "鈴木愛奈",
      nickname: "Ainya",
      birthday: "1995-07-23",
      character: "Ohara Mari",
      img: "Media/aqoursclub_cast_8.png",
    },
    {
      id: 9,
      name: "Furihata Ai",
      kanjiname: "降幡愛",
      nickname: "Furirin",
      birthday: "1994-02-19",
      character: "Kurosawa Ruby",
      img: "Media/aqoursclub_cast_9.png",
    }
  ];
  
  function calculateAge(birthday) {
    var age = new Date().getFullYear() - new Date(birthday).getFullYear();
    return age;
  }
  
  function changeMember(id) {
    const member = members[id];
    const age = calculateAge(member.birthday);
    document.getElementById("members-profile-card").src = member.img;
    document.getElementById("members-bio-name").innerHTML = member.name;
    document.getElementById(
      "members-bio-age"
    ).innerHTML = `Birthday:${member.birthday} (${age})`;
    document.getElementById("members-bio-about").innerHTML = member.nickname;
  }
  