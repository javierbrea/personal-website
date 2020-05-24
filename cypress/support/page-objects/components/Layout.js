import NavBar from "./NavBar";

export default class Layout {
  constructor() {
    this._navBar = new NavBar();
  }

  get navBar() {
    return this._navBar;
  }
}
