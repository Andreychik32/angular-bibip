import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HeaderComponent } from "./header/header.component";
import { ToDayPipe } from "./toDay.pipe";
import { NgxMaskModule } from "ngx-mask";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, HomePageComponent, HeaderComponent, ToDayPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
