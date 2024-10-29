# GT Esports Backend

This repo is the new & improved Express RESTful API serving MongoDB for the [GT Esports website](https://www.gatechesports.com)

## Installation

Use npm install to install all the dependencies, then use npm run devStart to start the server

```bash
npm install
npm run devStart
```

## Routes
This repo contains or will contain the following:
- Game API
- Events/News API
- Recruitment API
- User/Authentication Handling

## Usage
For running the server, create a .env file and connect to your MongoDB Cluster. 
- Feel free to add more stuff to your env file
```.env
DATABASE_URL=mongodb+srv://username:password@hostname
```
Then, start your server by running
```bash
npm run devStart
```
## Testing
Refer to tests folder and client.rest file. Currently, automated testing only includes some functionality for the Game API, but more will be added in the near future.
#### Playwright
This project utilizes playwright's testing library
```bash
npm install @playwright/test
```
You can run the tests by running
```bash
npx playwright test
```
Create new tests in the tests folder following the ```${api_name}.spec.js``` format

#### Rest Client (VSCode extension)
You can directly test the API by using the client.rest file. You can use any file as long as its extension is `.rest`.
## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
## Contact
[Discord](https://discord.gg/gtesports)\
[Instagram](https://www.instagram.com/gatechesports_)\
[Twitter/X](https://x.com/gatechesports)\
[Facebook](https://www.facebook.com/GeorgiaTechEsports/)
