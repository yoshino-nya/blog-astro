REPO_URL = git@github.com:yoshino-nya/blog.git

dev:
	npm run dev

build:
	npm run build

preview:
	npm run preview

deploy: build
	cd dist && git init && git add -A && \
	git -c user.name="Deploy Bot" -c user.email="bot@localhost" commit -m "deploy" && \
	git remote add origin $(REPO_URL) && \
	git push -f origin HEAD:gh-pages && \
	rm -rf .git
