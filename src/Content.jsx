/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { StoriesIndex } from "./StoriesIndex";
import { StoriesNew } from "./StoriesNew";
import { StoriesShow } from "./StoriesShow";
import { Modal } from "./Modal";
import { MyPage } from "./MyPage";

export function Content() {
  const [stories, setStories] = useState([]);
  const [isStoriesShowVisible, setIsStoriesShowVisible] = useState(false);
  const [currentStory, setCurrentStory] = useState({});

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
    <main>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage stories={stories} onShowStory={handleShowStory} />} />
          <Route path="/stories" element={<StoriesIndex stories={stories} onShowStory={handleShowStory} />} />
        </Routes>
        <LogoutLink />
        <Modal show={isStoriesShowVisible} onClose={handleClose}>
          <StoriesShow story={currentStory} onUpdateStory={handleUpdateStory} onDestroyStory={handleDestroyStory} />
        </Modal>
      </div>
    </main>
  );
}
