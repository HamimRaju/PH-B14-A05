import React from 'react';
import type { Technology } from '../types/tech';

interface StackSidebarProps {
  selectedStack: Technology[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export const StackSidebar: React.FC<StackSidebarProps> = ({ selectedStack, onRemove, onClearAll }) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm sticky top-20">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
        <div>
          <h2 className="font-bold text-gray-800">Your Stack</h2>
          <p className="text-xs text-gray-400">{selectedStack.length} Technology Selected</p>
        </div>
        {selectedStack.length > 0 && (
          <button onClick={onClearAll} className="text-xs text-red-500 hover:underline">
            Remove All
          </button>
        )}
      </div>

      {selectedStack.length === 0 ? (
        <div className="text-center py-10 text-gray-400 text-xs">
          No technologies selected yet.
        </div>
      ) : (
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
          {selectedStack.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <p className="text-xs font-bold text-gray-800">{item.name}</p>
                  <p className="text-[10px] text-gray-400">{item.category}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500 text-sm font-bold">
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};