import React from 'react';
import { Check, User, Users, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Personal Plan',
      subtitle: 'For you',
      icon: <User className="w-4 h-4" />,
      audience: 'Individual',
      price: '₹500',
      period: 'per month',
      billing: 'Billed monthly or annually. Cancel anytime.',
      buttonText: 'Start subscription',
      buttonColor: 'bg-[#2d2f92] hover:bg-[#23256e]',
      features: [
        'Access to 26,000+ top courses',
        'Certification prep',
        'Goal-focused recommendations',
        'AI-powered coding exercises'
      ]
    },
    {
      name: 'Team Plan',
      subtitle: 'For your team',
      icon: <Users className="w-4 h-4" />,
      audience: '2 to 50 people',
      price: '₹2,000',
      period: 'a month per user',
      billing: 'Billed annually. Cancel anytime.',
      buttonText: 'Start subscription',
      buttonColor: 'bg-[#2d2f92] hover:bg-[#23256e]',
      features: [
        'Access to 13,000+ top courses',
        'Certification prep',
        'Goal-focused recommendations',
        'AI-powered coding exercises',
        'Analytics and adoption reports'
      ]
    },
    {
      name: 'Enterprise Plan',
      subtitle: 'For your whole organization',
      icon: <Building2 className="w-4 h-4" />,
      audience: 'More than 20 people',
      price: 'Contact sales for pricing',
      period: '',
      billing: '',
      buttonText: 'Request a demo',
      buttonColor: 'bg-[#2d2f92] hover:bg-[#23256e]',
      features: [
        'Access to 30,000+ top courses',
        'Certification prep',
        'Goal-focused recommendations',
        'AI-powered coding exercises',
        'Advanced analytics and insights',
        'Dedicated customer success team',
        'International course collection featuring 15 languages',
        'Customizable content',
        'Hands-on tech training with add-on',
        'Strategic implementation services with add-on'
      ]
    }
  ];

  return (
    <div className="  -mt-15 py-12 md:py-16 lg:py-20  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Choose a plan for success
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Don't want to buy courses one by one? Pick a plan to help you, your team, or your organization achieve outcomes faster.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Header with gradient bar */}
              <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-500"></div>
              
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                {/* Plan Name */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    {plan.icon}
                    <span>{plan.audience}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  {plan.period ? (
                    <>
                      <div className="mb-2">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                      <p className="text-sm text-gray-600">{plan.billing}</p>
                    </>
                  ) : (
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">
                      {plan.price}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <Link to='/signin'
                  className={`${plan.buttonColor} text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 mb-6 w-full`}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Features List */}
                <div className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center">
                          <Check className="w-3 h-3 text-gray-700" />
                        </div>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compare Link */}
        <div className="text-center">
          <Link to='/signin' className="text-[#2d2f92] font-semibold hover:underline inline-flex items-center gap-1">
            Compare plans and features
            <span className="text-sm">↓</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;