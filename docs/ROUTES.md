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

## GET /playlists
Returns all playlists of the current auditor

## POST /playlists/new
Create a new playlist for current auditor

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

## PATCH /songs/:id/add
> **Arguments**
> - `id` Song ID

Affect a song to one available playlist
