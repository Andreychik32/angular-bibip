import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ToDayPipe } from "./toDay.pipe";

const routes: Routes = [{ path: "", component: HomePageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [ToDayPipe]
})
export class AppRoutingModule {}
