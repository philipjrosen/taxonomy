var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = "yellow";
  this.job = "Keep on growing";
};
//want Bee.prototype to delegate to Grub.prototype
Bee.prototype = Object.create(Grub.prototype);
//add back the overwritten constructor property
//and make sure it points to the Bee constructor
Bee.prototype.constructor = Bee;
