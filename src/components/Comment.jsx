import React from "react";

function Comment({ comment }) {
  return (
    <div className="flex space-x-4 p-2 border-b border-gray-300">
      <img
        src={comment.author?.avatar[0]?.url}
        alt={comment.author?.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold text-sm">{comment.author?.name}</div>
        <div className="text-sm">{comment.text}</div>
      </div>
    </div>
  );
}

export default Comment;
