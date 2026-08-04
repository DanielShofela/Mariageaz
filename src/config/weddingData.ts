export interface Ceremony {
  id: string;
  title: string;
  type: 'civil' | 'religieux' | 'reception';
  icon: string;
  date: string; // ISO date format for countdown: YYYY-MM-DDTHH:mm:ss
  displayDate: string;
  location: string;
  addressDetail: string;
  time: string;
  googleMapsUrl: string;
}

export interface Scarf {
  id: string;
  title: string;
  category: 'Homme' | 'Femme';
  price: string;
  priceRaw: number;
  image: string;
  description: string;
}

export interface ContactPerson {
  id: string;
  name: string;
  phoneDisplay: string;
  phoneRaw: string;
  role?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export const WEDDING_DATA = {
  couple: {
    groom: "FOFANA ABOUBAKAR-SIDIK",
    bride: "ZENAB AKADI",
    monogram: "A&Z",
    subtitle: "Deux cœurs. Une promesse. Une nouvelle vie commence.",
    invitationHeader: "ENSEMBLE AVEC LEURS FAMILLES",
    invitationBody: "Ont l'honneur et la joie de vous inviter à célébrer l'union sacrée et leur mariage.",
    dressCodeTitle: "Dress Code",
    dressCodeText: "Tenue Blanche Exclusivité",
    dressCodeDescription: "Afin de sublimer cette journée mémorable, nous convions chaleureusement l'ensemble de nos précieux invités à se revêtir de leurs plus belles tenues blanches, symbole de pureté et d'harmonie.",
    heroImage: "/images/2.jpg",
    couplePortrait: "/images/2.jpg",
  },

  whatsappMain: "+2250759373798",
  whatsappDisplay: "+225 07 59 37 37 98",

  ceremonies: [
    {
      id: "civil",
      title: "Mariage Civil",
      type: "civil",
      icon: "🏛️",
      date: "2026-08-28T11:00:00",
      displayDate: "Vendredi 28 août 2026",
      location: "Mairie du Plateau",
      addressDetail: "Le Plateau, Abidjan, Côte d'Ivoire",
      time: "11h00",
      googleMapsUrl: "https://maps.google.com/?q=Mairie+du+Plateau+Abidjan"
    },
    {
      id: "religieux",
      title: "Mariage Religieux",
      type: "religieux",
      icon: "🕌",
      date: "2026-08-29T09:30:00",
      displayDate: "Samedi 29 août 2026",
      location: "Mosquée Aghien",
      addressDetail: "Les 2 Plateaux, Abidjan, Côte d'Ivoire",
      time: "09h30",
      googleMapsUrl: "https://maps.google.com/?q=Mosquee+Aghien+Deux+Plateaux+Abidjan"
    },
    {
      id: "reception",
      title: "Réception & Dîner",
      type: "reception",
      icon: "🎉",
      date: "2026-08-29T14:00:00",
      displayDate: "Samedi 29 août 2026",
      location: "Eden Event",
      addressDetail: "Près du Collège André Malraux, Abidjan",
      time: "14h00",
      googleMapsUrl: "https://maps.google.com/?q=Eden+Event+Abidjan"
    }
  ] as Ceremony[],

  scarves: [
    {
      id: "homme",
      title: "Foulard Officiel Homme",
      category: "Homme",
      price: "2 500 FCFA",
      priceRaw: 2500,
      image: "/images/1.jpeg",
      description: "Étole officielle en pagne tissé traditionnel aux rayures bleu azur, vert olive, crème et noir, pour hommes et notables."
    },
    {
      id: "femme",
      title: "Foulard Officiel Femme",
      category: "Femme",
      price: "5 000 FCFA",
      priceRaw: 5000,
      image: "/images/1.jpeg",
      description: "Grand foulard d'apparat en pagne tissé traditionnel assorti, aux magnifiques finitions tissées pour dames."
    }
  ] as Scarf[],

  contacts: [
    { id: "1", name: "Infoline & Contact", phoneDisplay: "07 59 37 37 98", phoneRaw: "+2250759373798" },
    { id: "2", name: "Infoline & Contact", phoneDisplay: "07 78 60 68 52", phoneRaw: "+2250778606852" },
    { id: "3", name: "Infoline & Contact", phoneDisplay: "07 07 48 23 63", phoneRaw: "+2250707482363" },
    { id: "4", name: "Infoline & Contact", phoneDisplay: "05 85 68 82 23", phoneRaw: "+2250585688223" }
  ] as ContactPerson[],

  gallery: [
    {
      id: "g1",
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
      alt: "Aboubakar & Zenab - Regard complice",
      category: "Complice"
    },
    {
      id: "g2",
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
      alt: "Célébration et élégance",
      category: "Pré-Mariage"
    },
    {
      id: "g3",
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1200",
      alt: "Amour et tendresse",
      category: "Romantique"
    },
    {
      id: "g4",
      src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
      alt: "Détails luxueux de la cérémonie",
      category: "Décor"
    },
    {
      id: "g5",
      src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1200",
      alt: "Promesses d'éternité",
      category: "Romantique"
    },
    {
      id: "g6",
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
      alt: "Fleurs et halos célestes",
      category: "Décor"
    }
  ] as GalleryImage[]
};
