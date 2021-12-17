import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Search from "./header/Search";

const PostThumb = ({ posts, result }) => {
  const { theme } = useSelector((state) => state);

  if (result === 0)
    return (
      <h5
        className="text-center"
        style={{ color: "seagreen", "padding-top": "40px" }}
      >
        There aren't any posts to show yet.
      </h5>
    );

  return (
    <div className="post_thumb">
      {posts.map((post) => (
        <Link key={post._id} to={`/post/${post._id}`}>
          <div className="post_thumb_display">
            {post.images[0].url.match(/video/i) ? (
              <video
                controls
                src={post.images[0].url}
                alt={post.images[0].url}
                style={{ filter: theme ? "invert(1)" : "invert(0)" }}
              />
            ) : (
              <img
                src={post.images[0].url}
                alt={post.images[0].url}
                style={{ filter: theme ? "invert(1)" : "invert(0)" }}
              />
            )}

            <div className="post_thumb_menu">
              <i className="far fa-thumbs-up">{post.likes.length}</i>
              <i className="far fa-comment">{post.comments.length}</i>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostThumb;
