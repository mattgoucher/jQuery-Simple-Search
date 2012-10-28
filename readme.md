jQuery Simple Search
======

A simple jQuery plugin for filtering through elements that match a specified search parameter.


Configuration
-------------

#### Markup
```html
    <input type="text" id="search-input">

    <ul id="awesome-list">
      <li class="item" data-search="pie pumpkin">Pumpkin Pie</li>
      <li class="item" data-search="pie cherry">Cherry Pie</li>
      <li class="item" data-search="cake cheese">Cheese Cake</li>
      <li class="item" data-search="donut maple">Maple Donut</li>
      [...]
    </ul>
```


#### Javascript
```javascript
  $(function(){

    $('#search-input').search({
      list:          $('#awesome-list'), // All of the items you wish to be searched
      disableSubmit: true                // Disable default action (submit) of parent form
    });

  });
```