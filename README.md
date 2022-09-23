
## MicroServices with NestJS and RabbitMQ 

### References: 
  - Youtube: https://www.youtube.com/watch?v=yuVVKB0EaOQ&t=1289s
  - Github: https://github.com/mguay22/nestjs-rabbitmq-microservices

### Note 
  - All 3 micro-service(s) will share the same package.json and other config
  (number of config(s) is small)
  - If each service(s) number of config is too big, seperate by giving each service an unique **package.json**

  - **docker-compose up --build -V**: build and reset all volume

  - Each time having new dependencies installed with npm i ... --> **docker-compose up --build -V** one more time to update all dependencies and reset all volume(s)