import config from '../config/Config.js'

class Api {
  setToken = (token) => {
    localStorage.setItem("token", token);
  };

  getToken = () => localStorage.getItem("token");

  buildHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };

    let token = this.getToken();
    if (token) {
      headers['Authorization'] = 'Bearer ' + token;
    }
    return headers;
  }

  get = (path) => {
    return fetch(config.baseUrl + path, {
      method: 'GET',
      headers: this.buildHeaders()
    }).then(resp => {
      if (resp.status === 401) {
        window.location.href = '/pfm/unauthorized';
      } else {
        return resp.json();
      }
    });
  };

  post = (path, body) => {
    const input = config.baseUrl + path;
    return fetch(input, {
      method: 'POST',
      headers: this.buildHeaders(),
      body: JSON.stringify(body)
    }).then(resp => {
      if (resp.status === 401) {
        window.location.href = '/pfm/unauthorized';
      } else {
        return resp.json()
      }
    });
  };

  signout = () => {
    localStorage.clear();
    window.location.href = '/pfm/unauthorized';
  }
}

const api = new Api();
export default api;
