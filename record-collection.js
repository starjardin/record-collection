const music = [
  {2018 : {
      title: "Smoling secretly part 2",
      artistName: "Mijah",
      releaseYear: 2018,
      numberOfTracks: 4,
      socialMediaLink: "https://.twitter-madagascar.com",
    }},
      {2020 : {
      title: "Smoking secretly part 4",
      artistName: "Mijah",
      releaseYear: 2020,
      numberOfTracks: 6,
      socialMediaLink: "https://.github-madagascar.com",
    }},
      {2019 : {
      title: "Smoling secretly part 3",
      artistName: "Mijah",
      releaseYear: 2019,
      numberOfTracks: 10,
      socialMediaLink: "https://.youtube-madagascar.com",
    }},
      {2016 : {
      title: "Smoling secretly part 1",
      artistName: "Mijah",
      releaseYear: 2016,
      numberOfTracks: 20,
      socialMediaLink: "https://.facebook-madagascar.com",
    },
  }
];

console.log(music)
let menu = `
1 Show all records
2 Add new records
3 Update a reo
rove an existing record
5 Quit the program.
`

let startMenu = Number(prompt(`You have a choice between one to fiive: ${menu} `))

const musicCollection = () => {
  for (let i = 0; i < music.length; i++) {
    
  }
};

musicCollection();

switch (startMenu) {
  case 1:
    alert(musicCollection());
    break;
  case 2:
    console.log("add music list");
    break;
  case 3:
    console.log("upadate a music list");
    break;
  case 4:
    console.log("remove a music list");
    break;
  case 5:
    console.log("quit the program");
    break;      
}