"use client";

const Footer = () => {
  return (
    <footer className="pt-12">
    
      <div className="max-w-5xl mx-auto px-4 mb-10">
        <div className="bg-gray-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-2">
            Stay Connected
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for wellness tips and updates on our premium essential oils.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-lg bg-gray-900 text-gray-200 border border-gray-700 outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>

    
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
      
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Cinnamon</h3>
          <p className="text-gray-400 text-sm">
            100% pure, organic cinnamon essential oils for wellness and aromatherapy.
          </p>
        </div>

       
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            {["Home", "Products", "Benefits", "Contact"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-white">{link}</a>
              </li>
            ))}
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">Email: info@cinnamonoil.com</p>
          <p className="text-sm">Phone: +1 (555) 123-4567</p>
        </div>
      </div>

   
      <div className="  px-4 mt-10 border-t border-gray-700 py-4 flex flex-col md:flex-row justify-between text-gray-500 text-xs md:text-sm">
        <p>© 2025 Cinnamon Essential Oil Project. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
