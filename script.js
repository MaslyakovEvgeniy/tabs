"use strict";

window.addEventListener("DOMContentLoaded", () => {

 const tabs = document.querySelectorAll('.tab-item'),
       tabContent = document.querySelectorAll('.tab-content'),
       tabsParent = document.querySelector('.tabs-parants');

  function hiheTabContent() {
    tabContent.forEach((item) => {
       item.classList.add('tab-content-hide');
       item.classList.remove('tab-content-show'); 
    });

   tabs.forEach((item) => {
    item.classList.remove('tab-item-active');
   });
  }

  function showTabContent(i = 0) {
    tabs[i].classList.add('tab-item-active');
    tabContent[i].classList.add('tab-content-show');
    tabContent[i].classList.remove('tab-content-hide');
  }

  hiheTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tab-item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hiheTabContent();
          showTabContent(i);
        }
      });
    }
  });
});
