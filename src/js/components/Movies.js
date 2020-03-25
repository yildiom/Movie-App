import { store } from '../store/store';

class Movies {
  constructor(holder) {
    this._holder = holder;
    this._domRef = this.init();
    this.render();
    store.subscribe(this.render.bind(this));
  }

  init() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `<section class="movieHolder"></section>`
    );
    return this._holder.querySelector('.movieHolder');
  }

  render() {
    const { results } = store.getState();
    this._domRef.innerHTML = results
      .map(
        el => `
    <div class="movieCard">
      <img src="${el.Poster}">
      <h3>${el.Title}</h3>
    </div>`
      )
      .join('');
  }
}

export default function movies(holder) {
  return new Movies(holder);
}
