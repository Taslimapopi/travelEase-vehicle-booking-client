import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Taslima Popy",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    comment: "Excellent service! The car was clean and well-maintained. Highly recommend TravelEase.",
  },
  {
    id: 2,
    name: "Rafiq Hasan",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    comment: "Great experience, easy booking process and responsive owner. Will rent again!",
  },
  {
    id: 3,
    name: "Fatima Akter",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    comment: "TravelEase made my trip stress-free. Highly reliable platform.",
  },
];

const starIcon = (
  <svg
    className="w-4 h-4 text-yellow-400 inline-block"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.922-.755 1.688-1.538 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.783.57-1.838-.196-1.538-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.973z" />
  </svg>
);

const ReviewCard = ({ review, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }}
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto"
    >
      <div className="flex items-center mb-4">
        <img
          src={review.photo}
          alt={review.name}
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-orange-400"
        />
        <div>
          <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
          <div>
            {[...Array(review.rating)].map((_, i) => (
              <span key={i}>{starIcon}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm">{review.comment}</p>
    </motion.div>
  );
};

const ReviewSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-4">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
        What Our Customers Say
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {reviews.map((review, idx) => (
          <ReviewCard key={review.id} review={review} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
