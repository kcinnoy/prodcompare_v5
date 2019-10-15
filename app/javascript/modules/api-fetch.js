require('es6-promise').polyfill()

import fetch from 'isomorphic-fetch'

export default function apiFetch() {
  return fetch()
    .then(response => response.json())
}