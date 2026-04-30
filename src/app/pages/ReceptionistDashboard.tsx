import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import { Input } from '../components/Input';
import {
  UserPlus, Calendar, Users, Clock, Search,
  LogOut, Menu, Activity, FileText, Settings
} from 'lucide-react';

export function ReceptionistDashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const stats = [
    { label: 'Total Patients', value: '1,247', icon: Users, color: 'bg-primary' },
    { label: "Today's Appointments", value: '28', icon: Calendar, color: 'bg-accent' },
    { label: 'Waiting Now', value: '7', icon: Clock, color: 'bg-warning' },
    { label: 'New Registrations', value: '12', icon: Activity, color: 'bg-secondary' },
  ];

  const recentPatients = [
    { id: 'NSR-HIMS-2026-1247', name: 'Rajesh Kumar', age: 45, phone: '+91 98765 43210', lastVisit: '2026-04-28' },
    { id: 'NSR-HIMS-2026-1246', name: 'Priya Sharma', age: 32, phone: '+91 98765 43211', lastVisit: '2026-04-27' },
    { id: 'NSR-HIMS-2026-1245', name: 'Amit Patel', age: 58, phone: '+91 98765 43212', lastVisit: '2026-04-26' },
    { id: 'NSR-HIMS-2026-1244', name: 'Sneha Reddy', age: 28, phone: '+91 98765 43213', lastVisit: '2026-04-25' },
  ];

  const todayAppointments = [
    { time: '09:00 AM', patient: 'Vikram Singh', doctor: 'Dr. Ramesh', status: 'Checked In' },
    { time: '09:30 AM', patient: 'Lakshmi Menon', doctor: 'Dr. Priya', status: 'Waiting' },
    { time: '10:00 AM', patient: 'Arjun Desai', doctor: 'Dr. Kumar', status: 'In Progress' },
    { time: '10:30 AM', patient: 'Kavya Iyer', doctor: 'Dr. Ramesh', status: 'Scheduled' },
  ];

  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: 'Inter, sans-serif' }}>
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-foreground">SmartHMS</h1>
                <p className="text-sm text-muted-foreground">Receptionist Portal</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
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
          <h2 className="text-foreground mb-2">Welcome, Receptionist</h2>
          <p className="text-muted-foreground">Manage patient registrations and appointments</p>
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
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => navigate('/receptionist/new-patient')}
                >
                  <UserPlus className="w-5 h-5" />
                  Register New Patient
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Calendar className="w-5 h-5" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <FileText className="w-5 h-5" />
                  Generate Reports
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Users className="w-5 h-5" />
                  View All Patients
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Patient Search</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by ID, name, phone..."
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
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Patients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPatients.map((patient) => (
                  <div key={patient.id} className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer">
                    <div>
                      <p className="text-foreground">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.id}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{patient.phone}</p>
                      <p className="text-xs text-muted-foreground">Last: {patient.lastVisit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Today's Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {todayAppointments.map((apt, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div className="flex items-center gap-3">
                      <div className="text-center">
                        <p className="text-foreground">{apt.time.split(' ')[0]}</p>
                        <p className="text-xs text-muted-foreground">{apt.time.split(' ')[1]}</p>
                      </div>
                      <div>
                        <p className="text-foreground">{apt.patient}</p>
                        <p className="text-sm text-muted-foreground">{apt.doctor}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      apt.status === 'Checked In' ? 'bg-accent/10 text-accent' :
                      apt.status === 'Waiting' ? 'bg-warning/10 text-warning' :
                      apt.status === 'In Progress' ? 'bg-primary/10 text-primary' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {apt.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
