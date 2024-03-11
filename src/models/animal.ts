export enum AnimalType {
  MAMMAL = 'mammal',
  BIRD = 'bird',
  FISH = 'fish',
  REPTILE = 'reptile',
  AMPHIBIAN = 'amphibian'
}

export interface Animal {
  name: string
  type: string
}
