.PHONY: deploy

TEST_PATH=./

help:
	@echo "    build"
	@echo "        Deletes old html files and recreates them"

build:
	npm run build

deploy:
	npm run deploy
