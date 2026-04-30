import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import {
  Calendar, Users, Clock, Activity, Search,
  LogOut, Settings, Stethoscope, FileText, TrendingUp
} from 'lucide-react';

export function DoctorDashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: "Today's Patients", value: '12', icon: Users, color: 'bg-primary' },
    { label: 'Consultations Done', value: '8', icon: Stethoscope, color: 'bg-accent' },
    { label: 'Pending', value: '4', icon: Clock, color: 'bg-warning' },
    { label: 'Total This Week', value: '67', icon: TrendingUp, color: 'bg-secondary' },
  ];

  const todayAppointments = [
    {
      id: 'NSR-HIMS-2026-1247',
      name: 'Rajesh Kumar',
      age: 45,
      time: '09:00 AM',
      status: 'Waiting',
      reason: 'Follow-up checkup',
    },
    {
      id: 'NSR-HIMS-2026-1246',
      name: 'Priya Sharma',
      age: 32,
      time: '09:30 AM',
      status: 'Waiting',
      reason: 'Fever and cough',
    },
    {
      id: 'NSR-HIMS-2026-1245',
      name: 'Amit Patel',
      age: 58,
      time: '10:00 AM',
      status: 'Scheduled',
      reason: 'Diabetes management',
    },
    {
      id: 'NSR-HIMS-2026-1244',
      name: 'Sneha Reddy',
      age: 28,
      time: '10:30 AM',
      status: 'Scheduled',
      reason: 'General consultation',
    },
  ];

  const recentConsultations = [
    { id: 'NSR-HIMS-2026-1243', name: 'Vikram Singh', diagnosis: 'Hypertension', date: '2026-04-29' },
    { id: 'NSR-HIMS-2026-1242', name: 'Lakshmi Menon', diagnosis: 'Viral Infection', date: '2026-04-29' },
    { id: 'NSR-HIMS-2026-1241', name: 'Arjun Desai', diagnosis: 'Migraine', date: '2026-04-28' },
  ];

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-foreground">SmartHMS</h1>
                <p className="text-sm text-muted-foreground">Doctor Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-foreground">Dr. Ramesh Kumar</p>
                <p className="text-sm text-muted-foreground">General Physician</p>
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
        <div className="mb-8">
          <h2 className="text-foreground mb-2">Welcome, Dr. Ramesh</h2>
          <p className="text-muted-foreground">Today is Wednesday, April 30, 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground mb-1">{stat.label}</p>
                    <h3 className="text-foreground">{stat.value}</h3>
                  </div>
                  <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Today's Appointments</CardTitle>
                <span className="text-sm text-muted-foreground">12 patients scheduled</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {todayAppointments.map((apt) => (
                  <div
                    key={apt.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                    onClick={() => navigate(`/doctor/consultation/${apt.id}`)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center min-w-[70px]">
                        <p className="text-foreground">{apt.time.split(' ')[0]}</p>
                        <p className="text-xs text-muted-foreground">{apt.time.split(' ')[1]}</p>
                      </div>
                      <div>
                        <p className="text-foreground">{apt.name}</p>
                        <p className="text-sm text-muted-foreground">{apt.id} • Age: {apt.age}</p>
                        <p className="text-sm text-primary">{apt.reason}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs ${
                        apt.status === 'Waiting' ? 'bg-warning/10 text-warning' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {apt.status}
                      </span>
                      <Button variant="primary" size="sm">
                        Start Consultation
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Patient Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative mb-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Patient ID or Name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  />
                </div>
                <Button variant="primary" size="md" className="w-full">
                  Search Patient
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Consultations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentConsultations.map((consult) => (
                    <div key={consult.id} className="p-3 rounded-lg border border-border">
                      <p className="text-foreground">{consult.name}</p>
                      <p className="text-sm text-muted-foreground">{consult.id}</p>
                      <p className="text-sm text-primary mt-1">{consult.diagnosis}</p>
                      <p className="text-xs text-muted-foreground mt-1">{consult.date}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
