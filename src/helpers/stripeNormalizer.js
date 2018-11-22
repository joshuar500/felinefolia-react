export function stripePayloadNormalizer(state) {
  return {
    name: state.cardholderName,
    address_city: state.city,
    address_country: "US",
    address_line1: state.address1,
    address_line2: state.address2,
    address_state: state.optionState,
  }
}