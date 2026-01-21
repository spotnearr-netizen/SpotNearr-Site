export default function Privacy() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">Privacy Policy</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• Account information (name, email)</li>
          <li>• Location data (used only to show nearby businesses)</li>
          <li>• Usage data (businesses you follow, offers you view)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">2. Google Account Data</h2>
        <p className="text-gray-700 mb-4">
          When you sign in with Google, we receive your basic profile information 
          (name, email) to create your Spotnearr account. This data is used only 
          to provide our service and improve user experience.
        </p>
        <p className="text-gray-700">
          <strong>You can revoke access anytime</strong> through your 
          <a href="https://myaccount.google.com/permissions" className="text-green-600 hover:underline">
            Google Account permissions page
          </a>.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">3. Data Security & Retention</h2>
        <p className="text-gray-700">
          We use industry-standard security measures. Your data is retained only 
          as long as needed to provide our service. You can request data deletion 
          by emailing <a href="mailto:spotnearr@gmail.com">spotnearr@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">4. Contact Us</h2>
        <p className="text-gray-700">
          Questions about this Privacy Policy? Email us at 
          <a href="mailto:spotnearr@gmail.com" className="text-green-600 hover:underline font-semibold">
            spotnearr@gmail.com
          </a>.
        </p>
      </section>

      <p className="text-xs text-gray-500 mt-12 pt-12 border-t border-gray-200">
        Last updated: January 21, 2026
      </p>
    </div>
  )
}
