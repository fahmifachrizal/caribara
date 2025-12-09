import Footer from "@/components/Footer"
import HeroSection from "@/components/personalization/HeroSection" // Updated import
import FeatureBlock from "@/components/FeatureBlock"
import { CheckCircle2, Shield, Clock, Award } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Use the new HeroSection with category prop */}
      <HeroSection category="electric" />

      {/* Feature Block 1 - Premium Fleet */}
      <FeatureBlock
        title="Premium Fleet Selection"
        description="Discover our extensive collection of meticulously maintained vehicles. From luxury sedans to spacious SUVs, each car is hand-picked to ensure your comfort and satisfaction. Every vehicle undergoes rigorous quality checks and professional detailing before your journey."
        buttonText="Explore Premium Fleet"
        buttonLink="/information?type=premium"
        imagePosition="left"
        imagePlaceholder="🏆"
        imageGradient="from-purple-600 to-pink-600"
      />

      {/* Feature Block 2 - Flexible Plans */}
      <FeatureBlock
        title="Flexible Rental Plans"
        description="Whether you need a car for a few hours, days, or months, we've got you covered. Our flexible rental options are designed to adapt to your schedule and budget. Enjoy transparent pricing with no hidden fees, and the freedom to modify your booking anytime."
        buttonText="View Rental Plans"
        buttonLink="/information?type=flexible"
        imagePosition="right"
        imagePlaceholder="📅"
        imageGradient="from-blue-600 to-cyan-600"
        bgColor="bg-zinc-50 dark:bg-zinc-900"
      />

      {/* Feature Block 3 - 24/7 Support */}
      <FeatureBlock
        title="24/7 Customer Support"
        description="Your peace of mind is our priority. Our dedicated support team is available around the clock to assist with any questions or emergencies. From roadside assistance to instant booking modifications, we're always here to help make your journey seamless."
        buttonText="Learn About Support"
        buttonLink="/information?type=support"
        imagePosition="left"
        imagePlaceholder="🛟"
        imageGradient="from-green-600 to-emerald-600"
      />

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose CariBara?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We&apos;re not just a car rental service—we&apos;re your travel partner,
              committed to making every journey memorable and hassle-free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-zinc-950 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Wide Selection</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over 500 premium vehicles across all categories—from compact
                city cars to luxury SUVs.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-950 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Full Insurance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive insurance coverage included in every rental. Drive
                with complete peace of mind.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-950 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Instant Booking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Book your perfect car in under 2 minutes. Quick approval and
                instant confirmation.
              </p>
            </div>

            <div className="bg-white dark:bg-zinc-950 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Top Rated</h3>
              <p className="text-muted-foreground leading-relaxed">
                Trusted by over 50,000 satisfied customers with a 4.9/5 average
                rating.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Don&apos;t just take our word for it—hear from our satisfied
              customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Business Traveler",
                content:
                  "CariBara made my business trip so much easier. The booking process was seamless, and the car was in perfect condition. Highly recommend!",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Family Vacation",
                content:
                  "We rented an SUV for our family vacation and it was perfect. Great customer service and the vehicle was spotless. Will definitely use again!",
                rating: 5,
              },
              {
                name: "Emma Williams",
                role: "Weekend Getaway",
                content:
                  "Amazing experience! The premium sedan I rented was luxurious and the entire process was hassle-free. Best car rental service I've used.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join thousands of satisfied customers and experience the best car
            rental service in Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/find-car"
              className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-zinc-100 transition-colors text-lg">
              Browse Cars
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
