/* eslint-disable react/prop-types */
export function StoriesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateStory(props.story.id, params, () => event.target.reset());
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Stories information</h1>
        <div>
          Name: <input defaultValue={props.story.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.story.image} name="url" type="text" />
        </div>
        <div>
          Description: <input defaultValue={props.story.description} name="url" type="text" />
        </div>
        <div>
          Category: <input defaultValue={props.story.category} name="url" type="text" />
        </div>
        <div>
          Comment: <input defaultValue={props.story.comment} name="url" type="text" />
        </div>
      </form>
    </div>
  );
}
