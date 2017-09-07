# Sandwhich Maker

* Create a sandwich order form that allows the user to select all the ingredients for a custom deli sandwich. Create a Sandwich module, then create the following as individual modules, using IIFE syntax, to augment Sandwich:

##### bread
##### meat
##### cheese
##### condiments
##### veggies

### Your project should have one HTML file that has:


* A section of options for each sandwich part
* The ability to select multiple, or zero, choices for each section (such as turkey and bacon, or "no meat")
* An empty DOM element into which the final sandwich order and its cost will be inserted
* The ingredient choices should be stored as JS objects that contain the ingredients as keys and their cost as the value. {"turkey": 0.90, "bacon": 1.50}

* Make sure the ingredient objects cannot be accessed by the other modules except through an accessor (getter) method.

* Each IIFE should expose, in its public interface, a method named add{ingredient} (e.g. addMeat or addVeggies) that accepts a single argument. That argument's value should be the ingredient selected by the user.

 * You should also create an additional JavaScript file that handles interacting with the form elements and determining which method should be called.

### Screenshot
![screen shot](https://github.com/Matthensley777/iife-sandwich/blob/master/images/Screen%20Shot%202017-09-07%20at%206.15.07%20PM.png)

### To Pull Down

###### Copy path from github
![Screenshot](https://github.com/Matthensley777/iife-sandwich/blob/master/images/Screen%20Shot%202017-09-07%20at%206.37.15%20PM.png)

###### Type git clone into terminal and paste

![screen shot](https://github.com/Matthensley777/iife-sandwich/blob/master/images/Screen%20Shot%202017-09-07%20at%206.38.04%20PM.png)