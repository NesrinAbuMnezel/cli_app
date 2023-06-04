function Movie(movieId, movieTitle, movieReleaseDate, movieRate) {
    this.id = movieId;
    this.title = movieTitle;
    this.release_date = movieReleaseDate;
    this.vote_average = movieRate;
}
Movie.prototype.id = '';
Movie.prototype.title = '';
Movie.prototype.release_date = '';
Movie.prototype.vote_average = Math.round(Math.random() * 1000) ;
export default Movie;