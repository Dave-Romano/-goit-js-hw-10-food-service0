import elements from './templates/elements.hbs';
import menuData from './menu.json';
import './sass/main.scss';
import { compile } from 'handlebars';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// CONSTs
const el = document.querySelector('.js-menu');
const themeSwitch = document.querySelector('#theme-switch-toggle');
const body = document.body.classList;

// CHECK LOCALSTORAGE

if (localStorage.theme === Theme.DARK) {
  body.replace(Theme.LIGHT, Theme.DARK);
  themeSwitch.checked = true;
} else if (localStorage.theme === Theme.LIGHT) {
  body.replace(Theme.DARK, Theme.LIGHT);
  themeSwitch.checked = false;
}

// CHANGE THEME
const changeTheme = () => {
  if (themeSwitch.checked) {
    body.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
};
changeTheme();

themeSwitch.addEventListener('change', changeTheme);

// RENDER LAYOUT

el.insertAdjacentHTML('afterbegin', elements(menuData));
