import React from "react";

import reactElementToJSXString from "react-element-to-jsx-string";

import HighlightCodeWrapper from "./HighlightCodeWrapper";
import all_components_data from "../../utils/all-components";
import Eye from "../Svgs/Eye";
import ChevronLeft from "../Svgs/ChevronLeft";
import ChevronRight from "../Svgs/ChevronRight";
// import Clipboard, { AsString as CopyIconAsString } from "../Svgs/Clipboard";
import ZoomIn from "../Svgs/ZoomIn";
import ZoomOut from "../Svgs/ZoomOut";
import { useState } from "react";
import copy_func from "../../utils/copy_func";
import { useRef } from "react";

function ElementWrapper({ title, Component }) {
  const [codePreview, setCodePreview] = useState(false);
  const [viewFormat, setViewFormat] = useState("jsx");

  const copy_btn_ref = useRef();

  const [code_fontsize, setCodeFontSize] = useState(20);
  function handleFontSize(action) {
    if (action === "-" && code_fontsize > 9) {
      setCodeFontSize((p) => p - 2);
    }

    if (action === "+" && code_fontsize < 34) {
      setCodeFontSize((p) => p + 2);
    }
  }

  const previewCode = reactElementToJSXString(Component());

  return (
    <div className="w-full h-screen flex items-center justify-center overflow-hidden bg-gray-800 text-white">
      {codePreview ? (
        <div
          style={{ height: "calc(100vh - 30px)", width: "calc(100% - 40px)" }}
          className="p-5"
        >
          <div className="w-full h-full bg-gradient-to-br p-[3px] rounded from-red-600 via-yellow-700 to-yellow-800">
            <div className="w-full h-full p-1 bg-gray-900 rounded">
              <div className="w-full h-full overflow-auto scrollbar-lg">
                <header className="w-full px-4 py-2 flex justify-between items-center sticky top-0 left-0 bg-gray-900 bg-opacity-50">
                  <div className="flex gap-2">
                    <button className="w-3 h-3 rounded-full bg-red-600" />
                    <button className="w-3 h-3 rounded-full bg-yellow-600" />
                    <button className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex justify-between items-center gap-5">
                    <button onClick={() => handleFontSize("-")}>
                      <ZoomOut />
                    </button>
                    <button onClick={() => handleFontSize("+")}>
                      <ZoomIn />
                    </button>

                    <select
                      onChange={(e) => setViewFormat(e.target.value)}
                      className="rounded border-8 w-[85px] h-9 border-gray-700 bg-gray-700 outline-none focus:ring"
                    >
                      <option value="jsx">JSX</option>
                      <option value="html">HTML</option>
                      <option disabled={true}>coming soon</option>
                    </select>
                    <button
                      ref={copy_btn_ref}
                      onClick={() => copy_func(copy_btn_ref, previewCode)}
                      className="flex items-center bg-gray-700 focus:ring rounded px-2 h-9 gap-2"
                    >
                      <Clipboard />
                      <small>Copy </small>
                    </button>

                    <button
                      onClick={() => setCodePreview(false)}
                      className={`flex items-center bg-gray-700 rounded px-2 h-9 gap-2 ${
                        !codePreview && "ring"
                      }`}
                    >
                      <Eye />
                      <small>Preview</small>
                    </button>
                    <button
                      onClick={() => setCodePreview(true)}
                      className={`flex items-center bg-gray-700 rounded px-2 h-9 gap-2 ${
                        codePreview && "ring"
                      }`}
                    >
                      <span className="flex">
                        <ChevronLeft />
                        <span className="block -ml-2">
                          <ChevronRight />
                        </span>
                      </span>
                      <small>Code</small>
                    </button>
                  </div>
                </header>
                <code className="block px-5 pb-5 pt-1">
                  <HighlightCodeWrapper
                    fontsize={code_fontsize}
                    previewCode={
                      viewFormat === "jsx"
                        ? previewCode
                        : previewCode.split("className").join("class")
                    }
                  />
                </code>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ height: "calc(100vh - 30px)", width: "calc(100% - 40px)" }}
          className="p-5"
        >
          <div className="w-full h-full bg-gradient-to-br p-[3px] rounded from-red-600 via-yellow-700 to-yellow-800">
            <div className="w-full h-full p-1 bg-gray-900 rounded">
              <div className="w-full h-full overflow-auto scrollbar-md">
                <header className="w-full px-4 py-2 flex justify-between items-center sticky top-0 left-0 bg-gray-900 bg-opacity-50">
                  <h2>{title}</h2>
                  <div className="flex justify-between items-center gap-5">
                    <button
                      onClick={() => setCodePreview(false)}
                      className={`flex items-center bg-gray-700 rounded px-2 h-9 gap-2 ${
                        !codePreview && "ring"
                      }`}
                    >
                      <Eye />
                      <small>Preview</small>
                    </button>
                    <button
                      onClick={() => setCodePreview(true)}
                      className={`flex items-center bg-gray-700 rounded px-2 h-9 gap-2 ${
                        codePreview && "ring"
                      }`}
                    >
                      <span className="flex">
                        <ChevronLeft />
                        <span className="block -ml-2">
                          <ChevronRight />
                        </span>
                      </span>
                      <small>Code</small>
                    </button>
                  </div>
                </header>
                <div className="px-5 w-full mx-auto flex justify-center p-5">
                  <Component />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function All() {
  const alls = [];

  all_components_data.forEach((obj) => {
    const Element = new Function(...obj.params, obj.body);

    alls.push({
      Component: () => Element(obj.jsx),
      title: obj.title,
    });
  });

  return alls.map(({ Component, title }, i) => (
    <ElementWrapper key={i} title={title} Component={Component} />
  ));
}

const ShowUiBody = () => {
  return <All />;
};

export default ShowUiBody;
