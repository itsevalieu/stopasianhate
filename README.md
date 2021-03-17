# stopasianhate

Collecting data on the #stopasianhate, and other related hashtags. Eventually would love to expand to other movements like #blacklivesmatter, immigration, etc.

Status: In progress

## Getting Started

-   Run `npm install` in your command line
-   Create a .env file with your twitter developer BEARER_TOKEN
-   Create rules and tags for the filtered_stream.js:
    -   I currently have inside my .env file:
        -   RULE_VALUE='(#stopasianhate OR #asianlivesmatter OR #asiansarehuman) lang:en -is:retweet'
        -   RULE_TAG='#stopasianhate #asianlivesmatter #asiansarehuman'
    -   You could also just copypasta the strings above and replace the process.env values in the filtered_stream.js file
-   Run `npm run filtered` in your command line
-   (Optional) Panic about your Twitter API monthly tweet cap usage, and exit command immediately

## Next Steps

-   Collect tweets via write to csv
-   Analyze that sweet, sweet data
-   Make dem purdy charts and graphs (drools)
