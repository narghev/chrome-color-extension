// add the listener, to listen to incoming msg-s from the extension popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  const {type} = request;

  switch (type){
  case 'inspector_on':
    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('click', elementFocusClickHandler);
    break;
  }
});