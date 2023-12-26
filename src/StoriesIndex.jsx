// import { Link } from "react-router-dom";
// import { useState } from "react";

/* eslint-disable react/prop-types */
export function StoriesIndex(props) {
  // console.log(props);
  // const [searchFilter, setSearchFilter] = useState("");
  return (
    <div className="container text-center">
      <h1>All Stories</h1>
      <div className="row">
        <div className="col">
          {props.stories.map((story) => (
            <div key={story.id}>
              <h2>{story.name}</h2>
              <img src={story.image} />
              <p>Descrition: {story.description}</p>
              <p>Category: {story.category}</p>
              <h3>Comments:</h3>
              {story.comments.map((comment) => (
                <div key={comment.id}>
                  <p>
                    {comment.user_id}: {comment.body}
                  </p>
                </div>
              ))}
              <button onClick={() => props.onShowStory(story)}>More info</button>
              {/* <Link to={`/stories/${story.id}`}>Load Page</Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
