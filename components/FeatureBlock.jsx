import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function ImageSection({ imagePlaceholder, imageGradient }) {
  return (
    <div className="relative h-full min-h-[500px] md:min-h-[600px] overflow-hidden group">
      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${imageGradient} opacity-90`}
      />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Image Placeholder with animation */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center transform group-hover:scale-105 transition-transform duration-500">
          <div className="text-8xl mb-4 animate-bounce-slow">
            {imagePlaceholder}
          </div>
          <p className="text-xl font-semibold tracking-wide">
            Premium Experience
          </p>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
    </div>
  )
}

function ContentSection({ title, description, buttonText, buttonLink }) {
  return (
    <div className="flex items-center justify-center p-8 md:p-16 lg:p-20">
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>
        <Button size="lg" asChild className="group">
          <Link href={buttonLink}>
            {buttonText}
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default function FeatureBlock({
  title,
  description,
  buttonText,
  buttonLink,
  imagePosition = "left", // "left" or "right"
  imagePlaceholder,
  imageGradient = "from-blue-500 to-purple-600",
  bgColor = "bg-white dark:bg-zinc-950",
}) {
  return (
    <section className={`${bgColor}`}>
      <div className="grid md:grid-cols-2 min-h-[500px]">
        {imagePosition === "left" ? (
          <>
            <ImageSection
              imagePlaceholder={imagePlaceholder}
              imageGradient={imageGradient}
            />
            <ContentSection
              title={title}
              description={description}
              buttonText={buttonText}
              buttonLink={buttonLink}
            />
          </>
        ) : (
          <>
            <ContentSection
              title={title}
              description={description}
              buttonText={buttonText}
              buttonLink={buttonLink}
            />
            <ImageSection
              imagePlaceholder={imagePlaceholder}
              imageGradient={imageGradient}
            />
          </>
        )}
      </div>
    </section>
  )
}
