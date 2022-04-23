import { IGalleryInformation } from './Gallery';

export const galleryInformation: IGalleryInformation[] = [
  {
    gallery: 'oldBuildings',
    title: 'Gamla byggnader',
    information:
      'På åkrar, i skogen, glömda eller bevarade står de gamla byggnaderna ibland helt utan kärlek. Ingen som vill ta hand om det, det kostar för mycket är många av orsakerna till varför de står och förfaller. Jag vill med mitt fotograferande dokumentera dessa byggnader för eftervärlden. För man vet aldrig när de helt försvinner genom rivning eller tidens tand.',
    imagePath: '/assets/fonster.png',
    imageAlt: 'imageAlt',
    reverse: true,
    anchor: 'oldBuildings',
    showBtn: true,
  },
  {
    gallery: 'landscape',
    title: 'Landskap',
    information:
      'Naturens vida eller intima landskap kan få våra känslor att leka. Alla färger och mönster skapar intryck av komplexitet eller minimalistik beroende var man är. En vacker höstkväll uti lövskogarna sprakar de varma färgerna till solens nedgång. Medans en kall vinterdag där snön ligger som ett tjockt täcke över åkrarna blir som ett minimalistiskt konstverk där stengärdsgårdarna eller staketstolparna skapar linjer i landskapet.',
    imagePath: '/assets/trees.jpg',
    imageAlt: 'imageAlt',
    reverse: false,
    anchor: 'landscape',
    showBtn: true,
  },
  {
    gallery: 'about',
    title: 'Om mig',
    information:
      'Jag heter Nicklas Holmqvist och bor i Varberg sedan sommaren 2022 och nyexaminerad Frontendutvecklare. Innan det växte jag upp i Marks kommun och dess mindre orter. Fotografering har varit ett stort intresse sedan mitten 2000 då jag köpte min första systemkamera 2006. Jag tillbringar gärna tid ute i skogarna där man kan finna de gamla, glömda historierna som landskapet kan förtälja. Sedan 2018 har jag haft ett projekt där jag går runt i markerna i Marks härad och dukumenterar det glömda, och vad man kan hitta. I mina två gallerier kan ni skåda de senaste verken och på glömdvärld.se kan ni följa min blogg eller på glömdvärld i marks härad på Facebook.',
    imagePath: '/assets/img/nicklas-holmqvist.jpg',
    imageAlt: 'Nicklas Holmqvist',
    reverse: true,
    anchor: 'about',
    showBtn: false,
  },
];
