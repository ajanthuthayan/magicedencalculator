# Magic Eden Calculator

Live Demo --> https://magicedencalculator.vercel.app/

Note, I used Vercel to deploy this application and whenever the fetch request on the backend fails to respond within 5 seconds, Vercel responds with an error. Given this project was made for fun, I haven’t investigated an alternative as it works for the most part. If you have any recommendations of other free hosting alternatives let me know!

## The Motivation
The motivation for this project came from my experience with Magic Eden. As someone who was new to the NFT space at the time, a tool like this would have helped me make a better decision. I hope this helps those new to NFTs, particularly with Magic Eden and Solana NFTs. 

I initially purchased an NFT from a collection on the platform hoping to make a profit. A few weeks later, when the floor price for that collection finally went above what I had paid, I decided to sell. However, to my surprise after the sale I unintentionally lost money in the process. After looking around Magic Eden I soon learned that the breakdown of fees was explicitly included on the item details page of each NFT. While it was explicit, in my opinion it wasn’t as transparent as it could have been which is why this application was created! 


## Project Description
This web application was created to help Magic Eden users make decisions regarding their Solana NFT investments. By providing users with a detailed fee breakdown, along with their net payout, users can now decide whether to cut their losses, HODL their investment, or cash out their profits! This application provides a clean user-interface and simplifies a part of the selling process by saving users the time and hassle of calculating the fees themselves. 

Generally, the Artist Royalty Fees varied across collections, the Listing/Bidding/Cancel Fee was 0% (Free) and the Transaction Fee was 2%. I initially planned to web scrape item details pages on Magic Eden to calculate the fees using an npm package like cheerio, but shortly after discovered their REST API. This application uses the Magic Eden REST API to fetch the fees associated with selling collection specific NFTs on Magic Eden. 

The front-end was built with ReactJS to provide a responsive and fast user experience and the back-end uses NodeJS to make the http request to Magic Eden’s RESTful API. I initially planned to perform the API calls through the client side given that the application was simple, and that there were no API keys required to use their API. However, I decided to go with a backend to communicate with their API so that I can potentially scale this application with additional features in the future (i.e add buy price, current floor price and expected net profit/loss), and to practice using NodeJS. 

Note, I used Vercel to deploy this application and whenever the fetch request on the backend fails to respond within 5 seconds, Vercel responds with an error. Given this project was made for fun, I haven’t investigated an alternative as it works for the most part. If you have any recommendations of other free hosting alternatives let me know!

## How to use the project
(Coming Soon)
