/* eslint-disable react/prop-types */
export function StoriesIndex(props) {
  return (
    <div>
      <h1>All Stories</h1>
      {props.stories.map((story) => (
        <div key={story.id}>
          <h2>{story.name}</h2>
          <img src={story.image} />
          <p>Descrition: {story.description}</p>
          <p>Category: {story.category}</p>
          <p>Comment: {story.comment}</p>
          <button onClick={() => props.onShowStory(story)}>More info</button>
        </div>
      ))}
    </div>
  );
}
4;
