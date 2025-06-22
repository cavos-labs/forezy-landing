'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Shield, 
  Trophy, 
  Users,
  Mail,
  Target,
  Coins,
  Star,
  Brain
} from 'lucide-react';
import * as simpleIcons from 'simple-icons';
import { joinWaitlist } from './actions';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError(null);
    
    const result = await joinWaitlist(email);

    if (result.error) {
      setError(result.error);
    } else {
      setIsSubmitted(true);
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-400/5" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
      
      {/* Header */}
      <header className="relative z-10 border-b border-green-500/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Image src="/logo.jpeg" alt="Forezy Logo" width={32} height={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Forezy
              </span>
            </div>
            <Badge variant="outline" className="border-green-500/30 text-green-400">
              Coming Soon
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <Badge className="bg-green-500/10 text-green-400 border-green-500/30 mb-6">
                🔮 Decentralized Predictions
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Forecast the Future,{' '}
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                  Earn Rewards
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                The easiest way to forecast real-world events, earn rewards, and build your prediction reputation — all powered by decentralized technology.
              </p>
            </div>

            {/* Waitlist Form */}
            <div className="max-w-md mx-auto mb-12">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-900/50 border-green-500/30 text-white placeholder-gray-400 h-12 pr-32 focus:border-green-500 focus:ring-green-500/20"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="absolute right-1 top-1 h-10 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                  {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
                  <p className="text-sm text-gray-400">
                    Be the first to start forecasting and earning rewards
                  </p>
                </form>
              ) : (
                <Card className="bg-green-500/10 border-green-500/30">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-400 mb-2">
                      You're on the list!
                    </h3>
                    <p className="text-gray-300">
                      We'll notify you when Forezy launches. Get ready to start predicting the future!
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">2500+</div>
                <div className="text-sm text-gray-400">Early Predictors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$50K+</div>
                <div className="text-sm text-gray-400">Rewards Pool</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-sm text-gray-400">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 border-t border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Forezy
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The most intuitive prediction platform powered by cutting-edge decentralized technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Easy Forecasting',
                description: 'Predict real-world events with our intuitive interface'
              },
              {
                icon: Coins,
                title: 'Earn Rewards',
                description: 'Get rewarded for accurate predictions and participation'
              },
              {
                icon: Star,
                title: 'Build Reputation',
                description: 'Establish yourself as a top predictor in the community'
              },
              {
                icon: Shield,
                title: 'Decentralized',
                description: 'Powered by blockchain for transparency and trust'
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <feature.icon className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 py-20 border-t border-green-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It{' '}
              <span className="bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start forecasting in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                icon: Brain,
                title: 'Make Predictions',
                description: 'Browse events and make your forecasts on outcomes you believe in'
              },
              {
                step: '02',
                icon: TrendingUp,
                title: 'Track Performance',
                description: 'Monitor your predictions and see how you stack up against others'
              },
              {
                step: '03',
                icon: Trophy,
                title: 'Earn & Grow',
                description: 'Collect rewards for accurate predictions and build your reputation'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
                    <step.icon className="h-8 w-8 text-green-400" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-black text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 border-t border-green-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/10 rounded-2xl p-12 border border-green-500/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Forecasting?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of predictors who are already building their reputation and earning rewards
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-black font-semibold px-8"
                onClick={() => (document.querySelector('input[type="email"]') as HTMLInputElement)?.focus()}
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-400">
                No spam, just updates on our launch
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-500/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Image src="/logo.jpeg" alt="Forezy Logo" width={32} height={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
                Forezy
              </span>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://discord.gg/XFVpFrx9H4" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" title="Discord">
                <span
                  className="h-5 w-5 block"
                  dangerouslySetInnerHTML={{
                    __html: simpleIcons.siDiscord.svg.replace(
                      '<svg',
                      '<svg width="100%" height="100%" fill="currentColor"'
                    ),
                  }}
                />
              </a>
              <a href="https://x.com/forezyxyz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" title="X (formerly Twitter)">
                <span
                  className="h-5 w-5 block"
                  dangerouslySetInnerHTML={{
                    __html: simpleIcons.siX.svg.replace(
                      '<svg',
                      '<svg width="100%" height="100%" fill="currentColor"'
                    ),
                  }}
                />
              </a>
              <a href="https://github.com/cavos-labs/forezy-web" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors" title="GitHub">
                <span
                  className="h-5 w-5 block"
                  dangerouslySetInnerHTML={{
                    __html: simpleIcons.siGithub.svg.replace(
                      '<svg',
                      '<svg width="100%" height="100%" fill="currentColor"'
                    ),
                  }}
                />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-green-500/20 text-center text-gray-400">
            <p>&copy; 2025 Forezy. All rights reserved. Powered by decentralized technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}