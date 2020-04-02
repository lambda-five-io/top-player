# top-player

Server: http://localhost:3001

Start Server: 'npm run server-dev'

Start Seed Script: 'npm run seedmongo'

# API Routes:
  
  
| Intention | Type | Endpoint | Request | Response |  
|---|---|---|---|---|---|  
| Get song data | GET | /songs/:id | none | songData object |  



        SongData object template:
    {
        artistName,  
        songTitle,  
        mediaFile, (url)  
        postDate,  
        tag: [ String ]  
        albumCover, (url)  
        comments: [ Comment ]
    }

    Comment object template: 
    {
        username,
        avatar,
        comment
    }