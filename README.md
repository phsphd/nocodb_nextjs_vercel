Nocodb with Next.js
npx create-next-app nocodedb

cd nocodedb

npm install express

npm install nocodb

edit package.json

remove these two lines:

"start": "node index.js",

"build": "echo \"Build\"",

  

rm -rf node_modules

rm -rf package-lock.json

npm install

  

create directories : public, pages , app etc



nocodedb/
├── db/ 
│  ├──  db.js
├── pages/          # Contains all page components
│   ├── index.js    # The home page
│   └── about.js    # Example about page
│
├── public/         # Static files like images, fonts, etc.
├── node_modules/   # Node modules
├── package.json    # Node package configuration
└── server.js       # Your custom server file
│──  node_modules/
├──  services/
│  ├──  emailService.js
│  ├──  dataService.js
├──  routes/
│  ├──  dataRoutes.js
├──  models/
├──  views/
├──  .env
├──  .gitignore
├──  package.json
├──  server.js


npm install

npm install cross-env --save-dev

npm install express socket.io

npm start

  

Old protocol

  

[![Run on Repl.it](https://repl.it/badge/github/nocodb/nocodb-seed)](https://repl.it/github/nocodb/nocodb-seed)

## Clone & install

```

git clone https://github.com/nocodb/nocodb-seed

  

cd nocodb-seed

  

npm install

```

  

## Start

```

npm run start

```

  

## To Upgrade

```

npm run upgrade

```

  

## Using environment file

Copy the .env.example file to .env and change as needed.# nocodb
