export default function About() {
  return (
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">About Spotnearr</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-12">
          Spotnearr connects local businesses with customers in their neighborhood. 
          Unlike generic directories, we combine social discovery with practical utility.
        </p>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
        <ul className="text-lg text-gray-600 space-y-3 mb-12">
          <li>• Help small businesses reach nearby customers effectively</li>
          <li>• Make discovering local services simple and social</li>
          <li>• Create a platform where communities support local commerce</li>
        </ul>
        
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Built in India 🇮🇳</h3>
          <p>
            Spotnearr is developed by a team of developers from India, 
            passionate about empowering local businesses through modern technology.
          </p>
        </div>
      </div>
    </div>
  )
}
