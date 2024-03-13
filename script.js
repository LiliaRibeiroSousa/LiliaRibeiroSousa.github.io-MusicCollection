
const collection = [
    {
        name: "We've been loving in silence",
        artist: 'MARO',
        releaseYear: 2022,
        album: 'can you see me?',
        picture:"https://t2.genius.com/unsafe/375x375/https%3A%2F%2Fimages.genius.com%2F1e59ceb875fb46afe10ce9561beb051c.999x999x1.png",
        link:"https://open.spotify.com/track/1PVry2CqklxStqzM0kl3Kv"

    },

    {
        name: 'Come Down',
        artist: 'Anderson.Paak',
        releaseYear: 2016,
        album: 'Malibu',
        picture: "https://upload.wikimedia.org/wikipedia/en/0/01/Anderson-Park-Malibu-Cover-Billboard-650x650.jpg",
        link:"https://open.spotify.com/album/3C0OlY5LDEhqcXuWuqox2u"
    },

    {
        name:'Manso Manso',
        artist:'Sara Tavares',
        releaseYear: 2009,
        album: 'Xinti',
        picture: "https://f4.bcbits.com/img/a2119265746_65",
        link:"https://open.spotify.com/track/3V6FNpGyr3EOejVN7wVxVs?si=2d0a066165314b3b"

    },

    {
        name:'Blowing in the Wind',
        artist:'Bob Dylan',
        releaseYear:1963,
        album:'The Freewheeling Bob Dylan',
        picture:"https://m.media-amazon.com/images/I/61qQXSCQZRL._AC_UF894,1000_QL80_.jpg",
        link:"https://open.spotify.com/track/18GiV1BaXzPVYpp9rmOg0E?si=c42a0e1b3d454c22"
    },

    {
        name: 'Bohemian Rhapsody',
        artist:'Queen',
        releaseYear: 1975,
        album:'A night at the Opera',
        picture:"https://cdn.europosters.eu/image/750/plastic-frame-queen-a-night-at-the-opera-i70878.jpg",
        link:"https://open.spotify.com/track/4u7EnebtmKWzUH433cf5Qv?si=b2ada930eaec43b9"


    },

    {
        name:'Santé',
        artist:'Stromae',
        releaseYear:2022,
        album: 'Multitude',
        picture:"https://i.ebayimg.com/images/g/QccAAOSwKS1iTT0W/s-l1200.webp",
        link:"https://open.spotify.com/track/3vXnuFnC5RhPGwsFi0ORcI?si=b8c18aed84434c92"
    },

    {
        name:'Here Comes the Sun',
        artist:'The Beatles',
        releaseYear: 1969,
        album:'Abbey Road',
        picture:"https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg",
        link:"https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2?si=17f7a1ce897b46c4"
    },

    {
        name:'Chamber of Reflection',
        artist: 'Mac deMarco',
        releaseYear: 2014,
        album:'Salad Days',
        picture:"https://upload.wikimedia.org/wikipedia/en/8/81/MacDeMarcoSaladDays.png",
        link:"https://open.spotify.com/track/7H7NyZ3G075GqPx2evsfeb?si=4e0391fc7de348e8"
    },

    {
        name:'Kyle(I found you)',
        artist:'Fred Again...',
        releaseYear:2020,
        album:'Actual Life',
        picture:"https://i.ebayimg.com/images/g/IMkAAOSwy99kh3rN/s-l1200.webp",
        link:"https://open.spotify.com/track/6Ao5d7TMQ92h87jQqSHGyw?si=1678c332ad0249d1"
    },

    {
        name:'In the Real Early Morning',
        artist:'Jacob Collier',
        releaseYear: 2016,
        album:'In my Room',
        picture:"https://i.scdn.co/image/ab67616d00001e0243c7453d0338f82a05464751",
        link:"https://open.spotify.com/track/1QDbjDXFE7TypYBhZTnZmm?si=1862764f70f54125"


    },
]



window.onload = function() {
    const container = document.getElementById('music-collection');
  
    
    collection.forEach(track => {
      const card = document.createElement('div');
      card.classList.add('card');
  
      const image = document.createElement('img');
      image.src = track.picture;
      image.alt = track.name;
  
      const cardContent = document.createElement('div');
      cardContent.classList.add('card-content');
  
      const title = document.createElement('h2');
      title.classList.add('card-title');
      title.textContent = track.name;
  
      const artist = document.createElement('p');
      artist.classList.add('card-info');
      artist.textContent = `Artist: ${track.artist}`;
  
      const releaseYear = document.createElement('p');
      releaseYear.classList.add('card-info');
      releaseYear.textContent = `Release Year: ${track.releaseYear}`;
  
      const album = document.createElement('p');
      album.classList.add('card-info');
      album.textContent = `Album: ${track.album}`;
  
      const link = document.createElement('a');
      link.href = track.link;

      const spotifyLogo = document.createElement('img');
      spotifyLogo.src = 'https://static.vecteezy.com/system/resources/previews/018/930/750/non_2x/spotify-app-logo-spotify-icon-transparent-free-png.png';
      spotifyLogo.href = 'Listen on Spotify';
      spotifyLogo.classList.add('spotify-logo');

      link.appendChild(spotifyLogo);
      card.appendChild(link);
  
      cardContent.appendChild(title);
      cardContent.appendChild(artist);
      cardContent.appendChild(releaseYear);
      cardContent.appendChild(album);
  
      card.appendChild(image);
      card.appendChild(cardContent);
      card.appendChild(link);
  
      container.appendChild(card);
    });
  };