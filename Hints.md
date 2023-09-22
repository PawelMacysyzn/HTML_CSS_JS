## VSC

    ctrl + v                                            # Exit from console in environment Node.js

    ctrl + space                                        # It tells us what to type

    put ! then press the enter                          # To create a blank html document

    $null > server.js                                   # Created empty js file

    Open in new window                                  # (Ctrl + K  o)

    <select text> and Shift + Ctrl + l                  # multiple selected cursor

    Shift + Alt and <select text>                       #  multiple cursor

## Docker

    docker images                                       # List all images
    docker ps                                           # List all running containers
    docker ps -a                                        # List all containers

    docker rm <container_id>                            # Remove container
    docker rmi <image_id>                               # Remove image

    docker build -t your-image-name .                   # Build the image, the dot "." signifies the current directory as the source of files.
                                                        # !Repository name must be lowercase!
    docker run -p 8080:3000 your-image-name             # Run a container based on the image

    docker stop <container_id>                          # Stop container
    docker start <container_id>                         # Start container

## Git

1. Zmiana uzytkownika git

   git config --list # All users
   git config --list --global
   git config --local user.email macyszyn78@gmail.com   # Changing user for repo

## Node.js

1. Express

   npm init <or> npm i                                  # can be used to set up a new or existing npm package
   npm init -y                                          # skip setup

## JavaScript

    const plik1 = require('../plik1.js');               # ../ oznacza "przejdź do katalogu nadrzędnego".
                                                        # Oznacza to, że jesteś w obecnym katalogu, a ../
                                                        # pozwala przejść do katalogu znajdującego się powyżej.
