import { NavigationBar, Footer } from "./_components/_index";
import HomePage from "./home/page";

export default function Home() {
  return (
    <div>
      <NavigationBar />
      <HomePage />
      <Footer />
    </div>
  );
}
