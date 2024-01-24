import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MoviedetailsComponent } from "./moviedetails/moviedetails.component";
import { MainPageComponent } from "./main-page/main-page.component";

@NgModule({
  declarations: [AppComponent, MoviedetailsComponent, MainPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
