import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { MoviedetailsComponent } from "./moviedetails/moviedetails.component";
import { MainPageComponent } from "./main-page/main-page.component";

const routes: Routes = [
  { path: "", redirectTo: "movie", pathMatch: "full" },
  { path: "movie", component: MainPageComponent },
  { path: "movie/:id", component: MoviedetailsComponent },
  { path: "**", component: MainPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
