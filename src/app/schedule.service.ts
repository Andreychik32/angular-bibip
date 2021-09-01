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
            title: "Вибіркові дисципліни",
            info: "пока точно не знаю",
          },
          0
        ),
        new Lesson(
          {
            title: "Вибіркові дисципліни",
            info: "пока точно не знаю",
          },
          0
        ),
        new Lesson(
          {
            title: "Вибіркові дисципліни",
            info: "пока точно не знаю",
          },
          0
        ),
        new Lesson(
          {
            title: "Вибіркові дисципліни",
            info: "пока точно не знаю",
          },
          0
        )
      )
    );
    this.lessons.set(
      Day.Tuesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Військова підготовка",
            info: "могут быть ещё пары",
          },
          0
        ),
        new Lesson(
          {
            title: "Військова підготовка",
            info: "могут быть ещё пары",
          },
          0
        ),
        new Lesson(
          {
            title: "Військова підготовка",
            info: "могут быть ещё пары",
          },
          0
        ),
        new Lesson(
          {
            title: "Військова підготовка",
            info: "могут быть ещё пары",
          },
          0
        )
      )
    );
    this.lessons.set(
      Day.Wednesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Якість програмного забезпечення",
            info: "214 к.15",
          },
          1
        ),
        new Lesson(
          {
            title: "Архітектура та проектування",
            info: "214 к.15",
          },
          2
        ),
        new Lesson(
          {
            title: "Менеджмент проектів",
            info: "233 к.15",
          },
          4,
          {
            title: "",
            info: "",
          }
        )
      )
    );
    this.lessons.set(
      Day.Thursday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Групова динаміка та комунікації",
            info: "230 к.15",
          },
          1,
          {
            title: "",
            info: "",
          }
        ),
        new Lesson(
          {
            title: "Менеджмент проектів",
            info: "230 к.15",
          },
          2,
          {
            title: "Якість програмного забезпечення",
            info: "230 к.15",
          }
        ),
        new Lesson(
          {
            title: "Архітектура та проектування",
            info: "230 к.15",
          },
          3,
          {
            title: "Безпека програм та даних",
            info: "230 к.15",
          }
        )
      )
    );
    this.lessons.set(
      Day.Friday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Групова динаміка та комунікації",
            info: "225 к.15",
          },
          4
        ),
        new Lesson(
          {
            title: "Безпека програм та даних",
            info: "223 к.15",
          },
          5
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
