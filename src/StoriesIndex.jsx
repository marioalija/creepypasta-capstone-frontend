// import { Link } from "react-router-dom";
// import { useState } from "react";

/* eslint-disable react/prop-types */
export function StoriesIndex(props) {
  // console.log(props);
  // const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>All Stories</h1>
      {/* {props.comments.map((comment) => (
        <div key={comment.id}>
          <p>Comment: {comment.body}</p>
        </div>
      ))} */}
      {props.stories.map((story) => (
        <div key={story.id}>
          <h2>{story.name}</h2>
          <img src={story.image} />
          <p>Descrition: {story.description}</p>
          <p>Category: {story.category}</p>
          {/* <p>Comments: {story.comments}</p> */}
          <button onClick={() => props.onShowStory(story)}>More info</button>
          {/* <Link to={`/stories/${story.id}`}>Load Page</Link> */}
        </div>
      ))}
    </div>
  );
}
