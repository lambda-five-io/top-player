# top-player

Server: http://localhost:3001

Start Server: 'npm run server-dev'

Start Seed Script: 'npm run seedmongo'

# API Routes:
Intention | Type | Endpoint | Request | Response
---|---|---|---|---|---
Get song data | GET | /songs/:id | none | songData object 
Create a new songData entry in the database | POST | /songs/create | songData object | none (200/400)
Update a property for a given song | PATCH | /songs/:id/property | new value | none (200/400)
Update all properties of a song to new values | PUT | /songs/:id | songData object | none (200/400)
Delete a song | DELETE | /songs/:id | none | none (200/400)
Post a new comment on a song| POST | /songs/:id/comments | Comment object | none (200/400) 
Update a comment on a song| PATCH | /songs/:id/comments/:id | Comment text | none (200/400)


        SongData object template:
    {
        artistName,  
        songTitle,  
        mediaFile, (url)  
        postData,  
        tag: [ String ]  
        albumCover, (url)  
        comments: [  
            {username, avatar, comment}
        ]
    }