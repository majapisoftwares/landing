import Code from "./Code";
import { isNil } from "lodash-es";
export default function Json({ json, className }) {
    return (<Code language="js" className={className}>
      {JSON.stringify(isNil(json) ? null : json, null, 2)}
    </Code>);
}
