"use client";
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";

const statsData = [
  {
    title: "Total Sales",
    value: "$156,789",
    change: "+12.5%",
    changeType: "positive",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Orders",
    value: "1,234",
    change: "+8.2%",
    changeType: "positive",
    icon: ShoppingCart,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Customers",
    value: "892",
    change: "+15.3%",
    changeType: "positive",
    icon: Users,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    title: "Growth",
    value: "23.4%",
    change: "+2.1%",
    changeType: "positive",
    icon: TrendingUp,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-sm font-medium ${
                    stat.changeType === "positive" ? "text-green-600" : "text-red-600"
                  }`}>
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">from last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor}`}>
                <IconComponent className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 