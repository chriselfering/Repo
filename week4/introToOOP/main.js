function House (size, bedrooms, stories, bathrooms, value) {
  this.size       = size;
  this.bedrooms   = bedrooms;
  this.stories    = stories;
  this.bathrooms  = bathrooms;
  this.value      = value;
}

var wentworth = new House(1000, 3, 2, 2, 340000);

var hennepin = new House(1400, 5, 2, 4, 500000);

  console.log(wentworth);
  console.log(hennepin);

House.prototype.depreciate = function(amt) {
  this.value -= amt;
  //   if(this.value <= 0) {
  //       return 'Demo time!'
  //   }
  //   else {
  //     return 'New Value: ' + this.value
  //   }
  // }

  return this.value <=0
    ? 'Demo Time!'
      : "New Value: " + this.value
