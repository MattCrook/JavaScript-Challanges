/*
  From the array of people below, filter out the people who are from Hawaii or Alaska so
  that we have a list of people who are in the contiguous 48 states.
*/

// Start with an empty array to hold people who don't live in Hawaii or Alaska
const contiguous = [];

/*
  Here's the array of objects that represent all of the people. Look at the structure
  of the objects, then scroll to the bottom and write your filtering code.
*/
const people = [{
    location: {
        street: 'B Street',
        state: 'New Hampshire',
        country: 'United States',
        city: 'New Douglas'
    },
    last_name: 'Schumm',
    first_name: 'Tom',
    contacts: {
        mobile: '(904) 730-4211',
        email: 'deep_shakira@hotmail.com'
    }
},
{
    location: {
        street: 'Pennsylvania Avenue',
        state: 'Hawaii',
        country: 'United States',
        city: 'Woodland'
    },
    last_name: 'Jacobson',
    first_name: 'Reyna',
    contacts: {
        mobile: '1-968-545-2264',
        email: 'type_leta@yahoo.com'
    }
},
{
    location: {
        street: 'Cottage Street',
        state: 'Connecticut',
        country: 'United States',
        city: 'Glaslyn'
    },
    last_name: 'Zemlak',
    first_name: 'Maxwell',
    contacts: {
        mobile: '1-407-135-6122',
        email: 'dorthy@hotmail.com'
    }
},
{
    location: {
        street: 'Orange Street',
        state: 'Alaska',
        country: 'United States',
        city: 'California Hot Springs'
    },
    last_name: 'Collier',
    first_name: 'Jamel',
    contacts: {
        mobile: '1-627-189-7757',
        email: 'a54@gmail.com'
    }
},
{
    location: {
        street: 'North Street',
        state: 'Oklahoma',
        country: 'United States',
        city: 'Saluda'
    },
    last_name: 'Predovic',
    first_name: 'Edna',
    contacts: {
        mobile: '(462) 966-9348',
        email: 'half_tremayne@outlook.com'
    }
},
{
    location: {
        street: 'Roosevelt Avenue',
        state: 'Maryland',
        country: 'United States',
        city: 'Eton'
    },
    last_name: 'Cassin',
    first_name: 'Ron',
    contacts: {
        mobile: '(365) 240-4844',
        email: 'song_nico@gmail.com'
    }
},
{
    location: {
        street: 'Elm Avenue',
        state: 'Ohio',
        country: 'United States',
        city: 'Ivanhoe'
    },
    last_name: 'Ferry',
    first_name: 'Kaelyn',
    contacts: {
        mobile: '625.073.3829',
        email: 'ewell@hotmail.com'
    }
},
{
    location: {
        street: 'Ashley Court',
        state: 'Alaska',
        country: 'United States',
        city: 'Naytahwaush'
    },
    last_name: 'Welch',
    first_name: 'Katelynn',
    contacts: {
        mobile: '710-399-1492',
        email: 'facilis0@outlook.com'
    }
},
{
    location: {
        street: 'Olive Street',
        state: 'Minnesota',
        country: 'United States',
        city: 'Saint Hedwig'
    },
    last_name: 'Jacobi',
    first_name: 'Bruce',
    contacts: {
        mobile: '1-988-230-6361',
        email: 'dear_mack@hotmail.com'
    }
},
{
    location: {
        street: 'Grove Street',
        state: 'Hawaii',
        country: 'United States',
        city: 'Elizabeth'
    },
    last_name: 'Ebert',
    first_name: 'Tiara',
    contacts: {
        mobile: '879.859.4911',
        email: 'iste16@yahoo.com'
    }
}
]

/*
  Time to fill the `contiguous` array - by using `push()` - if the person
  passes a complex condition. Remember to use && when more than one condition
  must be true in order for logic to run.
  
  In the for..of loop below, the `person` variable will represent each object
  as you iterate over the array.
*/
for(const person of people) {
const state = person.location.state;
if ((state !== "Hawaii") && (state !== "Alaska")) {
  contiguous.push(person);
  }
}

console.log(contiguous);
