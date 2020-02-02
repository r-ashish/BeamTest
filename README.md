# Steps for testing locally

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

---
## Tips to avoid manual setup
If you have docker installed - you can easily build and run a container using the `Dockerfile` present in the project root.
> This will ensure that mongodb is installed and running
> and does not require you to have Node.js, npm or anything else installed in your system.