export default function StudentNotificationsPage() {
  const placeholders = [
    { icon: "🎂", title: "Birthday Reminders", desc: "Upcoming birthday alerts for you and your classmates will appear here." },
    { icon: "💳", title: "Payment Alerts", desc: "Fee due dates and payment reminders will be shown here." },
    { icon: "📅", title: "Class Updates", desc: "Schedule changes, holidays, and special event notices will appear here." },
  ];

  return (
    <section className="bg-cream min-h-[calc(100vh-4rem)] py-16">
      <div className="page-container">
        <div className="mb-12">
          <p className="section-label">Student · Notifications</p>
          <h1 className="font-display text-display-md text-charcoal mt-3">Notifications</h1>
          <p className="font-body text-sm text-charcoal-light mt-3">
            Stay updated with alerts from the academy.
          </p>
        </div>

        <div className="space-y-5 max-w-xl">
          {placeholders.map((item) => (
            <div key={item.title} className="card p-6 border border-cream-border flex gap-5 items-start">
              <div className="w-12 h-12 rounded-2xl bg-gold-light flex items-center justify-center text-2xl shrink-0">
                {item.icon}
              </div>
              <div>
                <h2 className="font-display text-xl text-charcoal">{item.title}</h2>
                <p className="font-body text-sm text-charcoal-light mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="font-body text-xs text-charcoal-light mt-10">
          Live notifications will be available once the backend is integrated.
        </p>
      </div>
    </section>
  );
}
