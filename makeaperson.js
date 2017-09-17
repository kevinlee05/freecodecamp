var Person = function(firstAndLast) {
  var firstname = firstAndLast.split(" ")[0];
  var lastname = firstAndLast.split(" ")[1];
  
  this.getFirstName = function(){
    return firstname;
  };
  
  this.getLastName = function(){
    return lastname;
  };
  
  this.getFullName = function(){
    return firstname + " " + lastname;
  };
  
  this.setFirstName = function(first){
    firstname = first;
  };
  
  this.setLastName = function(last){
    lastname = last;
  };
  
  this.setFullName = function(firstAndLast){
    firstname = firstAndLast.split(" ")[0];
    lastname = firstAndLast.split(" ")[1];
  };
  
};

var bob = new Person('Bob Ross');
Object.keys(bob).length
