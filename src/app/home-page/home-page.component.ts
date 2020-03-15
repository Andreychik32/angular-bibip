import { Component, OnInit } from "@angular/core";
import { ScheduleService } from "../schedule.service";
import { Day, LessonType, Lesson } from "../custom-types";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent {
  objectKeys = Object.keys;
  parseInt = parseInt;
  selectedDay: Day;

  constructor(
    private scheduleService: ScheduleService,
    private meta: Meta,
    private titleService: Title
  ) {
    this.titleService.setTitle("Бібіп");
    this.meta.addTags([
      { name: "title", content: "Бібіп" },
      {
        name: "description",
        content: "Розклад занять для однієї із груп університету факультету ІТ."
      },

      { name: "og:type", content: "website" },
      { name: "og:url", content: "https://bibip.haxellio.me/" },
      { name: "og:title", content: "Бібіп" },
      {
        name: "og:description",
        content: "Розклад занять для однієї із груп університету факультету ІТ."
      },
      {
        name: "og:image",
        content: "https://bibip.haxellio.me/assets/icons/icon-512x512.png"
      },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:url", content: "https://bibip.haxellio.me/" },
      { name: "twitter:title", content: "Бібіп" },
      {
        name: "twitter:description",
        content: "Розклад занять для однієї із груп університету факультету ІТ."
      },
      {
        name: "twitter:image",
        content: "https://bibip.haxellio.me/assets/icons/icon-512x512.png"
      }
    ]);
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
