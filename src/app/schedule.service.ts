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
            title: "Математична статистика",
            info: "Discord",
          },
          2,
          {
            title: "За вибором:<br />Менеджмент",
            info: "Zoom",
          }
        ),
        new Lesson(
          {
            title:
              "За вибором:<br />Аналітика з R/<br />Інтелектуальні системи",
            info: "Google Meet/Discord",
          },
          3
        ),
        new Lesson(
          {
            title: "Математична статистика",
            info: "Discord",
          },
          4,
          {
            title: "За вибором:<br />Менеджмент",
            info: "Zoom",
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
      Day.Tuesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Філософія",
            info: "перезараховано",
          },
          1
        ),
        new Lesson(
          {
            title: "Операційні системи",
            info: "дистанційно",
          },
          2
        ),
        new Lesson(
          {
            title: "За вибором:<br />Інтелектуальні системи",
            info: "Discord",
          },
          3
        )
      )
    );
    this.lessons.set(
      Day.Wednesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Аналіз вимог до ПЗ",
            info: "Discord",
          },
          4
        ),
        new Lesson(
          {
            title: "Філософія",
            info: "перезараховано",
          },
          5
        ),
        new Lesson(
          {
            title: "За вибором:<br />Крос-платформ. програмування",
            info: "дистанційно",
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
            title: "Владимир Путин",
            info: "молодец",
          },
          1
        ),
        new Lesson(
          {
            title: "Владимир Путин",
            info: "молодец",
          },
          2
        ),
        new Lesson(
          {
            title: "Владимир Путин",
            info: "молодец",
          },
          3
        ),
        new Lesson(
          {
            title: "Владимир Путин",
            info: "молодец",
          },
          4
        )
      )
    );
    this.lessons.set(
      Day.Friday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "За вибором:<br />Крос-платформ. програмування",
            info: "дистанційно",
          },
          1
        ),
        new Lesson(
          {
            title: "",
            info: "",
          },
          2,
          {
            title: "Веб-технології та дизайн",
            info: "дистанційно",
          }
        ),
        new Lesson(
          {
            title: "Аналіз вимог до ПЗ",
            info: "Discord",
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
            title: "Веб-технології та дизайн",
            info: "дистанційно",
          }
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
