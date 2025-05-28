
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import ContactPage from "@/components/ContactPage";
import ReviewsPage from "@/components/ReviewsPage";
import DoctorsPage from "@/components/DoctorsPage";
import MedicinePage from "@/components/MedicinePage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Activity, 
  Calendar, 
  Users, 
  TrendingUp,
  Heart,
  Brain,
  Stethoscope,
  ShoppingCart,
  Clock,
  Star
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "contact":
        return <ContactPage />;
      case "reviews":
        return <ReviewsPage />;
      case "doctors":
        return <DoctorsPage />;
      case "medicine":
        return <MedicinePage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {renderContent()}
    </DashboardLayout>
  );
};

const OverviewPage = () => {
  return (
    <div className="space-y-4 md:space-y-8">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Healthcare Dashboard</h1>
        <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
          Welcome to your comprehensive healthcare management system. Access all your health services in one place.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 md:p-6">
            <CardTitle className="text-xs md:text-sm font-medium text-blue-700">Total Appointments</CardTitle>
            <Calendar className="h-3 w-3 md:h-4 md:w-4 text-blue-600" />
          </CardHeader>
          <CardContent className="p-3 md:p-6 pt-0">
            <div className="text-lg md:text-2xl font-bold text-blue-900">24</div>
            <p className="text-xs text-blue-600">+2 from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 md:p-6">
            <CardTitle className="text-xs md:text-sm font-medium text-green-700">Active Prescriptions</CardTitle>
            <Heart className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
          </CardHeader>
          <CardContent className="p-3 md:p-6 pt-0">
            <div className="text-lg md:text-2xl font-bold text-green-900">8</div>
            <p className="text-xs text-green-600">2 refills needed</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 md:p-6">
            <CardTitle className="text-xs md:text-sm font-medium text-purple-700">Health Score</CardTitle>
            <Activity className="h-3 w-3 md:h-4 md:w-4 text-purple-600" />
          </CardHeader>
          <CardContent className="p-3 md:p-6 pt-0">
            <div className="text-lg md:text-2xl font-bold text-purple-900">92</div>
            <p className="text-xs text-purple-600">+5% improvement</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 md:p-6">
            <CardTitle className="text-xs md:text-sm font-medium text-orange-700">Total Doctors</CardTitle>
            <Users className="h-3 w-3 md:h-4 md:w-4 text-orange-600" />
          </CardHeader>
          <CardContent className="p-3 md:p-6 pt-0">
            <div className="text-lg md:text-2xl font-bold text-orange-900">12</div>
            <p className="text-xs text-orange-600">Across 8 specialties</p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
          <CardHeader className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 md:p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <Calendar className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-blue-700 text-sm md:text-base">Book Appointment</CardTitle>
                <CardDescription className="text-xs md:text-sm">Schedule with available doctors</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-sm">
              Find Available Slots
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
          <CardHeader className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 md:p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <ShoppingCart className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-green-700 text-sm md:text-base">Order Medicine</CardTitle>
                <CardDescription className="text-xs md:text-sm">Refill prescriptions online</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-sm">
              Browse Medicines
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer md:col-span-2 lg:col-span-1">
          <CardHeader className="p-4 md:p-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 md:p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <Stethoscope className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-purple-700 text-sm md:text-base">Health Checkup</CardTitle>
                <CardDescription className="text-xs md:text-sm">AI-powered health screening</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <Button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-sm">
              Start Screening
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="flex items-center text-sm md:text-base">
              <Clock className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-600" />
              Recent Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6 pt-0">
            {[
              { doctor: "Dr. Sarah Johnson", specialty: "Cardiology", date: "Today 2:00 PM", status: "confirmed" },
              { doctor: "Dr. Michael Chen", specialty: "Dermatology", date: "Tomorrow 9:00 AM", status: "pending" },
              { doctor: "Dr. Emily Davis", specialty: "Pediatrics", date: "Mon 4:30 PM", status: "confirmed" }
            ].map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900 text-sm md:text-base">{appointment.doctor}</p>
                  <p className="text-xs md:text-sm text-gray-600">{appointment.specialty}</p>
                  <p className="text-xs text-gray-500">{appointment.date}</p>
                </div>
                <Badge variant={appointment.status === "confirmed" ? "default" : "secondary"} className="text-xs">
                  {appointment.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
          <CardHeader className="p-4 md:p-6">
            <CardTitle className="flex items-center text-sm md:text-base">
              <Star className="h-4 w-4 md:h-5 md:w-5 mr-2 text-yellow-600" />
              Recent Reviews
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6 pt-0">
            {[
              { patient: "Anonymous", rating: 5, comment: "Excellent service! Dr. Johnson was very professional.", date: "2 days ago" },
              { patient: "J. Smith", rating: 4, comment: "Great experience, staff was friendly and helpful.", date: "1 week ago" },
              { patient: "M. Davis", rating: 5, comment: "Quick and efficient service. Highly recommend!", date: "2 weeks ago" }
            ].map((review, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900 text-sm md:text-base">{review.patient}</p>
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-xs md:text-sm text-gray-600 mb-1">{review.comment}</p>
                <p className="text-xs text-gray-500">{review.date}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
