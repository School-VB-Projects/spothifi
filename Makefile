node_modules:
	npm install

init:
	mongosh --eval 'use spothifi'

db:
	mongosh spothifi

run: node_modules
	npm start

.PHONY: init run