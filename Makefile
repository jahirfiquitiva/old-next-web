.PHONY: deploy

TEST_PATH=./

help:
	@echo "    build"
	@echo "        Deletes old html files and recreates them"

build:
	rm *.html
	pug -P -o . .
