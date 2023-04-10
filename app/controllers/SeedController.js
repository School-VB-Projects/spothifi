const ArtistModel = require('../models/ArtistModel');
const AlbumModel = require('../models/AlbumModel');
const SongModel = require('../models/SongModel');
const PlaylistModel = require('../models/PlaylistModel');

async function generateData(req, res) {
    try {
        const artists = await ArtistModel.insertMany([
            {
                name: 'John Smith',
                category: 'jazz',
            },
            {
                name: 'Imagine Canons',
                category: 'rock',
            },
            {
                name: 'Dr Free',
                category: 'rap',
            },
        ]);

        const john_smith = await ArtistModel.findOne({name: 'John Smith'});
        const imagine_canons = await ArtistModel.findOne({name: 'Imagine Canons'});

        const albums = await AlbumModel.insertMany([
            {
                name: 'The Manhattan Rooftop',
                releaseDate: new Date(2018, 10, 16),
                artists: [john_smith]
            },
            {
                name: 'Power of Canons',
                releaseDate: new Date(2016, 5, 29),
                artists: [imagine_canons]
            }
        ]);

        const power_canons = await AlbumModel.findOne({name: 'Power of Canons'});
        const manhattan_rooftop = await AlbumModel.findOne({name: 'The Manhattan Rooftop'});

        john_smith.albums = [manhattan_rooftop];
        imagine_canons.albums = [power_canons];

        await john_smith.save();
        await imagine_canons.save();

        const songs = await SongModel.insertMany([
            {
                name: 'Powerful',
                album: power_canons,
                price: 2.99
            },
            {
                name: 'Canons',
                album: power_canons,
                price: 1.99
            },
            {
                name: 'Powder',
                album: power_canons,
                price: 3.99
            },
            {
                name: 'Sunrise in rooftop',
                album: manhattan_rooftop
            },
            {
                name: 'Sunset in rooftop',
                album: manhattan_rooftop
            },
        ]);

        const powerful = await SongModel.findOne({name: 'Powerful'});
        const canons = await SongModel.findOne({name: 'Canons'});
        const powder = await SongModel.findOne({name: 'Powder'});
        const sunrise_in_rooftop = await SongModel.findOne({name: 'Sunrise in rooftop'});
        const sunset_in_rooftop = await SongModel.findOne({name: 'Sunset in rooftop'});

        const playlists = await PlaylistModel.insertMany([
            {
                name: 'Best songs ever',
                auditor: req.payload._id,
                songs: [powerful, canons, powder]
            },
            {
                name: 'Chill',
                auditor: req.payload._id,
                songs: [powder, sunrise_in_rooftop, sunset_in_rooftop]
            }
        ]);

        const best_songs_ever = await PlaylistModel.findOne({name: 'Best songs ever'});
        const chill = await PlaylistModel.findOne({name: 'Chill'});

        powerful.playlists = [best_songs_ever];
        canons.playlists = [best_songs_ever];
        powder.playlists = [best_songs_ever, chill];
        sunrise_in_rooftop.playlists = [chill];
        sunset_in_rooftop.playlists = [chill];

        await powerful.save();
        await canons.save();
        await powder.save();
        await sunrise_in_rooftop.save();
        await sunset_in_rooftop.save();

        res.status(200).json(artists, albums, songs, playlists);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

module.exports = {
    generateData
}