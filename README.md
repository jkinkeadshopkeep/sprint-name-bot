# sprint-name-bot

This is a slack bot api which allows the generation of random lists using a topic, letter and a size list.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Local Setup
NOTE: You may have to create your own slack bot in order to test this locally in an isolated environment.

A step-by-step guide to get the application running:

1. Setup .env file
```
Copy .env.example and create a .env file
```

2. Install npm packages
```
npm install
```

3. Start the API server.
```
npm start
```

### Docker

Use `docker-compose` to build the environment and run the bot.

```
docker-compose build service
docker-compose run service
```

## Slack Commands

To create a poll use the following commands:

## Testing
To execute all unit tests:
```
npm run test
```

### Random list of 5 bands
```
/createPoll
```

### Specific list
As of right now lists can be a max size of 10 and its single character driven E.G All bands beginning with 'T' anything more than will be rejected.

Topic wise only - Bands and Superheros are options but note superheros list isnt finished yet

```
/createPoll <topic> <letter> <listSize>

e.g /createPoll bands t 10
```

## Future roadmap
* Larger array of external apis for topics.
* Larger lists.
* Webhooks to talk to simple poll bot for a more interactive voting message.
* Better searching params E.G Take more than a singular letter.


## Authors

* **Joshua Kinkead**