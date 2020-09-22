import { ReactComponent as Logo } from "./Logo.svg";
import { ReactComponent as Chevron } from "./chevron.svg";

// Objective
import { ReactComponent as Hot } from "./hot.svg";
import { ReactComponent as Cold } from "./cold.svg";

// Clear
import { ReactComponent as Sunny } from "./sunny.svg";

// Clouds
import { ReactComponent as Cloudy } from "./cloudy.svg";
import { ReactComponent as ClearCloudy } from "./clear-cloudy.svg";
import { ReactComponent as PartlyCloudy } from "./partly-cloudy.svg";
import { ReactComponent as MostlyCloudy } from "./mostly-cloudy.svg";

// Rain
import { ReactComponent as Hail } from "./hail.svg";
import { ReactComponent as Drizzle } from "./drizzle.svg";
import { ReactComponent as Showers } from "./showers.svg";

// Snow
import { ReactComponent as Snow } from "./snow.svg";
import { ReactComponent as Sleet } from "./sleet.svg";
import { ReactComponent as SnowFlurries } from "./snow-flurries.svg";

// Thunderstorm
import { ReactComponent as Thunderstorms } from "./thunderstorms.svg";
import { ReactComponent as IsolatedThunderstorms } from "./isolated-thunderstroms.svg";

// Atmospheric
import { ReactComponent as Windy } from "./windy.svg";
import { ReactComponent as Foggy } from "./foggy.svg";
import { ReactComponent as Tornado } from "./tornado.svg";

export const DefaultIcons = {
  clear: {
    def: Sunny,
  },

  drizzle: {
    def: Drizzle,
  },

  rain: {
    def: Showers,
  },

  // Snow
  snow: {
    def: Snow,
  },

  thunderstorm: {
    def: Thunderstorms,
  },

  atmospheric: {
    def: Foggy,
  },
};

const Icons = {
  // Clear
  clear: {
    800: Sunny,
  },

  // Clouds
  clouds: {
    801: ClearCloudy,
    802: PartlyCloudy,
    803: Cloudy,
    804: MostlyCloudy,
  },

  // Drizzle
  drizzle: {
    501: Drizzle,
  },

  // Rain
  rain: {
    502: Showers,
    511: Hail,
  },

  // Snow
  snow: {
    601: Snow,
    602: SnowFlurries,
    615: Sleet,
  },

  // Thunderstorm
  thunderstorm: {
    200: Thunderstorms,
    211: IsolatedThunderstorms,
  },

  // Atomspheric
  atmospheric: {
    741: Foggy,
    701: Windy,
    781: Tornado,
  },

  // Objective
  misc: {
    logo: Logo,
    chevron: Chevron,
    hot: Hot,
    cold: Cold,
  },
};

export default Icons;
