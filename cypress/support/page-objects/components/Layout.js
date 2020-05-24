import NavBar from "./NavBar";
import Footer from "./Footer";

export default class Layout {
  constructor() {
    this._navBar = new NavBar();
    this._footer = new Footer();
  }

  get navBar() {
    return this._navBar;
  }

  get footer() {
    return this._footer;
  }
}
