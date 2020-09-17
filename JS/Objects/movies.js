
// Movies
const movies = [
    {
      title: 'a',
      year: 2018,
      rating: 4.3
    },
    {
      title: 'b',
      year: 2018,
      rating: 4.7
    },
    {
      title: 'c',
      year: 2018,
      rating: 3
    },
    {
      title: 'd',
      year: 2017,
      rating: 4.5
    },
  ]
  // all movies in 2018 with rating > 4
  // sort them by their rating
  // descending order
  // pick their title
  const titles = movies
    .filter(m=> m.year === 2018 && m.rating >= 4)
    .sort((a,b,c,d) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)
  
    console.log(titles)

    // string properties
const movie = {
    title: 'a',
    releaseDate: 2016,
    rating: 4.5,
    director: 'b'
  }
  
   function showProperties(obj) {
     for (let key in obj)
     if ( typeof obj[key] === 'string')
     console.log(key, obj[key])
   }
  showProperties(movie);