# Magic Eden Calculator

Live Demo --> https://magicedencalculator.vercel.app/

Note, I used Vercel to deploy this application and whenever the fetch request on the backend fails to respond within 5 seconds, Vercel responds with an error. Given this project was made for fun, I haven’t investigated an alternative as it works for the most part. If you have any recommendations of other free hosting alternatives let me know!

## The Motivation
The motivation for this project came from my experience with Magic Eden. As someone who was new to the NFT space at the time, a tool like this would have helped me make a better decision. I hope this helps those new to NFTs, particularly with Magic Eden and Solana NFTs. 

I initially purchased an NFT from a collection on the platform hoping to make a profit. A few weeks later, when the floor price for that collection finally went above what I had paid, I decided to sell. However, to my surprise after the sale I unintentionally lost money in the process. After looking around Magic Eden I soon learned that the breakdown of fees was explicitly included on the item details page of each NFT. While it was explicit, in my opinion it wasn’t as transparent as it could have been which is why this application was created! 


## Project Description
This web application was created to help Magic Eden users make decisions regarding their Solana NFT investments. By providing users with a detailed fee breakdown, along with their net payout, users can now decide whether to cut their losses, HODL their investment, or cash out their profits! This application provides a clean user-interface and simplifies a part of the selling process by saving users the time and hassle of calculating the fees themselves. 

Generally, the Artist Royalty Fees varied across collections, the Listing/Bidding/Cancel Fee was 0% (Free) and the Transaction Fee was 2%. I initially planned to web scrape item details pages on Magic Eden to calculate the fees using an npm package like cheerio, but shortly after discovered their REST API. This application uses the Magic Eden REST API to fetch the fees associated with selling collection specific NFTs on Magic Eden. 

The front-end was built with ReactJS to provide a responsive and fast user experience and the back-end uses NodeJS to make the http request to Magic Eden’s RESTful API. Using Postman, the API was tested to ensure that the routes were working prior to deployment. I initially planned to perform the API calls through the client side given that the application was simple, and that there were no API keys required to use their API. However, I decided to go with a backend to communicate with their API so that I can potentially scale this application with additional features in the future (i.e add buy price, current floor price and expected net profit/loss), and to practice using NodeJS. 

Note, I used Vercel to deploy this application and whenever the fetch request on the backend fails to respond within 5 seconds, Vercel responds with an error. Given this project was made for fun, I haven’t investigated an alternative as it works for the most part. If you have any recommendations of other free hosting alternatives let me know!

## How to use the project

Visit the live demo [here](https://magicedencalculator.vercel.app/) to get started.

### 1.	Copy the MagicEden link for the NFT you plan on selling.

   The steps you take depend on whether your listing is already live on MagicEden

   Option A: If you already have your NFT listed on MagicEden...
   
   Simply locate your NFT on MagicEden under the active listings on the collections page and grab the link to your listing on MagicEden.

   For example 
    
    https://magiceden.io/item-details/CDysFDNCCevjbgg5RhmF6y7y6Qk7hnPYbzDrYwtYkhSJ

   Note: The link you paste must follow the `https://magiceden.io/item-details/:tokenAddress` format.

---
    
    
   Option B: If you don’t have your NFT listed on MagicEden...

   Simply find the token address for your NFT, and add it manually to the end of `https://magiceden.io/item-details/`
   
   For example if you are using [Phantom Wallet](https://phantom.app/), first locate the NFT you are looking to sell in your wallet.
    
   <img width="200" alt="image" src="https://user-images.githubusercontent.com/69360970/167263659-35d04601-88c6-4528-bdde-a33d66582bac.png">


   Then, click the three dots on the top right and click `View on Solscan`
   
   <img width="500px" alt="image" src="https://user-images.githubusercontent.com/69360970/167264064-88974510-bc91-4bb3-a109-68e9eb66b542.png">

   When you are on Solscan, find the profile summary section and copy the token address. This token address will serve as the custom parameter you add        to your custom MagicEden link.
   
   If the steps of locating your NFT are too difficult, or if you just want an idea of what your NFT fees would be...
   
   Simply just find another NFT that is a part of the same collection as the one you plan to sell, and copy the link for it. Once again making sure it        follows the format of `https://magiceden.io/item-details/:tokenAddress`
   
   ### 2.	Paste the link into the web application's search field.

   When you have your link ready, simply go to the web application, paste your link and click `enter`
   
   Note if you enter an invalid link you will be prompted with an error. 
   
   Additionally, once you hit enter, the application will enter a loading state while it fetches for the data response from the API. During this time, the    enter button is disabled to prevent spamming further requests. However, as mentioned before there is a 5 second timeout period with vercel, so if a        response is not received within those 5 seconds, an error will automatically be received as a response resulting in no result being returned.
   
   When the fetch is successfully complete, you will see your NFT’s image preview available. 
   
   ### 3.	Enter a sale price
   
   Simply enter a sale price to view a detailed breakdown of the fees at the given price.
   
   For example, when entering 2 SOL for this collection you will get…
   
   <img width="468" alt="image" src="https://user-images.githubusercontent.com/69360970/167264497-84118faf-a442-4173-b9b7-c2df6f27e2e6.png">
