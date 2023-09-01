import { createApp } from 'vue';
import App from './App.vue';
import Cookies from 'js-cookie';
import { Dropdown } from 'bootstrap'; // eslint-disable-line @typescript-eslint/no-unused-vars
import { Cookie } from './types';

// Locally we don't have /api/login.
if (window.location.pathname === '/api/login') {
  Cookies.remove(Cookie.RefreshToken);
  Cookies.remove(Cookie.AccesToken);
  window.location.replace('/');
  console.log(`Please set ${Cookie.AccesToken} manually.`);
}

// Get a new access token (only in production).
if (Cookies.get(Cookie.RefreshToken) && !Cookies.get(Cookie.AccesToken)) {
  localStorage.removeItem('athlete');
  window.location.replace(`/api/login?refresh=true&code=${Cookies.get('refresh_token')}`);
}

createApp(App).mount('#app');
