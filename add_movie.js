import fs from 'fs';
const addMovie = (newData) => {
  let Array = [];
  fs.readFile("movies.json", "utf-8", (error, data) => {
    if (error) {
      console.log("Something went wrong while reading the file!");
      console.log(error.message);
    } else {
      Array.push(newData);
      if (data.length == 0) {
        fs.writeFile("movies.json", JSON.stringify(Array, null, 2), (err) => {
          if (err) {
            console.log("Something went wrong while adding movie !");
          } else {
            console.log("Movie has been added!");
          }
        })
      } else {
        let info = JSON.parse(data);
        info.push(newData)
        fs.writeFile("movies.json", JSON.stringify(info, null, 2), (err) => {
          if (err) {
            console.log("Something went wrong while adding movie to the file!");
          } else {
            console.log("Movie has been added.");
          }
        })
      }
    }
  });
}
export {
  addMovie
}