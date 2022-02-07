import { Injectable } from "@angular/core";
import { LessonType, Day, Lesson, Week, getCurrentWeek } from "./custom-types";

@Injectable({
  providedIn: "root",
})
export class ScheduleService {
  private lessons: Map<Day, Array<Lesson>>;
  private bells: Array<string>;
  currentWeek: Week;
  colors: Array<string>;

  constructor() {
    this.currentWeek = getCurrentWeek();
    this.lessons = new Map<Day, Array<Lesson>>();
    this.colors = ["#0057E8", "#996448", "#53AB1E"] // 0 - Інтелектуальний аналіз даних, 1 - Засоби мультимедіа, 2 - Програмне забезпечення вбудованих систем


    this.lessons.set(
      Day.Monday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Проектний практикум",
            info: "231 к.15",
          },
          3
        ),
        new Lesson(
          {
            title: "Економіка програмного забезпечення",
            info: "230 к.15",
          },
          4
        ),
        new Lesson(
          {
            title: "Архітектура та проектування",
            info: "230 к.15",
          },
          5,
          {
            title: "",
            info: "",
          }
        ),
        new Lesson(
          {
            title: "Засоби мультимедіа",
            info: "231 к.15",
            color: this.colors[1]
          },
          6,
          {
            title: "Архітектура та проектування",
            info: "231 к.15",
          },
        )
      )
    );
    this.lessons.set(
      Day.Tuesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Інтелектуальний аналіз даних",
            info: "231 к.15",
            color: this.colors[0]
          },
          5,
          {
            title: "Професійна практика ПІ",
            info: "232 к.15",
          },
        ),
        new Lesson(
          {
            title: "Програмне забезпечення вбудованих систем",
            info: "231 к.15",
            color: this.colors[2]
          },
          6,
          {
            title: "Професійна практика ПІ",
            info: "232 к.15",
          },
        ),
        new Lesson(
          {
            title: "Емпіричні методи",
            info: "231 к.15",
          },
          7
        )
      )
    );
    this.lessons.set(
      Day.Wednesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Інтелектуальний аналіз даних",
            info: "214 к.15",
            color: this.colors[0]
          },
          1
        ),
        new Lesson(
          {
            title: "Програмне забезпечення вбудованих систем",
            info: "213 к.15",
            color: this.colors[2]
          },
          2
        ),
        new Lesson(
          {
            title: "Засоби мультимедіа",
            info: "213 к.15",
            color: this.colors[1]
          },
          3
        ),
        new Lesson(
          {
            title: "Економіка програмного забезпечення",
            info: "233 к.15",
          },
          5
        )
      )
    );
    this.lessons.set(
      Day.Thursday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Емпіричні методи",
            info: "211 к.15",
          },
          2
        ),
        new Lesson(
          {
            title: "Проектний практикум",
            info: "213 к.15",
          },
          3
        ),
        new Lesson(
          {
            title: "",
            info: "",
          },
          4,
          {
            title: "Професійна практика ПІ",
            info: "211 к.15",
          }
        )
      )
    );
    this.lessons.set(
      Day.Friday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Професійна практика ПІ",
            info: "214 к.15",
          },
          4
        ),
        new Lesson(
          {
            title: "Архітектура та проектування",
            info: "214 к.15",
          },
          5
        )
      )
    );

    this.bells = new Array<string>(
      "8:30 - 9:50",
      "10:10 - 11:30",
      "11:50 - 13:10",
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
