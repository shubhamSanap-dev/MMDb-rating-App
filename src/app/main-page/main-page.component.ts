
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private apiKey = "5c06fed2cdf4dfcdab132d9e67c1c2e7";
  private moviesApi = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
  private searchApi = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=`;

  private originalMovies: any[] = [];
  movies: any[] = [];
  searchQuery = "";

  constructor(private http: HttpClient, private router: Router) {
    this.getMovies(this.moviesApi);
  }

  ngOnInit() {}

  getMovies(api: string){
    this.http.get(api).subscribe(
      (data: any) => {
        this.originalMovies = data.results;
        this.movies = [...this.originalMovies];
      }
    );
  }

  searchMovies() {
    if (!this.searchQuery.trim()) {
      this.movies = [...this.originalMovies];
    } else {
      const api = `${this.searchApi}${this.searchQuery}&page=1&include_adult=false`;
      this.getMovies(api);
    }
  }

  getImageUrl(posterPath: string){
    return posterPath ? `https://www.themoviedb.org/t/p/w1280${posterPath}` : "https://via.placeholder.com/200x300";
  }

  navigateToMovieDetail(movieId: number) {
    this.router.navigate(['/movie', movieId]);
  }
}
