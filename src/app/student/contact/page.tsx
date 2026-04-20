export default function StudentContactPage() {
  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="section-label">Student · Contact</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">Contact the Academy</h1>
          <p className="font-body text-sm text-charcoal-light mt-3">
            Reach out to us for any queries about your courses or enrolment.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { label: "Address", value: "123 Arts Lane, Coimbatore, Tamil Nadu 641001" },
              { label: "Phone", value: "+91 98765 43210" },
              { label: "Email", value: "hello@sargamarts.in" },
            ].map((item) => (
              <div key={item.label} className="card p-6 border border-cream-border">
                <p className="font-body text-xs text-charcoal-light tracking-widest uppercase mb-1">{item.label}</p>
                <p className="font-body text-sm text-charcoal">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
