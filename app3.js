//Part 3 - Object Create
const phoneProtos = {
  getalldetails: function() {
    return `${this.name} was released by
    ${this.company} in ${this.year}`;
  },
  getYears: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.name} is ${years} years old`;
  }
}

// Creating object
// const phone1 = Object.create(phoneProtos);
// phone1.name = 'Galaxy S2';
// phone1.company = 'Samsung';
// phone1.year = '2014';

const phone1 = Object.create(phoneProtos, {
  name : { value: 'Nokia Lumia' },
  company : { value: 'Nokia' },
  year : { value: '2013' }
});

console.log(phone1);
