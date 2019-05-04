# Instagram Comment Manager

An automated way to deal with Instagram comments that you don't want others to see :eyes:.

## :package: Installation

### Getting the code
Clone the repository and install dependencies
```sh
> git clone https://github.com/chanonroy/insta-comment-manager.git
> yarn install
```

### Get the environment variables

Create a `.env` file at the project root and add the necessary credentials.

### Setup Ngrok

Since we'll be dealing primarily with webhooks, we need a way to expose localhost to the internet. For this, we will use [Ngrok](https://ngrok.com/).

1. Use the [downloads](https://ngrok.com/download) page to get the Ngrok executable file. 
2. Copy the `ngrok` executable into this directory. 
3. Run the following command with our ngrok auth token

```
./ngrok authtoken <YOUR_AUTH_TOKEN>
```

### Setup MondoDB

```sh
brew install mongodb
```

### Serving 
Serve the dev environment with yarn
```sh
yarn dev
```

## Authors
Brought to you by Hussein and Chanon
