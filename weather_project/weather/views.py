from django.shortcuts import render
from django.views.generic import View
import requests
from django.conf import settings

class WeatherView(View):
    def get(self, request):
        return render(request, 'weather/index.html')
    
    def post(self, request):
        city = request.POST.get('city', '')
        api_key = settings.OPENWEATHERMAP_API_KEY
        
        # OpenWeatherMap API'sine istek gönderme
        url = f'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&lang=tr&units=metric'
        
        try:
            response = requests.get(url)
            data = response.json()
            
            # Hava durumu bilgilerini çıkarma
            weather_info = {
                'city': data['name'],
                'temperature': data['main']['temp'],
                'description': data['weather'][0]['description'],
                'icon': data['weather'][0]['icon'],
                'humidity': data['main']['humidity'],
                'wind_speed': data['wind']['speed']
            }
            
            return render(request, 'weather/index.html', {'weather': weather_info})
        
        except Exception as e:
            return render(request, 'weather/index.html', {'error': 'Şehir bulunamadı.'})

# Create your views here.
