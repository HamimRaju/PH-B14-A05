import React from 'react';
import type { Technology } from '../types/tech';

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}

export const TechCard: React.FC<TechCardProps> = ({ tech, onAdd, isAdded }) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-600">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-800">{tech.name}</h3>
        <p className="text-gray-500 text-xs mt-1 leading-relaxed line-clamp-3">
          {tech.description}
        </p>

        <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
          <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600">{tech.category}</span>
          <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-600">{tech.difficulty}</span>
          <span className="ml-auto font-medium text-amber-500 flex items-center gap-1">
            ★ {tech.rating}
          </span>
        </div>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`w-full mt-5 py-2.5 rounded-xl font-medium text-xs transition ${
          isAdded
            ? 'bg-emerald-50 text-emerald-600 cursor-not-allowed border border-emerald-200'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};