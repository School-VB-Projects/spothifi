# Seed

## POST /generate-data
Generating artists, albums, songs and playlists

# Authentication

## POST /signup
Registration to the application as an auditor

## POST /login
Login to the application as an auditor

## GET /profile
Return current auditor profile

## POST /logout
Logging out of the application


# Playlists

## POST /playlists/new
Create a new playlist for current auditor

## GET /playlists
Returns all playlists of the current auditor

## PUT /playlists/:id
> **Arguments**
> - `id` Playlist ID

Edit one playlist of current auditor

## DELETE /playlists/:id
> **Arguments**
> - `id` Playlist ID

Delete one playlist of current auditor


# Specials routes

## POST /listen/:id
> **Arguments**
> - `id` Song ID

Current auditor listen a song

## PATCH /playlists/:id/add
> **Arguments**
> - `id` Song ID

Affect one or more song.s to one available playlist

## GET /search
Search a song among all
