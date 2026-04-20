export default function AdminAboutPage() {
  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="section-label">Admin · About</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">About Sargam Arts</h1>
          <p className="font-body text-base text-charcoal-light leading-relaxed mt-6">
            Sargam Arts Academy was founded with a simple belief — every child has an artist within.
            Since 2010, we have been the creative home for hundreds of students across Coimbatore,
            guiding them from their first notes to standing ovations.
          </p>
          <p className="font-body text-base text-charcoal-light leading-relaxed mt-4">
            Our experienced tutors bring both technical rigour and genuine warmth to every class.
            We believe learning an art form builds confidence, discipline, and joy that lasts a lifetime.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-cream-border">
            {[
              { value: "500+", label: "Students" },
              { value: "14+", label: "Years" },
              { value: "12", label: "Tutors" },
              { value: "3", label: "Disciplines" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl text-charcoal">{s.value}</p>
                <p className="font-body text-sm text-charcoal-light mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
