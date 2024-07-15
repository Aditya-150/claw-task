import image1 from "../../assets/images/manipuri.jpg";
import image2 from "../../assets/images/kathiawari.jpg";
import image3 from "../../assets/images/marwari.jpg";
import image4 from "../../assets/images/zanskari.jpg";
import firstCarouselImage1 from "../../assets/images/manipuri_1.webp";
import firstCarouselImage2 from "../../assets/images/manipuri_2.webp";
import firstCarouselImage3 from "../../assets/images/manipuri_3.webp";
import firstCarouselImage4 from "../../assets/images/manipuri_4.webp";
import secondCarouselImage1 from "../../assets/images/kathiawari_1.webp";
import secondCarouselImage2 from "../../assets/images/kathiawari_2.webp";
import secondCarouselImage3 from "../../assets/images/kathiawari_3.webp";
import secondCarouselImage4 from "../../assets/images/kathiawari_4.webp";
import thirdCarouselImage1 from "../../assets/images/marwari_1.webp";
import thirdCarouselImage2 from "../../assets/images/marwari_2.webp";
import thirdCarouselImage3 from "../../assets/images/marwari_3.webp";
import thirdCarouselImage4 from "../../assets/images/marwari_4.webp";
import fourthCarouselImage1 from "../../assets/images/zanskari_1.webp";
import fourthCarouselImage2 from "../../assets/images/zanskari_2.webp";
import fourthCarouselImage3 from "../../assets/images/zanskari_3.webp";
import fourthCarouselImage4 from "../../assets/images/zanskari_4.webp";

export const horseData = [
  {
    id: 1,
    image: image1,
    name: "Manipuri Pony",
    price: "500",
    description:
      "The Manipuri pony, hailing from the northeastern state of Manipur, is a sturdy and agile breed. Traditionally used in the game of polo, these ponies are known for their speed and agility.",
    height: "11-13 hands (44-52 inches)",
    color: "Mostly bay, grey, and chestnut",
    temperament: "Energetic, resilient, and trainable",
    uniqueTraits:
      "Small stature with a strong build, well-suited for high-intensity activities.",
    idealFor:
      "Polo, riding for children and small adults, and traditional Manipuri games.",
    carousel: [
      { id: 1, image: firstCarouselImage1 },
      { id: 2, image: firstCarouselImage2 },
      { id: 3, image: firstCarouselImage3 },
      { id: 4, image: firstCarouselImage4 },
    ],
  },
  {
    id: 2,
    image: image2,
    name: "Kathiawari Horse",
    price: "600",
    description:
      "Originating from the Kathiawar peninsula of Gujarat, the Kathiawari horse is known for its agility and endurance. With a slight resemblance to the Marwari breed, it also features inward-turning ears but is slightly more compact.",
    height: "13-15 hands (52-60 inches)",
    color: "Predominantly chestnut, but also seen in bay, grey, and dun",
    temperament: "Spirited, intelligent, and alert",
    uniqueTraits: "Distinctive curved ears, known for their stamina and speed.",
    idealFor: "Endurance riding, polo, and desert safaris",
    carousel: [
      { id: 1, image: secondCarouselImage1 },
      { id: 2, image: secondCarouselImage2 },
      { id: 3, image: secondCarouselImage3 },
      { id: 4, image: secondCarouselImage4 },
    ],
  },
  {
    id: 3,
    image: image3,
    name: "Marwari Horse",
    price: "700",
    description:
      "The Marwari horse, known for its distinctive inward-turning ear tips, is a breed indigenous to the Marwar region of Rajasthan. Renowned for its hardiness and endurance, this breed is highly versatile and used for various equestrian activities, including riding, dressage, and light draft work.",
    height: "14-16 hands (56-64 inches)",
    color:
      "Commonly found in chestnut, bay, and grey; occasionally black and pinto",
    temperament: "Intelligent, courageous, and loyal",
    uniqueTraits:
      "Inward-turning ear tips, natural ambling gait called 'Revaal,' making them smooth to ride.",
    idealFor: "Long-distance riding, ceremonial purposes, and shows",
    carousel: [
      { id: 1, image: thirdCarouselImage1 },
      { id: 2, image: thirdCarouselImage2 },
      { id: 3, image: thirdCarouselImage3 },
      { id: 4, image: thirdCarouselImage4 },
    ],
  },
  {
    id: 4,
    image: image4,
    name: "Zanskari Horse",
    price: "800",
    description:
      "The Zanskari horse, from the high-altitude regions of Ladakh, is known for its exceptional endurance and ability to thrive in harsh, cold climates. This breed is crucial for transport and riding in the mountainous terrains of northern India.",
    height: "12-14 hands (48-56 inches)",
    color: "Usually bay, grey, or black",
    temperament: "Docile, hardy, and dependable",
    uniqueTraits:
      "Adapted to high altitudes, strong and sure-footed, ideal for mountainous terrain.",
    idealFor:
      "High-altitude riding, trekking, and pack duties in mountainous regions",
    carousel: [
      { id: 1, image: fourthCarouselImage1 },
      { id: 2, image: fourthCarouselImage2 },
      { id: 3, image: fourthCarouselImage3 },
      { id: 4, image: fourthCarouselImage4 },
    ],
  },
];
