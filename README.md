# top-player

Server: http://localhost:3001

Start Server: 'npm run server-dev'

Start Seed Script: 'npm run seedmongo'

# API Routes:
POST - /create {songData object}  
    creates a new song in the database with the given properties  
    should return a status code based on success  
      
GET - /:id  
    get song information for the song at that id number  
    should return a songData object  
    {
        artistName,  
        songTitle,  
        mediaFile, (url)  
        postData,  
        tag: [ String ]  
        albumCover, (url)  
        comments: [  
            {username,  
            avatar,  
            comment}  
        ]  
    }  
      
PATCH - /:id?property=newValue  
    updates the selected property for a given song to the new value  
    should return a status code based on success  
      
PUT - /:id {songData object}  
    update all properties of a song to the newly specified values  
    should return a status code based on success  
      
DELETE - /:id  
    delete the database entry for that song  
    should return a status code based on success