import Club from "../models/club";
import Jersey from "../models/jersey";

export const CLUBS = [
  new Club("c1", "Arsenal", "#f5428d"),
  new Club("c2", "Liverpool", "#f54242"),
  new Club("c3", "Norwich City", "#f5a442"),
  new Club("c4", "Sunderland", "#f5d142"),
  new Club("c5", "Swansea City", "#368dff"),
  new Club("c6", "West Bromwich Albion", "#41d95d"),
  new Club("c7", "West Ham United", "#9eecff"),
  new Club("c8", "Chelsea", "#b9ffb0"),
  new Club("c9", "Crystal Palace", "#ffc7ff"),
  new Club("c10", "Manchester City", "#47fced"),
];

export const JERSEYS = [
  new Jersey(
    "1",
    ["c1"],
    "Arsenal Home Jersey with Your Name 2022/23 (Adidas)",
    89.9,
    "https://www.amstadion.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/a/r/ar_przod_8.jpg",
    "Arsenal official home jersey for the 2022/23 season with custom print on the back.\n Add a name, last name or nickname and create a unique jersey for yourself!"
  ),
  new Jersey(
    "2",
    ["c1"],
    "Arsenal Fleece Top (Adidas)",
    99.0,
    "https://www.amstadion.com/media/catalog/product/cache/2/thumbnail/695x/9df78eab33525d08d6e5fb8d27136e95/h/f/hf4523_2_apparel_photography_front_center_view_white.jpg",
    "Product code: AR-X02241 \n MPN: HF4523"
  ),
];
