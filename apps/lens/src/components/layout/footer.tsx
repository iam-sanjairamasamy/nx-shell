import { PText } from "@nx-shell/components";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <PText className="text-gray-600">
          © 2025 Nx Shell Platform. Powered by @SR for quick dev setup for front-end.
        </PText>
      </div>
    </footer>
  );
}