import AtomicCard from "@/components/home/AtomicCard";
import ClassicCard from "@/components/home/ClassicCard";
import CosmicCard from "@/components/home/CosmicCard";

export default function Home() {
  return (
    <main>
      <div className="w-400">
        <CosmicCard />
        <ClassicCard />
        <AtomicCard />
      </div>
    </main>
  );
}
