export default function Help() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-6">
          Help & Support
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get answers fast or contact our team directly
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Quick Answers */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Quick Answers</h2>
          
          <div className="space-y-6">
            <div className="group">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                How does Spotnearr find businesses near me?
              </h3>
              <p className="text-gray-600">
                Spotnearr uses your device's location to show businesses within a few kilometers. 
                You control location permissions in your device settings anytime.
              </p>
            </div>

            <div className="group">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Can I leave reviews for businesses?
              </h3>
              <p className="text-gray-600">
                Yes! After visiting a business, tap their profile and select "Leave Review" 
                to rate and share your experience.
              </p>
            </div>

            <div className="group">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                How do I favorite a business?
              </h3>
              <p className="text-gray-600">
                Tap the ❤️ icon on any business profile. Their posts and offers will appear 
                first in your feed with instant notifications.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 lg:p-12 rounded-3xl border border-green-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need More Help?</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-semibold text-gray-900 mb-2">Email Support</p>
              <p className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
                📧 spotnearr@gmail.com
              </p>
              <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="font-semibold text-gray-900 mb-2">Report a Problem</p>
              <p className="text-gray-600 text-sm">
                Include screenshots + your city + device type for fastest help
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Account Management (OAuth verification) */}
      <section className="bg-gray-50 rounded-3xl p-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Google Account Settings</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔐</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Disconnect Spotnearr</h3>
            <p className="text-gray-600 mb-4">
              Remove Spotnearr access from your Google Account anytime
            </p>
            <a 
              href="https://myaccount.google.com/permissions" 
              className="inline-block bg-red-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-red-600 transition-all"
              target="_blank" rel="noopener noreferrer"
            >
              Manage Apps
            </a>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Clear Location Data</h3>
            <p className="text-gray-600 mb-4">
              Delete your location history from Spotnearr in one tap
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Settings → Privacy → Clear Location Data
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
