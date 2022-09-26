document.addEventListener('DOMContentLoaded', function (){
      // инициализируем Inputmask в соответствии с документацией.
      // выбираем selector с помощью document.querySelector т.е. выбираем все input у которых type='tel'
      var selector = document.querySelector("input[type='tel']");
      //передаем в качестве параметра то, в каком виде мы хотим, что бы была маска +7 999-999-99-99.
      var im = new Inputmask("+7 (999) 999 99 99");
      // с помощью метода mask инициализируем плагин и натравливаем его на селекторы. селекторы это все input[type='tel']
      im.mask(selector);
      // а тут происходит валидация
      new JustValidate('.form', {
        rules: {
          name: {
            required: true,
            minLenght: 2,
            maxLength: 10
          },
          tel: {
            required: true,
            function: (name, value) => {
              const phone = selector.inputmask.unmaskedvalue()
              return Number(phone) && phone.length === 10
            }
          },
          mail: {
            required: true,
            email: true
          },
        },
        messages: {
          name: 'Как вас зовут?',
          tel: 'Укажите ваш телефон',
          mail: 'Укажите ваш e-mail'
        },
        colorWrong: '#ff5c00'
      });
})
