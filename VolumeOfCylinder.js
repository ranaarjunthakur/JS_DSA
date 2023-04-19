//////////////////////get the volume of a Cylinder with four decimal places using object classes.///////////////////////////


function Cylinder(height,diameter) {
  this.height = height;
  this.diameter = diameter;
}

Cylinder.prototype.Volume = function () {
  var radius = this.diameter / 2;
  return this.height * Math.PI * radius * radius;
};

var cyl = new Cylinder(7, 4);
console.log('volume =', cyl.Volume().toFixed(4)); =>  volume = 87.9646
