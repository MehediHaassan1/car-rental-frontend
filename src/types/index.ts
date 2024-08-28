export type TCar = {
  _id: string;
  name: string
  description: string
  color: string
  isElectric: boolean
  features: string[]
  pricePerDay: number
  carImage: string
  isBooked: boolean
  location: string
  engine: string
  horsepower: string
  torque: string
  transmission: string
  drivetrain: string
  range: string
  topSpeed: string
  acceleration: string
  seatingCapacity: number
  cargoCapacity: string
  fuelEconomy: string
  seats: number
  ac: boolean
  luggage: number
  atxOrMtx: string
  doorCount: number
  carType: string
}


export type TUser = {
  _id: string
  name: string
  email: string
  role: string
  phone: string
  address?: string
  createdAt: string
  updatedAt: string
  __v: number
}
