import { store } from '../store/store';
import {
  filterPoster,
  filterMovie,
  filterGame,
  filterSeries,
  filterEpisode,
  filterYear,
} from '../actions/FilterActions';

class Filter {
  constructor(holder) {
    this._holder = holder;
    this._domRef = this.init();
    this.render();
    this.setUpEvents();
    store.subscribe(this.render.bind(this));
  }

  init() {
    this._holder.insertAdjacentHTML(
      'beforeend',
      `<fieldset>
        <legend>&nbspFilter&nbsp</legend>
            <div class="year">
                <h3>Year</h3>
                <select>
                    <option value="- year -" class="-year-">- year -</option>
                    <option value="1950" class="1950">1920 - 1950</option>
                    <option value="1980" class="1980">1950 - 1980</option>
                    <option value="2000" class="2000">1980 - 2000</option>
                    <option value="2019" class="2019">2000 - 2019</option>
                </select>
            </div>
            <div class="type">
                <h3>Type</h3>
                <input type="checkbox" value="movie" class="movie"> movie<br>
                <input type="checkbox" value="game" class="game"> game<br>
                <input type="checkbox" value="series" class="series"> series<br>
                <input type="checkbox" value="episode" class="episode"> episode<br>
            </div>
            <div class="optionalFilters">
                <h3>Optional Filters</h3>
                <input type="checkbox" value="poster" class="poster"> Only with Poster<br>
            </div>
    </fieldset>`
    );
    return this._holder.querySelector('fieldset');
  }

  setUpEvents() {
    this._domRef
      .querySelector('.poster')
      .addEventListener('change', function() {
        if (this.checked) {
          store.dispatch(filterPoster(true));
        } else {
          store.dispatch(filterPoster(false));
        }
      });
    this._domRef.querySelector('.movie').addEventListener('change', function() {
      if (this.checked) {
        store.dispatch(filterMovie(true));
      } else {
        store.dispatch(filterMovie(false));
      }
    });
    this._domRef.querySelector('.game').addEventListener('change', function() {
      if (this.checked) {
        store.dispatch(filterGame(true));
      } else {
        store.dispatch(filterGame(false));
      }
    });
    this._domRef
      .querySelector('.series')
      .addEventListener('change', function() {
        if (this.checked) {
          store.dispatch(filterSeries(true));
        } else {
          store.dispatch(filterSeries(false));
        }
      });
    this._domRef
      .querySelector('.episode')
      .addEventListener('change', function() {
        if (this.checked) {
          store.dispatch(filterEpisode(true));
        } else {
          store.dispatch(filterEpisode(false));
        }
      });
    this._domRef
      .querySelector('select')
      .addEventListener('change', function(e) {
        store.dispatch(filterYear(e.target.value));
      });
  }

  render() {
    const { results, filters } = store.getState();
    if (filters.poster === true) {
      document.querySelector('.movieHolder').innerHTML = [...results]
        .filter(el => el.Poster !== 'N/A')
        .map(
          el => `
      <div class="movieCard">
        <img src="${el.Poster}">
        <h3>${el.Title}</h3>
      </div>`
        )
        .join('');
    }
    if (filters.movie === true) {
      document.querySelector('.movieHolder').innerHTML = [...results]
        .filter(el => el.Type === 'movie')
        .map(
          el => `
      <div class="movieCard">
        <img src="${el.Poster}">
        <h3>${el.Title}</h3>
      </div>`
        )
        .join('');
    }
    if (filters.game === true) {
      document.querySelector('.movieHolder').innerHTML = [...results]
        .filter(el => el.Type === 'game')
        .map(
          el => `
      <div class="movieCard">
        <img src="${el.Poster}">
        <h3>${el.Title}</h3>
      </div>`
        )
        .join('');
    }
    if (filters.series === true) {
      // document.querySelector('.movieHolder').innerHTML = '';
      document.querySelector('.movieHolder').innerHTML = [...results]
        .filter(el => el.Type === 'series')
        .map(
          el => `
      <div class="movieCard">
        <img src="${el.Poster}">
        <h3>${el.Title}</h3>
      </div>`
        )
        .join('');
    }
    if (filters.episode === true) {
      document.querySelector('.movieHolder').innerHTML = [...results]
        .filter(el => el.Type === 'episode')
        .map(
          el => `
      <div class="movieCard">
        <img src="${el.Poster}">
        <h3>${el.Title}</h3>
      </div>`
        )
        .join('');
    }
    if (filters.year > 0) {
      document.querySelector('.movieHolder').innerHTML = [...results]
        .filter(function(el) {
          return el.Year <= filters.year;
        })

        .map(
          el => `
      <div class="movieCard">
        <img src="${el.Poster}">
        <h3>${el.Title}</h3>
      </div>`
        )
        .join('');
    }
    if (document.querySelector('.movieHolder').innerHTML === '') {
      document.querySelector(
        '.movieHolder'
      ).innerHTML = `<h2>None of the results matched your search...</h2>`;
    }
  }
}

export default function filter(holder) {
  return new Filter(holder);
}
