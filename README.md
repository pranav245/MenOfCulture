This is MenOfCulture Mern Project for the CourseCS6314

Steps to run a project:

### Step 1 Install Dependencies (both frontend & backend)
run below command in root folder
```
npm install 
cd frontend
npm install
```

### Step 2: add .env file to root folder and add the below text into it

```
NODE_ENV = development
PORT = 5000
MONGO_URI = mongodb://localhost:27017/MenOfCulture
JWT_SECRET = 'secretekey'
```

### step 3: import data to database

run mongo server first and then run below command in root folder

```
# Import data
npm run data:import
```
```
Sample User Logins

admin@menofculture.com (Admin)
Admin@123

pranav@menofculture.com (Admin)
Pranav@123

dhairya@menofculture.com (Customer)
Dhairya@123
```


