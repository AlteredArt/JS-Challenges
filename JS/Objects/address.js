// make an address object with a street city and zipcode
let address = {
    street: '10800 McCombs st',
    city: 'El Paso',
    zipCode: 89214
  }
  
  function showAddress(address){
    for (let key in address)
    console.log(key, address[key])
  }
  showAddress(address)
  // factory function
  function createAddress(street, city, zipCode) {
    return {
      street,
      city,
      zipCode
    }
  }
  let address1 = createAddress('a', 'b', 'c')
  console.log(address1)
  // constructor function
  function MakeAddress(street, city, zipCode){
    this.street = street;
    this.cty = city;
    this.zipCode = zipCode;
  }
  let address3 = new MakeAddress('a', 'b', 'c')
  console.log(address3)
  // Object equality
  let address4 = new MakeAddress('a','b','c')
  
  function areEqual(address3, address4){
    return address3.street  === address4.street &&
    address3.city === address4.city &&
    address4.zipCode === address4.zipCode;
  }
  
  function areSame(address3, address4){
    return address3 === address4;
  }
  