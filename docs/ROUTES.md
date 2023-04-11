# Authentication

## POST /signup
Registration to the application as an auditor

## POST /login
Login to the application as an auditor

## GET /profile
Return current auditor profile

*Requires to be connected*

## POST /logout
Logging out of the application

*Requires to be connected*

# Seed

## POST /generate-data
Generating artists, albums, songs and playlists

*Requires to be connected*

# Playlists

## POST /playlists/new
Create a new playlist for current auditor

*Requires to be connected*

## GET /playlists
Returns all playlists of the current auditor

*Requires to be connected*

## PUT /playlists/:id
> **Arguments**
> - `:id` Playlist ID

Edit one playlist of current auditor

*Requires to be connected*

## DELETE /playlists/:id
> **Arguments**
> - `:id` Playlist ID

Delete one playlist of current auditor

*Requires to be connected*


# Specials routes

## POST /listen/:id
> **Arguments**
> - `:id` Song ID

Current auditor listen a song

*Requires to be connected*

## PATCH /playlists/:id/add?song
> **Arguments**
> - `:id` Playlist ID

> **Parameters**
> - `?songs` Songs ID

Affect one song to one available playlist

## PATCH /playlists/:id/remove?song
> **Arguments**
> - `:id` Playlist ID

> **Parameters**
> - `?songs` Songs ID

Remove one song to one available playlist

*Requires to be connected*

## GET /search?query
> **Parameters**
> - `?query` Query parameters

Search a song among all
