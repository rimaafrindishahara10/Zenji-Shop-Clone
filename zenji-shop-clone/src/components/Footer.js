export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 md:px-16 py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16">
        {/* LOGO + DESCRIPTION + SOCIAL */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1">
          <h2 className="text-2xl font-black mb-4">ZENJI</h2>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Wear the Arc. Anime-inspired streetwear for gamers and otaku. Every
            drop limited. No restocks. Ever.
          </p>

          <p className="text-white/40 uppercase text-xs mb-3">
            Follow The Lore
          </p>
          <div className="flex gap-3">
            {/* TIKTOK */}
            <a
              href="#"
              className="flex items-center gap-2 bg-white text-black px-4 py-2 text-xs font-medium rounded hover:opacity-80 transition-opacity"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
              </svg>
              TikTok
            </a>

            {/* INSTAGRAM */}
            <a
              href="#"
              className="flex items-center gap-2 bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white px-4 py-2 text-xs font-medium rounded hover:opacity-80 transition-opacity"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.25a3.25 3.25 0 1 1 0-6.5 3.25 3.25 0 0 1 0 6.5zm5.25-8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
              </svg>
              Instagram
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 text-xs font-medium rounded hover:opacity-80 transition-opacity"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <FooterCol title="DROPS" items={["Home", "Drop", "Collection"]} />
        <FooterCol
          title="EXPLORE"
          items={["Lookbook", "Our Story", "Collection"]}
        />
        <FooterCol
          title="COMMUNITY"
          items={["TikTok", "Instagram", "Facebook"]}
        />
        <FooterCol
          title="CONTACT"
          items={[
            "FAQ",
            "Review",
            "Privacy Policy",
            "Terms",
            "Help",
            "Return Policy",
            "Contact Us",
          ]}
        />
      </div>

      <div className="border-t border-white/10 pt-6 text-white/40 text-sm flex flex-col md:flex-row justify-between gap-2">
        <p>
          © {new Date().getFullYear()} ZENJI. All drops are final. No restocks.
          Ever.
        </p>
        <p>Anime-inspired. Gamer-built. Community-owned.</p>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-white/40 uppercase text-xs mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-white/70 hover:text-white text-sm">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
