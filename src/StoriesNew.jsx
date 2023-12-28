/* eslint-disable react/prop-types */
export function StoriesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateStory(params, () => event.target.reset());
  };
  return (
    <div className="container text-center=true" id="stories-new">
      <h1>New Story</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Image
          </label>
          <input
            name="image"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Description
          </label>
          <input
            name="description"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Category
          </label>
          <input
            name="category"
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="this is where you type"
          />
        </div>
        <button type="submit">Create story</button>
      </form>
    </div>
  );
}
