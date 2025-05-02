import { Tweet } from 'react-tweet';
import './tweetCard.css'

const TweetCard = ({tweetId}) => {
  return (
   <div className="tweetCard">
    <Tweet className='tweet-box'  id={tweetId}  />
   </div>
  )
}

export default TweetCard