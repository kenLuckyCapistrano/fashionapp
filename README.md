--setup guide
# git link: 
- https://github.com/kenLuckyCapistrano/fashionapp

# use POSTMAN collection provided in the zip file below 

- (https://github.com/kenLuckyCapistrano/fashionapp/files/8150275/Setup.Files.zip)[Setup Files.zip]
- filename: POSTMANken.lucky.capistranomanulife.postman_collection.json

# and use example csv file for uploading data provided in the zip file below
- (https://github.com/kenLuckyCapistrano/fashionapp/files/8150275/Setup.Files.zip)[Setup Files.zip]
- filename: salesdata.csv





# heroku home: https://damp-mountain-19416.herokuapp.com


Implement following api: 
1. `/sales/record` to receive the data in CSV format

# METHOD POST 

/sales/record

Body

form-data

file		salesdata.csv (format provided `USER_NAME,AGE,HEIGHT,GENDER,SALES,LAST_PURCHASE_DATE`)



2. `/sales/report` to query data in json format.

# METHOD GET
/sales/report/



# URL Parameter format
- Get by date Range

- start and end date seperated by &
- start=2022-03-11&end=2022-03-12

sample final URL: https://damp-mountain-19416.herokuapp.com/sales/report/start=2022-03-11&end=2022-03-12

or

- Get by specific date
- start=2022-03-11

- sample final URL: https://damp-mountain-19416.herokuapp.com/sales/report/start=2022-03-11





