import type { District, Gym, Review } from '../interfaces/types';

/**
 * Mock Districts Data
 * Represents the 14 districts currently served by Gymundo in Kerala.
 */
export const mockDistricts: District[] = [
  {
    id: 'thiruvananthapuram',
    name: 'Thiruvananthapuram',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1614090699960-b4c81be49f3c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'The capital city features historic fitness arenas, modern high-tech gyms, and seaside workout spots.',
    gymCount: 1,
  },
  {
    id: 'kollam',
    name: 'Kollam',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1757495404113-b859dd86d9b1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Coastal vibes meet heavy lifting with premium gym setups near the scenic Ashtamudi Lake.',
    gymCount: 1,
  },
  {
    id: 'pathanamthitta',
    name: 'Pathanamthitta',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1710438443998-17815902ee86?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'High-energy training hubs nestled amidst the lush green hills and serene valleys.',
    gymCount: 1,
  },
  {
    id: 'alappuzha',
    name: 'Alappuzha',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Fitness by the backwaters, blending strength training with gorgeous scenic canal views.',
    gymCount: 1,
  },
  {
    id: 'kottayam',
    name: 'Kottayam',
    state: 'Kerala',
    image: 'https://images-prd.deshabhimani.com/KOTTAYAM-1751105266465-c1e30963-597b-4a85-b2cd-4eac33af4bb0-640x360.webp',
    description: 'A bustling hub of high-performance wellness clubs, premium functional spaces, and crossfit.',
    gymCount: 1,
  },
  {
    id: 'idukki',
    name: 'Idukki',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1663597676642-6a3d7afdbff3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Altitude training meets modern bodybuilding in the cool and refreshing Munnar mountain breeze.',
    gymCount: 1,
  },
  {
    id: 'ernakulam',
    name: 'Ernakulam',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1770806819743-b0f0111080e6?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Kochi\'s commercial capital offers state-of-the-art strength training, luxury wellness spas, and cardio decks.',
    gymCount: 1,
  },
  {
    id: 'thrissur',
    name: 'Thrissur',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1726995036039-1ff318dd445c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'The cultural capital is home to massive powerhouse fitness centers, martial arts, and heavy iron.',
    gymCount: 1,
  },
  {
    id: 'palakkad',
    name: 'Palakkad',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?q=80&w=800&auto=format&fit=crop',
    description: 'Spacious fitness facilities focusing on athletic conditioning near the historic Palakkad Fort.',
    gymCount: 1,
  },
  {
    id: 'malappuram',
    name: 'Malappuram',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=800&auto=format&fit=crop',
    description: 'High-intensity crossfit boxes and athletic training spaces surrounded by lush teak forests.',
    gymCount: 1,
  },
  {
    id: 'kozhikode',
    name: 'Kozhikode',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=800&auto=format&fit=crop',
    description: 'Heavy lifting meets coastal breeze with premium gyms situated near the famous beaches.',
    gymCount: 1,
  },
  {
    id: 'wayanad',
    name: 'Wayanad',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800&auto=format&fit=crop',
    description: 'Elevated fitness retreats focusing on holistic health, yoga roofs, and functional training.',
    gymCount: 1,
  },
  {
    id: 'kannur',
    name: 'Kannur',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    description: 'Athletic excellence combined with coastal vibes, featuring customized nutrition and MMA rings.',
    gymCount: 1,
  },
  {
    id: 'kasaragod',
    name: 'Kasaragod',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=800&auto=format&fit=crop',
    description: 'Boutique training centers offering modern cardio setups and heavy strength zones near Bekal Fort.',
    gymCount: 1,
  }
];

/**
 * Mock Gyms Data
 * A detailed registry of premium fitness clubs with unique locations and equipment in Kerala.
 */
export const mockGyms: Gym[] = [
  {
    id: 115,
    name: 'Phoenix Fitness Unisex gym',
    district: 'Kottayam',
    address: '1st Floor, Thadathil Arcade, Manvettom, Kerala 686611',
    latitude: 9.7610,
    longitude: 76.5050,
    rating: 4.9,
    phone: '+91 94474 99999',
    email: 'phoenix@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/cnA5jsYbe3Eg7sSy9',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Personal Training', 'Zumba Dance'],
    description: 'Phoenix Fitness Unisex gym is a premier training facility in Manvettom, Kottayam. We offer dedicated personal training and high-energy Zumba sessions to help you reach your goals.',
    openingHours: {
      weekdays: '05:00 AM - 10:00 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: '07:00 AM - 02:00 PM'
    }
  },
  {
    id: 101,
    name: 'Royal Fitness Club',
    district: 'Thiruvananthapuram',
    address: '2nd Floor, Kowdiar Heights, Kowdiar, Thiruvananthapuram, Kerala 695003',
    latitude: 8.5241,
    longitude: 76.9366,
    rating: 4.8,
    phone: '+91 94470 12345',
    email: 'kowdiar@royalfitness.in',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Steam Bath', 'Personal Trainers', 'Cafe'],
    description: 'Royal Fitness Club Kowdiar offers premium fitness training with state-of-the-art strength and cardio equipment. Experience luxury workout spaces and custom fitness plans designed by certified trainers.',
    openingHours: {
      weekdays: '05:00 AM - 10:00 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: '07:00 AM - 02:00 PM'
    }
  },
  {
    id: 102,
    name: 'FitZone',
    district: 'Kollam',
    address: 'Ground Floor, Beach Road, near Ashramam, Kollam, Kerala 691001',
    latitude: 8.8932,
    longitude: 76.6141,
    rating: 4.7,
    phone: '+91 94471 23456',
    email: 'kollam@fitzone.in',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Locker & Shower', 'Zumba Studio', 'Juice Bar'],
    description: 'FitZone Kollam brings a premium fitness culture to the coastal town. Featuring top-tier Hammer Strength machinery, personal trainers, and high-energy workout programs.',
    openingHours: {
      weekdays: '05:30 AM - 10:00 PM',
      saturday: '06:00 AM - 08:30 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 103,
    name: 'Peak Performance Gym',
    district: 'Pathanamthitta',
    address: 'Ring Road, near KSRTC Terminal, Pathanamthitta, Kerala 689645',
    latitude: 9.2648,
    longitude: 76.7870,
    rating: 4.6,
    phone: '+91 94472 34567',
    email: 'pta@peakperformance.in',
    logo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Crossfit Rig', 'Steam Bath'],
    description: 'Nestled in the green hills of Pathanamthitta, Peak Performance provides a comprehensive workout environment focusing on functional training, crossfit, and traditional bodybuilding.',
    openingHours: {
      weekdays: '06:00 AM - 09:30 PM',
      saturday: '06:00 AM - 08:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 104,
    name: 'Backwater Barbell',
    district: 'Alappuzha',
    address: 'Canal Road, Near finishing point, Alappuzha, Kerala 688011',
    latitude: 9.4981,
    longitude: 76.3388,
    rating: 4.7,
    phone: '+91 94473 45678',
    email: 'alappuzha@backwaterbarbell.in',
    logo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Seaside View', 'Strength Training', 'Cardio Deck', 'Yoga Rooftop', 'Shower & Locker'],
    description: 'Work out with beautiful canal and houseboat views in Alappuzha. Backwater Barbell features a heavy iron room, rooftop yoga, and custom endurance conditioning programs.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 08:30 PM',
      sunday: '08:00 AM - 01:00 PM'
    }
  },
  {
    id: 105,
    name: 'Power Fitness',
    district: 'Kottayam',
    address: 'Kanjikuzhy, Kottayam-Kumily Road, Kottayam, Kerala 686004',
    latitude: 9.5916,
    longitude: 76.5222,
    rating: 4.9,
    phone: '+91 94474 56789',
    email: 'kottayam@powerfitness.in',
    logo: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Olympic Platforms', 'Strength Training', 'Sauna Room', 'Personal Trainers', 'Protein Shake Bar'],
    description: 'Kottayam\'s ultimate fitness hub. Power Fitness features state-of-the-art Olympic platforms, high-end Eleiko weight sets, and a premium locker and sauna room experience.',
    openingHours: {
      weekdays: '05:00 AM - 10:30 PM',
      saturday: '05:00 AM - 09:00 PM',
      sunday: '07:00 AM - 02:00 PM'
    }
  },
  {
    id: 106,
    name: 'Munnar Mountain Gym',
    district: 'Idukki',
    address: 'NH Road, Munnar, Idukki, Kerala 685612',
    latitude: 10.0118,
    longitude: 77.0617,
    rating: 4.8,
    phone: '+91 94475 67890',
    email: 'munnar@mountaingym.in',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['High Altitude Training', 'Cardio Deck', 'Strength Training', 'Steam Bath', 'Organic Cafe'],
    description: 'Altitude training in the high hills of Idukki. Breathe clean mountain air and work out on premium cardio and strength machines with guidance from certified coaches.',
    openingHours: {
      weekdays: '06:00 AM - 09:00 PM',
      saturday: '06:00 AM - 08:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 107,
    name: 'Olympia Fitness',
    district: 'Ernakulam',
    address: 'Panampilly Nagar, Kochi, Ernakulam, Kerala 682036',
    latitude: 9.9816,
    longitude: 76.2999,
    rating: 4.9,
    phone: '+91 94476 78901',
    email: 'kochi@olympiafitness.in',
    logo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Swimming Pool', 'Zumba Studio', 'Olympic Platforms', 'Valet Parking', 'Juice Bar'],
    description: 'Olympia Fitness is Kochi\'s premier luxury fitness club located in Panampilly Nagar. Equipped with premium TechnoGym equipment, a heated lap pool, and certified athletic conditioning trainers.',
    openingHours: {
      weekdays: '05:00 AM - 11:00 PM',
      saturday: '05:00 AM - 10:00 PM',
      sunday: '07:00 AM - 03:00 PM'
    }
  },
  {
    id: 108,
    name: 'Muscle Factory',
    district: 'Thrissur',
    address: 'Palace Road, Near Swaraj Round, Thrissur, Kerala 680020',
    latitude: 10.5276,
    longitude: 76.2144,
    rating: 4.8,
    phone: '+91 94477 89012',
    email: 'thrissur@musclefactory.in',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Crossfit Rig', 'MMA Ring', 'Sauna Bath', 'Parking Space'],
    description: 'Thrissur\'s landmark heavy-lifting gym. Featuring customized power cages, Olympic plates, a full MMA cage, and expert guidance for bodybuilders and strength competitors.',
    openingHours: {
      weekdays: '05:00 AM - 10:00 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: '08:00 AM - 02:00 PM'
    }
  },
  {
    id: 109,
    name: 'Fortress Strength',
    district: 'Palakkad',
    address: 'Fort Maidan Road, Palakkad, Kerala 678001',
    latitude: 10.7867,
    longitude: 76.6547,
    rating: 4.5,
    phone: '+91 94478 90123',
    email: 'palakkad@fortress.in',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Locker Rooms', 'Steam Bath'],
    description: 'Located right next to the historic Palakkad Fort. Fortress Strength offers a high-performance training ground with heavy lifting plates, modern machines, and certified coaches.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 08:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 110,
    name: 'Eranad Athletics',
    district: 'Malappuram',
    address: 'Calicut Road, Malappuram, Kerala 676505',
    latitude: 11.0720,
    longitude: 76.0740,
    rating: 4.6,
    phone: '+91 94479 01234',
    email: 'malappuram@eranadathletics.in',
    logo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Crossfit Box', 'Strength Training', 'Outdoor Turf', 'Steam Bath', 'Physio Room'],
    description: 'Eranad Athletics delivers functional conditioning and high-intensity fitness options to Malappuram. Enjoy an indoor turf, gymnastics setups, and strongman equipment.',
    openingHours: {
      weekdays: '06:00 AM - 10:00 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: '08:00 AM - 01:00 PM'
    }
  },
  {
    id: 111,
    name: 'Titan Gym',
    district: 'Kozhikode',
    address: 'Beach Road, Kozhikode, Kerala 673001',
    latitude: 11.2588,
    longitude: 75.7804,
    rating: 4.9,
    phone: '+91 94460 12345',
    email: 'calicut@titangym.in',
    logo: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Seaside View', 'Strength Training', 'Cardio Deck', 'Steam Bath', 'Diet Cafe'],
    description: 'Unmatched workout experiences with direct views of the Arabian Sea. Titan Gym Kozhikode combines heavy-duty Hammer Strength setups with personalized fat-loss and body transformation regimes.',
    openingHours: {
      weekdays: '05:00 AM - 11:00 PM',
      saturday: '05:00 AM - 09:00 PM',
      sunday: '07:00 AM - 03:00 PM'
    }
  },
  {
    id: 112,
    name: 'Chembra Fitness',
    district: 'Wayanad',
    address: 'Kalpetta Bypass Road, Wayanad, Kerala 673121',
    latitude: 11.6854,
    longitude: 76.1320,
    rating: 4.6,
    phone: '+91 94461 23456',
    email: 'wayanad@chembrafit.in',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Yoga Hall', 'Outdoor Cardio', 'Juice Bar'],
    description: 'Set in the cool valley of Wayanad, Chembra Fitness focuses on physical wellness, cardiovascular conditioning, and yoga amidst the beautiful greenery.',
    openingHours: {
      weekdays: '06:00 AM - 09:30 PM',
      saturday: '07:00 AM - 08:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 113,
    name: 'Malabar Heavy Metal',
    district: 'Kannur',
    address: 'Fort Road, Kannur, Kerala 670001',
    latitude: 11.8745,
    longitude: 75.3704,
    rating: 4.7,
    phone: '+91 94462 34567',
    email: 'kannur@heavymetal.in',
    logo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Olympic Platforms', 'Strength Training', 'MMA Ring', 'Nutritionist'],
    description: 'Kannur\'s premier heavy bodybuilding location. Features high-grade lifting cages, dumbells up to 60kg, an MMA ring, and personalized nutritional plans.',
    openingHours: {
      weekdays: '05:30 AM - 10:00 PM',
      saturday: '06:00 AM - 08:30 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 114,
    name: 'Bekal Iron House',
    district: 'Kasaragod',
    address: 'National Highway Road, near Bekal, Kasaragod, Kerala 671121',
    latitude: 12.5103,
    longitude: 74.9852,
    rating: 4.5,
    phone: '+91 94463 45678',
    email: 'kasaragod@ironhouse.in',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Steam Bath', 'Parking Space'],
    description: 'Bekal Iron House brings world-class strength training equipment to Kasaragod. Features high-end machines, modern cardio lane, and friendly training assistance.',
    openingHours: {
      weekdays: '06:00 AM - 09:30 PM',
      saturday: '06:00 AM - 08:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 116,
    name: 'Fitness galaxy',
    district: 'Kottayam',
    address: 'Muthukattuparambil Arcade, Manvettom- Memury Church Rd, Manvettom, Kerala 686611',
    latitude: 9.7620,
    longitude: 76.5075,
    rating: 4.8,
    phone: '+91 94460 11111',
    email: 'galaxy@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/kMWedj2WNmDHymBPA',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Personal Trainers'],
    description: 'Fitness galaxy in Manvettom offers a spacious training environment with plate-loaded machines, specialized trainers, and cardio equipment.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 08:30 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 117,
    name: 'Titans Fitness Centre',
    district: 'Kottayam',
    address: 'Ekkammel Rd, Kallara, Kerala 686611',
    latitude: 9.7137,
    longitude: 76.4746,
    rating: 4.7,
    phone: '+91 94460 22222',
    email: 'titans@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/m3jTZwtgZQ4LufqK7',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Locker & Shower'],
    description: 'Titans Fitness Centre in Kallara provides athletic strength training, customized workouts, and cardio facilities to push your limits.',
    openingHours: {
      weekdays: '05:00 AM - 09:30 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 118,
    name: 'Fitness Zone Health Club & Gym',
    district: 'Kottayam',
    address: 'Palette Arcade Building, Junction, Kuruppanthara, Kerala 686603',
    latitude: 9.7431,
    longitude: 76.5190,
    rating: 4.8,
    phone: '+91 94460 33333',
    email: 'fitzone.kuruppanthara@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/v6yE3L5TAA6D8AKs9',
    logo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Zumba Studio', 'Personal Trainers'],
    description: 'Fitness Zone Health Club & Gym in Kuruppanthara is equipped with advanced training machinery, group fitness options, and professional coaching.',
    openingHours: {
      weekdays: '05:00 AM - 10:00 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 119,
    name: 'Hercules Gym',
    district: 'Kottayam',
    address: 'MC Rd, Kothanalloor, Kerala 686632',
    latitude: 9.7390,
    longitude: 76.5350,
    rating: 4.6,
    phone: '+91 94460 44444',
    email: 'hercules@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/cBGBBSmQWakjdXrD9',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Parking Space'],
    description: 'Hercules Gym in Kothanalloor is a powerhouse gym featuring heavy metal plates, traditional bodybuilding routines, and guidance from seasoned lifters.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 08:30 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 120,
    name: 'Fitness cafe kothanalloor',
    district: 'Kottayam',
    address: 'Thottakuzhiyil building, 7/454, near SBI, Kothanalloor, Kerala 686632',
    latitude: 9.7405,
    longitude: 76.5380,
    rating: 4.8,
    phone: '+91 94460 55555',
    email: 'fitcafe@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/t2cLxiM8ihYvtWEaA',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Cafe', 'Personal Trainers'],
    description: 'Fitness cafe kothanalloor combines premium health bar shakes and refreshments with advanced functional strength training decks.',
    openingHours: {
      weekdays: '05:00 AM - 10:00 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 121,
    name: 'Reborn fitness Centre Gym',
    district: 'Kottayam',
    address: 'Reborn Fitness Centre, Muricken building, Muttuchira, Kaduthuruthy, Kerala 686613',
    latitude: 9.7667,
    longitude: 76.5333,
    rating: 4.9,
    phone: '+91 94460 66666',
    email: 'reborn@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/nT9RhE9c7nHa7tSbA',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Locker & Shower', 'Personal Trainers'],
    description: 'Reborn fitness Centre Gym at Muttuchira provides specialized dynamic bodybuilding and body transformation courses in Kaduthuruthy.',
    openingHours: {
      weekdays: '05:00 AM - 09:30 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 122,
    name: 'Rubicon Fitness Club Kaduthuruthy',
    district: 'Kottayam',
    address: 'Kaduthuruthy, Kerala 686604',
    latitude: 9.7712,
    longitude: 76.5186,
    rating: 4.7,
    phone: '+91 94460 77777',
    email: 'rubicon@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/K3LhNEBuZjiYRvAD8',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Zumba Studio', 'Crossfit Rig'],
    description: 'Rubicon Fitness Club in Kaduthuruthy is known for its high-octane crossfit boxes, functional circuits, and modern equipment.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 08:30 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 123,
    name: 'SALUTE GYM AYAMKUDY A/C',
    district: 'Kottayam',
    address: 'SNDP Building, Ayamkudy, Ezhumanthuruthu, Kerala 686613',
    latitude: 9.7436,
    longitude: 76.4850,
    rating: 4.8,
    phone: '+91 94460 88888',
    email: 'salute.ayamkudy@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/MzBcs6h555jmy28D7',
    logo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Steam Bath', 'Personal Trainers'],
    description: 'SALUTE GYM Ayamkudy is a fully air-conditioned fitness club designed with complete body shaping stations and professional personal trainer packages.',
    openingHours: {
      weekdays: '05:00 AM - 10:00 PM',
      saturday: '05:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 124,
    name: 'Captain fitness KTM',
    district: 'Kottayam',
    address: 'Salini Arcade, LIC Junction, Neendoor, Kaipuzha, Kerala 686601',
    latitude: 9.6800,
    longitude: 76.5100,
    rating: 4.8,
    phone: '+91 94460 99999',
    email: 'captain@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/SkJdbxkE4mo1poKE6',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Personal Trainers'],
    description: 'Captain fitness KTM features heavy-duty lifting racks, specialized strength plates, and structured routines for all skill levels in Kaipuzha.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 08:30 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 125,
    name: 'HYBRID FITNESS HUB - Gym',
    district: 'Kottayam',
    address: 'Hybrid fitness hub gym, opp. SBI lumine arcade, near private bus stand, Kuravilangad, Kerala 686633',
    latitude: 9.7570,
    longitude: 76.5640,
    rating: 4.9,
    phone: '+91 94461 00000',
    email: 'hybrid@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/okUDps6NFxde48Vz7',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Crossfit Rig', 'Locker & Shower', 'Personal Trainers'],
    description: 'HYBRID FITNESS HUB in Kuravilangad offers modern high-performance facilities including strength zones, functional setups, and certified coaches.',
    openingHours: {
      weekdays: '05:00 AM - 10:00 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 126,
    name: 'Evol Fit Lifting Club',
    district: 'Kottayam',
    address: 'RC Arcade, Vempally, Kerala 686633',
    latitude: 9.7370,
    longitude: 76.5860,
    rating: 4.8,
    phone: '+91 94461 11111',
    email: 'evolfit@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/2NSZRbLsghqDJPnd9',
    logo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Olympic Platforms', 'Personal Trainers'],
    description: 'Evol Fit Lifting Club in Vempally is Kottayam\'s premier strength and powerlifting box, complete with competition-grade bars, plates, and coaching.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 08:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 127,
    name: 'TFC GYM Ettumanoor',
    district: 'Kottayam',
    address: '4th Floor, TFC GYM, Eden\'s shopping centre, Pala Rd, Ettumanoor, Kerala 686631',
    latitude: 9.6710,
    longitude: 76.5610,
    rating: 4.9,
    phone: '+91 94461 22222',
    email: 'tfc.ettumanoor@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/YhWajf8qRBZiA3Ho9',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Zumba Studio', 'Personal Trainers', 'Cafe'],
    description: 'TFC GYM Ettumanoor features a state-of-the-art rooftop workspace, interactive cardio equipment, and personalized nutritional plans.',
    openingHours: {
      weekdays: '05:00 AM - 10:00 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 128,
    name: 'FRIENDS FITNESS CENTER',
    district: 'Kottayam',
    address: 'Friends Fitness Centre, Ettumanoor - Neendoor Rd, Ettumanoor, Kerala 686631',
    latitude: 9.6720,
    longitude: 76.5590,
    rating: 4.7,
    phone: '+91 94461 33333',
    email: 'friends@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/TmskYrUcDD42Jk6N9',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Parking Space'],
    description: 'FRIENDS FITNESS CENTER provides a community-driven training space with custom coaching courses, core circuits, and power racks.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 08:30 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 129,
    name: 'JJ Fitness Studio',
    district: 'Kottayam',
    address: 'Near St. Mary\'s Forane Church, Athirampuzha, Kerala 686562',
    latitude: 9.6450,
    longitude: 76.5350,
    rating: 4.8,
    phone: '+91 94461 44444',
    email: 'jjstudio@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/6k9o314oYH2LPgLL7',
    logo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Zumba Studio', 'Personal Trainers'],
    description: 'JJ Fitness Studio in Athirampuzha offers standard cardio setups, functional bodybuilding equipment, and group wellness classes.',
    openingHours: {
      weekdays: '05:00 AM - 09:30 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 130,
    name: 'Salute gym vadayar',
    district: 'Kottayam',
    address: 'QCCP+X65, Thalayolaparambu, Vadayar, Kerala 686605',
    latitude: 9.7940,
    longitude: 76.4520,
    rating: 4.6,
    phone: '+91 94461 55555',
    email: 'salute.vadayar@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/ENoNuDaNQqwJyYTx9',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Locker & Shower'],
    description: 'Salute gym vadayar provides an energetic workout environment in Vadayar. Get access to fully-equipped strength lifting decks.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 08:30 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 131,
    name: 'Lobsters gym club',
    district: 'Kottayam',
    address: 'near Pallikavala, Pallikavala, Thalayolaparambu, Kerala 686605',
    latitude: 9.7895,
    longitude: 76.4715,
    rating: 4.7,
    phone: '+91 94461 66666',
    email: 'lobsters@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/KUZAaPKfCdHvvLb17',
    logo: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Personal Trainers'],
    description: 'Lobsters gym club at Thalayolaparambu offers traditional heavy bodybuilding plates, cardio decks, and personalized fitness coaching.',
    openingHours: {
      weekdays: '05:00 AM - 10:00 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 132,
    name: 'FITNESS MOB',
    district: 'Kottayam',
    address: 'Thalayolaparambu, Kerala 686605',
    latitude: 9.7890,
    longitude: 76.4710,
    rating: 4.7,
    phone: '+91 94461 77777',
    email: 'fitmob@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/HPjDn4P5PC4T3zhA7',
    logo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Strength Training', 'Cardio Deck', 'Zumba Studio', 'Locker & Shower'],
    description: 'FITNESS MOB in Thalayolaparambu is a modern group wellness and muscle strengthening center designed to boost power and endurance.',
    openingHours: {
      weekdays: '05:30 AM - 09:30 PM',
      saturday: '06:00 AM - 09:00 PM',
      sunday: 'Closed'
    }
  },
  {
    id: 133,
    name: 'Kunnath kalarisangham',
    district: 'Kottayam',
    address: 'PF4F+4QX, Kallara, Kerala 686611',
    latitude: 9.7150,
    longitude: 76.4760,
    rating: 4.9,
    phone: '+91 94461 88888',
    email: 'kunnathkalari@gymundo.in',
    mapUrl: 'https://maps.app.goo.gl/df2m49UaRa3icHTZ8',
    logo: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=120&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop'
    ],
    facilities: ['Traditional Training', 'Personal Trainers', 'Parking Space'],
    description: 'Kunnath kalarisangham in Kallara focuses on traditional Kalari training, physical conditioning, agility development, and fitness coaching.',
    openingHours: {
      weekdays: '05:00 AM - 09:00 PM',
      saturday: '06:00 AM - 08:00 PM',
      sunday: 'Closed'
    }
  }
];

/**
 * Mock Reviews Data
 * A rich set of customer feedback for various gym venues in Kerala.
 */
export const mockReviews: Review[] = [
  {
    id: 'rev-105-1',
    gymId: 105,
    userName: 'Rohan Sharma',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100',
    rating: 5,
    comment: 'Power Fitness in Kottayam is awesome! Eleiko bars, solid platforms, and trainers who actually understand strength training. Highly recommended!',
    date: '2026-05-15'
  },
  {
    id: 'rev-107-1',
    gymId: 107,
    userName: 'Priya Patel',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100',
    rating: 5,
    comment: 'Olympia Fitness is pure luxury in Kochi. Extremely clean locker rooms, beautiful pool, and top-notch equipment.',
    date: '2026-05-20'
  },
  {
    id: 'rev-108-1',
    gymId: 108,
    userName: 'Aditya Sen',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100',
    rating: 5,
    comment: 'Muscle Factory Thrissur is outstanding. Heavy dumbbells, a solid MMA cage, and great vibes.',
    date: '2026-04-28'
  },
  {
    id: 'rev-111-1',
    gymId: 111,
    userName: 'Amit Verma',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100',
    rating: 5,
    comment: 'Titan Gym Kozhikode has a beautiful sea view! Working out while looking at the beach is amazing.',
    date: '2026-05-12'
  },
  {
    id: 'rev-102-1',
    gymId: 102,
    userName: 'Vikram Gowda',
    userAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=100',
    rating: 5,
    comment: 'FitZone Kollam is a fantastic gym in the area. Top-tier machines and helpful trainers.',
    date: '2026-05-30'
  }
];
