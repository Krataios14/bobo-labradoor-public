export default function DogLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <img
      src="/labradoor-dog.png"
      alt="Labradoor"
      className={className}
      style={{ filter: "brightness(0) invert(1)" }}
      draggable={false}
    />
  );
}
