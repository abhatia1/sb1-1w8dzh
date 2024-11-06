import React, { useState } from 'react';

interface EngagementFormData {
  title: string;
  counterpartyId: string;
  startDate: string;
  endDate: string;
  budget: string;
  description: string;
  purpose: string;
  objectives: string[];
  scope: string;
  deliverables: string[];
}

interface Vendor {
  id: string;
  name: string;
  status: string;
}

const vendors: Vendor[] = [
  { id: 'VEN-001', name: 'TechGiant Inc.', status: 'Active' },
  { id: 'VEN-002', name: 'Global Services', status: 'Active' },
  { id: 'VEN-003', name: 'Startup XYZ', status: 'On Hold' },
  { id: 'VEN-004', name: 'Innovative Systems Co.', status: 'Completed' },
];

export function AddEngagementForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState<EngagementFormData>({
    title: '',
    counterpartyId: '',
    startDate: '',
    endDate: '',
    budget: '',
    description: '',
    purpose: '',
    objectives: [''],
    scope: '',
    deliverables: [''],
  });

  const [showNewVendor, setShowNewVendor] = useState(false);
  const [newVendorName, setNewVendorName] = useState('');

  const addObjective = () => {
    setFormData(prev => ({
      ...prev,
      objectives: [...prev.objectives, ''],
    }));
  };

  const addDeliverable = () => {
    setFormData(prev => ({
      ...prev,
      deliverables: [...prev.deliverables, ''],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  const handleCounterpartyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === 'new') {
      setShowNewVendor(true);
      setFormData(prev => ({ ...prev, counterpartyId: '' }));
    } else {
      setShowNewVendor(false);
      setFormData(prev => ({ ...prev, counterpartyId: value }));
    }
  };

  const handleNewVendorSubmit = () => {
    if (newVendorName.trim()) {
      // In a real app, this would be an API call
      const newVendorId = `VEN-${(vendors.length + 1).toString().padStart(3, '0')}`;
      vendors.push({
        id: newVendorId,
        name: newVendorName,
        status: 'Active'
      });
      setFormData(prev => ({ ...prev, counterpartyId: newVendorId }));
      setShowNewVendor(false);
      setNewVendorName('');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-20 mx-auto p-8 border w-full max-w-2xl shadow-lg rounded-md bg-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">New Engagement</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Engagement Title
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.title}
                onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Counterparty
              </label>
              {!showNewVendor ? (
                <select
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={formData.counterpartyId}
                  onChange={handleCounterpartyChange}
                >
                  <option value="">Select a counterparty</option>
                  {vendors.map(vendor => (
                    <option key={vendor.id} value={vendor.id}>
                      {vendor.name}
                    </option>
                  ))}
                  <option value="new">+ Add New Counterparty</option>
                </select>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter new counterparty name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    value={newVendorName}
                    onChange={e => setNewVendorName(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={handleNewVendorSubmit}
                    className="mt-1 px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowNewVendor(false);
                      setNewVendorName('');
                    }}
                    className="mt-1 px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.startDate}
                onChange={e => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.endDate}
                onChange={e => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Budget
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                required
                className="mt-1 block w-full pl-7 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.budget}
                onChange={e => setFormData(prev => ({ ...prev, budget: e.target.value }))}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.description}
              onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Purpose
            </label>
            <textarea
              required
              rows={2}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.purpose}
              onChange={e => setFormData(prev => ({ ...prev, purpose: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Objectives
            </label>
            {formData.objectives.map((objective, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={objective}
                  onChange={e => {
                    const newObjectives = [...formData.objectives];
                    newObjectives[index] = e.target.value;
                    setFormData(prev => ({ ...prev, objectives: newObjectives }));
                  }}
                />
                {index === formData.objectives.length - 1 && (
                  <button
                    type="button"
                    onClick={addObjective}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Scope
            </label>
            <textarea
              required
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.scope}
              onChange={e => setFormData(prev => ({ ...prev, scope: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deliverables
            </label>
            {formData.deliverables.map((deliverable, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={deliverable}
                  onChange={e => {
                    const newDeliverables = [...formData.deliverables];
                    newDeliverables[index] = e.target.value;
                    setFormData(prev => ({ ...prev, deliverables: newDeliverables }));
                  }}
                />
                {index === formData.deliverables.length - 1 && (
                  <button
                    type="button"
                    onClick={addDeliverable}
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md"
            >
              Create Engagement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}