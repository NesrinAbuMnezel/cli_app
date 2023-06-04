import fs from 'fs';
const deleteMovie = (mID) => {
    fs.readFile("movies.json", "utf-8", (error, data) => {
        if (error) {
            console.log("Something went wrong while reading the file!");
            console.log(error.message);
        }
        else {
            if (data.length == 0) {
                console.log('the list is empty , add new movies!!!');
            } else {
                let info = JSON.parse(data);
                const index = info.map(object => object.id).indexOf(mID);
                if (index >= 0) {
                    info.splice(index, 1);
                    fs.writeFile("movies.json", JSON.stringify(info, null, 2), (err) => {
                        if (err) {
                            console.log("Something went wrong while deleting a movie!");
                        } else {
                            console.log("Movie has been deleted.");
                        }
                    });
                } else {
                    console.log('invalid ID');
                }
            }
        }
    });

}
export {
    deleteMovie
}