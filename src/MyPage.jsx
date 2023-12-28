/* eslint-disable no-unused-vars */
import { StoriesNew } from "./StoriesNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { StoriesIndex } from "./StoriesIndex";
import { StoriesShow } from "./StoriesShow";
// import { Login } from "./Login";
import { Modal } from "./Modal";

export function MyPage() {
  const [stories, setStories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isStoriesShowVisible, setIsStoriesShowVisible] = useState(false);
  const [currentStory, setCurrentStory] = useState({});
  // const [errors, setErrors] = useState([]);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleIndexStories = () => {
    console.log("handleIndexStories");
    axios.get("http://localhost:3000/stories.json").then((response) => {
      console.log(response.data);
      setStories(response.data);
    });
  };

  const handleCreateStory = (params, successCallback) => {
    console.log("handleCreateStory", params);
    axios.post("http://localhost:3000/stories.json", params).then((response) => {
      setStories([...stories, response.data]);
      successCallback();
    });
  };

  const handleShowStory = (story) => {
    console.log("handleShowStory", story);
    setIsStoriesShowVisible(true);
    setCurrentStory(story);
  };

  const handleUpdateStory = (id, params, successCallback) => {
    console.log("handleUpdateStory", params);
    axios.patch(`http://localhost:3000/stories/${id}.json`, params).then((response) => {
      setStories(
        stories.map((story) => {
          if (story.id === response.data.id) {
            return response.data;
          } else {
            return story;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsStoriesShowVisible(false);
  };

  const handleDestroyStory = (story) => {
    console.log("handleDestroyStory", story);
    axios.delete(`http://localhost:3000/stories/${story.id}.json`).then((response) => {
      setStories(stories.filter((p) => p.id !== story.id));
      handleClose();
    });
  };

  useEffect(handleIndexStories, []);

  return (
    <div className="grid text-center">
      {isLoggedIn ? (
        // If logged in, show user content
        <div>
          <h2>Welcome, User!</h2>
          <StoriesNew onCreateStory={handleCreateStory} />
          <StoriesIndex stories={stories} onShowStory={handleShowStory} />
          <Modal show={isStoriesShowVisible} onClose={handleClose}>
            <StoriesShow story={currentStory} onUpdateStory={handleUpdateStory} onDestroyStory={handleDestroyStory} />
          </Modal>
        </div>
      ) : (
        // If not logged in, show a login prompt

        <div>
          <p>Please log in to access the content.</p>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}
