/* eslint-disable react/prop-types */
export function StoriesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateStory(props.story.id, params, () => event.target.reset());
  };
  const handleClick = () => {
    props.onDestroyStory(props.story);
  };

  return (
    <div>
      <h1>Stories information</h1>
      {/* <p>Name: {props.story.name}</p>
      <p>Image: {props.story.image}</p>
      <p>Description: {props.story.description}</p>
      <p>Category: {props.story.category}</p>
      <p>Comments: {props.story.comments}</p> */}
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.story.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.story.image} name="image" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.story.description} name="description" type="text" />
        </div>
        <div>
          Category: <input defaultValue={props.story.category} name="category" type="text" />
        </div>
        <div>
          Comments: <input defaultValue={props.story.comments.body} name="body" type="text" />
        </div>
        <button type="submit">Update story</button>
      </form>
      <button onClick={handleClick}>Destroy story</button>
    </div>
  );
}
