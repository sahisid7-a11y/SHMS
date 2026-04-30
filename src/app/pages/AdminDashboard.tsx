import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../components/Card';
import {
  Users, Stethoscope, Calendar, TrendingUp, Activity,
  LogOut, Settings, DollarSign, Clock, Award, AlertCircle
} from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export function AdminDashboard() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Patients', value: '1,247', change: '+12%', icon: Users, color: 'bg-primary' },
    { label: 'Active Doctors', value: '24', change: '+2', icon: Stethoscope, color: 'bg-accent' },
    { label: "Today's Appointments", value: '87', change: '+8%', icon: Calendar, color: 'bg-warning' },
    { label: 'Revenue (Month)', value: '₹8.4L', change: '+15%', icon: DollarSign, color: 'bg-secondary' },
  ];

  const dailyPatients = [
    { day: 'Mon', patients: 65 },
    { day: 'Tue', patients: 78 },
    { day: 'Wed', patients: 82 },
    { day: 'Thu', patients: 91 },
    { day: 'Fri', patients: 87 },
    { day: 'Sat', patients: 72 },
    { day: 'Sun', patients: 45 },
  ];

  const departmentStats = [
    { department: 'General', patients: 342 },
    { department: 'Cardiology', patients: 156 },
    { department: 'Orthopedics', patients: 189 },
    { department: 'Pediatrics', patients: 234 },
    { department: 'Dermatology', patients: 98 },
  ];

  const conditionDistribution = [
    { name: 'Fever & Infection', value: 324, color: '#005EB8' },
    { name: 'Hypertension', value: 256, color: '#00A651' },
    { name: 'Diabetes', value: 198, color: '#F59E0B' },
    { name: 'Respiratory', value: 167, color: '#C8102E' },
    { name: 'Others', value: 302, color: '#475569' },
  ];

  const topDoctors = [
    { name: 'Dr. Ramesh Kumar', patients: 156, rating: 4.8, department: 'General Medicine' },
    { name: 'Dr. Priya Sharma', patients: 142, rating: 4.9, department: 'Cardiology' },
    { name: 'Dr. Amit Patel', patients: 138, rating: 4.7, department: 'Orthopedics' },
    { name: 'Dr. Sneha Reddy', patients: 129, rating: 4.8, department: 'Pediatrics' },
  ];

  const recentActivities = [
    { type: 'New Patient', detail: 'Rajesh Kumar registered', time: '5 mins ago' },
    { type: 'Appointment', detail: 'Dr. Ramesh completed consultation', time: '12 mins ago' },
    { type: 'Payment', detail: 'Invoice #1247 paid - ₹500', time: '18 mins ago' },
    { type: 'Prescription', detail: 'Digital prescription generated', time: '25 mins ago' },
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
                <p className="text-sm text-muted-foreground">Admin Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-foreground">Administrator</p>
                <p className="text-sm text-muted-foreground">NSRIT Hospital</p>
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
          <h2 className="text-foreground mb-2">Analytics Overview</h2>
          <p className="text-muted-foreground">Real-time hospital performance metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-muted-foreground mb-1">{stat.label}</p>
                    <h3 className="text-foreground">{stat.value}</h3>
                    <p className="text-sm text-accent mt-1">{stat.change} vs last month</p>
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
              <CardTitle>Daily Patient Trend (This Week)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyPatients}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="day" stroke="#475569" />
                  <YAxis stroke="#475569" />
                  <Tooltip />
                  <Line type="monotone" dataKey="patients" stroke="#005EB8" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <div className="flex-1">
                      <p className="text-foreground text-sm">{activity.type}</p>
                      <p className="text-xs text-muted-foreground">{activity.detail}</p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Department-wise Patient Load</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="department" stroke="#475569" />
                  <YAxis stroke="#475569" />
                  <Tooltip />
                  <Bar dataKey="patients" fill="#005EB8" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Medical Conditions</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={conditionDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={(entry) => entry.name}
                  >
                    {conditionDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Doctors (This Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topDoctors.map((doctor, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-foreground">{doctor.name}</p>
                      <p className="text-sm text-muted-foreground">{doctor.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-foreground">{doctor.patients} patients</p>
                    <div className="flex items-center gap-1 text-sm text-accent">
                      <Award className="w-4 h-4" />
                      {doctor.rating}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
