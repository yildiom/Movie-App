import { store } from '../store/store';
import { getMovies } from '../actions/MovieActions';
import { searchMovies } from '../actions/SearchFormActions';

class Form {
  constructor(holder) {
    this._holder = holder;
    this._domRef = this.init();
    this.setUpEvents();
  }

  init() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `<form>
            <input type="text" class="input" placeholder="Search a movie"/>
            <input type="submit" class="go"value="Go"/>
        </form>
            `
    );
    return this._holder.querySelector('form');
  }

  setUpEvents() {
    this._domRef.addEventListener('submit', e => {
      e.preventDefault();
      store.dispatch(getMovies(this._domRef.querySelector('.input').value));
      store.dispatch(searchMovies(this._domRef.querySelector('.input').value));
      console.log(store.getState());
    });
  }
}

export default function form(holder) {
  return new Form(holder);
}
