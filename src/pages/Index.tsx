import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Thermometer,
  Hospital,
  Pill,
  Microscope,
  TestTube,
  Syringe,
  Bandage,
  Eye,
  Stethoscope,
  Shield,
  Heart,
  Activity,
  Menu,
} from "lucide-react";
import SymptomChecker from "@/components/SymptomChecker";
import PreventionGuide from "@/components/PreventionGuide";
import TreatmentInfo from "@/components/TreatmentInfo";
import EmergencyContact from "@/components/EmergencyContact";
import MRIDetection from "@/components/MRIDetection";
import EyeDiseaseDetection from "@/components/EyeDiseaseDetection";
import HumanDiseaseDetector from "@/components/HumanDiseaseDetector";

const Index = () => {
  const [activeTab, setActiveTab] = useState("checker");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-4 md:left-10 w-20 h-20 md:w-32 md:h-32 bg-blue-200 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-4 md:right-20 w-32 h-32 md:w-48 md:h-48 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 md:w-40 md:h-40 bg-indigo-200 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-blue-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="p-2 md:p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg md:rounded-xl shadow-lg">
                <Microscope className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  healthScanner
                </h1>
                <p className="text-xs md:text-sm text-gray-600 font-medium">
                  Comprehensive AI Medical Analysis & Disease Detection
                </p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Medical AI
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-3">
              <Button
                onClick={() => (window.location.href = "/dashboard")}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-xs md:text-sm px-3 md:px-4 py-2"
                size="sm"
              >
                <Hospital className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                Dashboard
              </Button>
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200 px-2 md:px-3 py-1 font-semibold text-xs"
              >
                <Shield className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                <span className="hidden sm:inline">WHO Guidelines 2024</span>
                <span className="sm:hidden">WHO 2024</span>
              </Badge>
              <div className="hidden md:flex items-center space-x-1 text-green-600">
                <Activity className="w-4 h-4" />
                <span className="text-sm font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 md:py-12 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-8 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100/80 rounded-full mb-4 md:mb-6">
            <Heart className="h-4 w-4 md:h-6 md:w-6 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold text-xs md:text-sm">
              Trusted by Healthcare Professionals
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-2">
            Your Comprehensive
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              AI Medical{" "}
            </span>
            Assistant
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
            Advanced AI-powered health screening including disease detection,
            COVID-19 symptom assessment, MRI tumor detection, eye disease
            analysis, prevention guidance, and treatment information from
            trusted medical sources.
          </p>
          <div className="mt-6 md:mt-8 flex justify-center">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-xs md:text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                24/7 Available
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                AI-Powered Analysis
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                WHO Approved
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-6 mb-8 md:mb-16">
          <Card className="text-center bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="pb-2 md:pb-3 p-3 md:p-6">
              <div className="p-2 md:p-3 bg-teal-500 rounded-lg md:rounded-xl w-fit mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Stethoscope className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xs md:text-sm font-semibold text-gray-700">
                Disease Detector
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 md:p-6 pt-0">
              <p className="text-sm md:text-2xl font-bold text-teal-600">
                AI-Powered
              </p>
              <p className="text-xs text-teal-500 mt-1 hidden md:block">
                Instant Analysis
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="pb-2 md:pb-3 p-3 md:p-6">
              <div className="p-2 md:p-3 bg-blue-500 rounded-lg md:rounded-xl w-fit mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                <TestTube className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xs md:text-sm font-semibold text-gray-700">
                Symptom Checker
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 md:p-6 pt-0">
              <p className="text-sm md:text-2xl font-bold text-blue-600">
                24/7
              </p>
              <p className="text-xs text-blue-500 mt-1 hidden md:block">
                Always Available
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="pb-2 md:pb-3 p-3 md:p-6">
              <div className="p-2 md:p-3 bg-purple-500 rounded-lg md:rounded-xl w-fit mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Microscope className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xs md:text-sm font-semibold text-gray-700">
                MRI Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 md:p-6 pt-0">
              <p className="text-sm md:text-2xl font-bold text-purple-600">
                Advanced
              </p>
              <p className="text-xs text-purple-500 mt-1 hidden md:block">
                Deep Learning
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-indigo-50 to-indigo-100 border-indigo-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="pb-2 md:pb-3 p-3 md:p-6">
              <div className="p-2 md:p-3 bg-indigo-500 rounded-lg md:rounded-xl w-fit mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xs md:text-sm font-semibold text-gray-700">
                Eye Disease Detection
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 md:p-6 pt-0">
              <p className="text-sm md:text-2xl font-bold text-indigo-600">
                Retinal AI
              </p>
              <p className="text-xs text-indigo-500 mt-1 hidden md:block">
                Precision Scan
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="pb-2 md:pb-3 p-3 md:p-6">
              <div className="p-2 md:p-3 bg-green-500 rounded-lg md:rounded-xl w-fit mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Bandage className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xs md:text-sm font-semibold text-gray-700">
                Prevention Tips
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 md:p-6 pt-0">
              <p className="text-sm md:text-2xl font-bold text-green-600">
                Evidence
              </p>
              <p className="text-xs text-green-500 mt-1 hidden md:block">
                Based Care
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="pb-2 md:pb-3 p-3 md:p-6">
              <div className="p-2 md:p-3 bg-orange-500 rounded-lg md:rounded-xl w-fit mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Pill className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xs md:text-sm font-semibold text-gray-700">
                Treatment Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 md:p-6 pt-0">
              <p className="text-sm md:text-2xl font-bold text-orange-600">
                WHO
              </p>
              <p className="text-xs text-orange-500 mt-1 hidden md:block">
                Approved
              </p>
            </CardContent>
          </Card>

          <Card className="text-center bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <CardHeader className="pb-2 md:pb-3 p-3 md:p-6">
              <div className="p-2 md:p-3 bg-red-500 rounded-lg md:rounded-xl w-fit mx-auto mb-2 md:mb-3 group-hover:scale-110 transition-transform duration-300">
                <Hospital className="h-4 w-4 md:h-6 md:w-6 text-white" />
              </div>
              <CardTitle className="text-xs md:text-sm font-semibold text-gray-700">
                Emergency Help
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3 md:p-6 pt-0">
              <p className="text-sm md:text-2xl font-bold text-red-600">
                Instant
              </p>
              <p className="text-xs text-red-500 mt-1 hidden md:block">
                Access
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-xl border border-white/20 p-3 md:p-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-7 bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-lg md:rounded-xl p-1 md:p-2 gap-0.5 md:gap-1 h-auto">
              <TabsTrigger
                value="disease"
                className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-teal-700 rounded-md md:rounded-lg transition-all duration-200 hover:bg-white/50 p-2 text-xs"
              >
                <Stethoscope className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:hidden">Disease</span>
                <span className="hidden md:inline">Disease Detector</span>
              </TabsTrigger>
              <TabsTrigger
                value="checker"
                className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-700 rounded-md md:rounded-lg transition-all duration-200 hover:bg-white/50 p-2 text-xs"
              >
                <Thermometer className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:hidden">COVID</span>
                <span className="hidden md:inline">COVID Checker</span>
              </TabsTrigger>
              <TabsTrigger
                value="mri"
                className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-purple-700 rounded-md md:rounded-lg transition-all duration-200 hover:bg-white/50 p-2 text-xs"
              >
                <Microscope className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:hidden">MRI</span>
                <span className="hidden md:inline">MRI Analysis</span>
              </TabsTrigger>
              <TabsTrigger
                value="eye"
                className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-indigo-700 rounded-md md:rounded-lg transition-all duration-200 hover:bg-white/50 p-2 text-xs"
              >
                <Eye className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:hidden">Eye</span>
                <span className="hidden md:inline">Eye Detection</span>
              </TabsTrigger>
              <TabsTrigger
                value="prevention"
                className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-green-700 rounded-md md:rounded-lg transition-all duration-200 hover:bg-white/50 p-2 text-xs"
              >
                <Syringe className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:hidden">Prevent</span>
                <span className="hidden md:inline">Prevention</span>
              </TabsTrigger>
              <TabsTrigger
                value="treatment"
                className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-orange-700 rounded-md md:rounded-lg transition-all duration-200 hover:bg-white/50 p-2 text-xs"
              >
                <Pill className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:hidden">Treat</span>
                <span className="hidden md:inline">Treatment</span>
              </TabsTrigger>
              <TabsTrigger
                value="emergency"
                className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-red-700 rounded-md md:rounded-lg transition-all duration-200 hover:bg-white/50 p-2 text-xs"
              >
                <Hospital className="h-3 w-3 md:h-4 md:w-4" />
                <span className="md:hidden">911</span>
                <span className="hidden md:inline">Emergency</span>
              </TabsTrigger>
            </TabsList>

            <div className="mt-4 md:mt-8">
              <TabsContent value="disease" className="animate-fade-in">
                <HumanDiseaseDetector />
              </TabsContent>
              <TabsContent value="checker" className="animate-fade-in">
                <SymptomChecker />
              </TabsContent>
              <TabsContent value="mri" className="animate-fade-in">
                <MRIDetection />
              </TabsContent>
              <TabsContent value="eye" className="animate-fade-in">
                <EyeDiseaseDetection />
              </TabsContent>
              <TabsContent value="prevention" className="animate-fade-in">
                <PreventionGuide />
              </TabsContent>
              <TabsContent value="treatment" className="animate-fade-in">
                <TreatmentInfo />
              </TabsContent>
              <TabsContent value="emergency" className="animate-fade-in">
                <EmergencyContact />
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Important Notice */}
        <Alert className="mt-8 md:mt-16 border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 shadow-lg rounded-xl backdrop-blur-sm">
          <div className="p-2 bg-amber-100 rounded-lg w-fit">
            <Pill className="h-4 w-4 md:h-5 md:w-5 text-amber-600" />
          </div>
          <AlertDescription className="text-amber-800 font-medium ml-4 text-sm md:text-base">
            <strong className="text-amber-900">Medical Disclaimer:</strong>{" "}
            These tools provide general health information and AI-assisted
            screening only. Always consult with healthcare professionals for
            proper medical diagnosis and treatment. In case of emergency, call
            your local emergency services immediately.
          </AlertDescription>
        </Alert>
      </main>
    </div>
  );
};

export default Index;
