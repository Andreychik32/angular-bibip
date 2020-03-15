import { BrowserModule, Title } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { HeaderComponent } from "./header/header.component";
import { ToDayPipe } from "./toDay.pipe";
import { NgxMaskModule } from "ngx-mask";
import { FormsModule } from "@angular/forms";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [AppComponent, HomePageComponent, HeaderComponent, ToDayPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    FormsModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
