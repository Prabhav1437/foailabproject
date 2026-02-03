import Layout from "@/components/Layout";
import { ArrowRight, Award, Shield, Zap } from "lucide-react";

export default function Index() {
  const categories = [
    {
      id: 1,
      name: "Vintage F1",
      description: "Legendary Formula 1 machines from the golden age",
      icon: "🏎️",
    },
    {
      id: 2,
      name: "NASCAR Icons",
      description: "American racing legends and collectible stock cars",
      icon: "🏁",
    },
    {
      id: 3,
      name: "Le Mans Racers",
      description: "24-hour endurance racing masterpieces",
      icon: "⚡",
    },
    {
      id: 4,
      name: "Porsche 911",
      description: "Evolution of the timeless sports car icon",
      icon: "🚗",
    },
    {
      id: 5,
      name: "GT3 Cup",
      description: "Track-focused perfection and competition",
      icon: "🎯",
    },
    {
      id: 6,
      name: "Supercars",
      description: "Ultra-high-performance hypercars and exotics",
      icon: "💎",
    },
  ];

  const featuredCars = [
    {
      id: 1,
      name: "1988 Ferrari F40",
      year: "1988",
      description:
        "The ultimate expression of Ferrari's racing heritage. Only 400 ever produced, this is a true automotive collectible.",
      price: "$1,400,000",
      imageUrl:
        "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=800&h=500&fit=crop",
      specs: ["478 hp", "324 km/h", "Twin-Turbo V12"],
    },
    {
      id: 2,
      name: "1995 McLaren F1",
      year: "1995",
      description:
        "The pinnacle of 1990s automotive engineering. Central driving position and 627 horsepower of pure performance.",
      price: "$18,000,000",
      imageUrl:
        "https://images.unsplash.com/photo-1560958089-b8a46dd52a86?w=800&h=500&fit=crop",
      specs: ["627 hp", "371 km/h", "BMW V12"],
    },
    {
      id: 3,
      name: "2005 Bugatti Veyron EB 16.4",
      year: "2005",
      description:
        "A revolutionary hypercar that redefined performance limits. The first production car to exceed 400 km/h.",
      price: "$2,100,000",
      imageUrl:
        "https://images.unsplash.com/photo-1571440450820-efd6cec37be9?w=800&h=500&fit=crop",
      specs: ["987 hp", "407 km/h", "Quad-Turbo W16"],
    },
    {
      id: 4,
      name: "1963 Jaguar E-Type",
      year: "1963",
      description:
        "Enzo Ferrari called it the most beautiful car ever made. An iconic design that defined an era.",
      price: "$520,000",
      imageUrl:
        "https://images.unsplash.com/photo-1577818534294-991b38693d1b?w=800&h=500&fit=crop",
      specs: ["265 hp", "240 km/h", "Straight-6"],
    },
    {
      id: 5,
      name: "1967 Ford GT40 Mk IV",
      year: "1967",
      description:
        "Le Mans racing legend. A masterpiece of engineering that dominated international motorsport.",
      price: "$11,000,000",
      imageUrl:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=500&fit=crop",
      specs: ["427 hp", "322 km/h", "V8"],
    },
    {
      id: 6,
      name: "2011 Pagani Zonda Cinque Roadster",
      year: "2011",
      description:
        "Limited to just 5 units worldwide. A masterpiece of carbon fiber craftsmanship and extreme performance.",
      price: "$3,500,000",
      imageUrl:
        "https://images.unsplash.com/photo-1581887720404-91797e1cffeb?w=800&h=500&fit=crop",
      specs: ["650 hp", "375 km/h", "Twin-Turbo V12"],
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Curation",
      description:
        "Each vehicle is hand-selected by our team of automotive historians and engineers with over 50 years combined expertise.",
    },
    {
      icon: Shield,
      title: "Authenticity Guaranteed",
      description:
        "Complete documentation, factory records, and third-party verification ensuring provenance and authenticity.",
    },
    {
      icon: Zap,
      title: "Pristine Condition",
      description:
        "Full restoration or meticulous maintenance by certified specialists using original or equivalent parts.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary to-primary/95 text-white py-20 md:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider">
                Welcome to Luxury
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                Automotive Masterpieces
              </h1>
            </div>
            <p className="text-lg text-white/80 leading-relaxed max-w-lg">
              Curated collection of the world's most exclusive and significant
              automobiles. From legendary race cars to revolutionary hypercars,
              each vehicle tells a story of innovation, craftsmanship, and
              passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                Explore Collection
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded hover:border-white transition-colors">
                Schedule Viewing
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent rounded-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=600&fit=crop"
              alt="Ferrari F40"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="w-full py-20 md:py-28 bg-white">
        <div className="container">
          <div className="space-y-4 mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">
              Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Car Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our curated collections spanning decades of automotive
              excellence and racing heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group p-8 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300 bg-white hover:bg-primary/5 cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">{category.description}</p>
                <div className="flex items-center gap-2 mt-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Explore</span>
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section id="featured" className="w-full py-20 md:py-28 bg-gradient-to-b from-primary/5 to-white">
        <div className="container">
          <div className="space-y-4 mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">
              Showcase
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Exceptional vehicles representing the pinnacle of automotive
              engineering and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car, index) => (
              <div
                key={car.id}
                className="group flex flex-col bg-white rounded-lg overflow-hidden border border-border hover:border-accent hover:shadow-2xl transition-all duration-300 animate-slide-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={car.imageUrl}
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded font-semibold text-sm">
                    {car.year}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {car.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {car.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-3xl font-bold text-accent mb-4">
                      {car.price}
                    </p>
                    <button className="w-full py-2 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="w-full py-20 md:py-28 bg-white">
        <div className="container">
          <div className="space-y-4 mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider">
              Excellence
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Why Choose Luxura Collections
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Decades of expertise, passion, and dedication to automotive
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gradient-to-br from-primary/5 to-transparent border border-border rounded-lg hover:border-accent transition-colors"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-accent-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-muted-foreground">Vehicles Curated</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">50+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">30</p>
                <p className="text-muted-foreground">Countries Served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary mb-2">99%</p>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-primary to-primary/95 text-white">
        <div className="container text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Own a Piece of Automotive History?
            </h2>
            <p className="text-lg text-white/80">
              Contact our expert team to discuss your dream vehicle or schedule
              a private viewing of our exclusive collection.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="px-10 py-4 bg-accent text-accent-foreground font-semibold rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-lg">
              Start Your Journey
              <ArrowRight size={24} />
            </button>
            <button className="px-10 py-4 border-2 border-white/30 text-white font-semibold rounded hover:border-white transition-colors text-lg">
              Call: +1 (555) 123-4567
            </button>
          </div>

          <p className="text-sm text-white/60 pt-8">
            Available Monday–Friday, 9 AM–6 PM EST. Private viewings by
            appointment.
          </p>
        </div>
      </section>
    </Layout>
  );
}
