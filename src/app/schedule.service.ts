import { Injectable } from "@angular/core";
import { LessonType, Day, Lesson, Week, getCurrentWeek } from "./custom-types";

@Injectable({
  providedIn: "root"
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
            title: "Дискретні структури даних (лекція)",
            info: "каб. 230, корп. 15"
          },
          3
        ),
        new Lesson(
          {
            title: "Теорія ймовірності (практика)",
            info: "каб. 211, корп. 15"
          },
          4
        ),
        new Lesson(
          {
            title: "ООП (практика)",
            info: "каб. 233, корп. 15"
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
            title: "Дискретні структури даних (практика)",
            info: "каб. 224, корп. 15"
          },
          1
        ),
        new Lesson(
          {
            title: "Фізичне виховання",
            info: "корп. 8"
          },
          2
        ),
        new Lesson(
          {
            title: "ТВПТ (практика)",
            info: "каб. 27, корп. 1"
          },
          3,
          {
            title: "ТВПР (практика)",
            info: "каб. 11, корп. 7"
          }
        ),
        new Lesson(
          {
            title: "Людинно-машинна взаємодія (практика)",
            info: "каб. 224, корп. 15"
          },
          4
        )
      )
    );
    this.lessons.set(
      Day.Wednesday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Бази даних (лекція)",
            info: "каб. 230, корп. 15"
          },
          1
        ),
        new Lesson(
          {
            title: "Теорія ймовірності (лекція)",
            info: "каб. 202 корп. 11"
          },
          2
        )
      )
    );
    this.lessons.set(
      Day.Thursday,
      new Array<Lesson>(
        new Lesson(
          {
            title: "Іноземна мова (практика)",
            info: "каб. 205, корп. 11"
          },
          2
        ),
        new Lesson(
          {
            title: "Людинно-машинна взаємодія (лекція)",
            info: "каб. 230 корп. 15"
          },
          3
        ),
        new Lesson(
          {
            title: "Бази даних (практика)",
            info: "каб. 213 корп. 15"
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
            title: "ТВПР (лекція)",
            info: "каб. 4, корп. 7"
          },
          1,
          {
            title: "ТВПТ (лекція)",
            info: "каб. 87, корп. 1"
          }
        ),
        new Lesson(
          {
            title: "ООП (лекція)",
            info: "каб. 231 корп. 15"
          },
          2
        )
      )
    );

    this.bells = new Array<string>(
      "8:30 - 9:50",
      "10:05 - 11:25",
      "11:40 - 13:00",
      "13:15 - 14:35",
      "14:50 - 16:10",
      "16:25 - 17:45",
      "18:00 - 19:20",
      "19:35 - 20:55"
    );
  }

  getLessonDataByWeek(lesson: Lesson): LessonType {
    if (lesson.secondLesson) {
      if (this.currentWeek === Week.Odd) {
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
