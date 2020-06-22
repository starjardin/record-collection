console.log("Hello world!")
const music = [
  {
    title: "Smoling secretly part 2",
    artistName: "Mijah",
    releaseYear: 2018,
    trNumberOfTracks: 2,
    socialMediaLink: "https://.twitter-madagascar.com",
  },
  {
    title: "Smoling secretly part 4",
    artistName: "Mijah",
    releaseYear: 2020,
    trNumberOfTracks: 3,
    socialMediaLink: "https://.github-madagascar.com",
  },
  {
    title: "Smoling secretly part 3",
    artistName: "Mijah",
    releaseYear: 2019,
    trNumberOfTracks: 3,
    socialMediaLink: "https://.youtube-madagascar.com",
  },
  {
    title: "Smoling secretly part 1",
    artistName: "Mijah",
    releaseYear: 2016,
    trNumberOfTracks: 1,
    socialMediaLink: "https://.facebook-madagascar.com",
  },
];


let menu = `
1 Show all records
2 Add new records
3 Update a record
4 Remove an existing record
5 Quit the program.
`

let startMenu = Number(prompt(`You have a choice between one to fiive: ${menu} `))

const musicLists = () => {
  for (let i = 0; i < music.length; i++) {
    let myMusic = `Title: ${music[i].title},
Artist name: ${music[i].artistName},
Release year: ${music[i].releaseYear},
Number of tracks: ${music[i].trNumberOfTracks},
Social media link: ${music[i].socialMediaLink},
`
for () {
  
}
alert(myMusic);
  }
}

switch (startMenu) {
  case 1:
    musicLists();
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