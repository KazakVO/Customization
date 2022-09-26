document.addEventListener('DOMContentLoaded', function (){
  const element = document.querySelector('#selectCustom');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
  });
})
