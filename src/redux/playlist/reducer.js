import { createSlice } from "@reduxjs/toolkit";

const playlistSlice = createSlice({
    name: 'playlist',
    initialState: {
        artistsList: [

            {
              id: 0,
              name: "Big Baby Tape",
              totalListenAmount: 925,
              followerAmount: 1300,
              cover: "https://i.ibb.co/qmG0Hm6/2.jpg",
              avatar: "https://upload.wikimedia.org/wikipedia/ru/0/00/Trap_Luv.jpg",
              songs: [
                {
                  id: 0,
                  name: "Trap Luv",
                  listenAmount: 11809555,
                  imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/0/00/Trap_Luv.jpg',
                  songUrl: 'https://www.mboxdrive.com/TrapLuv.mp3'
                },
                {
                  id: 1,
                  name: "Gimme the loot",
                  listenAmount: 35136476,
                  imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/8/80/Dragonborn.jpg',
                  songUrl: 'https://www.mboxdrive.com/Gimmetheloot.mp3'
                },
                {
                  id: 2,
                  name: "Kari",
                  listenAmount: 20172055,
                  imageUrl: 'https://images.genius.com/ab6849cdb3eec53c5f223c0111f820aa.1000x1000x1.jpg',
                  songUrl: 'https://www.mboxdrive.com/Kari.mp3'
                },
                {
                  id: 3,
                  name: "Balance",
                  listenAmount: 819215,
                  imageUrl: 'https://images.genius.com/1789b168a9beb7dae46ab1ac1b2ae062.1000x1000x1.jpg',
                  songUrl: 'https://www.mboxdrive.com/Balance.mp3'
                }
              ]
            },
            {
              id: 1,
              name: "6ix9ine",
              totalListenAmount: 13925,
              followerAmount: 9300,
              cover: "https://i.ibb.co/GdKBS7M/1.jpg",
              avatar: "https://outstyle.org/images/news/2/2/9/Tekashi-6ix9ine.jpg",
              songs: [
                {
                  id: 0,
                  name: "Fefe",
                  listenAmount: 1003160248,
                  imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a16370461881d18ace95d83f',
                  songUrl: 'https://www.mboxdrive.com/Fefe.mp3'
                },
                {
                  id: 1,
                  name: "Gooba",
                  listenAmount: 784451318,
                  imageUrl: 'https://upload.wikimedia.org/wikipedia/ru/d/d1/Gooba.png',
                  songUrl: 'https://www.mboxdrive.com/Gooba.mp3'
                },
                {
                  id: 2,
                  name: "Billy",
                  listenAmount: 422707867,
                  imageUrl: 'https://images.genius.com/0e858a12379a5dedcc4fbc25195d59f3.1000x1000x1.png',
                  songUrl: 'https://www.mboxdrive.com/Billy.mp3'
                }
              ]
            },
            {
              id: 2,
              name: "Nara Baby",
              totalListenAmount: 9325,
              followerAmount: 13200,
              cover: "https://i.ibb.co/Bq2WcKm/3.jpg",
              avatar: "https://i.ibb.co/T4cwLbd/3.jpg",
              songs: [
                {
                  id: 0,
                  name: "Ballin'",
                  listenAmount: 210,
                  imageUrl: 'https://images.genius.com/9e52d12579d5e8772e0456571e7537ed.1000x1000x1.jpg',
                  songUrl: 'https://www.mboxdrive.com/ballin.mp3'
                }
              ]
            }
          ],
          songsInPlaylist: [

          ]
    },
    reducers: {
        setSongInPlaylist: (state, action) => {
            state.songsInPlaylist.push(action.payload)
        },
        removeSongInPlaylist: (state, action) => {
            state.itemsInPlaylist = state.songsInPlaylist.filter(song=> song.id !== action.payload);
        }
    }
});
export const { setSongInPlaylist, removeSongInPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;