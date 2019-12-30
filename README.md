## Description

In this assignment, I created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). I followed the MVC design pattern; I used Node and MySQL to query and route data in the app . In addition, I used Handlebars to generate your HTML.

## Technology Used 

1. HTML5
2. CSS3
3. FlexBox
4. Bootstrap
5. Handlebars.js
6. Node.js
7. MySQL
8. Slack
9. JQuery


# Application in Action
![working-app-giphy](public/assets/img/eat-da-burger.gif)

### Code Snippet

The code below uses the handlebars templating engine to conditionaly render list items 
to our index file. Depending on their condition in the database different classes and text is applied to the list items.

```HTML
<li class="indi-burger text-center">
	{{burger_name}}
	<div>
	<button  data-id="{{id}}" data-eaten="{{eaten}}" {{#if devoured}} class="statusOfBurger btn devoured" data-devouredState="{{devoured}}" disabled{{else}}
	class="statusOfBurger btn not-devoured"  
	{{/if}}>
		{{#if devoured}}Eaten{{else}}Devour It!{{/if}}
	</button>

	<button class="delete-burger btn" data-id="{{this.id}}">DELETE BURGER</button>
	</div>

</li>
```
 The code below is part of the orm.js file. It's responsible for updating our value in 
 our MySQL database and then provides a call back so our burger model can access the data. 

```javaScript
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
```