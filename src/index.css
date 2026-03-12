@import "tailwindcss";

@variant dark (&:where(.dark, .dark *));

@layer base {
  body {
    @apply bg-slate-50 text-slate-900 transition-colors duration-300;
    background-image: 
      radial-gradient(circle at 2px 2px, rgba(15, 23, 42, 0.02) 1px, transparent 0);
    background-size: 24px 24px;
  }
  
  .dark body {
    @apply bg-slate-950 text-slate-100;
    background-image: 
      radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.02) 1px, transparent 0);
  }
}

.maritime-gradient {
  background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);
}

.wave-pattern {
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.125c-1.115-.422-2.187-.828-3.21-1.214C71.233 15.186 65.143 14 50 14c-15.126 0-21.212 1.186-30.307 4.795-.531.211-1.041.416-1.529.613H21.184zM100 20v-2h-1.448c-8.941-3.587-14.099-4.778-24.548-4.778C63.94 13.222 58.849 12 50 12c-8.849 0-13.94 1.222-24.004 4.778C15.547 13.222 10.388 12 0 12v2c10.353 0 15.547 1.222 25.612 4.778C35.676 15.556 41.151 14 50 14c8.849 0 14.324 1.556 24.388 4.778C84.453 15.222 89.647 14 100 14v2z' fill='%231e40af' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  @apply bg-transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-slate-200 rounded-full;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb {
  @apply bg-slate-800;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-300;
}

.dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
  @apply bg-slate-700;
}
