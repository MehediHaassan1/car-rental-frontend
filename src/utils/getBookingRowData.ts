import { TBooking, TBookingDataType } from "../types";

const getBookingRowData = (booking: TBooking): TBookingDataType => {
  const { car, user, totalCost, ...rest } = booking;
  return {
    key: rest._id,
    car,
    user,
    drivingLicenseNo: rest.drivingLicenseNo,
    pickUpDate: rest.pickUpDate,
    dropOffDate: rest.dropOffDate,
    status: rest.status,
    totalCost: totalCost || 0,
    identity: rest.identity,
    identityNo: rest.identityNo,
  };
};

export default getBookingRowData;