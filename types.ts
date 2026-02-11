import React from 'react';

export interface RoutePrice {
  id: string;
  from: string;
  to: string;
  price4Seat: string;
  price7Seat: string;
  distance: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // e.g., "Khách đi khám bệnh", "Về quê ăn tết"
  content: string;
  location: string;
  avatarUrl: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}