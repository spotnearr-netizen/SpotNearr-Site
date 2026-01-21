import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero - Clear Value Prop */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent mb-6 leading-tight">
            Find Local Shops & Services
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            In Your Area
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Stop scrolling through endless directories. Spotnearr shows you cafes, plumbers,
            shops and services <strong>actually near you</strong> with real offers and ratings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <a
              href="#waitlist"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Launching Soon
            </a>
            <Link
              href="#how-it-works"
              className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-green-500 hover:text-white transition-all"
            >
              How It Works
            </Link>
          </div>

        </div>
      </section>

      {/* Problem You Solve */}
      {/* Problem → Solution - Clean Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Local Search Problem</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Generic directories show businesses 20km away. Social media hides local offers.
              You waste time finding what's actually nearby.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Problems Column */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl">🚗</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">30+ Minutes Away</h3>
                  <p className="text-gray-700 font-medium">Directories push far-away shops instead of what's walkable</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lost in Social Noise</h3>
                  <p className="text-gray-700 font-medium">Local cafe offers buried under influencers and ads</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-xl">⏳</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No Live Status</h3>
                  <p className="text-gray-700 font-medium">No way to know who's open now or has real-time deals</p>
                </div>
              </div>
            </div>

            {/* Spotnearr Solution */}
            <div>
              <div className="bg-white border-2 border-green-200 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-10 h-10 bg-green-100 rounded-2xl flex items-center justify-center mr-3 text-xl font-bold text-green-600">📱</span>
                  Spotnearr Shows:
                </h3>

                <div className="space-y-4 divide-y divide-gray-200">
                  <div className="py-4 pt-0 flex items-center justify-between">
                    <span className="flex items-center font-medium">
                      <span className="w-5 h-5 bg-yellow-400 text-xs font-bold rounded-full flex items-center justify-center mr-2 text-gray-800">4.8</span>
                      Urban Cafe
                    </span>
                    <span className="text-sm text-gray-600">0.7mi • ☕ 50% off</span>
                  </div>

                  <div className="py-4 flex items-center justify-between">
                    <span className="flex items-center font-medium">
                      <span className="w-5 h-5 bg-yellow-400 text-xs font-bold rounded-full flex items-center justify-center mr-2 text-gray-800">4.9</span>
                      John's Plumbing
                    </span>
                    <span className="text-sm text-gray-600">0.5mi • Open now 🔧</span>
                  </div>

                  <div className="py-4 flex items-center justify-between">
                    <span className="flex items-center font-medium">
                      <span className="w-5 h-5 bg-yellow-400 text-xs font-bold rounded-full flex items-center justify-center mr-2 text-gray-800">4.6</span>
                      TechHub
                    </span>
                    <span className="text-sm text-gray-600">1.2mi • New offer 📱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Works in 3 Steps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple. Local. Smart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <span className="text-3xl">1️⃣</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Feed</h3>
              <p className="text-gray-600 text-lg">
                See posts and offers from businesses near you,
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <span className="text-3xl">2️⃣</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Explore & Search</h3>
              <p className="text-gray-600 text-lg">
                Find services with real reviews, distance filters,
                open now status
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <span className="text-3xl">3️⃣</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get Notified</h3>
              <p className="text-gray-600 text-lg">
                Favorite businesses → instant notifications for
                their new offers & posts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust + Privacy (Google OAuth friendly) */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Safe & Local Only</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Your Privacy</h3>
              <p className="text-lg text-gray-600">
                Location used <strong>only</strong> to show nearby businesses.
                Never sold. Never shared.
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Businesses</h3>
              <p className="text-lg text-gray-600">
                Verified local shops and services. Real ratings.
                Real-time offers you can actually use.
              </p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-12 max-w-2xl mx-auto">
            <Link href="/privacy" className="text-green-600 hover:underline font-semibold">
              Full Privacy Policy →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Discover?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Your Local Businesses and Services are waiting for you.
          </p>
        </div>
      </section>
    </div>
  )
}
