import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-moviedetails",
  templateUrl: "./moviedetails.component.html",
  styleUrls: ["./moviedetails.component.css"],
})
export class MoviedetailsComponent implements OnInit {
  apiKey = "5c06fed2cdf4dfcdab132d9e67c1c2e7";
  movieDetailsApi = "https://api.themoviedb.org/3/movie/";

  movie: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get("id");

    const apiUrl = `${this.movieDetailsApi}${movieId}?api_key=${this.apiKey}&language=en-US`;

    this.http.get(apiUrl).subscribe((res) => {
      this.movie = res;
    });
  }

  imageUrl(posterPath: string) {
    return posterPath
      ? `https://www.themoviedb.org/t/p/w1280${posterPath}`
      : "https://via.placeholder.com/200x300";
  }
}
