import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from '../components/Button';
import { Home, AlertCircle } from 'lucide-react';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-destructive/10 rounded-full mb-6">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>
        <h1 className="text-foreground mb-4">404 - Page Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" size="lg" onClick={() => navigate('/')}>
          <Home className="w-5 h-5" />
          Back to Home
        </Button>
      </div>
    </div>
  );
}
