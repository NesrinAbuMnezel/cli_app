import { displayMovie } from './display_movie.js';
import { addMovie } from './add_movie.js';
import { updateMovie } from './update_movie.js';
import { deleteMovie } from './delete_movie.js';
import { searchMovie } from './search_movie.js';
import Movie from './movie.js';
import readline from 'readline';
let print=()=>{
    console.log(`
    Movie Catalog CLI Application
    *********
    Select an action:
    1) Display Movie Catalog
    2) Add New Movie
    3) Update Movie Details
    4) Delete Movie
    5) Search and Filter
    *********`);
}
print();
const movieArray = [];
const rd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function query(question) {
    rd.question(question, (answer) => {
        if (answer == 1) {
            console.log('Movies List:');
            displayMovie();
            setTimeout(() => {
                print();
                query(question);
            }, "300");
        } else if (answer == 2) {
            console.log('Add Movie:');
            rd.question("-> enter title of the movie? ", movieTitle => {
                rd.question("-> enter  release date of the movie in this format 'yyy-mm-dd' ex: '2022-02-24' ? ", movieReleaseDate => {
                    rd.question("-> enter rate of the movie (enter a number) ? ", movieRate => {
                        addMovie(new Movie(Math.round(Math.random() * 1000), movieTitle, movieReleaseDate, parseFloat(movieRate)));
                        setTimeout(() => {
                            print();
                            query(question);
                        }, "300");
                    });
                });
            });
        } else if (answer == 3) {
            console.log('Update Movie:');
            displayMovie();
            setTimeout(() => {
                rd.question("-> enter an id of a movie from the list above to be updated... ", mID => {
                    rd.question("-> enter what do you want to update; title, release_date or vote_average(rate) ? ", answer => {
                        let ans = answer.toLowerCase();
                        if (ans == 'title' | ans == 'release_date' | ans == 'vote_average') {
                            rd.question("enter the new value : ", newVal => {
                                updateMovie(mID, ans, newVal);
                                setTimeout(() => {
                                    print();
                                    query(question);
                                }, "300");
                            });
                        }
                        else {
                            console.log('choose just from these  properties ');
                            setTimeout(() => {
                                print();
                                query(question);
                            }, "300");
                        }
                    });
                });
            }, "300");
        } else if (answer == 4) {
            console.log('Delete Movie:');
            displayMovie();
            setTimeout(() => {
                rd.question("-> enter an id of a movie from the list above to be deleted... ", mID => {
                    deleteMovie(parseInt(mID));
                    setTimeout(() => {
                        print();
                        query(question);
                    }, "300");
                });
            }, "300");
        } else if (answer == 5) {
            console.log('Search for a  movie:');
            setTimeout(() => {
                rd.question("enter what do you want to search by ; title, release_date or vote_average(rate) ? ", answer => {
                    let ans = answer.toLowerCase();
                    if (ans == 'title' | ans == 'release_date' | ans == 'vote_average') {
                        rd.question("enter the value (if you search by release_date enter the year only))  : ", newVal => {
                            searchMovie(ans, newVal);
                            setTimeout(() => {
                                print();
                                query(question);
                            }, "300");
                        });
                    }
                    else {
                        console.log('choose just from these  properties ');
                        setTimeout(() => {
                            print();
                            query(question);
                        }, "300");
                    }
                });

            }, "300");
        } else {
            process.exit(1)
        }
    })
}
query("What is your choice? ")
