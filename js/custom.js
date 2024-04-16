var options = {
  valueNames: [
    'name',
    'born',
    'city',
    { data: ['id'] },
    { attr: 'src', name: 'image' },
    { attr: 'href', name: 'link' },
    { attr: 'data-timestamp', name: 'timestamp' }
  ]
};
 
 var userList = new List('users', options);
 userList.add({ name: 'Jonas Arnklint',  born: '1985', city: 'New York',   image: 'img/darth.jpeg', link: 'https://twitter.com/arnklint',  id: 2, timestamp: '23456' });
 userList.add({ name: 'Martina Elm',     born: '1986', city: 'Boston',     image: 'img/rey.jpeg',   link: 'https://twitter.com/martinaelm',id: 3, timestamp: '34567' });
 userList.add({ name: 'Gustaf Lindqvist',born: '1983', city: 'Washington', image: 'img/boba.jpeg',  link: 'https://twitter.com/GLindqvist',id: 4, timestamp: '45678' });
 userList.add({ name: 'Leia',            born: '1954', city: 'Chicago',    image: 'img/leia.jpeg',  link: 'https://twitter.com/marulango', id: 5, timestamp: '56789' });

