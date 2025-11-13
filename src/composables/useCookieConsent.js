import { ref } from 'vue';

// 1. Create a reactive state. This is a "singleton",
// meaning it will be shared by any component that imports it.
const hasConsented = ref(localStorage.getItem('cookie_consent') === 'true');

// 2. Create the function that updates the state
export function useCookieConsent() {
  
  const acceptCookies = () => {
    localStorage.setItem('cookie_consent', 'true');
    hasConsented.value = true;
  };

  // 3. Expose the state and the function to your components
  return {
    hasConsented,
    acceptCookies
  };
}