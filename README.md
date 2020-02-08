# uottahack3

## Idea
Speculation indicator — from the prime mortgage crisis of the 2000’s to the crash of Tesla stock over speculation that delivery centres would be closed in China due to coronavirus, its no secret that much of what drives stock prices is purely emotional and not backed by facts. This is supported by the idea that the increase in the price of stocks is termed “speculation” and that a key determinant of stock prices is expectations for those stock prices according to elementary financial theory. We can do better in 2020. This web-app will use sentiment analysis (NLP) and scrape twitter and a selection of news sources to create a holistic view of a company’s financial health (statement of financials, comprehensive income, return on equity), PESTLE relevance, and fitness of management, from which it will discern whether or not the company’s stock is currently experience a bearish or bullish bubble, with % likelihood estimates. This will also be supplemented by training ML models using the Berkshire Hathaway repository of historic stock data.

- Use financial statements to assess company's financial health w/ various ratios
- Make projections for reasonable stock prices based off of companies in similar industries and with similar financials
- Assess whether or not the stock is in a bullish (overvalued) or bearish (undervalued) bubble 

### Meeting
9AM -- Saturday Feb, 7

## Follow-up steps

### Initial set-up
- Install either VSCode or Webstorm as an IDE
- Use a similar linter! (I recommend prettier and ESLint)
- Install GitKraken or SourceTree so that using git doesn't make you want to off yourself

### Discuss app architecture!

### To-do stack
JIRA Board: https://uottahack3.atlassian.net/secure/RapidBoard.jspa?rapidView=1&projectKey=UOT&view=planning&issueLimit=100&atlOrigin=eyJpIjoiZmZlOWY3Mzc1YzQ2NGEyMDk0YTViZjBlOGJmZDhlNTIiLCJwIjoiaiJ9

### UX
Splash Page: https://www.figma.com/file/VSdWxbEuMj0RmnQYyikmu2/Splash-Page?node-id=0%3A1

## Tech Stack
- Mongo / Express / Node for backend
- Google Cloud Platform for Machine Learning
- React for Front-end
- Figma for UX/UI