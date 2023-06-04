import fs from 'fs';
let jsonData;
const displayMovie = () => {
  fs.readFile("movies.json", "utf-8", (error, data) => {
    if (error) {
      console.log("Something went wrong while reading the file!");
      console.log(error.message);
    } else {
      if (data.length == 0) {
        console.log('the list is empty , add new movies...');
      } else {
        jsonData = JSON.parse(data);
        jsonData.map(arr => {
          console.log(`
 movie title: ${arr.title}, movie id : ${arr.id}, movie release date : ${arr.release_date}, movie rate : ${arr.vote_average}`);
        });

      }
    }
  });
};
export {
  displayMovie
}
