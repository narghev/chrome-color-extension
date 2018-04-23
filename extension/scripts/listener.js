// add the listener, to listen to incoming msg-s from the extension popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  const {type} = request;

  switch (type){
  case 'inspector':
    document.body.oncontextmenu = () => (false);
    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('mousedown', elementFocusClickHandler);
    document.addEventListener('keydown', escapeKeyPressHandler);
    break;
  case 'clear_config':
    clearConfig();
    break;
  }
});