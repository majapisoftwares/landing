import { Fragment } from "react";
import { Highlight } from "prism-react-renderer";
import clsx from "../../utils/clsx";
import CopyButton from "../CopyButton";
export default function Code({ children, language, className, copy, copyText, copiedText, theme, }) {
    return (<div className={clsx("group relative", className, {
            dark: !theme,
        })}>
      <div className="prose max-w-none">
        <Highlight code={children.trimEnd()} language={language} theme={theme}>
          {({ className, style, tokens, getTokenProps }) => (<pre className={className} style={style}>
              <code>
                {tokens.map((line, lineIndex) => (<Fragment key={lineIndex}>
                    {line
                    .filter((token) => !token.empty)
                    .map((token, tokenIndex) => (<span key={tokenIndex} {...getTokenProps({ token })}/>))}
                    {"\n"}
                  </Fragment>))}
              </code>
            </pre>)}
        </Highlight>
      </div>
      {copy && (<CopyButton text={children} copyText={copyText} copiedText={copiedText}/>)}
    </div>);
}
