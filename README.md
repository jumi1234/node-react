# NODE REST API + REACT + MYSQL  📑


### DESCRIPTION 📄

NODE REST API + REACT + MYSQL BOILERPLATE


 &nbsp;

### START PROJECT 🛠

#### 1. install packages & run node server
```C
cd backend
backend>npm install
backend>node server.js
```

#### 2. install packages & run react
``` C
cd frontend
frontend>npm install
frontend>npm run start
```

#### 3. insert database
#### (mySQL must be installed first)

mySQL setting in backend/confing/config.js
```C
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "12341234",
  DB: "shabping"
};
```

``` C
mysql -u root -p shabping(DBname) < ./test.sql 
```

#### 4. check data on node server
``` C
localhost:5000/customers
localhost:5000/products
```
