{
  // function addNavBar() {
  //   const navBar = document.querySelector('.navbar');
  //   // create element to set items in DOM...........
  //   const element = document.createElement('div');
  //   element.classList.add("container");
  //   element.innerHTML = `<span class="menuCon">
  //     <div id="menu_icon"></div>
  //     <div id="menu_icon"></div>
  //     <div id="menu_icon"></div>
  //   </span>
  //   <span>
  //   <h1 id="name">Assesment</h1>
  //   </span>
  //   <nav>
  //     <ul>
  //       <li class="homeNav">Home</li>
  //       <li class="featureNav">Features</li>
  //       <li class="aboutNav">About</li>
  //       <li class="projectNav">Projects</li>
  //       <li class="docNav">Docs</li>
  //     </ul>
  //   </nav>`;
  //   // select the created element for events..........
  //   const homeNav = element.querySelector('.homeNav');
  //   const featureNav = element.querySelector('.featureNav');
  //   const aboutNav = element.querySelector('.aboutNav');
  //   const projectNav = element.querySelector('.projectNav');
  //   const docNav = element.querySelector('.docNav');
  //   // // add event listener to the created element..........
  //   // homeNav.addEventListener('click', currentPage);
  //   // featureNav.addEventListener('click', currentPage);
  //   // aboutNav.addEventListener('click', currentPage);
  //   // projectNav.addEventListener('click', currentPage);
  //   // docNav.addEventListener('click', currentPage);
  //   // append child to the element in DOM......
  //   navBar.appendChild(element);

  }
  

  const alert = document.querySelector('.alert');
  const addCart = document.querySelectorAll('.cart');
  addCart.forEach(e => {
    e.onclick = checkOrder;
  })

  //-check order global fariables
  let weekdays = new Date().getDay();
  let hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  weekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  todayIs = weekName[weekdays];

  //--changing image global variable
  let myImage = document.querySelector('img');

  // Image switcher code
  myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './images/4x6.jpg') {
      myImage.setAttribute('src', './images/Shaggy.jpg');
    } else {
      myImage.setAttribute('src', './images/4x6.jpg');
    }
  }
  // display alert function.......
  function displayAlert(text, action) {
    // display alert.......
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    // remove alert .......
    setTimeout(() => {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`)
    }, 1000);
  }
  //--check order function
  function checkOrder() {
    if (weekdays !== 0)
      if (weekdays === 6) {
        (hour >= 9 && minutes >= 0) || (hour <= 20 && minutes <= 30) ? displayAlert(`${todayIs}'s Order Added Successfully`, "success"): displayAlert(`Oops!.... Today is ${todayIs}, we take order from 9:00am to 8:30pm`, "danger");
      } else {
        (hour >= 7 && minutes >= 0) || (hour <= 20 && minutes <= 30) ? displayAlert(`${todayIs}'s Order Added Successfully`, "success"): displayAlert(`Oops!.... Today is ${todayIs}, we take order from 7:00am to 8:30pm`, "danger");
      }
    else {
      (hour >= 12 && minutes >= 30) || (hour <= 19 && minutes <= 30) ? displayAlert(`${todayIs}'s Order Added Successfully`, "success"): displayAlert(`Oops!.... Today is ${todayIs}, we take order from 12:30pm to 7:30pm`, "danger");
    }
  }
}
addNavBar()