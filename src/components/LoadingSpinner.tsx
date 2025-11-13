const LoadingSpinner = () => (
  <div className="flex items-center justify-center p-8">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-r-secondary rounded-full animate-spin animate-reverse"></div>
    </div>
  </div>
);

export default LoadingSpinner;