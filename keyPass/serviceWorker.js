const filter = {
    url: [
      {
        urlMatches: 'https://*.*/*',
      },
    ],
  };

  function call(data) {
    alert("redirecting: " + data)
  }

  chrome.webRequest.onBeforeRequest.addListener(call(data), filter, redirectUrl)
