import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechCard } from './components/TechCard';
import { StackSidebar } from './components/StackSidebar';
import { Footer } from './components/Footer';
import type { Technology } from './types/tech';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const isExist = stack.find((item) => item.id === tech.id);
    if (isExist) {
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`Added ${tech.name} to stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const itemToRemove = stack.find((item) => item.id === id);
    setStack(stack.filter((item) => item.id !== id));
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from stack.`);
    }
  };

  const handleClearAll = () => {
    setStack([]);
    toast.error('Cleared all technologies from stack.');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 py-8" id="technologies">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Explore the Technologies</h2>
          <p className="text-sm text-gray-500">Pick one technology per category to build your ideal stack.</p>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 font-medium">Loading technologies...</div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  onAdd={handleAddToStack}
                  isAdded={stack.some((item) => item.id === tech.id)}
                />
              ))}
            </div>
            <div className="lg:col-span-1">
              <StackSidebar
                selectedStack={stack}
                onRemove={handleRemoveFromStack}
                onClearAll={handleClearAll}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;