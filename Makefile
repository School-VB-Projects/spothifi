node_modules:
	npm install

init:
	mongosh --eval 'use spothifi'
	mongosh spothifi --eval 'db.createCollection("auditors")'
	mongosh spothifi --eval 'db.createCollection("playlists")'
	mongosh spothifi --eval 'db.createCollection("songs")'
	mongosh spothifi --eval 'db.createCollection("listenings")'
	mongosh spothifi --eval 'db.createCollection("albums")'
	mongosh spothifi --eval 'db.createCollection("artists")'

run: node_modules
	npm start

.PHONY: init run