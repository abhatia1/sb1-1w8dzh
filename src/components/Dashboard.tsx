import React, { useState } from 'react';
import { TableHeader } from './TableHeader';
import { StatusBadge } from './StatusBadge';
import { ActionButtons } from './ActionButtons';
import { AddEngagementForm } from './AddEngagementForm';
import { Engagement } from '../types';

const engagements: Engagement[] = [
  {
    id: 'ENG-001',
    title: 'Digital Transformation',
    client: 'TechGiant Inc.',
    vendor: 'TechGiant Inc.',
    startDate: '15/01/2024',
    endDate: '15/12/2024',
    status: 'Active',
    budget: '250000',
    description: 'A comprehensive digital transformation project aimed at modernizing legacy systems.',
    purpose: 'To modernize existing systems and improve efficiency.',
    objectives: ['Cloud Migration', 'Process Automation', 'Security Enhancement'],
    deliverables: ['Migration Plan', 'Automated Workflows', 'Security Report'],
    scope: 'Full system modernization including infrastructure and applications.',
    stakeholders: [
      { name: 'John Smith', role: 'Project Manager' },
      { name: 'Sarah Johnson', role: 'Technical Lead' }
    ],
    timeframe: {
      duration: '12 months',
      progress: '0 months',
      remaining: '12 months'
    }
  },
];

const vendors = [
  { id: 'VEN-001', name: 'TechGiant Inc.', startDate: '15/01/2024', status: 'Active' },
  { id: 'VEN-002', name: 'Global Services', startDate: '15/01/2024', status: 'Active' },
  { id: 'VEN-003', name: 'Startup XYZ', startDate: '15/01/2024', status: 'On Hold' },
  { id: 'VEN-004', name: 'Innovative Systems Co.', startDate: '20/01/2024', status: 'Completed' },
];

export function Dashboard() {
  const [showAddEngagement, setShowAddEngagement] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6 space-y-8">
          {/* Engagements Section */}
          <div>
            <TableHeader 
              title="Engagements" 
              buttonText="Add New Engagement"
              onAddNew={() => setShowAddEngagement(true)}
            />
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Engagement ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {engagements.map((engagement) => (
                    <tr key={`${engagement.id}-${engagement.client}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {engagement.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {engagement.client}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {engagement.startDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={engagement.status as any} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <ActionButtons 
                          engagementId={engagement.id}
                          engagementData={engagement}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Vendors Section */}
          <div>
            <TableHeader 
              title="Vendors" 
              buttonText="Add New Vendor"
              onAddNew={() => {}}
            />
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vendor ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Vendor Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Start Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {vendors.map((vendor) => (
                    <tr key={`${vendor.id}-${vendor.name}`}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {vendor.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {vendor.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {vendor.startDate}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <StatusBadge status={vendor.status as any} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <ActionButtons showAll={false} vendorId={vendor.id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showAddEngagement && <AddEngagementForm onClose={() => setShowAddEngagement(false)} />}
    </div>
  );
}