### installation
1. install lib <br>
on linux
```sudo apt-get install build-essential libudev-dev``` <br>
on windows use [zadig](http://sourceforge.net/projects/libwdi/files/zadig/)
2. ```npm install``` or ```yarn install```
3. ```npm start``` or ```yarn start``` for develop
4. ```npm run package``` or ```yarn package``` for make executable like exe
after finished look at **out/** folder

### how to use
in linux <br>
```./queue-caller --token=xxxxxxxxxxxxxxxxxxxxx --clinic_code=1000 --apiUrl=http://localhost/api/v1```<br>
in windows <br>
```queue-caller.exe --token=xxxxxxxxxxxxxxxxxxxxx --clinic_code=1000 --apiUrl=http://localhost/api/v1```