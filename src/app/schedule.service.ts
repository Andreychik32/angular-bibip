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
            title: "Програмування мобільних пристроїв",
            info: "223 к.15",
          },
          1
        ),
        new Lesson(
          {
            title:
              "Моделювання та аналіз предметної області",
            info: "223 к.15",
          },
          2
        )
      )
    );
    this.lessons.set(
      Day.Tuesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Конструювання програмного забезпечення",
            info: "222 к.15",
          },
          5
        ),
        new Lesson(
          {
            title: "Комп'ютерні мережі",
            info: "214 к.15",
          },
          6
        ),
        new Lesson(
          {
            title: "",
            info: "",
          },
          7,
          {
            title: "Технологія програмування баз даних",
            info: "214 к.15",
          }
        )
      )
    );
    this.lessons.set(
      Day.Wednesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Технологія веб-програмування",
            info: "230 к.15",
          },
          4
        ),
        new Lesson(
          {
            title: "Комп'ютерні мережі",
            info: "230 к.15",
          },
          5
        ),
        new Lesson(
          {
            title: "Правова культура особистості",
            info: "230 к.15",
          },
          6,
          {
            title: "Економіка і бізнес",
            info: "230 к.15",
          }
        )
      )
    );
    this.lessons.set(
      Day.Thursday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Моделювання та аналіз предметної області",
            info: "230 к.15",
          },
          4
        ),
        new Lesson(
          {
            title: "Програмування мобільних пристроїв",
            info: "230 к.15",
          },
          5
        ),
        new Lesson(
          {
            title: "Конструювання програмного забезпечення",
            info: "230 к.15",
          },
          6
        ),
        new Lesson(
          {
            title: "Технологія програмування баз даних ",
            info: "230 к.15",
          },
          7,
          {
            title: "",
            info: "",
          }
        )
      )
    );
    this.lessons.set(
      Day.Friday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Правова культура особистості",
            info: "105 к.1",
          },
          3,
          {
            title: "Економіка і бізнес",
            info: "211 к.15",
          }
        ),
        new Lesson(
          {
            title: "Технологія веб-програмування ",
            info: "214 к.15",
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

  getLessonByWeek(lesson: Lesson): LessonType {
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
