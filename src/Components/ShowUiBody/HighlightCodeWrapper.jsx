import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const HighlightCodeWrapper = ({ previewCode, fontsize }) => {
  return (
    <Highlight {...defaultProps} code={previewCode.trim()} language="jsx">
      {({ tokens, getLineProps, getTokenProps }) => (
        <pre
          style={{
            fontSize: `${fontsize}px`,
          }}
        >
          {tokens.map((line, i) => (
            <div
              style={{
                fontFamily: "dank mono !important",
                fontStyle: "italic",
              }}
              key={i}
              {...getLineProps({ line, key: i })}
            >
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default HighlightCodeWrapper;
