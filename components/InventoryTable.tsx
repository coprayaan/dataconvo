"use client";
import { Package, AlertTriangle, CheckCircle } from "lucide-react";

const inventoryData = [
  { id: 1, name: "Laptop Pro", sku: "LP001", quantity: 45, price: 1299.99, status: "In Stock" },
  { id: 2, name: "Wireless Mouse", sku: "WM002", quantity: 12, price: 29.99, status: "Low Stock" },
  { id: 3, name: "Mechanical Keyboard", sku: "MK003", quantity: 0, price: 149.99, status: "Out of Stock" },
  { id: 4, name: "USB-C Cable", sku: "UC004", quantity: 78, price: 19.99, status: "In Stock" },
  { id: 5, name: "Monitor 27\"", sku: "MN005", quantity: 8, price: 299.99, status: "Low Stock" },
  { id: 6, name: "Webcam HD", sku: "WC006", quantity: 23, price: 89.99, status: "In Stock" },
  { id: 7, name: "Bluetooth Speaker", sku: "BS007", quantity: 0, price: 79.99, status: "Out of Stock" },
  { id: 8, name: "Gaming Headset", sku: "GH008", quantity: 15, price: 129.99, status: "Low Stock" },
];

export default function InventoryTable() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "In Stock":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Low Stock":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "Out of Stock":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Package className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "text-green-600 bg-green-100";
      case "Low Stock":
        return "text-yellow-600 bg-yellow-100";
      case "Out of Stock":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Inventory Management</h3>
        <Package className="w-5 h-5 text-gray-500" />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                SKU
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {inventoryData.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{item.sku}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.quantity}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">${item.price}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(item.status)}
                    <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 