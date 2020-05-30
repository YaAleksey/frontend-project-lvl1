install: 
	npm install

start:
	node src/bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint

addCommit:
	git add --all


