import { ImageGenerator } from "@/components/ImageGenerator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--glow)/0.1),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-glow/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-glow-warm/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-float">
            Cinematic AI Studio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Generate epic, movie-quality images with AI. Create dramatic scenes, superhero moments, and breathtaking vistas.
          </p>
        </div>

        <ImageGenerator />

        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Powered by Lovable AI • Create limitless visual stories</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
