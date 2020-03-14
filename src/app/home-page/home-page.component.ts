import { Component, OnInit } from "@angular/core";
import { ScheduleService } from "../schedule.service";
import { Day, Lesson } from "../custom-types";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  lessons: Map<Day, { [key: number]: Lesson }>;
  constructor(private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.lessons = this.scheduleService.getLessons;
  }
}
