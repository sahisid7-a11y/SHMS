import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import {
  User, Calendar, FileText, CreditCard, Download,
  LogOut, Settings, Activity, Pill, Heart
} from 'lucide-react';

export function PatientPortal() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'appointments' | 'prescriptions' | 'history' | 'bills'>('appointments');

  const patient = {
    id: 'NSR-HIMS-2026-1247',
    name: 'Rajesh Kumar',
    age: 45,
    gender: 'Male',
    bloodGroup: 'O+',
    phone: '+91 98765 43210',
    email: 'rajesh.kumar@email.com',
  };

  const appointments = [
    { date: '2026-05-05', time: '10:00 AM', doctor: 'Dr. Ramesh Kumar', department: 'General Medicine', status: 'Upcoming' },
    { date: '2026-04-30', time: '09:00 AM', doctor: 'Dr. Ramesh Kumar', department: 'General Medicine', status: 'Completed' },
    { date: '2026-04-15', time: '11:30 AM', doctor: 'Dr. Priya Sharma', department: 'Cardiology', status: 'Completed' },
  ];

  const prescriptions = [
    {
      id: 'RX-1714500000000',
      date: '2026-04-30',
      doctor: 'Dr. Ramesh Kumar',
      diagnosis: 'Acute Viral Infection',
      medicines: ['Paracetamol 500mg', 'Azithromycin 250mg', 'Cetirizine 10mg'],
    },
    {
      id: 'RX-1712000000000',
      date: '2026-04-15',
      doctor: 'Dr. Priya Sharma',
      diagnosis: 'Hypertension',
      medicines: ['Amlodipine 5mg', 'Atorvastatin 10mg'],
    },
  ];

  const medicalHistory = [
    { date: '2026-04-30', type: 'Consultation', doctor: 'Dr. Ramesh', details: 'Acute Viral Infection' },
    { date: '2026-04-15', type: 'Consultation', doctor: 'Dr. Priya', details: 'Hypertension Follow-up' },
    { date: '2026-03-20', type: 'Lab Test', doctor: 'Lab Services', details: 'Complete Blood Count' },
    { date: '2026-03-15', type: 'Consultation', doctor: 'Dr. Kumar', details: 'Annual Health Checkup' },
  ];

  const bills = [
    { id: 'INV-2026-1247', date: '2026-04-30', description: 'Consultation Fee', amount: '₹500', status: 'Paid' },
    { id: 'INV-2026-1246', date: '2026-04-15', description: 'Consultation + Lab Tests', amount: '₹1,200', status: 'Paid' },
    { id: 'INV-2026-1245', date: '2026-03-20', description: 'Lab Tests', amount: '₹800', status: 'Paid' },
  ];

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-foreground">SmartHMS</h1>
                <p className="text-sm text-muted-foreground">Patient Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-foreground">{patient.name}</p>
                <p className="text-sm text-muted-foreground">{patient.id}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-3">
                  <User className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-foreground mb-1">{patient.name}</h3>
                <p className="text-sm text-muted-foreground">{patient.id}</p>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Age</span>
                  <span className="text-foreground">{patient.age} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gender</span>
                  <span className="text-foreground">{patient.gender}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Blood Group</span>
                  <span className="text-foreground">{patient.bloodGroup}</span>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-muted-foreground mb-1">Phone</p>
                  <p className="text-foreground">{patient.phone}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Email</p>
                  <p className="text-foreground text-xs break-all">{patient.email}</p>
                </div>
              </div>
              <Button variant="outline" size="md" className="w-full mt-4">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          <div className="lg:col-span-3">
            <div className="flex gap-2 mb-6 flex-wrap">
              <Button
                variant={activeTab === 'appointments' ? 'primary' : 'outline'}
                size="md"
                onClick={() => setActiveTab('appointments')}
              >
                <Calendar className="w-5 h-5" />
                Appointments
              </Button>
              <Button
                variant={activeTab === 'prescriptions' ? 'primary' : 'outline'}
                size="md"
                onClick={() => setActiveTab('prescriptions')}
              >
                <Pill className="w-5 h-5" />
                Prescriptions
              </Button>
              <Button
                variant={activeTab === 'history' ? 'primary' : 'outline'}
                size="md"
                onClick={() => setActiveTab('history')}
              >
                <Activity className="w-5 h-5" />
                Medical History
              </Button>
              <Button
                variant={activeTab === 'bills' ? 'primary' : 'outline'}
                size="md"
                onClick={() => setActiveTab('bills')}
              >
                <CreditCard className="w-5 h-5" />
                Bills & Payments
              </Button>
            </div>

            {activeTab === 'appointments' && (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>My Appointments</CardTitle>
                    <Button variant="primary" size="sm">
                      Book New Appointment
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {appointments.map((apt, index) => (
                      <div key={index} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="text-foreground mb-1">{apt.doctor}</p>
                            <p className="text-sm text-muted-foreground">{apt.department}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            apt.status === 'Upcoming' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                          }`}>
                            {apt.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {apt.date}
                          </span>
                          <span>{apt.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'prescriptions' && (
              <Card>
                <CardHeader>
                  <CardTitle>My Prescriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {prescriptions.map((rx) => (
                      <div key={rx.id} className="p-4 rounded-lg border border-border">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <p className="text-foreground mb-1">{rx.diagnosis}</p>
                            <p className="text-sm text-muted-foreground">Dr. {rx.doctor}</p>
                            <p className="text-xs text-muted-foreground mt-1">{rx.date} • {rx.id}</p>
                          </div>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => navigate(`/prescription/${rx.id}`)}
                          >
                            <FileText className="w-4 h-4" />
                            View
                          </Button>
                        </div>
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <p className="text-sm text-muted-foreground mb-2">Prescribed Medicines:</p>
                          <div className="flex flex-wrap gap-2">
                            {rx.medicines.map((med, idx) => (
                              <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                {med}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'history' && (
              <Card>
                <CardHeader>
                  <CardTitle>Medical History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicalHistory.map((record, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-border">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          record.type === 'Consultation' ? 'bg-primary/10' : 'bg-accent/10'
                        }`}>
                          {record.type === 'Consultation' ? (
                            <Activity className="w-5 h-5 text-primary" />
                          ) : (
                            <FileText className="w-5 h-5 text-accent" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <div>
                              <p className="text-foreground">{record.type}</p>
                              <p className="text-sm text-muted-foreground">{record.doctor}</p>
                            </div>
                            <span className="text-sm text-muted-foreground">{record.date}</span>
                          </div>
                          <p className="text-sm text-primary">{record.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeTab === 'bills' && (
              <Card>
                <CardHeader>
                  <CardTitle>Bills & Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bills.map((bill) => (
                      <div key={bill.id} className="flex items-center justify-between p-4 rounded-lg border border-border">
                        <div>
                          <p className="text-foreground mb-1">{bill.description}</p>
                          <p className="text-sm text-muted-foreground">{bill.id} • {bill.date}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-foreground">{bill.amount}</p>
                            <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">
                              {bill.status}
                            </span>
                          </div>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
