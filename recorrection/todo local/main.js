(function(){
  
  var list = document.querySelector('#list'),
      form = document.querySelector('form'),
      item = document.querySelector('#item');
  
  form.addEventListener('submit',function(e){
    e.preventDefault();
    list.innerHTML += '<li>' + item.value + '</li>';
    store();
    item.value = "";
  },false)
  
  list.addEventListener('click',function(e){
    var t = e.target;
    if(t.classList.contains('checked')){
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  },false) //Один раз checked, два раза удаляет
  
  function store() {
    window.localStorage.myitems = list.innerHTML;
  }
  
  function getValues() {
    var storedValues = window.localStorage.myitems;
    if(!storedValues) {
      list.innerHTML = 
      '<template>'+
      '<li>Itmo homework</li>'+
      '<li>Eat food</li>'+
      '<li>Play Games</li>'+
      '<li>Sleep after university :)</li>'+
      '</template>';
    }
    else {
      list.innerHTML = storedValues;
    }
  }
  getValues();
})();

//As I understood is that the template tag hides content when the page loads, 
//so I wrapped the li tag with template tag, 
//basically if we check the local storage then you can find myItems key,
// it contains all the todos that you put in in the value section, although there are tags that will not go away because I hard coded them in this file
//and all of them are wrapped with the template tag