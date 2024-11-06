import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon, DocumentTextIcon, ClipboardDocumentCheckIcon, ShieldCheckIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

// Mock vendor data
const mockVendor = {
  id: 'VEN-001',
  name: 'TechGiant Inc.',
  status: 'Active',
  type: 'Technology Services Provider',
  address: '123 Tech Avenue, Silicon Valley, CA 94025',
  contactPerson: 'Jane Smith',
  email: 'jane.smith@techgiant.com',
  phone: '+1 (555) 123-4567',
  startDate: '2024-01-15',
  documents: {
    sow: [
      { id: 1, name: 'SOW-2024-Q1.pdf', date: '2024-01-15' },
      { id: 2, name: 'SOW-2024-Q2.pdf', date: '2024-04-01' }
    ],
    sla: [
      { id: 1, name: 'SLA-2024.pdf', date: '2024-01-15' },
      { id: 2, name: 'SLA-Performance-Metrics.pdf', date: '2024-01-15' }
    ],
    assessments: [
      { id: 1, name: 'Security-Assessment-2024.pdf', date: '2024-01-10' },
      { id: 2, name: 'Performance-Review-Q1.pdf', date: '2024-03-31' }
    ]
  },
  riskAssessment: {
    securityScore: 85,
    complianceScore: 90,
    performanceScore: 88
  },
  services: [
    'Cloud Infrastructure',
    'Software Development',
    'Technical Support',
    'Consulting Services'
  ]
};

interface DocumentListProps {
  title: string;
  icon: React.ComponentType<any>;
  documents: Array<{ id: number; name: string; date: string }>;
}

function DocumentList({ title, icon: Icon, documents }: DocumentListProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center">
        <Icon className="h-5 w-5 mr-2 text-gray-500" />
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {documents.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                  <p className="text-xs text-gray-500">Added: {doc.date}</p>
                </div>
              </div>
              <button className="text-sm text-indigo-600 hover:text-indigo-800">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VendorPortal() {
  const { id } = useParams();
  const vendor = mockVendor; // In a real app, fetch vendor data based on ID

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{vendor.name}</h1>
                <div className="mt-1 text-sm text-gray-500">
                  <span className="mr-4">ID: {vendor.id}</span>
                  <span>Status: {vendor.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vendor Details */}
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex items-center text-gray-600 mb-4">
              <BuildingOfficeIcon className="h-5 w-5 mr-2" />
              <h2 className="text-lg font-medium">Vendor Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm"><span className="font-medium">Type:</span> {vendor.type}</p>
                <p className="text-sm mt-2"><span className="font-medium">Address:</span> {vendor.address}</p>
                <p className="text-sm mt-2"><span className="font-medium">Start Date:</span> {vendor.startDate}</p>
              </div>
              <div>
                <p className="text-sm"><span className="font-medium">Contact Person:</span> {vendor.contactPerson}</p>
                <p className="text-sm mt-2"><span className="font-medium">Email:</span> {vendor.email}</p>
                <p className="text-sm mt-2"><span className="font-medium">Phone:</span> {vendor.phone}</p>
              </div>
            </div>
          </div>

          {/* Risk Assessment */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center text-gray-600 mb-4">
              <ShieldCheckIcon className="h-5 w-5 mr-2" />
              <h2 className="text-lg font-medium">Risk Assessment</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500">Security Score</p>
                <div className="mt-2 flex items-end">
                  <p className="text-2xl font-bold text-gray-900">{vendor.riskAssessment.securityScore}%</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500">Compliance Score</p>
                <div className="mt-2 flex items-end">
                  <p className="text-2xl font-bold text-gray-900">{vendor.riskAssessment.complianceScore}%</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <p className="text-sm font-medium text-gray-500">Performance Score</p>
                <div className="mt-2 flex items-end">
                  <p className="text-2xl font-bold text-gray-900">{vendor.riskAssessment.performanceScore}%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Documents and Services */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Documents */}
            <div className="space-y-6">
              <DocumentList
                title="Statements of Work"
                icon={DocumentTextIcon}
                documents={vendor.documents.sow}
              />
              <DocumentList
                title="Service Level Agreements"
                icon={ClipboardDocumentCheckIcon}
                documents={vendor.documents.sla}
              />
              <DocumentList
                title="Vendor Assessments"
                icon={ShieldCheckIcon}
                documents={vendor.documents.assessments}
              />
            </div>

            {/* Right Column - Services and Additional Info */}
            <div className="space-y-6">
              {/* Services */}
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h2 className="text-lg font-medium">Services Provided</h2>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-1 gap-2">
                    {vendor.services.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 bg-gray-50 rounded-lg"
                      >
                        <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}