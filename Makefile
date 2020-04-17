.PHONY: deploy

TEST_PATH=./

help:
	@echo "    build"
	@echo "        Deletes old html files and recreates them"

build:
	rm -f *.html
	pug -P -o . .

deploy:
	make build
	rm -f *.pug
