export const metadata = {
  title: "Contact | The Expert's Voice",
  description: "Get in touch with The Expert's Voice Podcast team",
};

export default function Contact() {
  return (
    <main>
      <section className="px-gutter py-section-default lg:py-28 lg:pt-12 bg-primary text-white">
        <div className="max-w-container-default mx-auto grid grid-cols-1 gap-16 items-center">
          <div className="flex items-center justify-center">
            <h1 className="text-h1 font-bold">Contact</h1>
          </div>
        </div>
      </section>

      {/* Recent Episodes Section */}
      <section className="px-gutter py-section-default bg-gray-50">
        <div className="max-w-container-default mx-auto">
          <div className="max-w-container-default mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h2 className="text-h2 font-bold">Get in Touch</h2>
              <p className="text-lg">
                Are you a legal expert interested in being featured on The
                Expert&apos;s Voice Podcast? Or do you have a topic you&apos;d
                like us to cover? Let us know!
              </p>
              <p className="text-lg">
                We&apos;d love to hear from you! Whether you have a legal
                question, a guest suggestion, or just want to share your
                thoughts on the podcast, we&apos;re here to listen.
              </p>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form className="space-y-12" method="POST" netlify>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="name">First Name</label>
                    <input
                      className="rounded-lg border border-gray-300 p-2"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="space-y-2 flex flex-col">
                    <label htmlFor="name">Last Name</label>
                    <input
                      className="rounded-lg border border-gray-300 p-2"
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    className="rounded-lg border border-gray-300 p-2"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="rounded-lg border border-gray-300 p-2"
                    id="message"
                    name="message"
                    rows={8}
                    required
                  />
                </div>
                <button className="button" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
