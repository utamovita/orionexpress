declare module "design-system" {
  export type SpacingSizes =
    | "none"
    | "XXS"
    | "XS"
    | "S"
    | "M"
    | "L"
    | "XL"
    | "XXL"
    | "3XL"
    | "4XL"
    | "5XL"
    | "6XL"
    | "7XL"
    | "8XL"
    | "9XL";

  export type SupportedAllDevices<Mobile, Tablet, Desktop> = {
    mobile?: Mobile;
    tablet?: Tablet;
    desktop?: Desktop;
  };
}
