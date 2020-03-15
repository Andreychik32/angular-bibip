import { Injectable } from "@angular/core";
import { Lesson, Day } from "./custom-types";

@Injectable({
  providedIn: "root"
})
export class ScheduleService {
  private lessons: Map<Day, { [key: number]: Lesson }>;
  private bells: Array<string>;

  constructor() {
    this.lessons = new Map<Day, { [key: number]: Lesson }>();
    this.lessons.set(Day.Monday, {
      2: {
        title: "Дискретні структури даних",
        info: "каб. 230, корп. 15"
      },
      3: {
        title: "Теорія ймовірності",
        info: "каб. 211, корп. 15"
      },
      4: {
        title: "ООП",
        info: "каб. 233, корп. 15"
      }
    });
    this.lessons.set(Day.Tuesday, {
      0: {
        title: "Дискретні страктури даних",
        info: "каб. 224, корп. 15"
      },
      1: {
        title: "Фізичне виховання",
        info: "корп. 8"
      },
      2: {
        title: "ТВПТ ТВПТР",
        info: "каб. 27 / 11, корп. 1 / 7"
      },
      3: {
        title: "Людинно-машинна взаємодія",
        info: "каб. 224, корп. 15"
      }
    });
    this.lessons.set(Day.Wednesday, {
      0: {
        title: "Бази даних",
        info: "каб. 231, корп. 15"
      },
      1: {
        title: "Теорія ймовірності",
        info: "каб. 202 корп. 11"
      }
    });
    this.lessons.set(Day.Thursday, {
      1: {
        title: "Англійська мова",
        info: "каб. 205, корп. 11"
      },
      2: {
        title: "Людинно-машинна взаємодія",
        info: "каб. 231 корп. 15"
      },
      3: {
        title: "Бази даних (практика)",
        info: "каб. 213 корп. 15"
      }
    });
    this.lessons.set(Day.Friday, {
      0: {
        title: "ТВПТ / ТВПТР",
        info: "каб. 4 / 87, корп. 7 / 1"
      },
      1: {
        title: "ООП",
        info: "каб. 231 корп. 15"
      }
    });

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

  get getLessons() {
    return this.lessons;
  }

  get getBells() {
    return this.bells;
  }
}
