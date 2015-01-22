usco-desktop
============



Feature ideas
-------------

- browse local 3d designs/ files
- share a design seamlessly via youmagine (plugable connector, multiple backends)
- favorite local and remote design
- search localy and remotely
- local and remote collections
- avoid excessive complexity
- cross platform tech (browser, desktop, smartphone, cli,  etc)


Usefull commands
-----------------

- build desktop version (linux only for now )

        gulp build:nw

- during development you might want to use the much faster command that will :
  - vulcanize all webcomponents
  - copy all needed files to the build output directory
  - launch a node webkit instance 
  

        gulp testrun2:nw


Linux issues, and how to solve them :
-------------------------------------

once the nw binary has been downloaded, navigate to the folder containing the binary and
type:

      sed -i 's/udev\.so\.0/udev.so.1/g' nw

For more information , see the node-webkit (now nw) documention/wiki.



License:
========

AGPL3
