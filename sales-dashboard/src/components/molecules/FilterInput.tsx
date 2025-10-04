import React from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

interface FilterInputProps {
  threshold: number;
  onThresholdChange: (threshold: number) => void;
  onApplyFilter: () => void;
  onResetFilter: () => void;
}

export const FilterInput: React.FC<FilterInputProps> = ({
  threshold,
  onThresholdChange,
  onApplyFilter,
  onResetFilter,
}) => {
  return (
    <div className="flex items-end gap-4 p-4 bg-gray-50 rounded-lg">
      <div className="flex-1">
        <Input
          type="number"
          label="Sales Threshold"
          placeholder="Enter minimum sales amount"
          value={threshold}
          onChange={(value) => onThresholdChange(Number(value) || 0)}
        />
      </div>
      <Button onClick={onApplyFilter} variant="primary">
        Apply Filter
      </Button>
      <Button onClick={onResetFilter} variant="outline">
        Reset
      </Button>
    </div>
  );
};
