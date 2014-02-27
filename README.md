#UPS#

###The problem###
The ups api will only allow you to quote 1 shipment at a time.  So if you have to quote more than 1... Its gonna take a long time.  Ruby is not ideal for this task since it is blocking.

###The solution###
Use a non-blocking language like node to make the requests asynchronous.



##How to use##

### Setup your api key###
create a file config/app.yml and put in your api-key and credentials

```ruby
default:
  ups:
    access_key: put-your-api-key-here
    username: none-of-your
    password: bizness
    environment: sandbox

production:
  ups:
    access_key: put-your-api-key-here
    username: none-of-your
    password: bizness
    environment: live

```

### Boot up the app.###
node app


