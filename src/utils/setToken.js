import Cookies from 'js-cookie';
import { TOKEN_KEY } from './constant';


export const setToken = (token) => {
    if (token) {
      Cookies.set(TOKEN_KEY, token, { expires: 7 }); // Set cookie to expire in 7 days
    } else {
      Cookies.remove(TOKEN_KEY);
    }
  };