install:
npm ci

brain-games:
node bin/brain-games.js

brain-even:
node bin/brain-even.js

publish:
npm publish --dry-run

lint:
npx eslint .

test:
npm test

.PHONY: install brain-games brain-even publish lint test
