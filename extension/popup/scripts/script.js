const clickHandler = e => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {type: e.target.id});
    window.close();
  });
};

const inspector = document.getElementById('inspector');
inspector.addEventListener('click', clickHandler);

const clearConfig = document.getElementById('clear_config');
clearConfig.addEventListener('click', clickHandler);