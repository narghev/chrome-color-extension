const clickHandler = () => {
  console.log('launch the inspector');
};

const inspector = document.getElementsByClassName('inspector')[0];
inspector.addEventListener('click', clickHandler);