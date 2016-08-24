1- to test the project run sh server.sh in the shell
2- in the app folder you will find the front end code, i have split the project to three modules
    -<<common>> contain directives and services that can be used in any module
    -<<login>>, <<registration>> and <<welcome>> modules
    data/clients file contain information about the client allowed to connect to the app
   i've tried to make each controller as clean as possible by implementing a service for each module to contain
    business logic