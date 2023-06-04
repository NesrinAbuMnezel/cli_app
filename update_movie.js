import fs from 'fs';
const updateMovie = (mID, answer, newVal) => {
    fs.readFile("movies.json", "utf-8", (error, data) => {
        if (error) {
            console.log("Something went wrong while reading the file!");
            console.log(error.message);
        } else {
            let info = JSON.parse(data);
            let arr = info.filter(obj => obj.id == mID);
            if (!arr.length == 0) {
                info.map(obj => {
                    if (obj.id == mID) {
                        if (answer == 'title') {
                            obj.title = newVal.toLowerCase();
                        } else if (answer == 'release_date') {
                            obj.release_date = newVal;
                        } else if (answer == 'vote_average') {
                            obj.vote_average = parseFloat(newVal);
                        }
                    }
                });
                fs.writeFile("movies.json", JSON.stringify(info, null, 2), (err) => {
                    if (err) {
                        console.log("Something went wrong while updating movie!");
                    } else {
                        console.log("Movie has been updated.");
                    }
                });
            } else {
                console.log('invalid ID!');
            }
        }
    });
}
export {
    updateMovie
}