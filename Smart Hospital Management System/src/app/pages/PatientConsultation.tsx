import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from '../components/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Input, Textarea } from '../components/Input';
import {
  ArrowLeft, User, Calendar, Heart, Activity, Pill,
  Plus, Trash2, Save, Printer, FileText
} from 'lucide-react';

interface Medicine {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
}

const commonMedicines = [
  'Paracetamol 500mg',
  'Ibuprofen 400mg',
  'Amoxicillin 500mg',
  'Azithromycin 250mg',
  'Cetirizine 10mg',
  'Pantoprazole 40mg',
  'Metformin 500mg',
  'Amlodipine 5mg',
  'Atorvastatin 10mg',
  'Levothyroxine 50mcg',
];

export function PatientConsultation() {
  const navigate = useNavigate();
  const { patientId } = useParams();
  const [activeTab, setActiveTab] = useState<'history' | 'consultation'>('consultation');

  const [diagnosis, setDiagnosis] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [notes, setNotes] = useState('');
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [currentMedicine, setCurrentMedicine] = useState({
    name: '',
    dosage: '',
    frequency: 'twice-daily',
    duration: '5 days',
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const patient = {
    id: patientId || 'NSR-HIMS-2026-1247',
    name: 'Rajesh Kumar',
    age: 45,
    gender: 'Male',
    bloodGroup: 'O+',
    phone: '+91 98765 43210',
    address: 'Bangalore, Karnataka',
    emergencyContact: '+91 98765 43211',
  };

  const medicalHistory = [
    { date: '2026-03-15', doctor: 'Dr. Priya', diagnosis: 'Common Cold', prescription: 'Paracetamol, Rest' },
    { date: '2026-01-20', doctor: 'Dr. Kumar', diagnosis: 'Hypertension', prescription: 'Amlodipine 5mg' },
    { date: '2025-11-10', doctor: 'Dr. Ramesh', diagnosis: 'Annual Checkup', prescription: 'Vitamins' },
  ];

  const vitalSigns = [
    { label: 'Blood Pressure', value: '120/80 mmHg', status: 'normal' },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal' },
    { label: 'Temperature', value: '98.6°F', status: 'normal' },
    { label: 'Weight', value: '75 kg', status: 'normal' },
  ];

  const handleMedicineNameChange = (value: string) => {
    setCurrentMedicine({ ...currentMedicine, name: value });
    if (value.length > 0) {
      const filtered = commonMedicines.filter(med =>
        med.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const addMedicine = () => {
    if (currentMedicine.name && currentMedicine.dosage) {
      setMedicines([
        ...medicines,
        {
          id: Date.now().toString(),
          ...currentMedicine,
        },
      ]);
      setCurrentMedicine({
        name: '',
        dosage: '',
        frequency: 'twice-daily',
        duration: '5 days',
      });
      setSuggestions([]);
    }
  };

  const removeMedicine = (id: string) => {
    setMedicines(medicines.filter(med => med.id !== id));
  };

  const handleSavePrescription = () => {
    const prescriptionId = `RX-${Date.now()}`;
    navigate(`/prescription/${prescriptionId}`);
  };

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => navigate('/doctor')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-foreground">Patient Consultation</h1>
                <p className="text-sm text-muted-foreground">{patient.name} • {patient.id}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Printer className="w-5 h-5" />
                Print
              </Button>
              <Button variant="primary" size="sm" onClick={handleSavePrescription}>
                <Save className="w-5 h-5" />
                Save & Generate Prescription
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Patient Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">Age / Gender</p>
                    <p className="text-foreground">{patient.age} years • {patient.gender}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Blood Group</p>
                    <p className="text-foreground">{patient.bloodGroup}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Phone</p>
                    <p className="text-foreground">{patient.phone}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Emergency</p>
                    <p className="text-foreground">{patient.emergencyContact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vital Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {vitalSigns.map((vital, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{vital.label}</p>
                        <p className="text-foreground">{vital.value}</p>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${vital.status === 'normal' ? 'bg-accent' : 'bg-warning'}`} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="flex gap-2 mb-6">
              <Button
                variant={activeTab === 'consultation' ? 'primary' : 'outline'}
                size="md"
                onClick={() => setActiveTab('consultation')}
              >
                Current Consultation
              </Button>
              <Button
                variant={activeTab === 'history' ? 'primary' : 'outline'}
                size="md"
                onClick={() => setActiveTab('history')}
              >
                Medical History
              </Button>
            </div>

            {activeTab === 'history' && (
              <Card>
                <CardHeader>
                  <CardTitle>Previous Consultations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicalHistory.map((record, index) => (
                      <div key={index} className="p-4 rounded-lg border border-border">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-foreground">{record.diagnosis}</p>
                          <span className="text-sm text-muted-foreground">{record.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">Doctor: {record.doctor}</p>
                        <p className="text-sm text-primary">Prescription: {record.prescription}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'consultation' && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Symptoms & Diagnosis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Textarea
                        label="Chief Complaints / Symptoms"
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                        placeholder="Describe patient's symptoms, duration, severity..."
                        rows={3}
                      />
                      <Input
                        label="Diagnosis"
                        value={diagnosis}
                        onChange={(e) => setDiagnosis(e.target.value)}
                        placeholder="Enter diagnosis"
                      />
                      <Textarea
                        label="Clinical Notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Additional observations, recommendations..."
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Prescription - Medicine Auto-Suggest</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="lg:col-span-2 relative">
                          <Input
                            label="Medicine Name"
                            value={currentMedicine.name}
                            onChange={(e) => handleMedicineNameChange(e.target.value)}
                            placeholder="Start typing medicine name..."
                          />
                          {suggestions.length > 0 && (
                            <div className="absolute top-full left-0 right-0 bg-card border border-border rounded-lg shadow-lg mt-1 max-h-48 overflow-y-auto z-10">
                              {suggestions.map((suggestion, index) => (
                                <div
                                  key={index}
                                  className="px-4 py-2 hover:bg-muted cursor-pointer"
                                  onClick={() => {
                                    setCurrentMedicine({ ...currentMedicine, name: suggestion });
                                    setSuggestions([]);
                                  }}
                                >
                                  <p className="text-foreground">{suggestion}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <Input
                          label="Dosage"
                          value={currentMedicine.dosage}
                          onChange={(e) => setCurrentMedicine({ ...currentMedicine, dosage: e.target.value })}
                          placeholder="e.g., 1 tablet"
                        />
                        <div className="flex items-end">
                          <Button variant="primary" size="md" className="w-full" onClick={addMedicine}>
                            <Plus className="w-5 h-5" />
                            Add
                          </Button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-1.5">
                          <label className="text-foreground">Frequency</label>
                          <select
                            value={currentMedicine.frequency}
                            onChange={(e) => setCurrentMedicine({ ...currentMedicine, frequency: e.target.value })}
                            className="px-4 py-2.5 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                          >
                            <option value="once-daily">Once daily</option>
                            <option value="twice-daily">Twice daily</option>
                            <option value="thrice-daily">Thrice daily</option>
                            <option value="as-needed">As needed</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-foreground">Duration</label>
                          <select
                            value={currentMedicine.duration}
                            onChange={(e) => setCurrentMedicine({ ...currentMedicine, duration: e.target.value })}
                            className="px-4 py-2.5 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                          >
                            <option value="3 days">3 days</option>
                            <option value="5 days">5 days</option>
                            <option value="7 days">7 days</option>
                            <option value="10 days">10 days</option>
                            <option value="14 days">14 days</option>
                            <option value="30 days">30 days</option>
                          </select>
                        </div>
                      </div>

                      {medicines.length > 0 && (
                        <div className="mt-6">
                          <h4 className="text-foreground mb-3">Prescribed Medicines</h4>
                          <div className="space-y-2">
                            {medicines.map((med) => (
                              <div
                                key={med.id}
                                className="flex items-center justify-between p-3 rounded-lg border border-border bg-muted/30"
                              >
                                <div>
                                  <p className="text-foreground">{med.name}</p>
                                  <p className="text-sm text-muted-foreground">
                                    {med.dosage} • {med.frequency} • {med.duration}
                                  </p>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeMedicine(med.id)}
                                >
                                  <Trash2 className="w-4 h-4 text-destructive" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
