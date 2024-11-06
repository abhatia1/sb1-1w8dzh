import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Engagement } from '../types';

export function generatePDF(engagement: Engagement) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.width;

  // Title
  doc.setFontSize(20);
  doc.text('Engagement Report', pageWidth / 2, 20, { align: 'center' });

  // Basic Info
  doc.setFontSize(12);
  doc.text(`Engagement ID: ${engagement.id}`, 20, 40);
  doc.text(`Title: ${engagement.title}`, 20, 50);
  doc.text(`Vendor: ${engagement.vendor}`, 20, 60);
  doc.text(`Duration: ${engagement.timeframe.duration}`, 20, 70);
  doc.text(`Budget: $${parseInt(engagement.budget).toLocaleString()}`, 20, 80);

  // Description
  doc.setFontSize(14);
  doc.text('Description', 20, 100);
  doc.setFontSize(12);
  const descriptionLines = doc.splitTextToSize(engagement.description, pageWidth - 40);
  doc.text(descriptionLines, 20, 110);

  // Purpose
  doc.setFontSize(14);
  doc.text('Purpose', 20, 140);
  doc.setFontSize(12);
  const purposeLines = doc.splitTextToSize(engagement.purpose, pageWidth - 40);
  doc.text(purposeLines, 20, 150);

  // Scope
  doc.setFontSize(14);
  doc.text('Scope', 20, 180);
  doc.setFontSize(12);
  const scopeLines = doc.splitTextToSize(engagement.scope, pageWidth - 40);
  doc.text(scopeLines, 20, 190);

  // New page for objectives and deliverables
  doc.addPage();

  // Objectives
  doc.setFontSize(14);
  doc.text('Objectives', 20, 20);
  doc.autoTable({
    startY: 30,
    head: [['Objective', 'Status']],
    body: engagement.objectives.map(objective => [objective, 'Pending']),
    margin: { left: 20 },
    theme: 'grid'
  });

  // Deliverables
  const deliverableY = (doc as any).lastAutoTable.finalY + 20;
  doc.setFontSize(14);
  doc.text('Deliverables', 20, deliverableY);
  doc.autoTable({
    startY: deliverableY + 10,
    head: [['Deliverable', 'Status']],
    body: engagement.deliverables.map(deliverable => [deliverable, 'Pending']),
    margin: { left: 20 },
    theme: 'grid'
  });

  // Stakeholders
  const stakeholderY = (doc as any).lastAutoTable.finalY + 20;
  doc.setFontSize(14);
  doc.text('Key Stakeholders', 20, stakeholderY);
  doc.autoTable({
    startY: stakeholderY + 10,
    head: [['Name', 'Role']],
    body: engagement.stakeholders.map(stakeholder => [stakeholder.name, stakeholder.role]),
    margin: { left: 20 },
    theme: 'grid'
  });

  // Save the PDF
  doc.save(`engagement-report-${engagement.id}.pdf`);
}