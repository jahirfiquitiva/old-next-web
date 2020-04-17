.PHONY: deploy

TEST_PATH=./

help:
	@echo "    build"
	@echo "        Deletes old html files and recreates them"

build:
	rm -f *.html
	pug -P -o . .

deploy:
	npm i -g pug
	make build
	rm -f *.pug
