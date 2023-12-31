let tab;

document.getElementById('openTab').addEventListener('click', () => {
  tab = window.open('/', '_blank');
});

document.getElementById('postMessageToTab').addEventListener('click', () => {
  tab?.postMessage('close');
});

window.addEventListener('message', (e) => {
  // Important! https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage#security_concerns
  if (e.origin !== 'http://localhost:3000') return;
  
  const text = e.data;
  const listItem = document.createElement('li');
  listItem.innerText = text;
  document.getElementById('messages').appendChild(listItem);

  const sender = e.source;

  if (text === 'close') {
    // Tab 2
    window.close();
    sender.postMessage('reauthentication_success');
  }
  if (text === 'reauthentication_success') {
    // Tab 1
    console.log('Reauthenticated successfully');
  }
});
