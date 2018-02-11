// const style = document.createElement('style');

// style.innerHTML += styleMaker('.gstl_0', 'background-color', 'red');
// style.innerHTML += styleMaker('body', 'background-color', 'blue');

// document.head.appendChild(style);

chrome.runtime.onMessage.addListener((request, sender, sendResponse)=>{
  console.log(request);
});