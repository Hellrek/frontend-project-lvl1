install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish
	
lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test