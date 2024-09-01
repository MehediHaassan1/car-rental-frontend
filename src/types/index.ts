export type TCar = {
  _id: string;
  name: string
  description: string
  color: string
  isElectric: boolean
  features: string[]
  pricePerHour: number
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
  isDeleted: boolean;
}


export type TUser = {
  _id: string;
  image: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  isDeleted: boolean;
  address: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type TBooking = {
  _id: string
  user: TUser
  car: TCar
  pickUpDate: string
  pickUpTime: string
  dropOffDate: string
  dropOffTime: string
  totalCost: number
  paid: boolean;
  isCanceled: boolean
  status: 'pending' | 'ongoing' | 'complete'
  identity: string
  identityNo: string
  drivingLicenseNo: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface TBookingDataType {
  key: string;
  car: TCar;
  user: TUser;
  totalCost: number;
  identity: string
  identityNo: string
  drivingLicenseNo: string;
  status: string;
  pickUpDate: string;
  pickUpTime: string;
  dropOffDate: string;
  dropOffTime: string;
  paid: boolean;
}