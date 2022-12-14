# Stonks - Team 69CR - Hack The Mountains 3.0

> <Subtitle>
> Stock market simplified

---

[![DOCS](https://img.shields.io/badge/Documentation-see%20docs-green?style=flat-square&logo=postman)](https://documenter.getpostman.com/view/12931122/TVYJ5GY6) [![UI ](https://img.shields.io/badge/User%20Interface-Link%20to%20UI-orange?style=flat-square&logo=react)](https://bandito-stonks-crypto.herokuapp.com/) [![PPT](https://img.shields.io/badge/PPT-Checkout-purple?style=flat-square&logo=powerpoint)](https://drive.google.com/file/d/1X0ubJxyEA9Bl55Y3uixmk_MOE8t1L8ud/view?usp=sharing)

## Features

- Track both how a particular news headline affects a stock and which particular stocks are in news on any given day.
- The stocks in news can also be tracked to monitor their financial performance on a particular day, based on the news
- The user is also notified when the price of a particular company’s stocks are expected to fall or rise based on the current world news, via email.
- Check the proof of concept of application by simply posting news ULR from any website
- Stonks also allows you to analyze financial reports of a company to understand if it's profitable to invest in its stock
- See relevant cryptocurrency news and how each and how the cryptocurrency market is performing as a whole

## Instructions to run the backend

```
$ git clone https://github.com/Naman-2001/Stonks-HackTU.git
$ cd Stonks-HackTU
$ cd backend
$ npm install
```

These variables should reside as key value pairs in a file called `.env`.

|               Variable Name               |                Description                |          Get it from          |
| :---------------------------------------: | :---------------------------------------: | :---------------------------: |
|   NATURAL_LANGUAGE_UNDERSTANDING_APIKEY   |            IBM Watson API KEY             |    https://cloud.ibm.com/     |
| NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY |          IBM Watson IAM API KEY           |    https://cloud.ibm.com/     |
|    NATURAL_LANGUAGE_UNDERSTANDING_URL     |        IBM Watson NLU Service URL         |    https://cloud.ibm.com/     |
| NATURAL_LANGUAGE_UNDERSTANDING_AUTH_TYPE  |         IBM Watson NLU Auth Type          |    https://cloud.ibm.com/     |
|                NEWS_APIKEY                |              NEWSAPI API KEY              |  https://newsapi.org/account  |
|                   DBURI                   |    URI for connecting to MongoDB Atlas    |  https://cloud.mongodb.com/   |
|                JWT_SECRET                 |              JWT Secret Key               | You can generate your own key |
|             SENDGRID_API_KEY              |             Sendgrid API KEY              |   https://app.sendgrid.com/   |
|              SENDGRID_EMAIL               | Email for sending out mails from Sendgrid |   https://app.sendgrid.com/   |

```
$ npm start

```

## Instructions to run the frontend

```
$ git clone https://github.com/Naman-2001/Stonks-HackTU.git
$ cd Stonks-HackTU
$ cd frontend
$ npm install
$ npm start
```

## Tech Stack and Services used

- MERN STACK for the application
- Sendgrid for sending emails
- IBM Watson NLU Library
- Heroku for deployments

## Contributors

- <a href="https://github.com/Naman-2001">Naman Aggarwal</a>
- <a href="https://github.com/HarshKhandelwal101">Harsh Khandelwal</a>
- <a href="https://github.com/pranavs036">Pranav Sharma</a>
- <a href="https://github.com/Anirudh1811">Anirudh Kanojia</a>


## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
