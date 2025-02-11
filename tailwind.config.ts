import type { Config } from "tailwindcss";
import tailwindConfig from "@italodeandra/ui/tailwind.config";
import { merge } from "lodash-es";

const config: Partial<Config> = {
  theme: {
    extend: {},
  },
};

export default merge(tailwindConfig, config);
