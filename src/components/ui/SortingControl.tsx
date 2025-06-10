import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { ArrowUp, ArrowDown, Filter } from 'lucide-react';

export type SortOption = 'latest' | 'oldest' | 'popular';

interface SortingControlProps {
  activeSort: SortOption;
  onChange: (value: SortOption) => void;
}

const SortingControl: React.FC<SortingControlProps> = ({ activeSort, onChange }) => {
  const handleValueChange = (value: string) => {
    if (value) {
      onChange(value as SortOption);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-end mb-6">
      <ToggleGroup 
        type="single" 
        value={activeSort}
        onValueChange={handleValueChange}
        className="flex flex-col sm:flex-row border rounded-md overflow-hidden"
      >
        <ToggleGroupItem 
          value="latest" 
          className="flex items-center gap-1 px-3 py-2 text-sm border-b sm:border-b-0 sm:border-r"
          aria-label="Sort by latest"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          <span>Latest</span>
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="oldest" 
          className="flex items-center gap-1 px-3 py-2 text-sm border-b sm:border-b-0 sm:border-r"
          aria-label="Sort by oldest"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          <span>Oldest</span>
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="popular" 
          className="flex items-center gap-1 px-3 py-2 text-sm"
          aria-label="Sort by popularity"
        >
          <Filter className="h-3.5 w-3.5" />
          <span>Popular</span>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default SortingControl;
