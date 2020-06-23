console.log("Hello world!")
const music = {

    2018: {
      title: "Smoling secretly part 2",
      artistName: "Mijah",
      releaseYear: 2018,
      NumberOfTracks:[
        "Being in gail",
        "I love my mother in low"
      ],
      socialMediaLink: "https://.twitter-madagascar.com",
  },
      2020: {
      title: "Smoling secretly part 4",
      artistName: "Mijah",
      releaseYear: 2020,
      NumberOfTracks: [
        "rendez-vous"
      ],
      socialMediaLink: "https://.github-madagascar.com",
  },
      2019: {
      title: "Smoling secretly part 3",
      artistName: "Mijah",
      releaseYear: 2019,
      NumberOfTracks: [
        "I love you"
      ],
      socialMediaLink: "https://.youtube-madagascar.com",
  },
      2016: {
      title: "Smoling secretly part 1",
      artistName: "Mijah",
      releaseYear: 2016,
      NumberOfTracks: [
        "you can g"
      ],
      socialMediaLink: "https://.facebook-madagascar.com",
  },
};

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
    console.log(i);
  };
};
musicCollection();

// switch (startMenu) {
//   case 1:
//     console.log(musicCollection());
//     break;
//   case 2:
//     console.log("add music list");
//     break;
//   case 3:
//     console.log("upadate a music list");
//     break;
//   case 4:
//     console.log("remove a music list");
//     break;
//   case 5:
//     console.log("quit the program");
//     break;      
// }