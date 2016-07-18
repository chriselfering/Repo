function House (size, bedrooms, stories, bathrooms) {
  this.size       = size;
  this.bedrooms   = bedrooms;
  this.stories    = stories;
  this.bathrooms  = bathrooms;
}

var wentworth = new House(1000, 3, 2, 2);

var hennepin = new House(1400, 5, 2, 4);

  console.log(wentworth);
  console.log(hennepin);
