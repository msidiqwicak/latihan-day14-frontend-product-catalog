export interface Pet {
  id: number;
  name: string;
  type: string;
  breed: string;
  nextVaccine: string;
  img: string;
}

export const PET_DATA: Pet[] = [
  {
    id: 1,
    name: "Luna",
    type: "Cat",
    breed: "Persian",
    nextVaccine: "2 days",
    img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400",
  },
  {
    id: 2,
    name: "Rocky",
    type: "Dog",
    breed: "Golden Retriever",
    nextVaccine: "5 days",
    img: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400",
  },
  {
    id: 3,
    name: "Milo",
    type: "Rabbit",
    breed: "Holland Lop",
    nextVaccine: "1 week",
    img: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400",
  },

  {
    id: 3,
    name: "Milo",
    type: "Cat",
    breed: "Maine Coon",
    nextVaccine: "1 week",
    img: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400",
  },
  {
    id: 5,
    name: "Leo",
    type: "Cat",
    breed: "British Shorthair",
    nextVaccine: "4 days",
    img: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400",
  },
  {
    id: 6,
    name: "Max",
    type: "Dog",
    breed: "Siberian Husky",
    nextVaccine: "6 days",
    img: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400",
  },
  {
    id: 7,
    name: "Bella",
    type: "Dog",
    breed: "Beagle",
    nextVaccine: "3 days",
    img: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400",
  },
 { id: 8, name: "Oliver", type: "Cat", breed: "Siamese", nextVaccine: "3 days", img: "https://th.bing.com/th/id/OIP.0KTmJdb18VZCN017bLB2xwHaIv?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
];
