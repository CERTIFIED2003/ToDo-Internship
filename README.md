# Project : To-Do List

## DEPLOYED LINKS
- [Frontend Preview 🚀](https://todo-tgh.netlify.app)
- [Backend Preview 🚀](https://todo-tgh.onrender.com)

## Login Credentials
### For test purpose only (obviously you can do your stuff with it)
- <b><i>Test User 1</i></b>
```
Email: a@b.com
Password: 1234
```
- <b><i>Test User 2</i></b>
```
Email: b@c.com
Password: 123
```

## .env SETUP
### `client` Directory:
Create a new `.env` file and then declare & initialize this new variable
```
VITE_BACKEND_URL = http://localhost:8000
```



### `api` Directory:
Create a new `.env` file and then declare & initialize this new variable
```
PORT = 8000
MONGODB_URL = mongodb+srv://lalshubham027:lalshubham027@cluster0.rf5fcbs.mongodb.net/?retryWrites=true&w=majority
```

```
NOTE:
During deployement change the VITE_BACKEND_URL to your hosted Backend URL.
Also, replace the MONGODB_URL with your own MongoDB Cluster's Database URL.
```

### BACKEND ENDPOINTS:

* `"/"` - GET request for starting server if inactive for long time.

* `"/signup"` - POST request for User registration.

* `"/login"` - POST request for Registered User login.

## AIM :
Create a To-Do List API Using Express and Mongo DB and integrate with a responsive Front-end ( Flutter or React JS ).

## REQUIRED FEATURES :
1. Create a task with priority ( 1 - 9 ) ✔️
2. List the tasks:
    - Requirements:
    1. Display each task based on its priority with index number and square bracket, eg: 1. First Task ( 2 ) [ ] ✔️
    2. If the task is completed, a tick mark display inside the bracket ✔️
    3. If the task is canceled, a cross mark display inside the bracket ✔️
3. Report of tasks
    - Requirements:
    1. Count of pending tasks, canceled tasks, deleted tasks, completed tasks ✔️
    2. Display sorted task list based on their status ( pending, canceled, completed ) ✔️
4. Mark as completed ✔️
5. Mark as canceled ✔️
6. Delete a task from list ✔️

## INSTRUCTIONS :
### API :
1. Apply `authentication` ( don’t use session - cookie ) ✔️
2. Proper API Documentation is needed ✔️
3. user .`gitignore`  file ✔️
4. Include the valid URL of your API and information about front-end in `README.md` ✔️
5. Submit your repo link ✔️

### React JS :
1. `Redux` must be used to manage the global state ✔️
2. Design as you wish, but should be mobile responsive ✔️


## SNAPSHOT :
![ss](https://user-images.githubusercontent.com/111045472/233840512-0a4ae0c3-c2ad-4024-850f-00f62b216ade.png)
