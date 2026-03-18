export default function DogLogo({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sitting labrador silhouette */}
      <path d="
        M32 4
        C29 4 26.5 5.5 25 7.5
        C23 6 20 5.5 18 7
        C15.5 9 15 13 15.5 15
        C14 16.5 13 18.5 13 21
        C13 24 14.5 26.5 16 28
        L16 29
        C15 31 14.5 33.5 14.5 36
        C14.5 40 16 43.5 18 46
        L18 52
        C18 54 19.5 56 22 56
        L24 56
        C25.5 56 26.5 55 27 53.5
        L27.5 52
        C29 52.5 31 52.8 32 52.8
        C33 52.8 35 52.5 36.5 52
        L37 53.5
        C37.5 55 38.5 56 40 56
        L42 56
        C44.5 56 46 54 46 52
        L46 46
        C48 43.5 49.5 40 49.5 36
        C49.5 33.5 49 31 48 29
        L48 28
        C49.5 26.5 51 24 51 21
        C51 18.5 50 16.5 48.5 15
        C49 13 48.5 9 46 7
        C44 5.5 41 6 39 7.5
        C37.5 5.5 35 4 32 4
        Z
      " />
      {/* Collar */}
      <ellipse cx="32" cy="29" rx="10" ry="2.5" fill="currentColor" opacity="0.3" />
      {/* Tag */}
      <circle cx="32" cy="32" r="2" fill="currentColor" opacity="0.4" />
    </svg>
  );
}
