function CourseCard({ course, onSelect }) {
  return (
    <div onClick={() => onSelect(course)} className="group bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 hover:border-indigo-500/50 hover:shadow-indigo-500/10 hover:shadow-lg transition cursor-pointer">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-slate-900">
        <img src={course.thumbnail_url || 'https://images.unsplash.com/photo-1529336953121-ad5a0d43d0d2?w=800&q=80&auto=format&fit=crop'} alt={course.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
      </div>
      <div className="mt-3">
        <h3 className="text-white font-semibold line-clamp-1">{course.title}</h3>
        <p className="text-slate-300 text-sm line-clamp-2">{course.subtitle || course.description}</p>
        <div className="mt-2 flex items-center justify-between text-sm">
          <span className="text-indigo-400 font-medium">{course.price === 0 ? 'Free' : `$${course.price.toFixed(2)}`}</span>
          <span className="text-slate-400">{course.level || 'All Levels'}</span>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
