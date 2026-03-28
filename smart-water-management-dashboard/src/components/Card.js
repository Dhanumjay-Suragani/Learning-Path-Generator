function Card({ title, children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      {title ? <h3 className="mb-3 text-lg font-semibold text-slate-800">{title}</h3> : null}
      {children}
    </div>
  )
}

export default Card
