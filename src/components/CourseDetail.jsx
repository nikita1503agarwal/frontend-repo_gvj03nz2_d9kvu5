import { useEffect, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function CourseDetail({ course, onClose }) {
  const [lessons, setLessons] = useState([])
  const [tab, setTab] = useState('curriculum')

  useEffect(() => {
    const load = async () => {
      const res = await fetch(`${API_BASE}/api/courses/${course._id}/lessons`)
      if (res.ok) {
        const data = await res.json()
        setLessons(data)
      }
    }
    if (course?._id) load()
  }, [course])

  const enroll = async () => {
    const body = {
      course_id: course._id,
      user_email: 'demo@example.com',
      user_name: 'Demo User',
      progress: 0,
    }
    const res = await fetch(`${API_BASE}/api/enroll`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
    if (res.ok) alert('Enrolled!')
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-3xl w-full overflow-hidden">
        <div className="p-5 border-b border-slate-700 flex items-start justify-between">
          <div>
            <h3 className="text-white font-bold text-xl">{course.title}</h3>
            <p className="text-slate-300">By {course.instructor_name} • {course.level}</p>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white">✕</button>
        </div>

        <div className="px-5 pt-4 flex items-center gap-4 text-sm">
          <button onClick={() => setTab('curriculum')} className={`pb-2 border-b-2 ${tab==='curriculum' ? 'border-indigo-500 text-white' : 'border-transparent text-slate-300'}`}>Curriculum</button>
          <button onClick={() => setTab('about')} className={`pb-2 border-b-2 ${tab==='about' ? 'border-indigo-500 text-white' : 'border-transparent text-slate-300'}`}>About</button>
          <div className="ml-auto flex items-center gap-3">
            <div className="text-indigo-400 font-semibold">{course.price === 0 ? 'Free' : `$${course.price.toFixed(2)}`}</div>
            <button onClick={enroll} className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg">Enroll</button>
          </div>
        </div>

        <div className="p-5">
          {tab === 'curriculum' && (
            <ul className="space-y-2">
              {lessons.length === 0 && <li className="text-slate-400">No lessons yet</li>}
              {lessons.map((l) => (
                <li key={String(l._id)} className="bg-slate-800/60 border border-slate-700 rounded-lg p-3 flex items-center justify-between">
                  <div className="text-slate-200">{l.order}. {l.title}</div>
                  {l.video_url && <a className="text-indigo-400 hover:text-indigo-300" target="_blank" href={l.video_url}>Watch</a>}
                </li>
              ))}
            </ul>
          )}

          {tab === 'about' && (
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 whitespace-pre-wrap">{course.description}</p>
              {course.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {course.tags.map((t) => (
                    <span key={t} className="text-xs bg-indigo-500/20 text-indigo-300 px-2 py-1 rounded">#{t}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
