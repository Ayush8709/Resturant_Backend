1. This is Fully Resturant Project Build with Node, Express, Mongoose, Mongodb.

2. Use Depandency:- (npm i .....)
        bcryptjs :- it help to increpet the password with the form of hash.
        jsonwebtoken :- it help to create user Authanticate Token.
        morgan :- it help to print the URL hitpoint in console, (it is a opetinol).
        cors :- it allow to another technolory(React) to intereact with Backend Server.
        dotenv :- it allow to hide use full data link JWT_TOKEN or Mongodb URL, Server PORT.
        express:- It is a node js Laibrary.
        nodemon :- it help to run symantesly server when you change something in Code.

3. Features Of Project:- 
        a(0). textroute (just chek code working or not) (opeinols)
        a. userAuthanticate (userLogin and signUp)
        b. getUsersData     (get Users Details)
        c. createResturant  (create a new Resturant )
        d. createCategory    (resturant food item)
        e. foodTypes && orderFood (all food with types and place order )

    Descuss Detils of Project Features:-

    a:- userAuthanticate :- (create a new user and Login with email and password) 
               1. signup a new User (post) :- http://localhost:5000/api/v1/auth/register 
               2. login a User and Provide JWT token  (post) :- http://localhost:5000/api/v1/auth/login 


    b:- getUsersData :-(Signup User data fatch and update, delete, update password,reset password)
                1. getUser Data (get):- http://localhost:5000/api/v1/user/getuser 
                        and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token)
                2. updateUser Data (put):-  http://localhost:5000/api/v1/user/updateuser
                          and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token)
                3. update Password (post) :-  http://localhost:5000/api/v1/user/updatepassword       
                          and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token)
                4. password reset (post) :-  http://localhost:5000/api/v1/user/resetpassword 
                         and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token)
                5. userDelete (delete) :-  http://localhost:5000/api/v1/user/deleteuser/(662a15bc52275d45ecc418d4) //this is id of user dataBase                    
                          and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token)

       c:- createResturant :- (Create a new Resturant, get all resturant , get resturant with particular id, delete resturant ) :-
       
                1. create Resturant (post) :-http://localhost:5000/api/v1/resturant/create
                2. getAllResturant (get) :- http://localhost:5000/api/v1/resturant/getall
                3.getResturantWithId (get) :- http://localhost:5000/api/v1/resturant/get/id yaha dalla de
                4. deleteResturant (delete) :-  http://localhost:5000/api/v1/resturant/delete/ yaha id dall de 
                            and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token)      

       d. createCategory :- create resturant category (food) 
               1. create Category (post) :- http://localhost:5000/api/v1/category/create 
                 and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token) 
               2. getAllCategory (get) :- http://localhost:5000/api/v1/category/getall
               3. updateCategory (put) :-  http://localhost:5000/api/v1/category/update/662a3725655ddf8b7dafde65
                     and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token) 
                4. deleteCategory (delete) :-  http://localhost:5000/api/v1/category/delete/662a3725655ddf8b7dafde65
                         and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token) 

        e. foodType and orderFood :- create types of food and order a food.
                1. createFood (post):- http://localhost:5000/api/v1/food/create
                         and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token) 
                2. getAllFood (get):-  http://localhost:5000/api/v1/food/getall
                3. getFoodWithId (get) :-  http://localhost:5000/api/v1/food/get/ id dall de yaha
                4.getFoodWithResturantId (get):- http://localhost:5000/api/v1/food/getresturant/ id dall de yaha
                5. updateFoodItem (put):-  http://localhost:5000/api/v1/food/update/ id dall de yaha
                  and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token) 
                6. deleteFood (delete):- http://localhost:5000/api/v1/food/delete/ yaha id dall de
                         and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token)         
         ###########################################################################################################             
               7. placeOrder (post):-http://localhost:5000/api/v1/food/placeorder
                         and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token)        
                8. chageOrderStatus (post):-http://localhost:5000/api/v1/food/orderstatus/ yaha id dall de
                          and set header <Section> :-
                        Authorization  and Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjhiZWUyMWRhNDlhNmJiMDY0ZGQ1NyIsImlhdCI6MTcxMzk0ODg5MCwiZXhwIjoxNzE0NTUzNjkwfQ.ywycOiu3UmnX5RHTAGKakQrpOC5aurSwn5BNjXPn_10 (its is a jwt token when your login the appliction 
                        the provide this token) 
4. models:- which data store in databse ,basically models is a dataModeling and  userScheama
        a.categoryModel
        b.foodModel
        c.orderModel
        d.resturantModel
        e.usreModel

5. middleware :- it use to provide securing in your application
        a.   authMiddleware (it genrate token and match token is valid user or not)      
        b.   adminMiddleware (it chek the user is admin or clint)

6. controllers :- In This area write all the logic in your Application
        a. authController
        b. categoryController
        c. foodController
        d. resturantController
        e. testController
        f. userControllers
7. config :- its contain you database url and mony more thing        

8. .env:- it hide the important data link (port, databaseUrl and more more thing)
                 
            PORT=5000
            URL =`mongodb://localhost:27017/restorent`
            JWT_SECRET= ayushsingh
