/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("index.html", {
    bounds: {
      width: 457,
      height: 300
    },
    minWidth: 457,
    minHeight: 300
  });
});
