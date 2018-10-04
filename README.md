# docker-volume

Installation
============
#. sudo install -D example.spec /etc/docker/plugins/example.spec
#. node index.js &
#. docker run --rm -it --volume-driver example --volume test:/mnt alpine
