import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FitTribe = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">FITTribe</div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white">Home</a>
          <a href="#" className="text-gray-300 hover:text-white">Program</a>
          <a href="#" className="text-gray-300 hover:text-white">Blog</a>
          <a href="#" className="text-gray-300 hover:text-white">Community</a>
          <a href="#" className="text-gray-300 hover:text-white">Log In</a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
            Sign Up
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              ELEVATE YOUR<br />
              HEALTH
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">120+</div>
                <div className="text-gray-400 text-sm">Expert Trainers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">240+</div>
                <div className="text-gray-400 text-sm">Happy Members</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="text-4xl lg:text-6xl font-bold mb-4">
              FITNESS FOR<br />
              AND VITALITY.
            </div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
              alt="Fitness trainer" 
              className="rounded-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Explore Our Program */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Explore Our Program</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Cardio Strength</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur. Congue facilisis dictum turpis gravida morbi augue.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Fat Loss</h3>
                <p className="text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur. Congue facilisis dictum turpis gravida morbi augue.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Muscle Gain</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur. Congue facilisis dictum turpis gravida morbi augue.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Nutrition</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Lorem ipsum dolor sit amet consectetur. Congue facilisis dictum turpis gravida morbi augue.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dynamic Fitness Experience */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            DIVE INTO OUR DYNAMIC<br />
            FITNESS EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=100&h=100&fit=crop&crop=face" 
                  alt="Trainer" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold mb-2">Strength Plan</h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur. Congue facilisis dictum turpis gravida morbi augue tortor blandit.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Badge className="bg-orange-500 text-white">COMING</Badge>
                <div>
                  <h3 className="text-xl font-bold mb-2">Core Workouts</h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet consectetur. Congue facilisis dictum turpis gravida morbi augue tortor blandit.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
                alt="Workout" 
                className="rounded-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Get More With Low Cost<br />
              Advanced Features
            </h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur. Congue facilisis dictum turpis gravida morbi augue tortor blandit. Aliquet cursus fermentum mauris aliquam purus.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              EXPLORE →
            </Button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop" 
              alt="Gym equipment" 
              className="rounded-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Smart Workout */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop" 
              alt="Smart workout" 
              className="rounded-lg w-full h-96 object-cover"
            />
          </div>
          <div>
            <Badge className="bg-orange-500 text-white mb-4">PREMIUM</Badge>
            <h2 className="text-4xl font-bold mb-6">
              Smart Workout<br />
              & Health Metrics
            </h2>
            <p className="text-gray-400 mb-8">
              Lorem ipsum dolor sit amet consectetur. Congue facilisis dictum turpis gravida morbi augue tortor blandit. Aliquet cursus fermentum mauris aliquam purus etiam pharetra hendrerit.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              Explore →
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            GET TO KNOW OUR TEAM OF<br />
            EXPERIENCE TRAINERS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=300&h=300&fit=crop&crop=face" 
                alt="Esther Howard" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Esther Howard</h3>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=300&h=300&fit=crop&crop=face" 
                alt="Leslie Alexander" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Leslie Alexander</h3>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&h=300&fit=crop&crop=face" 
                alt="Jacob Jones" 
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">Jacob Jones</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            CHOOSE YOUR PRICING PLAN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-900 border-gray-800 text-white p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
                <div className="text-4xl font-bold mb-6">$50</div>
                <ul className="space-y-3 text-left mb-8">
                  <li>✓ Get a fully designed Website</li>
                  <li>✓ Webflow Development</li>
                  <li>✓ Limited Support</li>
                  <li>✓ Limited Revision</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  CHOOSE PLAN
                </Button>
              </div>
            </Card>

            <Card className="bg-blue-600 text-white p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Premium Plan</h3>
                <div className="text-4xl font-bold mb-6">$80</div>
                <ul className="space-y-3 text-left mb-8">
                  <li>✓ Get a fully designed Website</li>
                  <li>✓ Webflow Development</li>
                  <li>✓ Limited Support</li>
                  <li>✓ Limited Revision</li>
                </ul>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  CHOOSE PLAN
                </Button>
              </div>
            </Card>

            <Card className="bg-gray-900 border-gray-800 text-white p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Standard Plan</h3>
                <div className="text-4xl font-bold mb-6">$90</div>
                <ul className="space-y-3 text-left mb-8">
                  <li>✓ Get a fully designed Website</li>
                  <li>✓ Webflow Development</li>
                  <li>✓ Limited Support</li>
                  <li>✓ Limited Revision</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  CHOOSE PLAN
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* App Download */}
      <section className="bg-blue-600 px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              DOWNLOAD THE APP TO<br />
              GET MORE BENEFITS
            </h2>
            <p className="mb-8">
              FITTRIBE is the best fitness app that will help you get your DREAM BODY. You can use it without Wifi and without any limits. The app includes more than 200 exercises for every muscle.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full">
              DOWNLOAD
            </Button>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop" 
              alt="App preview" 
              className="w-80 h-80 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FITTribe</h3>
            <p className="text-gray-400 text-sm">
              Unlock the secret to optimal health and fitness with FITTRIBE app, available now on Google Play and the App Store.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4">ABOUT</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Our Story</a></li>
              <li><a href="#" className="hover:text-white">Benefits</a></li>
              <li><a href="#" className="hover:text-white">Team</a></li>
              <li><a href="#" className="hover:text-white">Career</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Support Center</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">LINKS</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Download App</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FitTribe;