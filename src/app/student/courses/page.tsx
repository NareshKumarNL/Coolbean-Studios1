export default function StudentCoursesPage() {
  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="mb-12">
          <p className="section-label">Student · Courses</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">My Courses</h1>
          <p className="font-body text-sm text-charcoal-light mt-3">
            Your enrolled courses and class schedule will appear here.
          </p>
        </div>

        <div className="card p-12 border border-cream-border text-center">
          <div className="w-14 h-14 rounded-2xl bg-gold-light flex items-center justify-center text-3xl mx-auto mb-5">♪</div>
          <h2 className="font-display text-display-sm text-charcoal">Course details coming soon</h2>
          <p className="font-body text-sm text-charcoal-light mt-3 max-w-sm mx-auto leading-relaxed">
            Your course schedule, attendance records, and progress tracking will be available
            once the full backend is integrated.
          </p>
        </div>
      </div>
    </section>
  );
}
