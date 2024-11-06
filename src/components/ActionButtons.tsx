import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentDuplicateIcon, GlobeAltIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import { Tooltip } from './Tooltip';
import { generatePDF } from '../utils/generatePDF';
import { Engagement } from '../types';

interface ActionButtonsProps {
  showAll?: boolean;
  engagementId?: string;
  vendorId?: string;
  engagementData?: Engagement;
}

export function ActionButtons({ showAll = true, engagementId, vendorId, engagementData }: ActionButtonsProps) {
  const navigate = useNavigate();

  const handleExplore = () => {
    if (engagementId) {
      navigate(`/engagement/${engagementId}`);
    } else if (vendorId) {
      navigate(`/vendor/${vendorId}`);
    }
  };

  const handleGenerateReport = () => {
    if (engagementData) {
      generatePDF(engagementData);
    }
  };

  return (
    <div className="flex space-x-2">
      <Tooltip text="Refresh">
        <button className="p-1 hover:text-indigo-600">
          <ArrowPathIcon className="h-5 w-5" />
        </button>
      </Tooltip>
      <Tooltip text="Explore">
        <button 
          className="p-1 hover:text-indigo-600"
          onClick={handleExplore}
        >
          <GlobeAltIcon className="h-5 w-5" />
        </button>
      </Tooltip>
      {showAll && (
        <Tooltip text="Generate Report">
          <button 
            className="p-1 hover:text-indigo-600"
            onClick={handleGenerateReport}
          >
            <DocumentDuplicateIcon className="h-5 w-5" />
          </button>
        </Tooltip>
      )}
    </div>
  );
}