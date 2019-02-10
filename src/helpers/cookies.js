export function eraseCookie(name) {
  document.cookie = name + '=; Max-Age=-99999999;' + "; domain=." + window.location.hostname + ";";
}