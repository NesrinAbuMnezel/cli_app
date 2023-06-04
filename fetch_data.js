///run this file to add movies to json file .
//after run ,other tasks will apply to api data
import fs from 'fs';
const urlApi = () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?api_key=e3af38b311f78aebc1f953e5e64ca628";
  fetch(url, { method: 'GET' })
    .then(async res => {
      let apiData = await res.json();
      apiData = apiData.results;
      fs.readFile("movies.json", "utf-8", (error, data) => {
        if (error) {
          console.log("Something went wrong while reading the file!");
          console.log(error.message);
        } else {
          if (data.length == 0) {
            fs.writeFile("movies.json", JSON.stringify(apiData, null, 2), (err) => {
              if (err) {
                console.log("Something went wrong while adding movie from api!");
              } else {
                console.log("DONE!");
              }
            })
          } else {
            let info = JSON.parse(data);
            apiData.map(obj => {
              info.push(obj);
            })
            fs.writeFile("movies.json", JSON.stringify(info, null, 2), (err) => {
              if (err) {
                console.log("Something went wrong while adding movie from api!");
              } else {
                console.log("done!!!!!");
              }
            })
          }
        }
      });

    })
    .catch(err => {
      console.log("Failed to get the data!");
      console.log(err);
    });
}
urlApi();