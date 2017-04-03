/*---------------------------------------------------------------------------------------------------------
Linq for javascript
Enables quries on objects for javascript arrays. 
For loops can be avoided using this library for filtering, transforming, check exists etc.
It has no dependency with any other javascript library. 
It is independent and can be included in any  of your javascript programs
Complete sample is available in plunker. http://plnkr.co/edit/oBZnD5ZBJinyYGgiwghV?p=preview
-------------------------------------------------------------------------------------------------------------
*/

function Enumerable(data) {

    this.enumerable = data;

    //Transforms the items using the transformation function
    this.Select = function (transformFunction) {
        if (!validate(this.enumerable))
            return null;

        var result = [];

        for (var i = 0; i < this.enumerable.length; i++) {
            result.push(transformFunction(this.enumerable[i]));
        }

        return new Enumerable(result);
    }

    //Filters the items using the predicate function
    this.Where = function(predicate) {

        if (!validate(this.enumerable))
            return null;

        var result = [];

        for (var i = 0; i < this.enumerable.length; i++) {
            if (predicate(this.enumerable[i])) {
                result.push(this.enumerable[i]);
            }
        }

        return new Enumerable(result);
    }

   //Returns true if atleast one of the item satiesfies the predicate
    this.Any = function(predicate) {

        if (!validate(this.enumerable))
            return null;

        if (arguments.length == 0) {
            return this.enumerable.length > 0;
        }

        var result = [];

        for (var i = 0; i < this.enumerable.length; i++) {
            if (predicate(this.enumerable[i])) {
                return true;
            }
        }

        return false;
    }
    //Returns true if atleast all the items satiesfies the predicate
    this.All = function(predicate) {

        if (!validate(this.enumerable))
            return null;

        var result = [];

        for (var i = 0; i < this.enumerable.length; i++) {
            if (!predicate(this.enumerable[i])) {
                return false;
            }
        }

        return true;
    }

    this.ForEach = function(action) {
        for (var i = 0; i < this.enumerable.length; i++) {
            action(this.enumerable[i]);
        }
    }

    //Returns the first element that satisfies the predicate
    this.First = function (predicate) {
        if (!validate(this.enumerable))
            return null;

        if (arguments.length == 0) {
            return this.enumerable[0];
        }

        for (var i = 0; i < this.enumerable.length; i++) {
            if (predicate(this.enumerable[i])) {
                return this.enumerable[i];
            }
        }

        return null;
    }

    //Returns the array
    this.ToList = function() { return this.enumerable; }
}


//Converts the array to enumerable to enable object queries
function ToEnumerable(data) {
    return new Enumerable(data);
}

function validate(enumerable) {

    if (enumerable == null) {
        return false;
    }

    if (!Array.isArray(enumerable))
        throw "array is required";

    return true;
}
