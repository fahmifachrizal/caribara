"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

const contentByType = {
  premium: {
    title: "Premium Fleet Experience",
    subtitle: "Luxury Vehicles for Discerning Travelers",
    description:
      "Indulge in automotive excellence with our premium fleet. Each vehicle represents the pinnacle of comfort, performance, and technology. From the moment you slide into the driver's seat, you'll understand why discerning travelers choose our premium selection for their most important journeys.",
    longDescription:
      "Our premium collection features the latest models from world-renowned manufacturers including Mercedes-Benz, BMW, Audi, and Lexus. Every vehicle is meticulously maintained by certified technicians and detailed to showroom condition before your rental period begins.",
    features: [
      "Latest model year luxury sedans and SUVs",
      "Advanced driver assistance and safety systems",
      "Premium leather interiors with climate control",
      "State-of-the-art entertainment and navigation",
      "Comprehensive insurance with zero deductible",
      "Priority concierge service available 24/7",
      "Complimentary vehicle delivery and pickup",
      "Professional detailing before every rental",
    ],
    pricing: "Starting from $150/day",
    pricingNote:
      "Weekly and monthly rates available with significant discounts",
    gradient: "from-purple-600 to-pink-600",
    icon: "🏆",
  },
  flexible: {
    title: "Flexible Rental Plans",
    subtitle: "Rent Your Way, On Your Schedule",
    description:
      "Life doesn't follow a rigid schedule, and neither should your car rental. Our flexible rental plans are designed to adapt to your unique needs, whether you need a vehicle for just a few hours or several months. Experience the freedom to book, modify, or extend your rental with complete ease.",
    longDescription:
      "We understand that every journey is different. That's why we've created a range of rental options that give you maximum flexibility without compromising on quality or service. Change your plans? No problem. Need to extend your rental? We've got you covered.",
    features: [
      "Hourly rentals starting from just 4 hours",
      "Daily rentals with flexible pickup times",
      "Weekly packages with up to 25% discount",
      "Monthly subscriptions for long-term needs",
      "Free cancellation up to 24 hours before pickup",
      "Modify your booking anytime without fees",
      "Multiple pickup and drop-off locations",
      "One-way rentals available between cities",
    ],
    pricing: "From $30/day to $800/month",
    pricingNote:
      "Custom packages available for corporate and long-term rentals",
    gradient: "from-blue-600 to-cyan-600",
    icon: "📅",
  },
  support: {
    title: "24/7 Customer Support",
    subtitle: "We're Here Whenever You Need Us",
    description:
      "Your journey is important to us, which is why our dedicated support team never sleeps. Whether you have a question at midnight or need assistance at dawn, we're just a call or message away. Experience true peace of mind knowing that expert help is always available.",
    longDescription:
      "Our award-winning customer support team is trained to handle everything from simple inquiries to complex situations. With multilingual staff and local knowledge, we ensure you're never stranded or uncertain during your rental period.",
    features: [
      "24/7 phone support in multiple languages",
      "Live chat available on website and app",
      "Emergency roadside assistance nationwide",
      "Free vehicle replacement if breakdown occurs",
      "Instant booking modifications via app",
      "Dedicated account managers for premium rentals",
      "GPS tracking for added security",
      "Direct line to local support in every city",
    ],
    pricing: "All support services included",
    pricingNote: "No additional fees for roadside assistance or support calls",
    gradient: "from-green-600 to-emerald-600",
    icon: "🛟",
  },
}

export default function InformationPage() {
  const searchParams = useSearchParams()
  const type = searchParams.get("type") || "premium"
  const content = contentByType[type] || contentByType.premium

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            {" / "}
            <span className="text-foreground">Information</span>
            {" / "}
            <span className="text-foreground font-medium">{content.title}</span>
          </div>

          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="text-6xl mb-6">{content.icon}</div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {content.title}
            </h1>
            <p className="text-2xl text-muted-foreground">{content.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
            {/* Left Column - Image */}
            <div className="lg:sticky lg:top-24">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${content.gradient} opacity-90`}>
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "24px 24px",
                      }}
                    />
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-9xl mb-4 animate-bounce-slow">
                      {content.icon}
                    </div>
                    <p className="text-2xl font-bold tracking-wide">
                      Premium Service
                    </p>
                  </div>
                </div>

                <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>

              {/* Pricing Card */}
              <div className="mt-8 p-8 bg-linear-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 rounded-2xl border-2 border-primary/20">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Pricing
                </div>
                <div className="text-4xl font-bold mb-2">{content.pricing}</div>
                <p className="text-sm text-muted-foreground mb-6">
                  {content.pricingNote}
                </p>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/find-car">
                    Browse Available Cars
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                  {content.description}
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mb-12">
                  {content.longDescription}
                </p>

                <h2 className="text-3xl font-bold mb-8">
                  Key Features & Benefits
                </h2>

                <div className="space-y-4">
                  {content.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                      <div className="shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="text-primary" size={16} />
                      </div>
                      <span className="text-base leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Additional Benefits */}
                <div className="mt-12 p-8 bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4">Why This Matters</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that car rental should be more than just a
                    transaction. It&apos;s about providing you with the freedom to
                    explore, the confidence to travel, and the peace of mind to
                    enjoy every moment of your journey. That&apos;s the CariBara
                    difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-zinc-50 dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-8 bg-white dark:bg-zinc-950 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center p-8 bg-white dark:bg-zinc-950 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center p-8 bg-white dark:bg-zinc-950 rounded-xl">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-linear-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl p-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our full collection and find the perfect car for your next
              journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/find-car">Find Your Car</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
