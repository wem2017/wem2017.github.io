import avatarImage from '@/images/avatar.png'

export const personal = {
  name: 'Wem',
  fullName: 'Wem',
  title: 'Senior Software developer',
  email: 'huynh.developer@gmail.com',
  phone: '+84964142239',
  location: 'Ho Chi Minh City, Vietnam',
  avatar: avatarImage,

  bio: {
    greeting: "Hi there, I'm Wem",
    description:
      'I am a Software Engineer with a total of 8 years in the industry. I spent the majority of my career over 6 years specializing in Mobile Development, before expanding my scope to Backend Development for the last 2 years. I bring a product-oriented mindset with proven experience in team leadership, DevOps. I am dedicated to building high-quality software products through rigorous discipline and continuous innovation.',
  },

  social: {
    linkedin: {
      url: 'https://www.linkedin.com/in/huynh-dung-128962198',
      label: 'Follow on LinkedIn',
    },
    github: {
      url: 'https://github.com/wem2017',
      label: 'Follow on GitHub',
    },
    telegram: {
      url: 'https://t.me/huynhdeveloper',
      label: 'Follow on Telegram',
    },
  },

  contact: {
    title: 'Contact me.',
    intro:
      "Feel free to contact me via LinkedIn, Telegtam, or email. I'll respond when free time. If you have an interesting project or collaboration opportunity, I'd love to hear from you.",
  },

  copyright: {
    year: new Date().getFullYear(),
    text: 'All rights reserved.',
  },
}
