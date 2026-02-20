import SaleBolt from '@/images/logos/salebolt.png'
import ListarPro from '@/images/logos/listarpro.png'
import ListarFluxPro from '@/images/logos/listarfluxpro.png'
import FelixPro from '@/images/logos/felixpro.png'

export const projects = [
  {
    name: 'SaleBolt',
    description:
      'SaleBolt is a mobile application for Envato Author who need tracking new sales from the Envato Market fastest by the mobile push notification. The SaleBolt application also supports both Android/Ios and one account can be used with multiple devices so that you or your team can track new sales from Envato Market together. The SaleBolt application can be used for tracking all marketplaces like ThemeForest, GraphicRiver, CodeCanyon, VideoHive, PhotoDune and AudioJungle.',
    link: {
      href: 'https://saleboltapp.com/',
      label: 'https://saleboltapp.com',
    },
    logo: SaleBolt,
    technologies: [
      'React Native',
      'Node.js',
      'Push Notifications',
      'Envato API',
    ],
    highlights: [
      'Real-time push notifications for new sales',
      'Multi-device support for team collaboration',
      'Supports all Envato marketplaces',
    ],
  },
  {
    name: 'Listar FluxPro – Directory & Classified Mobile App Full Solution',
    description:
      'Launch your own mobile-powered directory business in minutes. Listar FluxPro is a comprehensive Flutter mobile app for iOS & Android, tightly integrated with WordPress as both the backend and frontend. No coding required. No recurring fee. Just install, customize, and go live.',
    link: {
      href: 'https://codecanyon.net/item/listar-fluxpro-mobile-directory-listing-app-for-flutter-wordpress/28292407',
      label: 'https://codecanyon.net',
    },
    logo: ListarFluxPro,
    technologies: ['Flutter', 'Dart', 'WordPress', 'REST API'],
    highlights: [
      'Cross-platform iOS & Android support',
      'WordPress backend integration',
      'No-code customization',
    ],
  },
  {
    name: 'Listar Pro - Directory & Classified Mobile App Full Solution',
    description:
      'Launch your own mobile-powered directory business in minutes. Listar Pro is a comprehensive React Native mobile app for iOS & Android, tightly integrated with WordPress as both the backend and frontend. No coding required. No recurring fee. Just install, customize, and go live.',
    link: {
      href: 'https://codecanyon.net/item/listar-pro-mobile-directory-listing-app-for-react-native-wordpress/29024132',
      label: 'https://codecanyon.net',
    },
    logo: ListarPro,
    technologies: ['React Native', 'JavaScript', 'WordPress', 'REST API'],
    highlights: [
      'Cross-platform iOS & Android support',
      'WordPress backend integration',
      'No-code customization',
    ],
  },
  {
    name: 'Felix Travel - mobile React Native travel app template',
    description:
      'Felix Travel is a mobile React Native app template for universal travel application or booking industry. The template supports many kinds of booking modules like hotel reservation, tour booking, car rental, flight booking, cruise booking, shuttle bus and event booking. Beside that, this template is also providing UI KIT for making a complete mobile application with a total 100+ sample screens and 40+ reusable React Native components. If your business idea is matching with among features in this application. You can definitely use this template to build your application.',
    link: {
      href: 'https://codecanyon.net/item/felix-travel-complete-react-native-travel-app-template/24277209',
      label: 'https://codecanyon.net',
    },
    logo: FelixPro,
    technologies: ['React Native', 'JavaScript', 'Redux', 'UI Kit'],
    highlights: [
      '100+ sample screens included',
      '40+ reusable React Native components',
      'Multiple booking modules support',
    ],
  },
]

export const projectsMetadata = {
  heading: 'From learning to real-world products.',
  intro:
    'Projects I’ve built for self-learning, sharpening my skills, and creating products that are genuinely useful to users while generating additional income.',
}
