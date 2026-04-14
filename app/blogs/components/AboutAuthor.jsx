import TitlePillow from "@/components/TitlePillow";
import { FaFacebook, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

function AboutAuthor({ blogs = [], loading = false }) {
  // Get the most recent 3 posts
  const recentPosts = blogs.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* Author Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <TitlePillow>About Author</TitlePillow>
        <div className="flex flex-col items-center text-center mt-6">
          <img
            loading="lazy"
            src="https://morph-digital-mm.vercel.app/img/office.jpeg"
            alt="Lin Thandar Phyo - Founder & CEO of Morph Digital"
            className="h-24 w-24 rounded-full object-cover mb-4 ring-4 ring-amber-100"
          />
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Lin Thandar Phyo
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Founder & CEO of Morph Digital solution
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-amber-600 hover:bg-amber-700 text-white size-9 flex items-center justify-center rounded-full transition-colors duration-200"
              aria-label="Follow on Facebook"
            >
              <FaFacebook className="text-sm" />
            </a>
            <a
              href="#"
              className="bg-amber-600 hover:bg-amber-700 text-white size-9 flex items-center justify-center rounded-full transition-colors duration-200"
              aria-label="Follow on Twitter"
            >
              <FaTwitter className="text-sm" />
            </a>
            <a
              href="#"
              className="bg-amber-600 hover:bg-amber-700 text-white size-9 flex items-center justify-center rounded-full transition-colors duration-200"
              aria-label="Follow on Telegram"
            >
              <FaTelegram className="text-sm" />
            </a>
            <a
              href="#"
              className="bg-amber-600 hover:bg-amber-700 text-white size-9 flex items-center justify-center rounded-full transition-colors duration-200"
              aria-label="Connect on LinkedIn"
            >
              <FaLinkedin className="text-sm" />
            </a>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
        <TitlePillow>Recent Posts</TitlePillow>
        <div className="space-y-4 mt-6">
          {loading ? (
            // Loading skeleton for recent posts
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex gap-4 p-3 animate-pulse">
                <div className="w-16 h-16 bg-slate-200 rounded-lg flex-shrink-0"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div className="h-3 bg-slate-200 rounded w-1/2"></div>
                </div>
              </div>
            ))
          ) : recentPosts.length > 0 ? (
            recentPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blogs/${post._id}`}
                className="group block"
              >
                <div className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors duration-200">
                  <img
                    loading="lazy"
                    src={
                      post.image ||
                      "https://morph-digital-mm.vercel.app/img/meeting.png"
                    }
                    alt={post.title || "Blog post"}
                    className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-slate-900 text-sm line-clamp-2 group-hover:text-amber-600 transition-colors">
                      {post.title || "Untitled Post"}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {post.createdAt
                        ? new Date(post.createdAt).toLocaleDateString()
                        : "Recent"}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <p className="text-slate-500 text-sm">
                No recent posts available
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      {/* <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Stay Updated</h3>
                <p className="text-slate-600 text-sm mb-4">
                    Get the latest insights and updates delivered to your inbox.
                </p>
                <Link
                    href="/contact"
                    className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 font-medium"
                >
                    Subscribe Now
                </Link>
            </div> */}
    </div>
  );
}

export default AboutAuthor;
