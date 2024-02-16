# OMADA-API
I created this project for my personal project.
This is under development and the readme is not detailed yet.


## Description
OMADA-API is a NodeJS+TypeScript+ExpressJS project that 
request OMADA SDN Controller api. I'm using Omada_SDN_Controller_v5.9.31.



## Installation
1. clone this project
2. cd OMADA-API/
3. `$npm install`
4. create `.env` file and follow `.env.sample` file (modify the value base on your setup.)
4. `npm run dev`


## How to use this project?
1. Install API tester (postman or insomnia)
2. generate controllerId using `/info` and get `omadacId` value
3. get `token` and `cookie` using `/login`
4. get `siteKey` using `/infoSite`
5. use `token, cookie, controllerId, and siteKey` to other endpoints


## Available endpoints
- /info
- /infoStatus
- /infoSite
- /login
- /vouchers
