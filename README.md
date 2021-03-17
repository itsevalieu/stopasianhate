# StopAsianHate

Collecting data on the #stopasianhate, and other related hashtags. Eventually would love to expand to other movements like #blacklivesmatter, migrant justice, etc.

Status: In progress

NOTE: Using Twitter API v2

## Getting Started

-   Run `npm install` in your command line
-   Create a .env file with your twitter developer BEARER_TOKEN
-   Create rules and tags for the filtered_stream.js:
    -   I currently have inside my .env file:
        -   RULE_VALUE='(#stopasianhate OR #asianlivesmatter OR #asiansarehuman) lang:en -is:retweet'
        -   RULE_TAG='#stopasianhate #asianlivesmatter #asiansarehuman'
    -   You could also just copypasta the strings above and replace the process.env values in the filtered_stream.js file
-   Make a ./data folder
-   Run `npm run filter` in your command line
-   (Optional) Panic about your Twitter API monthly tweet cap usage, and exit command immediately

## Next Steps

-   Collect tweets via write to json file
-   Massage the data stream to be purdy
    -   ISO timestamp
    -   Commas or /n? Hmmmm...
-   Analyze that sweet, sweet data
-   Maybe set up a timeframe for data collection because I'm poor and can't afford a higher cap usage
-   Make dem purdy charts and graphs (drools)

## Resources

-   https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/introduction
-   https://developer.twitter.com/en/docs/tutorials/building-high-quality-filters
-   https://developer.twitter.com/en/docs/twitter-api/tweets/search/introduction
