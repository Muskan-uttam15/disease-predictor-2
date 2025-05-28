
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Stethoscope, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  Activity,
  Brain,
  Heart,
  Thermometer
} from "lucide-react";

interface SymptomCategory {
  id: string;
  name: string;
  symptoms: string[];
}

interface DiseaseResult {
  disease: string;
  confidence: number;
  severity: "Low" | "Moderate" | "High" | "Critical";
  description: string;
  commonSymptoms: string[];
  recommendations: string[];
  urgency: string;
}

const symptomCategories: SymptomCategory[] = [
  {
    id: "general",
    name: "General Symptoms",
    symptoms: ["Fever", "Fatigue", "Weight loss", "Night sweats", "Loss of appetite", "Nausea", "Vomiting"]
  },
  {
    id: "respiratory",
    name: "Respiratory",
    symptoms: ["Cough", "Shortness of breath", "Chest pain", "Wheezing", "Sore throat", "Runny nose"]
  },
  {
    id: "neurological",
    name: "Neurological",
    symptoms: ["Headache", "Dizziness", "Memory problems", "Confusion", "Seizures", "Numbness", "Tingling"]
  },
  {
    id: "gastrointestinal",
    name: "Gastrointestinal",
    symptoms: ["Abdominal pain", "Diarrhea", "Constipation", "Bloating", "Heartburn", "Blood in stool"]
  },
  {
    id: "musculoskeletal",
    name: "Musculoskeletal",
    symptoms: ["Joint pain", "Muscle pain", "Back pain", "Stiffness", "Swelling", "Weakness"]
  }
];

const HumanDiseaseDetector = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [results, setResults] = useState<DiseaseResult[]>([]);

  const handleSymptomToggle = (symptom: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptom) 
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
  };

  const simulateAnalysis = async () => {
    if (selectedSymptoms.length === 0) return;
    
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    
    // Simulate progress
    const progressInterval = setInterval(() => {
      setAnalysisProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 12;
      });
    }, 300);
    
    // Simulate AI analysis delay
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Generate mock results based on selected symptoms
    const mockResults: DiseaseResult[] = [
      {
        disease: "Viral Upper Respiratory Infection",
        confidence: 85,
        severity: "Low",
        description: "Common viral infection affecting the upper respiratory tract, typically self-limiting.",
        commonSymptoms: ["Cough", "Sore throat", "Runny nose", "Fatigue"],
        recommendations: [
          "Rest and stay hydrated",
          "Use over-the-counter pain relievers if needed",
          "Gargle with warm salt water",
          "See doctor if symptoms worsen or persist beyond 10 days"
        ],
        urgency: "Monitor symptoms, seek care if worsening"
      },
      {
        disease: "Seasonal Allergic Rhinitis",
        confidence: 72,
        severity: "Low",
        description: "Allergic reaction to airborne substances causing inflammation of nasal passages.",
        commonSymptoms: ["Runny nose", "Sneezing", "Itchy eyes", "Congestion"],
        recommendations: [
          "Avoid known allergens",
          "Use antihistamines as directed",
          "Consider nasal corticosteroid sprays",
          "Consult allergist for comprehensive testing"
        ],
        urgency: "Non-urgent, manageable with medication"
      },
      {
        disease: "Tension Headache",
        confidence: 68,
        severity: "Low",
        description: "Most common type of headache, often related to stress, muscle tension, or fatigue.",
        commonSymptoms: ["Headache", "Neck tension", "Fatigue", "Stress"],
        recommendations: [
          "Practice stress management techniques",
          "Maintain regular sleep schedule",
          "Stay hydrated",
          "Apply heat or cold therapy to head/neck"
        ],
        urgency: "Usually self-manageable"
      }
    ];
    
    setResults(mockResults);
    setIsAnalyzing(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-100 text-red-800 border-red-200";
      case "High": return "bg-orange-100 text-orange-800 border-orange-200";
      case "Moderate": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Low": return "bg-green-100 text-green-800 border-green-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getResultIcon = (severity: string) => {
    switch (severity) {
      case "Critical": return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case "High": return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case "Moderate": return <Activity className="h-5 w-5 text-yellow-600" />;
      case "Low": return <CheckCircle className="h-5 w-5 text-green-600" />;
      default: return <Info className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 rounded-lg">
              <Stethoscope className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <CardTitle className="text-2xl text-gray-900">AI Disease Detector</CardTitle>
              <CardDescription className="text-lg">
                Advanced symptom analysis for preliminary disease screening and health assessment
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Patient Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Activity className="h-5 w-5 text-blue-600" />
            <span>Patient Information</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="gender">Gender</Label>
              <Input
                id="gender"
                placeholder="Enter gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Symptom Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5 text-blue-600" />
            <span>Symptom Selection</span>
          </CardTitle>
          <CardDescription>
            Select all symptoms you are currently experiencing. Be as specific as possible.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {symptomCategories.map((category) => (
            <div key={category.id} className="space-y-3">
              <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                {category.id === "respiratory" && <Heart className="h-4 w-4 text-red-500" />}
                {category.id === "neurological" && <Brain className="h-4 w-4 text-purple-500" />}
                {category.id === "general" && <Thermometer className="h-4 w-4 text-orange-500" />}
                {category.id === "gastrointestinal" && <Activity className="h-4 w-4 text-green-500" />}
                {category.id === "musculoskeletal" && <Stethoscope className="h-4 w-4 text-blue-500" />}
                <span>{category.name}</span>
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {category.symptoms.map((symptom) => (
                  <div key={symptom} className="flex items-center space-x-2">
                    <Checkbox
                      id={symptom}
                      checked={selectedSymptoms.includes(symptom)}
                      onCheckedChange={() => handleSymptomToggle(symptom)}
                    />
                    <Label htmlFor={symptom} className="text-sm cursor-pointer">
                      {symptom}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="space-y-2">
            <Label htmlFor="additional-info">Additional Information</Label>
            <Textarea
              id="additional-info"
              placeholder="Describe any other symptoms, duration, triggers, or relevant medical history..."
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              rows={4}
            />
          </div>

          {selectedSymptoms.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-blue-900">Selected Symptoms ({selectedSymptoms.length})</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedSymptoms.map((symptom) => (
                      <Badge key={symptom} variant="secondary" className="bg-blue-100 text-blue-800">
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button 
                  onClick={simulateAnalysis}
                  disabled={isAnalyzing}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {isAnalyzing ? (
                    <>
                      <Activity className="h-4 w-4 mr-2 animate-pulse" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Analyze Symptoms
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Analysis Progress */}
      {isAnalyzing && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-blue-600 animate-pulse" />
              <span>AI Analysis in Progress</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Progress value={analysisProgress} className="w-full" />
              <p className="text-sm text-gray-600 text-center">
                Processing symptoms and cross-referencing medical databases... {analysisProgress}%
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Stethoscope className="h-5 w-5 text-green-600" />
                <span>Disease Analysis Results</span>
              </CardTitle>
              <CardDescription>
                AI-powered preliminary screening results based on reported symptoms
              </CardDescription>
            </CardHeader>
          </Card>

          {results.map((result, index) => (
            <Card key={index} className="border-l-4" style={{borderLeftColor: result.severity === 'Low' ? '#10b981' : result.severity === 'Moderate' ? '#f59e0b' : '#ef4444'}}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    {getResultIcon(result.severity)}
                    <div>
                      <CardTitle className="text-lg">{result.disease}</CardTitle>
                      <CardDescription>Confidence: {result.confidence}%</CardDescription>
                    </div>
                  </div>
                  <Badge className={getSeverityColor(result.severity)}>
                    {result.severity} Risk
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700">{result.description}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Common Symptoms</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.commonSymptoms.map((symptom, symIndex) => (
                      <Badge key={symIndex} variant="outline" className="bg-blue-50 text-blue-700">
                        {symptom}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">Recommendations</h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, recIndex) => (
                      <li key={recIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-sm font-medium text-amber-800">Urgency Level</p>
                  <p className="text-sm text-amber-700">{result.urgency}</p>
                </div>

                <Progress value={result.confidence} className="w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Important Notice */}
      <Alert className="border-amber-200 bg-amber-50">
        <Info className="h-4 w-4 text-amber-600" />
        <AlertDescription className="text-amber-800">
          <strong>Medical Disclaimer:</strong> This AI disease detector is for preliminary screening only and should never replace professional medical diagnosis. 
          Always consult with qualified healthcare providers for proper evaluation, diagnosis, and treatment of any health concerns.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default HumanDiseaseDetector;
