import { Button, H1Text, PText } from '@nx-shell/components';

export function HeroSection() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-6">
      <div className="mx-auto text-center">
        <H1Text className="text-5xl md:text-6xl font-normal mb-4 bg-gradient-to-r from-zinc-700 via-red-500 to-amber-600 bg-clip-text text-transparent">
          NX Shell Platform
        </H1Text>

        <PText className="text-xl text-gray-600 mb-8 pt-3 max-w-3xl mx-auto">
          A quick dev setup, just clone the project & use as you like
        </PText>
        <Button variant={'default'} size="xl" className="mt-6">
          Get Started
        </Button>
      </div>
    </section>
  );
}
