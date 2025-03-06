document.addEventListener('DOMContentLoaded', function() {
  // Form gönderildiğinde yükleme animasyonu göster
  const weatherForm = document.getElementById('weather-form');
  const searchButton = document.getElementById('search-button');
  
  if (weatherForm) {
      weatherForm.addEventListener('submit', function() {
          searchButton.innerHTML = '<span class="loading-spinner"></span> Yükleniyor...';
          searchButton.disabled = true;
      });
  }
  
  // Hava durumu kartı için animasyon
  const weatherContainer = document.querySelector('.weather-container');
  if (weatherContainer) {
      weatherContainer.classList.add('animate');
  }
  
  // Sıcaklık değerine göre renk değiştirme
  const temperatureElement = document.querySelector('.temperature');
  if (temperatureElement) {
      const temperature = parseFloat(temperatureElement.textContent);
      
      if (temperature < 0) {
          temperatureElement.style.color = '#3498db'; // Soğuk (mavi)
      } else if (temperature < 10) {
          temperatureElement.style.color = '#2ecc71'; // Serin (yeşil)
      } else if (temperature < 20) {
          temperatureElement.style.color = '#f39c12'; // Ilık (turuncu)
      } else {
          temperatureElement.style.color = '#e74c3c'; // Sıcak (kırmızı)
      }
  }
  
  // Arama kutusuna otomatik odaklanma
  const searchInput = document.getElementById('city-input');
  if (searchInput) {
      searchInput.focus();
  }
});