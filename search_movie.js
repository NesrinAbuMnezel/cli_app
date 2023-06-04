import fs from 'fs';
const searchMovie = (answer, newVal) => {
    fs.readFile("movies.json", "utf-8", (error, data) => {
        if (error) {
            console.log("Something went wrong while reading the file!");
            console.log(error.message);
        } else {
            if (data.length == 0) {
                console.log('the list is empty , add new movies.!.!');
            }
            else {
                let info = JSON.parse(data);
                if (answer == 'title') {
                    let value = newVal.toLowerCase();
                    let arr = info.filter(obj => obj.title == value);
                    if (!arr.length == 0) {
                        info.map(obj => {
                            if (obj.title == value) {
                                console.log(`movie title: ${obj.title}, id: ${obj.id}, release date: ${obj.release_date}, rate: ${obj.vote_average}`);
                            }
                        });
                    } else {
                        console.log('there is no movie with this title!');
                    }
                } else if (answer == 'release_date') {
                    let arr = info.filter(obj =>obj.release_date.slice(0,4)==newVal);
                    if (!arr.length == 0) {
                        info.map(obj => {
                            if (obj.release_date.slice(0,4) == newVal) {
                                console.log(`movie title: ${obj.title}, id: ${obj.id}, release date: ${obj.release_date}, rate: ${obj.vote_average}`);
                            }
                        });
                    } else {
                        console.log('there is no movie with this release year!');
                    }
                } else if (answer == 'vote_average') {
                    let arr = info.filter(obj => obj.vote_average == parseFloat(newVal));
                    if (!arr.length == 0) {
                        info.map(obj => {
                            if (obj.vote_average == parseFloat(newVal)) {
                                console.log(`movie title: ${obj.title}, id: ${obj.id}, release date: ${obj.release_date}, rate: ${obj.vote_average}`);
                            }
                        });
                    } else {
                        console.log('there is no movie with this rate!');
                    }
                }
            }
        }
    });
}
export {
    searchMovie
}