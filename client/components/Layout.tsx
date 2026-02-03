import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">LC</span>
              </div>
              <span className="font-bold text-lg text-primary hidden sm:inline">
                Luxura Collections
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Home
            </Link>
            <a
              href="#categories"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Categories
            </a>
            <a
              href="#featured"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Featured
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Why Us
            </a>
          </nav>

          <button className="px-6 py-2 bg-primary text-primary-foreground font-medium rounded hover:opacity-90 transition-opacity text-sm">
            Contact
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full">{children}</main>

      {/* Footer */}
      <footer className="w-full bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">LC</span>
                </div>
                <span className="font-bold text-lg">Luxura Collections</span>
              </div>
              <p className="text-sm text-primary-foreground/80">
                Curating the world's finest automotive masterpieces.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Collections</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Vintage F1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Modern Supercars
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Racing Icons
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-primary-foreground/80">
                +1 (555) 123-4567
                <br />
                info@luxuracollections.com
                <br />
                <br />
                International Showroom
                <br />
                Monaco, France
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm text-primary-foreground/60 text-center">
              © 2024 Luxura Collections. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
