import { useState } from 'react'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import CourseDetail from './components/CourseDetail'

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.06),transparent_45%)]" />
      <div className="relative">
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-white font-bold text-xl">OpenCourse</a>
            <nav className="text-slate-300 text-sm flex items-center gap-6">
              <a href="#catalog" className="hover:text-white">Catalog</a>
              <a href="/test" className="hover:text-white">Status</a>
              <a href="#" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg">Sign in</a>
            </nav>
          </div>
        </header>

        <Hero />
        <Catalog onPickCourse={(c) => setSelected(c)} />

        <footer className="py-10 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-6 text-slate-400 text-sm flex items-center justify-between">
            <p>© {new Date().getFullYear()} OpenCourse. Learn something new every day.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
            </div>
          </div>
        </footer>

        {selected && (
          <CourseDetail course={selected} onClose={() => setSelected(null)} />
        )}
      </div>
    </div>
  )
}

export default App
