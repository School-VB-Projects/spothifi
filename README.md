# 🎧 SpotHifi API
Fake Spotify API

### Dependencies
- [npm](https://www.npmjs.com/)

### Links
- [API](http://localhost:3010)
- [Swagger](http://localhost:3010/api-docs)
- [Documentation](docs/ROUTES.md)

## Linux

### Installation
1. Configure your MongoDB server
   > You can also configure a docker

2. Create a `.env` file at the root of the project
    ```dotenv
    PORT=your_port
    HOST=your_host
    DATABASE=spothifi
    SECRET=your_secret
    ```

3. Set your REST environment variables in `http-client.env.json`
    > For **Visual Studio Code** IDE you must also copy configuration to `~/.config/Code/User/settings.json` like that
    ```json
    "rest-client.environmentVariables": {
        "$shared": {},
        "dev": {
          ...
        }
    }
    ```

### Getting started

- Start server
    ```bash
    make run
    ```

## MacOS

### Installation
1. Configure your MongoDB server
   > You can also configure a docker

2. Create a `.env` file at the root of the project
    ```dotenv
    PORT=your_port
    HOST=your_host
    DATABASE=spothifi
    SECRET=your_secret
    ```

3. Set your REST environment variables in `http-client.env.json`
   > For **Visual Studio Code** IDE you must also copy configuration to `~/Library/Application Support/Code/user/settings.json` like that
    ```json
    "rest-client.environmentVariables": {
        "$shared": {},
        "dev": {
          ...
        }
    }
    ```

### Getting started

- Start server
    ```bash
    make run
    ```

## Windows

### Installation
1. Configure your MongoDB server
   > You can also configure a docker

2. Create a `.env` file at the root of the project
    ```dotenv
    PORT=your_port
    HOST=your_host
    DATABASE=spothifi
    SECRET=your_secret
    ```
   
3. Set your REST environment variables in `http-client.env.json`
   > For **Visual Studio Code** IDE you must copy configuration to `C:/Users/YourUser/AppData/Roaming/Code/User/settings.json` like that
    ```json
    "rest-client.environmentVariables": {
        "$shared": {},
        "dev": {
          ...
        }
    }
    ```

4. Install npm dependencies
    ```bash
    npm install
    ```

### Getting started

- Start server
    ```bash
    npm start
    ```
