# docker-volume

Installation
============
#. sudo install -D example.spec /etc/docker/plugins/example.spec
#. node index.js &
#. docker run --rm -it --volume-driver example --volume test:/mnt alpine
#. docker run --rm -it --mount type=volume,volume-driver=example,src=testing,target=/mnt,volume-opt=krb5tok=123456,volume-opt=user=simmarti alpine
