# docker-volume

Installation
============
1. sudo install -D example.spec /etc/docker/plugins/example.spec
2. node index.js &
3. docker run --rm -it --volume-driver example --volume test:/mnt alpine

Driver options
==============
To run a docker container, with a custom volume driver, and supplying volume options, you need to run with *--mount*, for example:
```bash
docker run --rm -it --mount type=volume,volume-driver=example,src=testing,target=/mnt,volume-opt=krb5tok=123456,volume-opt=user=simmarti alpine
```
