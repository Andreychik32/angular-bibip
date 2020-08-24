import { Injectable } from "@angular/core";
import { LessonType, Day, Lesson, Week, getCurrentWeek } from "./custom-types";

@Injectable({
  providedIn: "root",
})
export class ScheduleService {
  private lessons: Map<Day, Array<Lesson>>;
  private bells: Array<string>;
  currentWeek: Week;

  constructor() {
    this.currentWeek = getCurrentWeek();
    this.lessons = new Map<Day, Array<Lesson>>();
    this.lessons.set(
      Day.Monday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Матем. статис.",
            info: "каб. 206, корп. 15",
          },
          2,
          {
            title: "",
            info: "",
          }
        ),
        new Lesson(
          {
            title: "За вибором:<br />Аналітика з R /<br /> Інтелект. системи",
            info: "каб. 230, корп. 15 /<br /> каб. 232 к. 15",
          },
          3
        ),
        new Lesson(
          {
            title: "Менеджмент",
            info: "каб. 232, корп. 15",
          },
          4,
          {
            title: "",
            info: "",
          }
        ),
        new Lesson(
          {
            title: "Операційні системи",
            info: "каб. 213, корп. 15",
          },
          5
        )
      )
    );
    this.lessons.set(
      Day.Tuesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Філософія",
            info: "дистанційно",
          },
          1
        ),
        new Lesson(
          {
            title: "Аналіз вимог до ПЗ",
            info: "дистанційно",
          },
          2
        ),
        new Lesson(
          {
            title: "Менеджмент",
            info: "дистанційно",
          },
          3,
          {
            title: "",
            info: "",
          }
        )
      )
    );
    this.lessons.set(
      Day.Wednesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "За вибором:<br />Інтел. системи",
            info: "каб. 233, корп. 15",
          },
          4
        ),
        new Lesson(
          {
            title: "Філософія",
            info: "каб. 233 корп. 15",
          },
          5
        ),
        new Lesson(
          {
            title: "Крос-платформ. програмування",
            info: "каб. 233 корп. 15",
          },
          6
        )
      )
    );
    this.lessons.set(
      Day.Thursday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Крос-платформ. програмування",
            info: "дистанційно",
          },
          2
        ),
        new Lesson(
          {
            title: "Математична статистика",
            info: "дистанційно",
          },
          3,
          {
            title: "Веб-технології та дизайн",
            info: "дистанційно",
          }
        ),
        new Lesson(
          {
            title: "Операційні системи",
            info: "дистанційно",
          },
          5
        )
      )
    );
    this.lessons.set(
      Day.Friday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "",
            info: "",
          },
          2,
          {
            title: "Веб-технології та дизайн",
            info: "каб. 211, корп. 15",
          }
        ),
        new Lesson(
          {
            title: "Аналіз вимог",
            info: "каб. 211 корп. 15",
          },
          3
        ),
        new Lesson(
          {
            title: "Крос-платформ. програмування",
            info: "каб. 211 корп. 15",
          },
          4
        )
      )
    );

    this.bells = new Array<string>(
      "8:30 - 9:50",
      "10:05 - 11:25",
      "11:40 - 13:00",
      "14:00 - 15:20",
      "15:35 - 16:55",
      "17:10 - 18:30",
      "18:45 - 20:05"
    );
  }

  getLessonDataByWeek(lesson: Lesson): LessonType {
    if (lesson.secondLesson) {
      if (this.currentWeek === Week.Even) {
        return lesson.firstLesson;
      } else {
        return lesson.secondLesson;
      }
    } else {
      return lesson.firstLesson;
    }
  }

  get getLessons() {
    return this.lessons;
  }

  get getBells() {
    return this.bells;
  }
}
