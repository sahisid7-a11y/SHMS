import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from '../components/Button';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowLeft, Download, Printer, Stethoscope, MapPin,
  Phone, Mail, Calendar, User, Activity
} from 'lucide-react';

export function PrescriptionView() {
  const navigate = useNavigate();
  const { prescriptionId } = useParams();

  const prescription = {
    id: prescriptionId || 'RX-1714500000000',
    date: '2026-04-30',
    patient: {
      id: 'NSR-HIMS-2026-1247',
      name: 'Rajesh Kumar',
      age: 45,
      gender: 'Male',
      phone: '+91 98765 43210',
    },
    doctor: {
      name: 'Dr. Ramesh Kumar',
      qualification: 'MBBS, MD (General Medicine)',
      regNo: 'MCI-12345',
      phone: '+91 98765 00001',
      email: 'dr.ramesh@nsrit-hims.com',
    },
    hospital: {
      name: 'NSR Institute of Technology Hospital',
      address: 'NSRIT Campus, Bangalore, Karnataka - 560037',
      phone: '+91 80 1234 5678',
      email: 'hospital@nsrit.edu.in',
    },
    diagnosis: 'Acute Viral Infection with Fever',
    symptoms: 'Fever (102°F), Body ache, Headache, Fatigue',
    medicines: [
      { name: 'Paracetamol 500mg', dosage: '1 tablet', frequency: 'Thrice daily', duration: '5 days', instructions: 'After food' },
      { name: 'Azithromycin 250mg', dosage: '1 tablet', frequency: 'Once daily', duration: '5 days', instructions: 'Before food' },
      { name: 'Cetirizine 10mg', dosage: '1 tablet', frequency: 'Once daily', duration: '7 days', instructions: 'At bedtime' },
    ],
    notes: 'Adequate rest recommended. Stay hydrated. Follow-up if symptoms persist beyond 5 days.',
    followUp: '2026-05-07',
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    window.print();
  };

  const qrData = JSON.stringify({
    prescriptionId: prescription.id,
    patientId: prescription.patient.id,
    date: prescription.date,
    doctor: prescription.doctor.name,
    medicines: prescription.medicines.map(m => m.name),
  });

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="bg-card border-b border-border sticky top-0 z-10 print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-foreground">Digital Prescription</h1>
                <p className="text-sm text-muted-foreground">{prescription.id}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={handleDownload}>
                <Download className="w-5 h-5" />
                Download PDF
              </Button>
              <Button variant="primary" size="sm" onClick={handlePrint}>
                <Printer className="w-5 h-5" />
                Print
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:p-0">
        <div className="bg-card rounded-xl shadow-lg border border-border p-8 print:shadow-none print:border-0">
          <div className="border-b-2 border-primary pb-6 mb-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-foreground">{prescription.hospital.name}</h1>
                    <p className="text-sm text-muted-foreground">Smart Hospital Management System</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground space-y-1 ml-15">
                  <p className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {prescription.hospital.address}
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {prescription.hospital.phone}
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {prescription.hospital.email}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-primary/10 px-4 py-2 rounded-lg mb-2">
                  <p className="text-sm text-muted-foreground">Prescription ID</p>
                  <p className="text-primary">{prescription.id}</p>
                </div>
                <p className="text-sm text-muted-foreground flex items-center justify-end gap-1">
                  <Calendar className="w-4 h-4" />
                  {prescription.date}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-border">
            <div>
              <h3 className="text-foreground mb-3">Patient Information</h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{prescription.patient.name}</span>
                </p>
                <p className="text-muted-foreground ml-6">
                  {prescription.patient.age} years • {prescription.patient.gender}
                </p>
                <p className="text-muted-foreground ml-6">ID: {prescription.patient.id}</p>
                <p className="flex items-center gap-2 ml-6">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  {prescription.patient.phone}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-foreground mb-3">Doctor Information</h3>
              <div className="space-y-2 text-sm">
                <p className="text-foreground">{prescription.doctor.name}</p>
                <p className="text-muted-foreground">{prescription.doctor.qualification}</p>
                <p className="text-muted-foreground">Reg. No: {prescription.doctor.regNo}</p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  {prescription.doctor.phone}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="text-foreground mb-3">Clinical Assessment</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Diagnosis</p>
                <p className="text-foreground">{prescription.diagnosis}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Symptoms</p>
                <p className="text-foreground">{prescription.symptoms}</p>
              </div>
            </div>
          </div>

          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="text-foreground mb-4">Rx - Prescribed Medicines</h3>
            <div className="space-y-3">
              {prescription.medicines.map((med, index) => (
                <div key={index} className="bg-muted/30 p-4 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-foreground">{index + 1}. {med.name}</h4>
                    <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {med.duration}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Dosage</p>
                      <p className="text-foreground">{med.dosage}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Frequency</p>
                      <p className="text-foreground">{med.frequency}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Instructions</p>
                      <p className="text-foreground">{med.instructions}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6 pb-6 border-b border-border">
            <h3 className="text-foreground mb-2">Additional Notes</h3>
            <p className="text-muted-foreground">{prescription.notes}</p>
            <p className="text-sm text-primary mt-2">Follow-up Date: {prescription.followUp}</p>
          </div>

          <div className="flex items-end justify-between">
            <div>
              <div className="bg-muted/50 p-3 rounded-lg inline-block">
                <QRCodeSVG value={qrData} size={120} level="H" />
              </div>
              <p className="text-xs text-muted-foreground mt-2 max-w-[120px]">
                Scan for digital verification
              </p>
            </div>

            <div className="text-right">
              <div className="mb-4">
                <div className="w-48 border-b-2 border-foreground mb-2"></div>
                <p className="text-foreground">{prescription.doctor.name}</p>
                <p className="text-sm text-muted-foreground">{prescription.doctor.qualification}</p>
                <p className="text-sm text-muted-foreground">Reg. No: {prescription.doctor.regNo}</p>
              </div>
              <p className="text-xs text-muted-foreground">Doctor's Digital Signature</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <div className="bg-accent/5 border-l-4 border-accent p-4 rounded">
              <p className="text-sm text-foreground">
                <strong>Important:</strong> This is a digitally generated prescription. For any clarifications, please contact the hospital.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
