NAME=rscottdover
VERSION=0.0.1

.PHONY: install build

all: install build

install:
	yarn install

build:
	yarn build

# Add this to the build process
# echo "rscottdover.com" > CNAME
deploy:
	git checkout master && \
	git reset --hard build && \
	mv dist/* . && \
	git add -A && \
	git commit -am "`date +'%y/%m/%d'` deployment" && \
	git push -f && \
	git checkout build
