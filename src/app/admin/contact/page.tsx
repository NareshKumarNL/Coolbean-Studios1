export default function AdminContactPage() {
  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="max-w-2xl">
          <p className="section-label">Admin · Contact</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">Academy Contact Info</h1>
          <p className="font-body text-sm text-charcoal-light mt-3">
            Official contact details for Sargam Arts Academy.
          </p>

          <div className="mt-10 space-y-6">
            {[
              { label: "Address", value: "123 Arts Lane, Coimbatore, Tamil Nadu 641001" },
              { label: "Phone", value: "+91 98765 43210" },
              { label: "Email", value: "hello@sargamarts.in" },
              { label: "Admin Email", value: "admin@sargamarts.in" },
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
