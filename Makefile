.PHONY: deploy

TEST_PATH=./

help:
	@echo "    build"
	@echo "        Deletes old html files and recreates them"

build:
	rm -f *.html
	pug -P -o . .

deploy:
	npm i -g pug-cli
	make build
	rm -f *.pug
	rm -f main.html
	rm -f base.html
	rm -f gh-releases/release.html
	rm -f index-base.html
	rm -f redirection.html
	rm -f meta-tags.html
	rm -f navbar.html
	rm -f projects.html
	rm -f footer.html
	rm -f social-btns.html
	rm -f blm.html
	ls -la | grep html
