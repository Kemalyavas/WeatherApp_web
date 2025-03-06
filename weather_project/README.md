# Hava Durumu Uygulaması

Bu proje, Django kullanılarak geliştirilmiş basit bir hava durumu web uygulamasıdır. OpenWeatherMap API'sini kullanarak herhangi bir şehrin güncel hava durumu bilgilerini gösterir.

## Özellikler

- Şehir adına göre hava durumu arama
- Sıcaklık, nem, rüzgar hızı gibi detaylı bilgiler
- Hava durumu ikonları
- Duyarlı tasarım (mobil uyumlu)

## Kurulum

1. Repoyu klonlayın:
   ```
   git clone https://github.com/KULLANICI_ADINIZ/weather_project.git
   cd weather_project
   ```

2. Sanal ortam oluşturun ve aktifleştirin:
   ```
   python -m venv venv
   
   # Windows
   venv\Scripts\activate
   
   # Linux/Mac
   source venv/bin/activate
   ```

3. Gerekli paketleri yükleyin:
   ```
   pip install -r requirements.txt
   ```

4. Uygulamayı çalıştırın:
   ```
   python manage.py runserver
   ```

5. Tarayıcınızda `http://127.0.0.1:8000` adresine gidin.

## API Anahtarı

Bu uygulama OpenWeatherMap API'sini kullanmaktadır. Kendi API anahtarınızı almak için [OpenWeatherMap](https://openweathermap.org/api) adresine kaydolun ve `settings.py` dosyasındaki `OPENWEATHERMAP_API_KEY` değişkenini güncelleyin.

## Ekran Görüntüleri

![image](https://github.com/user-attachments/assets/a3b2c578-5774-4a6e-9cce-621428fae2b0)



## Teknolojiler

- Django 5.1.6
- Python 3.x
- HTML/CSS
- JavaScript
- OpenWeatherMap API
