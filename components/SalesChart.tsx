"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const salesData = [
  { month: 'Jan', sales: 12000, orders: 45 },
  { month: 'Feb', sales: 15000, orders: 52 },
  { month: 'Mar', sales: 18000, orders: 61 },
  { month: 'Apr', sales: 14000, orders: 48 },
  { month: 'May', sales: 22000, orders: 73 },
  { month: 'Jun', sales: 25000, orders: 85 },
  { month: 'Jul', sales: 28000, orders: 92 },
  { month: 'Aug', sales: 32000, orders: 108 },
  { month: 'Sep', sales: 29000, orders: 97 },
  { month: 'Oct', sales: 35000, orders: 115 },
  { month: 'Nov', sales: 38000, orders: 128 },
  { month: 'Dec', sales: 42000, orders: 142 },
];

export default function SalesChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip 
            formatter={(value: number, name: string) => [
              name === 'sales' ? `$${value.toLocaleString()}` : value,
              name === 'sales' ? 'Sales' : 'Orders'
            ]}
          />
          <Line 
            type="monotone" 
            dataKey="sales" 
            stroke="#3b82f6" 
            strokeWidth={2}
            name="Sales"
          />
          <Line 
            type="monotone" 
            dataKey="orders" 
            stroke="#10b981" 
            strokeWidth={2}
            name="Orders"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
} 