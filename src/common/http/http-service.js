import $ from 'jquery';
import q from 'q';

/**
 * @name ajax
 * @description Send a jQuery Ajax request
 * @param {String} url The request url
 * @param {Object} opts The request options
 * @returns {Promise} A Q Promise
 */
function ajax(url, opts) {
  const options = opts || {};

  return q(
    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify(options.body),
      dataType: 'json',
      type: options.method,
      url

      // xhr: () => {
        // return onProgress(options.progress);
      // }
    })
  );
}

/**
 * @name get
 * @description Alias for Ajax with { method: GET }
 * @param {String} url The request url
 * @param {Object} opts The request options
 * @returns {Promise} A Q Promise
 */
function get(url, opts) {
  const options = opts || {};

  return q(
    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify(options.body),
      dataType: 'json',
      type: 'GET',
      url

      // xhr: () => {
        // return onProgress(options.progress);
      // }
    })
  );
}

/**
 * @name onProgress
 * @description Ajax onProgress event handler
 * @param {Function} callback The onProgress callback
 * @returns {Object} xhr The Ajax XHR object
 */
// function onProgress(callback) {
//   const xhr = $.ajaxSettings.xhr();
//
//   xhr
//     .addEventListener('progress', (evt) => {
//       if (evt.lengthComputable) {
//         if (callback) { callback(evt.loaded / evt.total); }
//
//         NProgress.configure({ showSpinner: false });
//         NProgress.set(evt.loaded / evt.total);
//       }
//     }, false);
//
//   return xhr;
// }

/**
 * @name post
 * @description Alias for Ajax with { method: POST }
 * @param {String} url The request url
 * @param {Object} opts The request options
 * @returns {Promise} A Q Promise
 */
function post(url, opts) {
  const options = opts || {};

  return q(
    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify(options.body),
      dataType: 'json',
      type: 'POST',
      url

      // xhr: () => {
      //   return onProgress(options.progress);
      // }
    })
  );
}

/**
 * @name put
 * @description Alias for Ajax with { method: PUT }
 * @param {String} url The request url
 * @param {Object} opts The request options
 * @returns {Promise} A Q Promise
 */
function put(url, opts) {
  const options = opts || {};

  return q(
    $.ajax({
      contentType: 'application/json',
      data: JSON.stringify(options.body),
      dataType: 'json',
      type: 'PUT',
      url

      // xhr: () => {
      //   return onProgress(options.progress);
      // }
    })
  );
}

export default {
  ajax,
  get,
  post,
  put
};
