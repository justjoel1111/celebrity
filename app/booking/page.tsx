'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, MapPin, Users, CreditCard, CheckCircle, Star, ArrowRight, ArrowLeft, Phone, Mail, Globe, Shield, Award, Music, Film, Tv, DollarSign, AlertCircle, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Alert, AlertDescription } from '@/components/ui/alert';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    celebrity: '',
    eventType: '',
    eventDate: '',
    eventTime: '',
    duration: '',
    venue: '',
    address: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
    attendees: '',
    budget: '',
    requirements: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    companyName: '',
    eventDescription: '',
    specialRequests: '',
    cateringNeeded: false,
    securityNeeded: false,
    transportationNeeded: false,
    accommodationNeeded: false,
    paymentMethod: '',
    agreeToTerms: false,
    marketingConsent: false,
  });

  const celebrities = [
    { 
      id: '1', 
      name: 'Taylor Swift', 
      price: '$500K+', 
      category: 'Music', 
      availability: 'Available',
      image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Global pop superstar with 200M+ albums sold',
      rating: 4.9,
      events: 150
    },
    { 
      id: '2', 
      name: 'Dwayne Johnson', 
      price: '$750K+', 
      category: 'Film', 
      availability: 'Limited',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Hollywood A-lister and highest-paid actor',
      rating: 4.8,
      events: 89
    },
    { 
      id: '3', 
      name: 'Ed Sheeran', 
      price: '$400K+', 
      category: 'Music', 
      availability: 'Available',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Singer-songwriter with billions of streams',
      rating: 4.9,
      events: 178
    },
    { 
      id: '4', 
      name: 'Emma Stone', 
      price: '$300K+', 
      category: 'Film', 
      availability: 'Available',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Academy Award-winning actress',
      rating: 4.7,
      events: 67
    },
    { 
      id: '5', 
      name: 'Oprah Winfrey', 
      price: '$1M+', 
      category: 'TV', 
      availability: 'Booked',
      image: 'https://images.pexels.com/photos/1438084/pexels-photo-1438084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Media mogul and inspirational speaker',
      rating: 5.0,
      events: 234
    },
    { 
      id: '6', 
      name: 'John Legend', 
      price: '$350K+', 
      category: 'Music', 
      availability: 'Available',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'EGOT winner and Grammy-nominated artist',
      rating: 4.8,
      events: 145
    },
  ];

  const eventTypes = [
    { value: 'corporate', label: 'Corporate Event', description: 'Company meetings, conferences, product launches' },
    { value: 'private', label: 'Private Party', description: 'Birthday parties, anniversaries, celebrations' },
    { value: 'wedding', label: 'Wedding', description: 'Wedding ceremonies and receptions' },
    { value: 'conference', label: 'Conference', description: 'Industry conferences and seminars' },
    { value: 'awards', label: 'Award Ceremony', description: 'Recognition events and galas' },
    { value: 'charity', label: 'Charity Gala', description: 'Fundraising events and charity functions' },
    { value: 'festival', label: 'Festival', description: 'Music festivals and cultural events' },
    { value: 'launch', label: 'Product Launch', description: 'New product introductions and reveals' },
    { value: 'other', label: 'Other', description: 'Custom event types' },
  ];

  const budgetRanges = [
    { value: '100k-250k', label: '$100K - $250K', description: 'Emerging artists and local celebrities' },
    { value: '250k-500k', label: '$250K - $500K', description: 'Established performers and TV personalities' },
    { value: '500k-1m', label: '$500K - $1M', description: 'A-list celebrities and major artists' },
    { value: '1m-2m', label: '$1M - $2M', description: 'Global superstars and legendary performers' },
    { value: '2m+', label: '$2M+', description: 'Ultra-premium talent and exclusive bookings' },
  ];

  const steps = [
    { number: 1, title: 'Event Details', description: 'Tell us about your event', icon: Calendar },
    { number: 2, title: 'Celebrity Selection', description: 'Choose your preferred celebrity', icon: Star },
    { number: 3, title: 'Additional Services', description: 'Extra services and requirements', icon: Shield },
    { number: 4, title: 'Contact Information', description: 'Your details for booking', icon: Users },
    { number: 5, title: 'Review & Payment', description: 'Confirm and complete booking', icon: CreditCard },
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Booking submitted:', formData);
    // Handle form submission
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Music':
        return Music;
      case 'Film':
        return Film;
      case 'TV':
        return Tv;
      default:
        return Star;
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available':
        return 'bg-green-500';
      case 'Limited':
        return 'bg-yellow-500';
      case 'Booked':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const selectedCelebrity = celebrities.find(c => c.id === formData.celebrity);
  
  // Get current step's icon component
  const CurrentStepIcon = steps[step - 1].icon;

  return (
    <div className="min-h-screen page-background pt-16">
      {/* Hero Section */}
      <section className="py-20 section-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold font-playfair mb-6">
              <span className="gradient-text">Book Your Celebrity</span>
            </h1>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Complete our comprehensive booking process to secure your preferred celebrity for your event. 
              Our expert team will handle all the details to ensure a flawless experience.
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12 overflow-x-auto">
            <div className="flex items-center space-x-2 sm:space-x-4 min-w-max px-4">
              {steps.map((stepInfo, index) => (
                <div key={stepInfo.number} className="flex items-center">
                  <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'mr-2 sm:mr-4' : ''}`}>
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                      step >= stepInfo.number
                        ? 'bg-yellow-500 border-yellow-500 text-black'
                        : 'border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                    }`}>
                      {step > stepInfo.number ? (
                        <CheckCircle className="h-6 w-6" />
                      ) : (
                        React.createElement(stepInfo.icon, { className: "h-6 w-6" })
                      )}
                    </div>
                    <div className="mt-2 text-center">
                      <div className={`text-sm font-medium ${
                        step >= stepInfo.number ? 'text-yellow-500' : 'text-muted'
                      }`}>
                        {stepInfo.title}
                      </div>
                      <div className="text-xs text-muted hidden sm:block">{stepInfo.description}</div>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 sm:w-12 h-px ${
                      step > stepInfo.number ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-600'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="luxury-card">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary flex items-center">
                <CurrentStepIcon className="h-6 w-6 mr-2 text-yellow-500" />
                {steps[step - 1].title}
              </CardTitle>
              <p className="text-secondary">{steps[step - 1].description}</p>
            </CardHeader>
            <CardContent className="space-y-8">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div>
                    <Label htmlFor="eventType" className="text-primary text-lg font-medium mb-4 block">Event Type</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {eventTypes.map(type => (
                        <div
                          key={type.value}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.eventType === type.value
                              ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-500/10'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                          onClick={() => handleInputChange('eventType', type.value)}
                        >
                          <h3 className="font-medium text-primary mb-1">{type.label}</h3>
                          <p className="text-sm text-secondary">{type.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="eventDate" className="text-primary">Event Date</Label>
                      <Input
                        id="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={(e) => handleInputChange('eventDate', e.target.value)}
                        className="mt-2"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventTime" className="text-primary">Event Time</Label>
                      <Input
                        id="eventTime"
                        type="time"
                        value={formData.eventTime}
                        onChange={(e) => handleInputChange('eventTime', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="duration" className="text-primary">Duration (hours)</Label>
                      <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 hour</SelectItem>
                          <SelectItem value="1.5">1.5 hours</SelectItem>
                          <SelectItem value="2">2 hours</SelectItem>
                          <SelectItem value="3">3 hours</SelectItem>
                          <SelectItem value="4">4 hours</SelectItem>
                          <SelectItem value="6">6 hours</SelectItem>
                          <SelectItem value="8">8 hours (Full day)</SelectItem>
                          <SelectItem value="custom">Custom duration</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="attendees" className="text-primary">Expected Attendees</Label>
                      <Input
                        id="attendees"
                        type="number"
                        placeholder="e.g., 500"
                        value={formData.attendees}
                        onChange={(e) => handleInputChange('attendees', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="venue" className="text-primary">Venue Information</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <Input
                        placeholder="Venue name"
                        value={formData.venue}
                        onChange={(e) => handleInputChange('venue', e.target.value)}
                      />
                      <Input
                        placeholder="Street address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                      <Input
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                      />
                      <Input
                        placeholder="State/Province"
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                      />
                      <Input
                        placeholder="Country"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                      />
                      <Input
                        placeholder="ZIP/Postal Code"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="eventDescription" className="text-primary">Event Description</Label>
                    <Textarea
                      id="eventDescription"
                      placeholder="Describe your event, its purpose, and what you hope to achieve..."
                      value={formData.eventDescription}
                      onChange={(e) => handleInputChange('eventDescription', e.target.value)}
                      className="mt-2"
                      rows={4}
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div>
                    <Label className="text-primary text-lg font-medium mb-4 block">Budget Range</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {budgetRanges.map((budget) => (
                        <div
                          key={budget.value}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.budget === budget.value
                              ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-500/10'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                          onClick={() => handleInputChange('budget', budget.value)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-bold text-primary">{budget.label}</h3>
                            <DollarSign className="h-5 w-5 text-yellow-500" />
                          </div>
                          <p className="text-sm text-secondary">{budget.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-primary text-lg font-medium mb-4 block">Select Celebrity</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {celebrities.map((celebrity) => {
                        const CategoryIcon = getCategoryIcon(celebrity.category);
                        return (
                          <div
                            key={celebrity.id}
                            className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                              formData.celebrity === celebrity.id
                                ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-500/10'
                                : celebrity.availability === 'Booked'
                                ? 'border-gray-200 dark:border-gray-700 opacity-50 cursor-not-allowed'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                            onClick={() => celebrity.availability !== 'Booked' && handleInputChange('celebrity', celebrity.id)}
                          >
                            <div className="flex items-start space-x-4">
                              <img
                                src={celebrity.image}
                                alt={celebrity.name}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <h3 className="text-lg font-semibold text-primary">{celebrity.name}</h3>
                                  <div className="flex items-center space-x-2">
                                    <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                                      <CategoryIcon className="h-3 w-3 mr-1" />
                                      {celebrity.category}
                                    </Badge>
                                    <div className={`w-3 h-3 rounded-full ${getAvailabilityColor(celebrity.availability)}`} />
                                  </div>
                                </div>
                                <p className="text-sm text-secondary mb-3">{celebrity.description}</p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-4 text-sm text-secondary">
                                    <div className="flex items-center space-x-1">
                                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                      <span>{celebrity.rating}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                      <Calendar className="h-4 w-4" />
                                      <span>{celebrity.events} events</span>
                                    </div>
                                  </div>
                                  <span className="text-yellow-600 font-bold">{celebrity.price}</span>
                                </div>
                                <Badge 
                                  className={`mt-2 ${
                                    celebrity.availability === 'Available' 
                                      ? 'bg-green-500' 
                                      : celebrity.availability === 'Limited'
                                      ? 'bg-yellow-500'
                                      : 'bg-red-500'
                                  } text-white`}
                                >
                                  {celebrity.availability}
                                </Badge>
                                {formData.celebrity === celebrity.id && (
                                  <div className="mt-3 flex items-center">
                                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                                    <span className="text-yellow-600 font-medium">Selected</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div>
                    <Label className="text-primary text-lg font-medium mb-4 block">Additional Services</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Checkbox
                            id="catering"
                            checked={formData.cateringNeeded}
                            onCheckedChange={(checked) => handleInputChange('cateringNeeded', checked)}
                          />
                          <div>
                            <Label htmlFor="catering" className="text-primary font-medium">Premium Catering</Label>
                            <p className="text-sm text-secondary">Full-service catering for your event</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Checkbox
                            id="security"
                            checked={formData.securityNeeded}
                            onCheckedChange={(checked) => handleInputChange('securityNeeded', checked)}
                          />
                          <div>
                            <Label htmlFor="security" className="text-primary font-medium">Security Services</Label>
                            <p className="text-sm text-secondary">Professional security and crowd management</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Checkbox
                            id="transportation"
                            checked={formData.transportationNeeded}
                            onCheckedChange={(checked) => handleInputChange('transportationNeeded', checked)}
                          />
                          <div>
                            <Label htmlFor="transportation" className="text-primary font-medium">Transportation</Label>
                            <p className="text-sm text-secondary">Luxury transportation arrangements</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <Checkbox
                            id="accommodation"
                            checked={formData.accommodationNeeded}
                            onCheckedChange={(checked) => handleInputChange('accommodationNeeded', checked)}
                          />
                          <div>
                            <Label htmlFor="accommodation" className="text-primary font-medium">Accommodation</Label>
                            <p className="text-sm text-secondary">5-star hotel arrangements</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests" className="text-primary">Special Requests & Requirements</Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Any special requirements, dietary restrictions, technical needs, or specific requests..."
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      className="mt-2"
                      rows={6}
                    />
                  </div>

                  <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Our team will review your requirements and provide a detailed quote including all additional services. 
                      Premium services may affect the final pricing.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="contactName" className="text-primary">Full Name *</Label>
                      <Input
                        id="contactName"
                        placeholder="John Doe"
                        value={formData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactEmail" className="text-primary">Email Address *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.contactEmail}
                        onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="contactPhone" className="text-primary">Phone Number *</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.contactPhone}
                        onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyName" className="text-primary">Company/Organization</Label>
                      <Input
                        id="companyName"
                        placeholder="Company Inc."
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                      />
                      <Label htmlFor="terms" className="text-primary">
                        I agree to the <a href="#" className="text-yellow-600 hover:underline">Terms of Service</a> and <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a> *
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="marketing"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => handleInputChange('marketingConsent', checked)}
                      />
                      <Label htmlFor="marketing" className="text-primary">
                        I would like to receive updates about new celebrities and special offers
                      </Label>
                    </div>
                  </div>

                  <Alert>
                    <Shield className="h-4 w-4" />
                    <AlertDescription>
                      Your information is protected with bank-level security. We never share your personal data with third parties.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-6">Booking Summary</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-secondary">Event Type:</span>
                          <span className="text-primary font-medium">
                            {eventTypes.find(t => t.value === formData.eventType)?.label || formData.eventType}
                          </span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-secondary">Date & Time:</span>
                          <span className="text-primary font-medium">{formData.eventDate} at {formData.eventTime}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-secondary">Duration:</span>
                          <span className="text-primary font-medium">{formData.duration} hours</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-secondary">Venue:</span>
                          <span className="text-primary font-medium">{formData.venue}, {formData.city}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-secondary">Attendees:</span>
                          <span className="text-primary font-medium">{formData.attendees}</span>
                        </div>
                        {selectedCelebrity && (
                          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-secondary">Celebrity:</span>
                            <span className="text-primary font-medium">{selectedCelebrity.name}</span>
                          </div>
                        )}
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-secondary">Budget Range:</span>
                          <span className="text-primary font-medium">
                            {budgetRanges.find(b => b.value === formData.budget)?.label || formData.budget}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-6">Contact Information</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-secondary">Name:</span>
                          <span className="text-primary font-medium">{formData.contactName}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-secondary">Email:</span>
                          <span className="text-primary font-medium">{formData.contactEmail}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                          <span className="text-secondary">Phone:</span>
                          <span className="text-primary font-medium">{formData.contactPhone}</span>
                        </div>
                        {formData.companyName && (
                          <div className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                            <span className="text-secondary">Company:</span>
                            <span className="text-primary font-medium">{formData.companyName}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-primary mb-4">Additional Services</h4>
                        <div className="space-y-2">
                          {formData.cateringNeeded && <div className="flex items-center text-green-600"><CheckCircle className="h-4 w-4 mr-2" />Premium Catering</div>}
                          {formData.securityNeeded && <div className="flex items-center text-green-600"><CheckCircle className="h-4 w-4 mr-2" />Security Services</div>}
                          {formData.transportationNeeded && <div className="flex items-center text-green-600"><CheckCircle className="h-4 w-4 mr-2" />Transportation</div>}
                          {formData.accommodationNeeded && <div className="flex items-center text-green-600"><CheckCircle className="h-4 w-4 mr-2" />Accommodation</div>}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-4">Payment Method</h3>
                    <RadioGroup value={formData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex items-center space-x-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <RadioGroupItem value="deposit" id="deposit" />
                          <Label htmlFor="deposit" className="text-primary">
                            <div>
                              <div className="font-medium">50% Deposit</div>
                              <div className="text-sm text-secondary">Pay 50% now, 50% before event</div>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <RadioGroupItem value="full" id="full" />
                          <Label htmlFor="full" className="text-primary">
                            <div>
                              <div className="font-medium">Full Payment</div>
                              <div className="text-sm text-secondary">Pay the full amount now</div>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                          <RadioGroupItem value="quote" id="quote" />
                          <Label htmlFor="quote" className="text-primary">
                            <div>
                              <div className="font-medium">Request Quote</div>
                              <div className="text-sm text-secondary">Get detailed pricing first</div>
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      This is a booking request. Our team will review your submission and contact you within 24 hours with availability confirmation and final pricing details.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}

              <div className="flex justify-between pt-8 border-t border-gray-200 dark:border-gray-700">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={step === 1}
                  className="flex items-center"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-secondary">
                    Step {step} of {steps.length}
                  </span>
                  <Button
                    onClick={step === 5 ? handleSubmit : nextStep}
                    className="premium-button flex items-center"
                    disabled={step === 5 && !formData.agreeToTerms}
                  >
                    {step === 5 ? 'Submit Booking Request' : 'Next Step'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}