import { useNavigate } from 'react-router-dom'

function Hero() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600/20 via-sky-500/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Level up your skills with modern, hands‑on courses
            </h1>
            <p className="mt-5 text-lg text-blue-100/90">
              Discover curated courses from expert instructors. Learn by building real projects across web, design, data, and more.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => navigate('#catalog')} className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-5 py-3 rounded-lg transition-colors">
                Browse courses
              </button>
              <a href="/test" className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3 rounded-lg transition-colors">
                Check backend
              </a>
            </div>
            <div className="mt-6 text-sm text-blue-200/70">New to the platform? We include free starter courses.</div>
          </div>
          <div className="relative">
            <img
              alt="Learning illustration"
              className="w-full rounded-2xl shadow-2xl ring-1 ring-white/10"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
            />
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur rounded-xl p-4 text-white text-sm">
              Project-based • Community • Certificates
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
