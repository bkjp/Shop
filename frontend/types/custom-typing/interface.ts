// Interface of a product
export interface IProduct {
  id: number;
  user_name: string;
  category: number;
  category_name: string;
  type_name: string;
  tag: [
    {
      id: string;
      name: string;
      user: number;
      product: number;
      is_active: boolean;
      created_at: string;
      updated_at: string;
    }
  ];
  tag_name: string;
  name: string;
  specification_values: [
    {
      id: number;
      product: number;
      specification: number;
      specification_name: string;
      value: string;
      created_at: string;
    }
  ];
  product_images: [];
  slug: string;
  brand: string;
  code: string;
  reference: string;
  description: string;
  reviews: string;
  refund_policy: string;
  wrapping_type: string;
  stock: number;
  reviews_num: number;
  price: number;
  rating: number;
  discount_price: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
}

// Interface of category

export interface ICategoryNode {
  node: {
    id: number;
    name: string;
    parent: null | number;
    user_name: string;
    description: string;
    slug: string;
    thumbnail?: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  };
}

export interface ICategory {
  id: number;
  name: string;
  parent: null | number;
  user_name: string;
  description: string;
  slug: string;
  thumbnail?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

// Interface of Tag

export interface ITags {
  id: number;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  product: Partial<IProduct>;
}

// Interface of Product types
export interface IProductType {
  id: number;
  name: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

///////////////////////////////////////////////////////////////////////////////////////

export interface IDeliveryAddress {
  deliveryFirstName: string;
  deliveryLastName: string;

  deliveryPhoneNumber: string;
  deliveryEmail: string;

  deliveryCountry: string;
  deliveryProvince: string;
  deliveryTown: string;

  deliveryAddress: string;
  deliveryZipCode: string;
  deliveryUnitNumber: number;
}

export interface IBillingAddress {
  billingFirstName: string;
  billingLastName: string;

  billingPhoneNumber: string;
  billingEmail: string;

  billingCountry: string;
  billingProvince: string;
  billingTown: string;

  billingAddress: string;
  billingZipCode: string;
  billingUnitNumber: number;
}

//////////////////   INTERFACES OF MANAGING CART STATE OF REDUX   ////////////////

// Interface for a unique item (product) of cartItems
export interface ICartItem {
  id: number;
  category_id: number;
  price: number;
  stock: number;
  reviews_num: number;
  shipping_rate: number;
  ratings: number;

  name: string;
  product_type: string;
  category_name: string;
  qr_code: string;
  bar_code: string;
  slug: string;
  brand: string;
  code: string;
  reference: string;
  description: string;
  reviewss: string;
  refund_policy: string;
  wrapping_type: string;
  created_at: string;
  updated_at: string;

  is_active: boolean;

  tags: [];
  product_images: [
    {
      id: number;
      image: string;
      alt_text: string;
      is_feature: false;
      created_at: string;
      updated_at: string;
      product: number;
    }
  ];
  specification_values: [];

  qty: number;
}

// Interface of cartItems which is an array
export interface ICartItems {
  cartItems: ICartItem[];
}

export interface ICoupon {
  loading: boolean;
  success: boolean;
  successMsg: string;
  error: boolean;
  errorMsg: string;
  couponResponse: {
    name: string;
    description: string;
    start_date: string;
    end_date: string;
    created_at: string;
    updated_at: string;
    coupon_rate: number;
    is_active: boolean;
  };
}

interface ITax {
  [index: number]: {
    name: string;
    country: string;
    description: string;
    taxe_percentage: 0;
    is_active: boolean;
    created_at: string;
    updated_at: string;
  };
}

export interface ICartState {
  cartItems: ICartItem[];
  payementMethod: string;
  deliveryAddress: IDeliveryAddress;
  billingAddress: IBillingAddress;
  coupon: ICoupon;
  taxe: ITax;
}

////////////////////////   ORDE INTERACE    ////////////////////////////////////////

export interface IOrder {
  feedbackResponse: string;
  dataResponse: {
    bar_code: string;
    billing_address: {
      id: number;
      first_name: string;
      last_name: string;
      phone_number: string;
      email: string;
      town: string;
      province: string;
      country: string;
      address: string;
      zip_code: string;
      unit_number: string;
      created_at: string;
      updated_at: string;
      user: number;
      order: number;
    };
    coupon_price: number;
    coupon_rate: number;
    created_at: string;
    delivered_at: string;
    delivery_address: {
      id: number;
      first_name: string;
      last_name: string;
      phone_number: string;
      email: string;
      town: string;
      province: string;
      country: string;
      address: string;
      zip_code: string;
      unit_number: string;
      created_at: string;
      updated_at: string;
      user: number;
      order: number;
    };
    id: number;
    is_delivered: boolean;
    is_paid: boolean;
    order_items: [
      {
        created_at: string;
        id: number;
        order: number;
        name: string;
        price: number;
        product: number;
        qty: number;
        updated_at: string;
      }
    ];
    paid_at: string;
    payement_method: string;
    qr_code: string;
    reference: string;
    shipping_price: number;
    status: string;
    sub_total_price: number;
    tax_price: number;
    total_price: number;
    updated_at: string;
  };
}
