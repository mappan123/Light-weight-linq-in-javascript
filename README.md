# Light-weight-linq-in-javascript
Light weight linq in javascript
Plunker link: http://plnkr.co/edit/oBZnD5ZBJinyYGgiwghV?p=preview

#Features
Lightweight/thin and simple to use. 

Provides few frequently used functionalities in any program

Enables quries on objects for javascript arrays. 

For loops can be avoided using this library for filtering, transforming, check exists etc.

It has no dependency with any other javascript library. It is independent and can be included in any of your javascript programs

#Usage

 var cars = [
        {'name': 'Camry', 'mpg': 20, 'color': 'red'  },
        {'name': 'Accord', 'mpg': 30, 'color': 'blue'  },
        {'name': 'Q7', 'mpg': 16, 'color': 'red'  },
        {'name': 'Passat', 'mpg': 15, 'color': 'black'  },
        {'name': 'CRV', 'mpg': 17, 'color': 'red'  },
        {'name': 'Mini', 'mpg': 24, 'color': 'red'  },
        {'name': 'Mustang', 'mpg': 16, 'color': 'white'  },
        {'name': 'Camaro', 'mpg': 15, 'color': 'red'  },
        {'name': 'Avalon', 'mpg': 24, 'color': 'red'  }
      ];

ToEnumerable(cars).Where(function(x){
    return x.mpg >= 20;}).ToList();

Output

[{"name":"Camry","mpg":20,"color":"red"},{"name":"Accord","mpg":30,"color":"blue"},{"name":"Mini","mpg":24,"color":"red"},{"name":"Avalon","mpg":24,"color":"red"}]

Complete functionalities list can be found in sample.html and also in plunker http://plnkr.co/edit/oBZnD5ZBJinyYGgiwghV?p=preview

