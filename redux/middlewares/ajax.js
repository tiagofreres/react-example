import R from 'ramda'

/**
 * Simplest ajax method
 * @param  {string} url
 * @param  {Function} callback
 * @param  {Object[]} headers
 * @param  {String} headers[].name
 * @param  {String} headers[].value
 * @return {XMLHttpRequest}
 */
export default function(url, callback, headers = []){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = executeCallback;
  xhr.timeout = 3000;
	xhr.open('GET', url, true);
  headers.map((header) => (xhr.setRequestHeader(header.name, header.value)));
	xhr.send();
	return xhr;

	function executeCallback(){
		if (xhr.readyState === XMLHttpRequest.DONE){
			callback(xhr);
		}
		else {
			return;
		}
	}
};

// callback :: XMLHttpRequest a => (a -> a) -> a -> (a -> a)
const prepareCallback = (f, xhr) => (f.bind(null, xhr));

// configure :: Object a, XMLHttpRequest b => a -> b -> b
const configure = (params, xhr) => (
  params.keys().reduce((_xhr, param) => (
    R.set(R.lensProp(param), params[param], _xhr);
  ), xhr);
);

const setHeader = (header, xhr) => (
    xhr.setRequestHeader(header.name, header.value);
)

const setHeaders = (headers, xhr) => (
  headers.reduce((_xhr, header) => (
    R.compose(R.identity,
      _xhr.setRequestHeader.bind(R.__, header.name, header.value))(_xhr),
  xhr);
);
