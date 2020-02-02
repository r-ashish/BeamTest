# Steps for testing locally

## Recommended setup (requires Docker)
> ## Prerequisites:
> - docker should be installed

1. cd to project root
2. run `docker-compose up`

That's it!

Now, wait for it to build and start the container, then go to: <a>http://localhost:3000/</a> to use the App.

---
## Manual setup
> ## Prerequisites:
> - Node.js, npm should be installed
> - mongodb should be installed and running

1. Install server side packages:
    - `npm i`
2. Install client side packages:
    - `cd client/ && npm i`
3. Build client:
    - `cd client/ && npm run build`
        - this generates random scooters in runtime, randomly spread across Singapore and loads them in the db.
4. Load scooters data in db:
    - `npm run load:data`
5. Start server:
    - `npm run server`
6. Go to: <a>http://localhost:3000/</a> to use the App.
