import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Select } from '../components/Input';
import { Stethoscope, Lock, User } from 'lucide-react';

export function LoginPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState('receptionist');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'receptionist') navigate('/receptionist');
    else if (role === 'doctor') navigate('/doctor');
    else if (role === 'patient') navigate('/patient');
    else if (role === 'admin') navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
            <Stethoscope className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-foreground mb-2">SmartHMS</h1>
          <p className="text-muted-foreground">Smart Hospital Management System</p>
          <p className="text-sm text-muted-foreground mt-1">Empowering Healthcare Through Intelligent Digital Workflows</p>
        </div>

        <div className="bg-card rounded-2xl shadow-lg border border-border p-8">
          <h2 className="text-foreground mb-6">Sign In</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <Select
              label="Select Role"
              options={[
                { value: 'receptionist', label: 'Receptionist / Front Desk' },
                { value: 'doctor', label: 'Doctor / Clinician' },
                { value: 'patient', label: 'Patient' },
                { value: 'admin', label: 'Administrator' },
              ]}
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />

            <div>
              <label className="text-foreground mb-1.5 block">Username / Email</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Enter username or email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-input-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-input accent-primary" />
                <span className="text-muted-foreground">Remember me</span>
              </label>
              <a href="#" className="text-primary hover:underline">Forgot password?</a>
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p>For demo: Use any credentials with selected role</p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>© 2026 SmartHMS - NSR Institute of Technology</p>
          <p className="mt-1">Secure & HIPAA Compliant</p>
        </div>
      </div>
    </div>
  );
}
