import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions(){
    return ( 
    <div className="suggestions">
        <div className="titleContainer">
            <div className="title">Suggestions for you</div>
            <a href="/">See All</a>
        </div>

        <Profile caption="Followed by Iamleo + 3 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        <Profile caption="Followed by Yukthab + 10 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        <Profile caption="Followed by Summerb + 100 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        <Profile caption="Followed by sarele + 6 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
        <Profile caption="Followed by helloandi + 17 more" urlText="Follow" iconSize="medium" captionSize="small" storyBorder={true}/>
    </div>
    );
}

export default Suggestions;