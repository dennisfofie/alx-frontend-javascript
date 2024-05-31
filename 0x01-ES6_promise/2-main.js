import handleResponseFromAPI from './2-then';

const promise = Promise.reject(Error('error'));
handleResponseFromAPI(promise);
