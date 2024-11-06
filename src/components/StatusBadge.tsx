import React from 'react';
import { clsx } from 'clsx';

type StatusType = 'Active' | 'On Hold' | 'Completed';

interface StatusBadgeProps {
  status: StatusType;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        {
          'bg-green-100 text-green-800': status === 'Active',
          'bg-yellow-100 text-yellow-800': status === 'On Hold',
          'bg-blue-100 text-blue-800': status === 'Completed',
        }
      )}
    >
      {status === 'Active' && '• '}
      {status === 'On Hold' && '• '}
      {status === 'Completed' && '✓ '}
      {status}
    </span>
  );
}