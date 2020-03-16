import { Component, OnInit } from "@angular/core";
import { ScheduleService } from "../schedule.service";
import { Day, LessonType, Lesson } from "../custom-types";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent {
  objectKeys = Object.keys;
  parseInt = parseInt;
  selectedDay: Day;
  currentDate: Date;

  constructor(private scheduleService: ScheduleService) {
    this.currentDate = new Date();
    const day = this.currentDate.getDay();
    if (![6, 7].includes(day)) {
      this.selectDay(day);
    }
  }

  get lessons() {
    return this.scheduleService.getLessons;
  }

  getLessonDays() {
    return Array.from(this.lessons.keys());
  }

  getLessonDataBySelectedWeek(lesson: Lesson) {
    return this.scheduleService.getLessonDataByWeek(lesson);
  }

  getLessonsByDay(day: Day) {
    return this.lessons.get(day);
  }

  getBells() {
    return this.scheduleService.getBells;
  }

  selectDay(day: Day) {
    this.selectedDay = day;
  }

  get getSelectedDay() {
    return this.selectedDay;
  }
}
