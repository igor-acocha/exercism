//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
Implement the removeDuplicates function, which takes a playlist as a parameter and returns a new playlist where all the tracks are unique.

const playlist = [
  'Court and Spark - Joni Mitchell',
  'Big Yellow Taxi - Joni Mitchell',
  'Court and Spark - Joni Mitchell',
];

removeDuplicates(playlist);
//=> ['Court and Spark - Joni Mitchell', 'Big Yellow Taxi - Joni Mitchell']
 */
export function removeDuplicates(playlist) {
    return [...new Set(playlist)];
  }
  
  /**
  Implement the hasTrack function, which takes a playlist and a track as parameters and returns a boolean that indicates whether the playlist contains the track.
  
  const playlist = [
    'The Fashion Show - Grace Jones',
    'Dr. Funkenstein - Parliament',
  ];
  
  hasTrack(playlist, 'Dr. Funkenstein - Parliament');
  //=> true
  
  hasTrack(playlist, 'Walking in the Rain - Grace Jones');
  //=> false
   */
  export function hasTrack(playlist, track) {
    return playlist.includes(track);
  }
  
  /**
  Implement the addTrack function, which takes a playlist and a track as parameters and returns a new playlist that includes the track.
  
  const playlist = ['Selma - Bijelo Dugme'];
  
  addTrack(playlist, 'Atomic Dog - George Clinton');
  //=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']
  
  addTrack(playlist, 'Selma - Bijelo Dugme');
  //=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']
   */
  export function addTrack(playlist, track) {
    const uniqueTracks = new Set(playlist);
    uniqueTracks.add(track);
    return [...uniqueTracks];
  }
  
  /**
  Implement the deleteTrack function, which takes a playlist and a track as parameters and returns a new playlist that does not include the track.
  
  const playlist = [
    'The Treasure - Fra Lippo Lippi',
    'After the Fall - Klaus Nomi',
  ];
  
  deleteTrack(playlist, 'The Treasure - Fra Lippo Lippi');
  //=> ['After the Fall - Klaus Nomi']
  
  deleteTrack(playlist, 'I Feel the Magic - Belinda Carlisle');
  //=> ['After the Fall - Klaus Nomi']
   */
  export function deleteTrack(playlist, track) {
    return playlist.filter(t => t !== track);
  }
  
  /**
  Implement the listArtists function, which takes a playlist as a parameter and returns the list of unique artists in the playlist. Note that the names of the tracks are formatted like <SONG> - <ARTIST>.
  
  const playlist = [
    'All Mine - Portishead',
    'Sight to Behold - Devendra Banhart',
    'Sour Times - Portishead',
  ];
  
  listArtists(playlist);
  //=> ['Portishead', 'Devendra Banhart']
   */
  export function listArtists(playlist) {
    const artists = new Set();
    for (const track of playlist) {
      const parts = track.split(' - ');
      if (parts.length === 2) {
        artists.add(parts[1]); 
      }
    }
    return [...artists];
  }
  