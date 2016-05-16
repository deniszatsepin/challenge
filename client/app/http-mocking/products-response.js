import cuid from 'cuid';

export default {
  data: [
    {
      id: cuid(),
      name: 'Komplettlösung',
      icon: '/images/icons/cam-icon.png',
      details: 'inkl. 24 Std. Video-Speicher (gratis)',
      composition: [
        {
          name: 'Smartfrog App',
          icon: '/images/icons/app-icon.png'
        },
        {
          name: 'Smartfrog Camera',
          icon: '/images/icons/cam-icon.png'
        },
        {
          name: '24 Std. Videospeicher',
          icon: '/images/icons/storage-icon.png'
        }
      ],
      features: [
        {
          name: 'Live-Video rund um die Uhr',
          highlighted: true
        },
        {
          name: 'Video-Speicherung',
          description: 'der jeweils letzten 24 Stunden',
          highlighted: true
        },
        {
          name: 'Monatlich kündbar'
        },
        {
          name: 'Keine Einrichtungskosten'
        },
        {
          name: 'Kostenloser Versand'
        }
      ],
      price: 4.95,
      priceType: 'monthly',
      topSeller: true
    },
    {
      id: cuid(),
      name: 'Kamera-Paket',
      icon: '/images/icons/cam-icon.png',
      details: 'Details information',
      composition: [
        {
          name: 'Smartfrog App',
          icon: '/images/icons/app-icon.png'
        },
        {
          name: 'Smartfrog Camera',
          icon: '/images/icons/cam-icon.png'
        },
        {
          name: '24 Std. Videospeicher',
          icon: '/images/icons/storage-icon.png'
        }
      ],
      features: [
        {
          name: 'Live-Video rund um die Uhr',
          highlighted: true
        },
        {
          name: 'Video-Speicherung',
          description: 'der jeweils letzten 24 Stunden',
          highlighted: true
        },
        {
          name: 'Kein Abo'
        },
        {
          name: 'Keine Einrichtungskosten'
        },
        {
          name: 'Kostenloser Versand'
        }
      ],
      price: 99
    }
  ]
};
