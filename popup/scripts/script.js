const clickHandler = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {type: "inspector_on"});
  });
};

const inspector = document.getElementsByClassName('inspector')[0];
inspector.addEventListener('click', clickHandler);