import { HashRouter } from 'react-router-dom';

export default function request(method, url, body) {
  method = method.toUpperCase();
  if (method === 'GET') {
    body = undefined;
  } else {
    body = body && JSON.stringify(body);
  }

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Token': sessionStorage.getItem('access_token') || '',
    },
    body,
  }).then((res) => {
    if (res.status === 401) {
      HashRouter.push('/login');
      return Promise.reject('Unauthorized.');
    } else {
      const token = res.headers.get('access-token');
      if (token) {
        sessionStorage.setItem('access_token', token);
      }
      return res.json();
    }
  });
}

// GET
export const get = (url) => request('GET', url);
// POST
export const post = (url, body) => request('POST', url, body);
// PUT
export const put = (url, body) => request('PUT', url, body);
// DELETE
export const del = (url, body) => request('DELETE', url, body);
