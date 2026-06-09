import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBlobs from "../ui/AnimatedBlobs";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <AnimatedBlobs />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
