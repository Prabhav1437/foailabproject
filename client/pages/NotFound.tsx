import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-gradient-to-b from-white to-primary/5 px-4">
        <div className="text-center space-y-6 max-w-2xl">
          <div>
            <h1 className="text-8xl md:text-9xl font-bold text-primary/20 mb-2">
              404
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Page Not Found
            </h2>
          </div>

          <p className="text-lg text-muted-foreground">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track to explore our exclusive automotive
            collection.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded hover:opacity-90 transition-opacity"
          >
            Return to Home
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
