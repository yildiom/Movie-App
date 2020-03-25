import '../css/style.scss';

import form from './components/SearchForm';
import movies from './components/Movies';
import filter from './components/Filter';

form(document.querySelector('.formHolder'));
movies(document.querySelector('.main'));
filter(document.querySelector('.filterHolder'));
