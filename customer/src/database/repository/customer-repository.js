const { CustomerModel, AddressModel } = require("../models");
const { APIError, STATUS_CODES } = require("../../utils/app-errors");

class CustomerRepository {
  async CreateCustomer(customer) {
    try {
      const customer = new CustomerModel(customer);
      const customerResult = await customer.save();

      return customerResult;
    } catch (error) {
      throw APIError(
        "API Error",
        STATUS_CODES.INTERNAL_SERVER_ERROR,
        "Error creating customer"
      );
    }
  }

  async CreateAddress({ _id, address }) {
    try {
      const profile = await CustomerModel.findById(_id);

      if (profile) {
        const newAddress = new AddressModel(address);

        await newAddress.save();
        profile.address.push(newAddress);
      }

      return await profile.save();
    } catch (error) {
      throw APIError(
        "API Error",
        STATUS_CODES.INTERNAL_SERVER_ERROR,
        "Error creating address"
      );
    }
  }

  async FindCustomer({ email }) {
    try {
      const existingCustomer = await CustomerModel.findOne({ email: email });

      return existingCustomer;
    } catch (error) {
      throw APIError(
        "API Error",
        STATUS_CODES.INTERNAL_SERVER_ERROR,
        "Error finding customer"
      );
    }
  }

  async FindCustomerById({ id }) {
    try {
      const existingCustomer = CustomerModel.findById(id).populate("address");

      return existingCustomer;
    } catch (error) {
      throw APIError(
        "API Error",
        STATUS_CODES.INTERNAL_SERVER_ERROR,
        "Unable to find customer"
      );
    }
  }
}
