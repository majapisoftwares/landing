import type { Config } from "tailwindcss";
import tailwindConfig from "@italodeandra/ui/tailwind.config";
import { merge } from "lodash-es";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Partial<Config> = {
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans Variable", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};

export default merge(tailwindConfig, config);
