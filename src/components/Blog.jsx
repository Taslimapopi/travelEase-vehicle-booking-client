import React from "react";
import { Link } from "react-router";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Top 5 Tips Before Renting a Vehicle",
      excerpt:
        "Planning to rent a vehicle? Here are 5 essential tips to ensure a smooth and safe journey.",
      date: "Jan 5, 2026",
      author: "TravelEase Team",
      readTime: "4 min read",
    },
    {
      id: 2,
      title: "How Vehicle Owners Can Earn More on TravelEase",
      excerpt:
        "Learn smart strategies to maximize your earnings by listing your vehicle on TravelEase.",
      date: "Jan 2, 2026",
      author: "TravelEase Team",
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Why Online Vehicle Booking is the Future of Travel",
      excerpt:
        "Discover how digital vehicle booking platforms are changing the way we travel.",
      date: "Dec 28, 2025",
      author: "TravelEase Team",
      readTime: "6 min read",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Page Header */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-extrabold mb-4">
          TravelEase <span className="text-orange-500">Blog</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Travel tips, vehicle rental guides, and stories from our community.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
            </div>

            <h2 className="text-2xl font-bold mb-3 line-clamp-2">
              {blog.title}
            </h2>

            <p className="text-gray-600 mb-6 line-clamp-3">
              {blog.excerpt}
            </p>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                ✍️ {blog.author}
              </span>

              <Link
                to={`/blog/${blog.id}`}
                className="text-orange-500 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
