import { useEffect, useState } from 'react'
import CourseCard from './CourseCard'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Catalog({ onPickCourse }) {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  const fetchCourses = async (q = '') => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${API_BASE}/api/courses${q ? `?q=${encodeURIComponent(q)}` : ''}`)
      if (!res.ok) throw new Error('Failed to load courses')
      const data = await res.json()
      setCourses(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  const onSearch = (e) => {
    e.preventDefault()
    fetchCourses(query)
  }

  const seed = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/seed`, { method: 'POST' })
      if (res.ok) fetchCourses(query)
    } catch {}
  }

  return (
    <section id="catalog" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-white">Popular courses</h2>
          <div className="flex items-center gap-2">
            <form onSubmit={onSearch} className="flex items-center gap-2">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses..." className="bg-slate-900/60 border border-slate-700 text-white rounded-lg px-3 py-2 w-56 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg">Search</button>
            </form>
            <button onClick={seed} className="text-slate-300 hover:text-white text-sm underline">Seed demo</button>
          </div>
        </div>

        {loading && <p className="text-slate-300">Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}

        {!loading && !error && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((c) => (
              <CourseCard key={String(c._id)} course={c} onSelect={onPickCourse} />)
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default Catalog
