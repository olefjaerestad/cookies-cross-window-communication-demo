document.getElementById('refreshCookieWithFetch').addEventListener('click', () => {
  fetch('/api/refresh-cookie', { credentials: 'same-origin' })
    .then(async (response) => console.log('Refreshed cookie with fetch request'));
});

document.getElementById('refreshCookieInNewTab').addEventListener('click', () => {
  window.open('/', '_blank');
});

document.getElementById('refreshCookieWithIframe').addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.src = '/';
  document.body.appendChild(iframe);
});

document.getElementById('checkCookieValidity').addEventListener('click', () => {
  fetch('/api/check-cookie', { credentials: 'same-origin' })
    .then(async (response) => {
      const result = await response.text();
      console.log(result);
      document.getElementById('cookieValidity').innerText = result;
    });
});
