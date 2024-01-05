/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// import { StoriesNew } from "./StoriesNew";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { StoriesIndex } from "./StoriesIndex";
// import { StoriesShow } from "./StoriesShow";
// import { Modal } from "./Modal";
// import * as decode from "jwt-decode";

// export function MyPage() {
//   const [stories, setStories] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isStoriesShowVisible, setIsStoriesShowVisible] = useState(false);
//   const [currentStory, setCurrentStory] = useState({});
//   // const [errors, setErrors] = useState([]);

//   const jwt = localStorage.getItem("jwt"); // Retrieve JWT token from localStorage

//   const getUserIdFromToken = (token) => {
//     // Implement logic to extract user ID from the JWT token
//     // Example: decode the token and get the user ID
//     // Replace this with your actual implementation
//     const decodedToken = decode(token);
//     return decodedToken ? decodedToken.userId : null;
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:3000/sessions.json", {
//         // Include login credentials (username, password, etc.) in the request body
//       });

//       // Assuming the server returns a JWT token in the response
//       const jwt = response.data.token;

//       // Store the JWT token in localStorage
//       localStorage.setItem("jwtToken", jwt);

//       // Update the state or perform any other necessary actions
//       setIsLoggedIn(true);
//     } catch (error) {
//       console.error("Login failed", error);
//       // Handle login failure
//     }
//   };

//   const handleLogout = () => {
//     // Simulate a logout and remove the JWT token
//     localStorage.removeItem("jwt");
//     // Update the state or perform any other necessary actions
//     setIsLoggedIn(false);
//     window.location.reload();
//   };

//   const handleIndexStories = () => {
//     console.log("handleIndexStories");
//     axios
//       .get("http://localhost:3000/stories.json", {
//         headers: {
//           Authorization: `Bearer ${jwt}`,
//         },
//       })
//       .then((response) => {
//         console.log("Response data:", response.data);
//         const userId = getUserIdFromToken(jwt);
//         console.log("User ID from token:", userId);
//         const userStories = response.data.filter((story) => story.userId === getUserIdFromToken(jwt));
//         setStories(userStories);
//       })
//       .catch((error) => {
//         console.error("Error fetching stories", error);
//       });
//   };

//   const handleCreateStory = (params, successCallback) => {
//     console.log("handleCreateStory", params);
//     axios.post("http://localhost:3000/stories.json", params).then((response) => {
//       setStories([...stories, response.data]);
//       successCallback();
//     });
//   };

//   const handleShowStory = (story) => {
//     console.log("handleShowStory", story);
//     setIsStoriesShowVisible(true);
//     setCurrentStory(story);
//   };

//   const handleUpdateStory = (id, params, successCallback) => {
//     console.log("handleUpdateStory", params);
//     axios.patch(`http://localhost:3000/stories/${id}.json`, params).then((response) => {
//       setStories(
//         stories.map((story) => {
//           if (story.id === response.data.id) {
//             return response.data;
//           } else {
//             return story;
//           }
//         })
//       );
//       successCallback();
//       handleClose();
//     });
//   };

//   const handleClose = () => {
//     console.log("handleClose");
//     setIsStoriesShowVisible(false);
//   };

//   const handleDestroyStory = (story) => {
//     console.log("handleDestroyStory", story);
//     axios.delete(`http://localhost:3000/stories/${story.id}.json`).then((response) => {
//       setStories(stories.filter((p) => p.id !== story.id));
//       handleClose();
//     });
//   };

//   useEffect(() => {
//     if (isLoggedIn) {
//       handleIndexStories();
//     }
//   }, [isLoggedIn, jwt]);

//   return (
//     <div className="grid text-center">
//       {jwt ? (
//         // If logged in, show user content
//         <div>
//           <h2>Welcome, User!</h2>
//           <button onClick={handleLogout}>Logout</button>
//           <div className="container">
//             <StoriesNew onCreateStory={handleCreateStory} />
//           </div>
//           <StoriesIndex stories={stories} onShowStory={handleShowStory} />
//           <Modal show={isStoriesShowVisible} onClose={handleClose}>
//             <StoriesShow story={currentStory} onUpdateStory={handleUpdateStory} onDestroyStory={handleDestroyStory} />
//           </Modal>
//         </div>
//       ) : (
//         // If not logged in, show a login prompt

//         <div>
//           <p>Please log in to access the content.</p>
//           {/* <button>
//             <Login />
//           </button> */}
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import { StoriesShow } from "./StoriesShow";

export function MyPage(props) {
  console.log(props);

  return (
    <div id="index" className="container text-center">
      <h1 id="mystories">My Stories</h1>
      {props.stories.map((story) => (
        <div key={story.id}>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">{story.name}</h2>
              <img src={story.image} />
              <p>Descrition: {story.description}</p>
              <p>Category: {story.category}</p>
              <button id="moreinfo" onClick={() => props.onShowStory(story)}>
                More info
              </button>
              {/* <button onClick={() => props.onShowGoal(goal)}>More Info</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
