"use client";

export default function NewsletterSignup() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white">
          Stay Updated
        </h2>
        <p className="mt-4 text-slate-300">
          Get new MCQs, protocols, and short videos. No spam, unsubscribe anytime.
        </p>
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border-0 px-4 py-3 text-slate-900 shadow focus:ring-2 focus:ring-accent sm:max-w-xs"
          />
          <button type="submit" className="btn-primary bg-accent hover:bg-accent-dark">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
