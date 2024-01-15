const GIGS = [
  {
    id: 'gig-01',
    title: 'Macaron',
    artist: 'Baher Khairy',
    desc: 'Sweet meringue-based rhythms with smooth and sweet injections of soul',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/baher-khairy-97645.jpg',
    price: 1000,
    soldOut: false
  },
  {
    id: 'gig-02',
    title: 'Stairs',
    artist: 'Brentr De Ranter',
    desc: 'Stairs to the highest peaks of music.',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/brent-de-ranter-426248.jpg',
    price: 2000,
    soldOut: false
  },
  {
    id: 'gig-03',
    title: 'Infusion',
    artist: 'Camille Couvez',
    desc: 'Introduction of new elements of music into the modern world',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/camille-couvez-424606.jpg',
    price: 3000,
    soldOut: false
  },
  {
    id: 'gig-04',
    title: 'Books',
    artist: 'Cesar-Viteri',
    desc: 'A book of music, exploring different music genres across the last decade',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/cesar-viteri-426877.jpg',
    seats: 40,
    price: 4000,
    soldOut: false
  },
  {
    id: 'gig-05',
    title: 'White',
    artist: 'Dan Schiumarini',
    desc: 'Vulnerability and humility exposed with Raps of Dan Schiumarini',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/dan-schiumarini-427769.jpg',
    price: 5000,
    soldOut: false
  },
  {
    id: 'gig-06',
    title: 'Hustin\'',
    artist: 'Frank Cordoba',
    desc: 'Story of Hip Hop hustle by Frank Cordoba',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/frank-cordoba-425264.jpg',
    price: 6000,
    soldOut: false
  },
  {
    id: 'gig-07',
    title: 'Pumping',
    artist: 'Jakob Owens',
    desc: 'Get energized and ready to rock with this fresh and bright work of Jakob Owens',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/jakob-owens-393298.jpg',
    price: 7000,
    soldOut: false
  },
  {
    id: 'gig-08',
    title: 'Lion',
    artist: 'Jakob Puff',
    desc: 'An album of wild and brave sounds explored by Jakob Puff',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/jakob-puff-425634.jpg',
    price: 8000,
    soldOut: false
  },
  {
    id: 'gig-09',
    title: 'ampersand',
    artist: 'Kirstyn Paynter',
    desc: 'Connect music and words with ampersand and enjoy finding out what happens next',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/kirstyn-paynter-424217.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-10',
    title: 'Taxi',
    artist: 'Peter Kasprzyk',
    desc: 'Take a Taxi ride with Peter to explore different beats of the city',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/peter-kasprzyk-111462.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-11',
    title: 'Plaza De La Juderia',
    artist: 'Quino Al',
    desc: 'Spanish rhythms from Plaza De La Juderia',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/quino-al-427620.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-12',
    title: 'Girl',
    artist: 'Shine Tang',
    desc: 'Shine Tang offers a grand exploration of classical music',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/shine-tang-425878.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-13',
    title: 'Sand',
    artist: 'Peter Kasprzyk',
    desc: 'An amazing beach',
    img: 'https://fastly.picsum.photos/id/215/200/200.jpg?hmac=3tSx9-cokJ9mRzxZ5jFOb7f6SKjA29i-Nh3-iW2O-MU',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-14',
    title: 'Phone',
    artist: 'Quino Al',
    desc: 'A white phone on the table',
    img: 'https://fastly.picsum.photos/id/160/200/200.jpg?hmac=0fql9ogVWlCf8ddvQCF-vGiiso9i0m0A68TP5De28tI',
    price: 29000,
    soldOut: false
  },
  {
    id: 'gig-15',
    title: 'Sky',
    artist: 'John Doe',
    desc: 'A beutiful sky at night',
    img: 'https://fastly.picsum.photos/id/723/200/200.jpg?hmac=_sO25hgEAx99R1W5nOFsCmrSDTpHGmXIEXDywKpjfXE',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-16',
    title: 'Computer',
    artist: 'Peter Kasprzyk',
    desc: 'Turn on your computer to explore the technologies',
    img: 'https://fastly.picsum.photos/id/48/200/200.jpg?hmac=3FKJwSlm1FM1GD916vZX2Z3HUjHsUXvQM3rYWYXsQvc',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-17',
    title: 'Building',
    artist: 'Quino Al',
    desc: 'A very tall building in New York City',
    img: 'https://fastly.picsum.photos/id/760/200/200.jpg?hmac=MlH81fLiPAKVmDN5qADWkd_299jLg9vp9uVnRn3uxp8',
    price: 10000,
    soldOut: false
  },
  {
    id: 'gig-18',
    title: 'Girl',
    artist: 'Shine Tang',
    desc: 'Shine Tang offers a grand exploration of classical music',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/shine-tang-425878.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-19',
    title: 'Taxi',
    artist: 'Peter Kasprzyk',
    desc: 'Take a Taxi ride with Peter to explore different beats of the city',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/peter-kasprzyk-111462.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-20',
    title: 'Plaza De La Juderia',
    artist: 'Quino Al',
    desc: 'Spanish rhythms from Plaza De La Juderia',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/quino-al-427620.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-21',
    title: 'Girl',
    artist: 'Shine Tang',
    desc: 'Shine Tang offers a grand exploration of classical music',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/shine-tang-425878.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-22',
    title: 'Taxi',
    artist: 'Peter Kasprzyk',
    desc: 'Take a Taxi ride with Peter to explore different beats of the city',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/peter-kasprzyk-111462.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-23',
    title: 'Plaza De La Juderia',
    artist: 'Quino Al',
    desc: 'Spanish rhythms from Plaza De La Juderia',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552696/giggin/quino-al-427620.jpg',
    price: 9000,
    soldOut: false
  },
  {
    id: 'gig-24',
    title: 'Stones',
    artist: 'Shine Tang',
    desc: 'Stones Stones Stones Stones',
    img: 'https://fastly.picsum.photos/id/329/200/200.jpg?hmac=NZ-fw9GIfEqOUhzJ_7zTPPt0W92g2xdXKSmqANqkUyQ',
    price: 5000,
    soldOut: false
  },
  {
    id: 'gig-25',
    title: 'Trees',
    artist: 'Peter Kasprzyk',
    desc: 'Enjoy the trees in the forest',
    img: 'https://fastly.picsum.photos/id/1043/200/200.jpg?hmac=i7xbST4bM6KMg5XsUaVYvDgwvsZ3VskoXKRqGf1BjcU',
    price: 700,
    soldOut: false
  },
  {
    id: 'gig-06',
    title: 'Hustin\'',
    artist: 'Frank Cordoba',
    desc: 'Story of Hip Hop hustle by Frank Cordoba',
    img: 'https://res.cloudinary.com/schae/image/upload/f_auto,q_auto/v1519552695/giggin/frank-cordoba-425264.jpg',
    price: 6000,
    soldOut: false
  },
];

const GIGS_PER_PAGE = 10;

export {
  GIGS,
  GIGS_PER_PAGE
};