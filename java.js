


const storedTweets = JSON.parse(localStorage.getItem('tweets')) || [];


const tweetInput = document.getElementById('tweetInput');
const tweetButton = document.getElementById('tweetButton');
const tweetsContainer = document.getElementById('tweetsContainer');


function displayTweets() {
    tweetsContainer.innerHTML = ''; 
    storedTweets.forEach((tweet, index) => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        
        const tweetText = document.createElement('p');
        tweetText.classList.add('tweet-text');
        tweetText.textContent = tweet.text;

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.textContent ='Like';
        
        const likeCount = document.createElement('span');
        likeCount.classList.add('like-count');
        likeCount.textContent = tweet.likes;

        
        likeButton.addEventListener('click', () => {
            tweet.likes++;
            localStorage.setItem('tweets', JSON.stringify(storedTweets));
            displayTweets();
        });

        tweetElement.appendChild(tweetText);
        tweetElement.appendChild(likeButton);
        tweetElement.appendChild(likeCount);
        tweetsContainer.appendChild(tweetElement);
    });
}


tweetButton.addEventListener('click', () => {
    const tweetText = tweetInput.value.trim();
    
    if (tweetText.length > 0 && tweetText.length <= 280) {
        const newTweet = {
            text: tweetText,
            likes: 0,
        };

        storedTweets.unshift(newTweet); 
        localStorage.setItem('tweets', JSON.stringify(storedTweets)); 

        tweetInput.value = '';
       
        displayTweets(); 
    }



}
);
window. onbeforeunload = function (e) { localStorage. clear(); }; 

displayTweets();

