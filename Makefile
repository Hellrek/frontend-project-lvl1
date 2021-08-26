# Первый Makefile
say:
	console.log('---= Hello =---')

install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run
