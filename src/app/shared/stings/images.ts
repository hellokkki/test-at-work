const images = [
    'http://i.imgur.com/usJWgL7b.jpg',
    'http://i.imgur.com/XQbcjvUb.jpg',
    'http://i.imgur.com/j3CVSSMb.jpg',
    'http://i.imgur.com/BQNvBVib.jpg',
    'http://i.imgur.com/DZq0ORlb.jpg',
    'http://i.imgur.com/t73Tvlqb.jpg',
    'http://i.imgur.com/u3sBUMjb.jpg'
];
export const randomImage = () => images[Math.floor(Math.random() * images.length)];