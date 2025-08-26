import { makeAutoObservable } from "mobx";

class AppStore {
  initialTitle: string;
  title: string;
  clickCount: number;

  constructor() {
    this.initialTitle = import.meta.env.VITE_APP_TITLE || "🚀 React + TS + MobX + SASS (БЭМ) Boilerplate";
    this.title = this.initialTitle;
    this.clickCount = 0;
    makeAutoObservable(this);
  }

  setTitle(newTitle: string) {
    this.title = newTitle;
  }

  increment() {
    this.clickCount += 1;
    this.title = `${this.initialTitle} (${this.clickCount})`;
  }

  reset() {
    this.title = this.initialTitle;
    this.clickCount = 0;
  }
}

export const appStore = new AppStore();
