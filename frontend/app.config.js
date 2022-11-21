import 'dotenv/config';
export default
{
  "expo": {
    "name": "frontend",
    "slug": "frontend",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/logo.jpeg",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/logo.jpeg",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },

    "updates": {
      "fallbackToCacheTimeout": 0
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/logo.jpeg",
        "backgroundColor": "#FFFFFF"
      }
    },
    "web": {
      "favicon": "./assets/logo.jpeg"
    },
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID
    }
    
  }
}
