
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Hospital, Phone, Ambulance } from "lucide-react";

const EmergencyContact = () => {
  const emergencyNumbers = [
    {
      country: "United States",
      emergency: "911",
      poison: "1-800-222-1222",
      crisis: "988"
    },
    {
      country: "United Kingdom",
      emergency: "999",
      poison: "111",
      crisis: "116 123"
    },
    {
      country: "Canada",
      emergency: "911",
      poison: "1-844-764-7669",
      crisis: "1-833-456-4566"
    },
    {
      country: "Australia",
      emergency: "000",
      poison: "13 11 26",
      crisis: "13 11 14"
    }
  ];

  const emergencySymptoms = [
    "Trouble breathing or shortness of breath",
    "Persistent pain or pressure in the chest",
    "New confusion",
    "Inability to wake or stay awake",
    "Bluish lips or face",
    "Severe persistent vomiting",
    "Signs of severe dehydration"
  ];

  const hospitalResources = [
    {
      type: "Emergency Room",
      when: "Life-threatening symptoms",
      description: "For immediate, severe medical emergencies",
      action: "Call 911 or go immediately"
    },
    {
      type: "Urgent Care",
      when: "Non-life-threatening but urgent",
      description: "For symptoms that need prompt attention",
      action: "Call ahead or visit"
    },
    {
      type: "Telehealth",
      when: "Medical consultation needed",
      description: "For guidance and assessment",
      action: "Contact your healthcare provider"
    },
    {
      type: "COVID-19 Hotline",
      when: "COVID-specific questions",
      description: "For testing, guidelines, and support",
      action: "Call local health department"
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Hospital className="h-6 w-6 text-red-600" />
            <span>Emergency Resources & Contacts</span>
          </CardTitle>
          <CardDescription>
            Important emergency contacts and when to seek immediate medical attention for COVID-19.
          </CardDescription>
        </CardHeader>
      </Card>

      <Alert className="border-red-200 bg-red-50">
        <Ambulance className="h-4 w-4 text-red-600" />
        <AlertDescription className="text-red-800">
          <strong>Call Emergency Services Immediately if you experience:</strong>
          <ul className="mt-2 space-y-1">
            {emergencySymptoms.map((symptom, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-red-600">•</span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </AlertDescription>
      </Alert>

      {/* Emergency Numbers by Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {emergencyNumbers.map((country, index) => (
          <Card key={index} className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{country.country}</span>
                <Phone className="h-5 w-5 text-red-600" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Emergency Services:</span>
                  <Badge variant="destructive" className="text-lg font-bold px-3 py-1">
                    {country.emergency}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Poison Control:</span>
                  <Badge variant="outline" className="border-orange-200 text-orange-700">
                    {country.poison}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Crisis Helpline:</span>
                  <Badge variant="outline" className="border-blue-200 text-blue-700">
                    {country.crisis}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-900">Quick Emergency Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button 
              variant="destructive" 
              size="lg" 
              className="h-16 text-lg font-semibold"
              onClick={() => window.open('tel:911')}
            >
              <Phone className="h-6 w-6 mr-2" />
              Call 911
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-16 text-lg border-blue-200 text-blue-700 hover:bg-blue-50"
              onClick={() => window.open('tel:988')}
            >
              <Phone className="h-6 w-6 mr-2" />
              Crisis Helpline
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="h-16 text-lg border-green-200 text-green-700 hover:bg-green-50"
              onClick={() => window.open('https://www.cdc.gov/coronavirus/2019-ncov/index.html', '_blank')}
            >
              <Hospital className="h-6 w-6 mr-2" />
              CDC Guidelines
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Healthcare Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hospitalResources.map((resource, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{resource.type}</CardTitle>
              <CardDescription>{resource.when}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-3">{resource.description}</p>
              <Badge variant="outline" className="bg-gray-50">
                {resource.action}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Preparation Checklist */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Preparedness Checklist</CardTitle>
          <CardDescription>Be prepared before an emergency occurs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Medical Information Ready</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>List of current medications</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Allergy information</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Emergency contact numbers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Insurance information</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Emergency Supplies</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Thermometer</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Basic medications (fever reducer, etc.)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Face masks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Hand sanitizer</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Reminders */}
      <Alert className="border-blue-200 bg-blue-50">
        <Hospital className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          <strong>Remember:</strong>
          <ul className="mt-2 space-y-1">
            <li>• Don't hesitate to call for help if you're concerned</li>
            <li>• Emergency rooms are prepared for COVID-19 patients</li>
            <li>• Wear a mask when seeking medical care</li>
            <li>• Call ahead when possible to inform about COVID-19 symptoms</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default EmergencyContact;
