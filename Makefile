# Первый Makefile
say_hello:
	console.log('Hello')

Do_install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

