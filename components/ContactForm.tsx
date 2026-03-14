"use client";

export default function ContactForm() {
  return (
    <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="Your message"
        />
      </div>
      <button type="submit" className="btn-primary">
        Send Message
      </button>
    </form>
  );
}
