import { useState, useEffect } from "react";     // 3shan 2t7km f el bianat w 2shoof el ta8ieerat
import { FaRegCommentDots } from "react-icons/fa";
import React from 'react'; //bistwrd mktabt react ely mn 5lalha h2dr 2sh8l el jsx w el components
import '../index.css';
import { SlLocationPin } from "react-icons/sl";
import { CiImageOn } from "react-icons/ci";
import { IoVideocamOutline } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { IoHeartSharp } from "react-icons/io5";

const MiddleColumn = () => {
  const [showComments, setShowComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Belly Adams",
      time: "44 min.",
      text: "Terrfic day!!",
      img: "/images/communityPost1.jpg",
      profile: "/images/dog2.jpeg",
      likes: 0,
      liked: false,
      comments: [],
      location: "",
      video: ""
    },
    {
      id: 2,
      user: "Dodo Wells",
      time: "26 min.",
      text: "What a sweet moment!",
      img: "/images/bird2.jpeg",
      profile: "/images/bird1.jpeg",
      likes: 0,
      liked: false,
      comments: [],
      location: "",
      video: ""
    }
  ]);

  const [newPostText, setNewPostText] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);
  const [newVideoFile, setNewVideoFile] = useState(null);

  const imageInputRef = React.useRef(null);
  const videoInputRef = React.useRef(null);

  // ======== useEffect لتحميل البيانات من localStorage عند بداية التشغيل ========
  useEffect(() => {
    const storedData = localStorage.getItem("postsData");
    if (storedData) {
      setPosts(JSON.parse(storedData));
    }
  }, []);

  // ======== useEffect لتخزين أي تحديث في likes أو comments ========
  useEffect(() => {
    localStorage.setItem("postsData", JSON.stringify(posts));
  }, [posts]);

  // ======== Handle Like ========
  const handleLike = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  // ======== Add Post ========
  const handleAddPost = () => {
    const text = newPostText.trim();
    if (!text && !newImageFile && !newVideoFile) return;

    const newPost = {
      id: Date.now(),
      user: "Current User",
      time: "Just now",
      text,
      img: newImageFile || null,
      profile: "/images/defaultProfile.jpeg",
      likes: 0,
      liked: false,
      comments: [],
      location: newLocation,
      video: newVideoFile || null
    };

    setPosts(prev => [newPost, ...prev]);
    setNewPostText("");
    setNewLocation("");
    setNewImageFile(null);
    setNewVideoFile(null);
  };

  // ======== Send Comment ========
  const handleSendComment = (postId) => {
    const text = newComments[postId]?.trim();
    if (!text) return;

    setPosts(prev => prev.map(post => 
      post.id === postId
        ? { ...post, comments: [...post.comments, { id: Date.now(), text }] }
        : post
    ));

    setNewComments(prev => ({ ...prev, [postId]: "" }));
  };

  // ======== Render ========
  return (
    <div className="d-flex flex-column gap-3">
      <div className="rounded-4 bg-light p-3 w-100">
        <textarea 
          className="form-control rounded-4 mb-2 input" 
          placeholder="What's on your mind?" 
          style={{background: "#E4E1EE", height: "5em"}} 
          value={newPostText}
          onChange={(e) => setNewPostText(e.target.value)}
        />

        <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
          <div className="d-flex flex-wrap gap-3">
            <div className="d-flex align-items-center gap-1 p-2 rounded-pill" style={{backgroundColor: "#E4E1EE"}}>
              <SlLocationPin className="fs-5" style={{color: "#7472C6"}} />
              <input 
                type="text"
                placeholder="Add Location"
                className="form-control border-0 p-0 bg-transparent"
                style={{width: newLocation.length > 0 ? `${newLocation.length * 8 + 50}px` : "120px"}} 
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
              />
            </div>

            <div 
              className="d-flex align-items-center gap-1 p-2 rounded-pill" 
              style={{backgroundColor: "#E4E1EE", cursor: "pointer"}}
              onClick={() => imageInputRef.current.click()}
            >
              <CiImageOn className="fs-4" style={{color: "#7472C6"}} />
              <span className='m-0' style={{color: "#7472C6", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "150px"}}>
                {newImageFile ? newImageFile.name : "Add Image"}
              </span>
              <input 
                type="file"
                accept="image/*"
                ref={imageInputRef}
                onChange={(e) => setNewImageFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div>

            <div 
              className="d-flex align-items-center gap-1 p-2 rounded-pill" 
              style={{backgroundColor: "#E4E1EE", cursor: "pointer"}}
              onClick={() => videoInputRef.current.click()}
            >
              <IoVideocamOutline className="fs-3" style={{color: "#7472C6"}} />
              <span className='m-0' style={{color: "#7472C6", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "150px"}}>
                {newVideoFile ? newVideoFile.name : "Add Video"}
              </span>
              <input 
                type="file"
                accept="video/*"
                ref={videoInputRef}
                onChange={(e) => setNewVideoFile(e.target.files[0])}
                style={{ display: 'none' }}
              />
            </div>

          </div>

          <button className="btn text-light" style={{background: "#7472C6"}} onClick={handleAddPost}>Post</button>
        </div>
      </div>

      {posts.map(post => (
        <div key={post.id} className='rounded-4 pt-3 ps-3 bg-light d-flex flex-column w-100' style={{ maxWidth: "50em" }}>
          <div className='d-flex gap-3 justify-content-between'>
            <div className='d-flex gap-3'>
              <div className='mt-2' style={{
                width: "3em",
                height: "3em",
                borderRadius: "50%",
                backgroundImage: `url(${post.profile})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}></div>
              <div className='d-flex flex-column pt-2'>
                <p className='m-0 fw-medium fs-5' style={{color: "#7472C6"}}>{post.user}</p>
                <p className='m-0' style={{color: "#8C8BB9"}}>{post.time}</p>
              </div>
            </div>

            <HiDotsVertical className='mt-3 me-3 fs-4' style={{color: "#8C8BB9"}} />
          </div>

          {post.location && <p className="ms-2 m-1" style={{color:"#7472C6"}}>📍 {post.location}</p>}
          <p className='mt-1 m-0 ms-2 fs-5'>{post.text}</p>

          {post.img && (
            <div className='rounded-4 mt-2 w-100'
              style={{
                aspectRatio: "43/30",
                maxHeight: "35em",
                backgroundImage: `url(${post.img instanceof File ? URL.createObjectURL(post.img) : post.img})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginLeft: "-0.5em"
              }}
            ></div>
          )}

          {post.video && (
            <video controls 
              src={post.video instanceof File ? URL.createObjectURL(post.video) : post.video} 
              style={{width:"100%", marginTop:"0.5em", maxHeight:"20em"}} 
            />
          )}

          <div className='d-flex mt-3 ms-2 gap-3 flex-wrap mb-3'> 
            <div className='d-flex gap-1'>
              <button 
                className='border-0 bg-transparent p-0'
                onClick={() => handleLike(post.id)}
              >
                <IoHeartSharp 
                  className='fs-4' 
                  style={{ color: post.liked ? "red" : "#8C8BB9" }}
                />
              </button>
              <button className='m-0 fs-6 border-0 bg-transparent p-0' style={{color: "#8C8BB9"}}>{post.likes}</button>
            </div>

            <div className='d-flex gap-1'>
              <button 
                className='border-0 bg-transparent p-0'
                style={{color: "#8C8BB9"}}
                onClick={() => setShowComments(prev => ({...prev, [post.id]: !prev[post.id]}))}
              >
                <FaRegCommentDots className='fs-4' />
              </button>
              <button className='m-0 fs-6 border-0 p-0' style={{color: "#8C8BB9"}}>{post.comments.length}</button>
            </div>

            {showComments[post.id] && (
              <div className="comment-section mt-2 w-100">
                <input 
                  type="text" 
                  className="comment-input form-control mb-2" 
                  placeholder="Add comment"
                  value={newComments[post.id] || ""}
                  onChange={(e) => setNewComments(prev => ({...prev, [post.id]: e.target.value}))}
                  style={{ boxShadow: "none", outline: "none" }} 
                />
                <button 
                  className="comment-submit btn btn-primary mb-2" style={{ outline: "none", background: "#7644A7", width: "9em" }}
                  onClick={() => handleSendComment(post.id)}
                >
                  Send
                </button>

                <div className="comments-list">
                  {post.comments.map((cmt) => (
                    <p key={cmt.id} className="m-0 mb-1">{cmt.text}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MiddleColumn;
