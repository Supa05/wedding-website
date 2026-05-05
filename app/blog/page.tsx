const posts = [
  {
    id: 1,
    title: 'Our Engagement Story',
    date: 'March 15, 2026',
    excerpt: 'How we met and decided to spend our lives together...',
    content: 'It all started on a rainy day in the park...'
  },
  {
    id: 2,
    title: 'Planning the Perfect Wedding',
    date: 'April 1, 2026',
    excerpt: 'Tips and tricks for planning your dream wedding...',
    content: 'Planning a wedding can be overwhelming, but with the right approach...'
  },
  {
    id: 3,
    title: 'Our Favorite Memories',
    date: 'April 15, 2026',
    excerpt: 'Looking back on our journey so far...',
    content: 'From our first date to this moment...'
  }
]

export default function Blog() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Wedding Blog</h1>
        <div className="max-w-4xl mx-auto space-y-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <p className="text-gray-700">{post.content}</p>
            </article>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-8">More posts coming soon! Follow our journey.</p>
      </div>
    </main>
  )
}