"use client";
import { CircleArrowDown, CircleArrowUp, CircleUser } from "lucide-react";
import React, { useState } from "react";

interface PostsProps {
  posts: {
    id: string;
    user: string;
    title: string;
    tags: string[];
    content: string;
    upvote: number;
    downvote: number;
  }[];
}

type VoteState = {
  [postId: string]: "up" | "down" | null;
};

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [votes, setVotes] = useState<VoteState>({});

  const handleUpvote = (postId: string) => {
    setVotes((prev) => ({
      ...prev,
      [postId]: prev[postId] === "up" ? null : "up",
    }));
  };

  const handleDownvote = (postId: string) => {
    setVotes((prev) => ({
      ...prev,
      [postId]: prev[postId] === "down" ? null : "down",
    }));
  };

  return (
    <>
      {posts.map((post) => {
        const vote = votes[post.id] || null;
        return (
          <div
            key={post.id}
            className="border-y-2 border-light-text-secondary my-3 p-2 flex flex-col gap-2 cursor-pointer"
          >
            <div className="flex flex-wrap items-center gap-2">
              <div className="profile-image">
                <CircleUser color="black" strokeWidth={2} />
              </div>
              <div className="username">
                <p className="font-bold hover:underline cursor-pointer">
                  @{post.user}
                </p>
              </div>
            </div>
            <div className="tags-container">
              <span>Tags:</span>
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="tag bg-linear-to-r from-primary to-secondary text-white rounded-full px-2 py-1 m-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <ul>
              <li>
                <h2 className="font-bold text-2xl hover:underline cursor-pointer">
                  {post.title}
                </h2>
                <p>{post.content}</p>
              </li>
            </ul>
            <div className="reacts flex gap-2">
              <div
                onClick={() => handleUpvote(post.id)}
                className="icon-container p-[3px] rounded-lg bg-gradient-to-r from-primary to-secondary min-w-[80px] flex justify-start cursor-pointer transition-all"
              >
                <div
                  className={`icon flex justify-start rounded-lg items-center py-1 px-1 w-full transition-all duration-300 ${
                    vote === "up"
                      ? "bg-transparent text-white"
                      : "bg-light-bg text-black"
                  }`}
                >
                  <CircleArrowUp className="transition-all" color={vote !== "up" ? "#4a90e2" : "white"} />
                  <span className="counts px-1">{vote === "up" ? post.upvote + 1 : post.upvote}</span>
                </div>
              </div>
              <div
                onClick={() => handleDownvote(post.id)}
                className="icon-container p-[3px] rounded-lg bg-gradient-to-r from-primary to-secondary min-w-[80px] flex justify-start cursor-pointer transition-all"
              >
                <div
                  className={`icon flex justify-start rounded-lg items-center py-1 px-1 w-full transition-all duration-300 ${
                    vote === "down"
                      ? "bg-transparent text-white"
                      : "bg-light-bg text-black"
                  }`}
                >
                  <CircleArrowDown className="transition-all" color={vote !== "down" ? "#4a90e2" : "white"} />  
                  <span className="counts px-1">{vote === "down" ? post.downvote + 1 : post.downvote}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Posts;
