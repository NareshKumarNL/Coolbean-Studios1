export default function AdminCoursesPage() {
  const courses = [
    { name: "Keyboard & Piano", students: 12, icon: "♪", color: "bg-gold-light" },
    { name: "Flute", students: 8, icon: "♩", color: "bg-gold-light" },
    { name: "Vocal Training", students: 10, icon: "♫", color: "bg-gold-light" },
    { name: "Bharatanatyam", students: 15, icon: "◉", color: "bg-sage-light" },
    { name: "Zumba", students: 9, icon: "◎", color: "bg-sage-light" },
    { name: "Chess", students: 11, icon: "♟", color: "bg-rose-light" },
  ];

  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="mb-12">
          <p className="section-label">Admin · Courses</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">Course Overview</h1>
          <p className="font-body text-sm text-charcoal-light mt-3">
            All active courses at Sargam Arts Academy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((c) => (
            <div key={c.name} className="card p-7 border border-cream-border">
              <div className={`w-12 h-12 rounded-2xl ${c.color} flex items-center justify-center text-2xl mb-5`}>
                {c.icon}
              </div>
              <h2 className="font-display text-display-sm text-charcoal">{c.name}</h2>
              <p className="font-body text-sm text-charcoal-light mt-2">{c.students} students enrolled</p>
            </div>
          ))}
        </div>

        <p className="font-body text-xs text-charcoal-light mt-10 text-center">
          Full course management — add, edit, schedule — coming with backend integration.
        </p>
      </div>
    </section>
  );
}
