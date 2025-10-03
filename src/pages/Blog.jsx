import { useState } from "react";
import "./Blog.css";

export default function Blog() {
  // Danh sách bài viết
  const initialPosts = [
    {
      id: 1,
      title: "Chào mừng đến với blog của tôi",
      content:
        "Đây là blog cá nhân nơi tôi chia sẻ về cuộc sống, học tập và những suy nghĩ cá nhân. Hãy đọc và để lại bình luận nhé!",
      date: "2025-10-03",
      tags: ["Cá nhân", "Học tập"]
    },
    {
      id: 2,
      title: "Giới thiệu React",
      content:
        "React là thư viện JavaScript phổ biến để xây dựng giao diện người dùng. Nó giúp phát triển web app nhanh chóng và hiệu quả.",
      date: "2025-10-02",
      tags: ["Công nghệ", "React", "Frontend"]
    },
    {
      id: 3,
      title: "Học lập trình hiệu quả",
      content:
        "Để học lập trình hiệu quả, bạn cần thực hành nhiều, đọc tài liệu, tham gia dự án thực tế và trao đổi với cộng đồng.",
      date: "2025-09-30",
      tags: ["Học tập", "Công nghệ"]
    }
  ];

  const allTags = [...new Set(initialPosts.flatMap(post => post.tags))];

  // State
  const [posts, setPosts] = useState(initialPosts);
  const [selectedTag, setSelectedTag] = useState("");
  const [comments, setComments] = useState({}); // key: postId, value: array of comments
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // Lọc bài viết theo tag
  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  // Gửi bình luận
  const handleSubmit = (e, postId) => {
    e.preventDefault();
    if (!name || !text) return;

    const postComments = comments[postId] || [];
    setComments({
      ...comments,
      [postId]: [...postComments, { name, text }]
    });
    setName("");
    setText("");
  };

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog của tôi</h1>

      {/* Lọc theo tag */}
      <div className="filter-buttons">
        <button
          className={!selectedTag ? "active" : ""}
          onClick={() => setSelectedTag("")}
        >
          Tất cả
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={selectedTag === tag ? "active" : ""}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Danh sách bài viết */}
      {filteredPosts.map(post => (
        <div key={post.id} className="blog-content">
          <h2>{post.title}</h2>
          <p><em>Ngày đăng: {post.date}</em></p>
          <p>{post.content}</p>
          <div className="post-tags">
            {post.tags.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>

          {/* Bình luận */}
          <div className="comment-section">
            <h3>Bình luận</h3>
            <form onSubmit={(e) => handleSubmit(e, post.id)} className="comment-form">
              <input
                type="text"
                placeholder="Tên của bạn"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Nội dung"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button type="submit">Gửi</button>
            </form>

            {(comments[post.id] || []).length === 0 ? (
              <p>Chưa có bình luận nào.</p>
            ) : (
              (comments[post.id] || []).map((c, idx) => (
                <div key={idx} className="comment">
                  <strong>{c.name}:</strong> {c.text}
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
