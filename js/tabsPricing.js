// Дошкольники классы
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pricing-btn-choice__item').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.price-content').forEach(function(tabContent) {
                tabContent.classList.remove('price-content-active')
            })
            
            document.querySelector(`[data-target="${path}"]`).classList.add('price-content-active')

        })
    })

    let parent = document.querySelector('.pricing-btn-choice');
    let menuItem = parent.querySelectorAll('.pricing-btn-choice__item');
    
    parent.addEventListener('click', (event) => {
      // Отлавливаем элемент в родители на который мы нажали
      let target = event.target;
      
      // Проверяем тот ли это элемент который нам нужен
      if(target.classList.contains('pricing-btn-choice__item')) {
        for(let i = 0; i < menuItem.length; i++) {
          // Убираем у других
          menuItem[i].classList.remove('pricing-btn-choice__item-active');
        }
        // Добавляем тому на который нажали
        target.classList.add('pricing-btn-choice__item-active');
      }
      
    });
    
})

// Школьники 1-4 классы
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.pricing-btn-choice__item-2').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.price-content-2').forEach(function(tabContent) {
                tabContent.classList.remove('price-content-active')
            })
            
            document.querySelector(`[data-target="${path}"]`).classList.add('price-content-active')

        })
    })

    let parent = document.querySelector('.pricing-btn-choice-2');
    let menuItem = parent.querySelectorAll('.pricing-btn-choice__item-2');
    
    parent.addEventListener('click', (event) => {
      // Отлавливаем элемент в родители на который мы нажали
      let target = event.target;
      
      // Проверяем тот ли это элемент который нам нужен
      if(target.classList.contains('pricing-btn-choice__item-2')) {
        for(let i = 0; i < menuItem.length; i++) {
          // Убираем у других
          menuItem[i].classList.remove('pricing-btn-choice__item-active');
        }
        // Добавляем тому на который нажали
        target.classList.add('pricing-btn-choice__item-active');
      }
      
    });
    
})

// Школьники 5-7 классы
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pricing-btn-choice__item-3').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.price-content-3').forEach(function(tabContent) {
              tabContent.classList.remove('price-content-active')
          })
          
          document.querySelector(`[data-target="${path}"]`).classList.add('price-content-active')

      })
  })

  let parent = document.querySelector('.pricing-btn-choice-3');
  let menuItem = parent.querySelectorAll('.pricing-btn-choice__item-3');
  
  parent.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let target = event.target;
    
    // Проверяем тот ли это элемент который нам нужен
    if(target.classList.contains('pricing-btn-choice__item-3')) {
      for(let i = 0; i < menuItem.length; i++) {
        // Убираем у других
        menuItem[i].classList.remove('pricing-btn-choice__item-active');
      }
      // Добавляем тому на который нажали
      target.classList.add('pricing-btn-choice__item-active');
    }
    
  });
  
})

// Школьники 8-9 классы
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pricing-btn-choice__item-4').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.price-content-4').forEach(function(tabContent) {
              tabContent.classList.remove('price-content-active')
          })
          
          document.querySelector(`[data-target="${path}"]`).classList.add('price-content-active')

      })
  })

  let parent = document.querySelector('.pricing-btn-choice-4');
  let menuItem = parent.querySelectorAll('.pricing-btn-choice__item-4');
  
  parent.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let target = event.target;
    
    // Проверяем тот ли это элемент который нам нужен
    if(target.classList.contains('pricing-btn-choice__item-4')) {
      for(let i = 0; i < menuItem.length; i++) {
        // Убираем у других
        menuItem[i].classList.remove('pricing-btn-choice__item-active');
      }
      // Добавляем тому на который нажали
      target.classList.add('pricing-btn-choice__item-active');
    }
    
  });
  
})

// Школьники подготовка к ОГЭ
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pricing-btn-choice__item-5').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.price-content-5').forEach(function(tabContent) {
              tabContent.classList.remove('price-content-active')
          })
          
          document.querySelector(`[data-target="${path}"]`).classList.add('price-content-active')

      })
  })

  let parent = document.querySelector('.pricing-btn-choice-5');
  let menuItem = parent.querySelectorAll('.pricing-btn-choice__item-5');
  
  parent.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let target = event.target;
    
    // Проверяем тот ли это элемент который нам нужен
    if(target.classList.contains('pricing-btn-choice__item-5')) {
      for(let i = 0; i < menuItem.length; i++) {
        // Убираем у других
        menuItem[i].classList.remove('pricing-btn-choice__item-active');
      }
      // Добавляем тому на который нажали
      target.classList.add('pricing-btn-choice__item-active');
    }
    
  });
  
})

// Школьники подготовка к ЕГЭ
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pricing-btn-choice__item-6').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.price-content-6').forEach(function(tabContent) {
              tabContent.classList.remove('price-content-active')
          })
          
          document.querySelector(`[data-target="${path}"]`).classList.add('price-content-active')

      })
  })

  let parent = document.querySelector('.pricing-btn-choice-6');
  let menuItem = parent.querySelectorAll('.pricing-btn-choice__item-6');
  
  parent.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let target = event.target;
    
    // Проверяем тот ли это элемент который нам нужен
    if(target.classList.contains('pricing-btn-choice__item-6')) {
      for(let i = 0; i < menuItem.length; i++) {
        // Убираем у других
        menuItem[i].classList.remove('pricing-btn-choice__item-active');
      }
      // Добавляем тому на который нажали
      target.classList.add('pricing-btn-choice__item-active');
    }
    
  });
  
})

// Взрослые
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.pricing-btn-choice__item-7').forEach(function(tabsBtn) {
      tabsBtn.addEventListener('click', function(event) {
          const path = event.currentTarget.dataset.path

          document.querySelectorAll('.price-content-7').forEach(function(tabContent) {
              tabContent.classList.remove('price-content-active')
          })
          
          document.querySelector(`[data-target="${path}"]`).classList.add('price-content-active')

      })
  })

  let parent = document.querySelector('.pricing-btn-choice-7');
  let menuItem = parent.querySelectorAll('.pricing-btn-choice__item-7');
  
  parent.addEventListener('click', (event) => {
    // Отлавливаем элемент в родители на который мы нажали
    let target = event.target;
    
    // Проверяем тот ли это элемент который нам нужен
    if(target.classList.contains('pricing-btn-choice__item-7')) {
      for(let i = 0; i < menuItem.length; i++) {
        // Убираем у других
        menuItem[i].classList.remove('pricing-btn-choice__item-active');
      }
      // Добавляем тому на который нажали
      target.classList.add('pricing-btn-choice__item-active');
    }
    
  });
  
})



