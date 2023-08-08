export const ifEquals = (arg1, arg2, options) => (arg1 === arg2) ? options.fn(this) : options.inverse(this);


export const townName = (value) => {
    switch (value) {
      case 'CA':
        return 'Cape Town';
      case 'CL':
        return 'Stellenbosch';
      case 'CJ':
        return 'Paarl';
      default:
        return 'All';
    }
  };