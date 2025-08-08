"use client";
import Image from "next/image";
import Posts from "./_components/posts";
import PostModal from "./_components/postModal";
import { useState } from "react";
export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <main className="@container m-4">
      <button
        className="w-full p-2 border-2 border-black rounded-full text-black text-lg cursor-pointer hover:bg-linear-to-r from-primary to-secondary"
        onClick={() => setModalIsOpen(true)}
      >
        + Share Thought
      </button>
      <PostModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Share Your Thought</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Tags</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter tags (comma separated)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Content</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              placeholder="Enter content"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </PostModal>
      <Posts
        posts={[
          {
            id: "1",
            user: "Johny",
            title: "This is title",
            tags: ["horror", "comedy"],
            content:
              "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            upvote: 523,
            downvote: 1,
          },
        ]}
      />
    </main>
  );
}
