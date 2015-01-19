usco-desktop
============



Feature ideas
-------------

- browse local 3d designs/ files
- share a design seamlessly via youmagine (plugable connector, multiple backends)
- search localy and remotely
- avoid excessive complexity
- cross platform tech (browser, desktop, smartphone, cli,  etc)


Linux issues, and how to solve them :
-------------------------------------

once the nw binary has been downloaded, navigate to the folder containing the binary and
type:

      sed -i 's/udev\.so\.0/udev.so.1/g' nw

For more information , see the node-webkit (now nw) documention/wiki.



License:
========

AGPL3
