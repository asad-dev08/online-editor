import React from "react";
import { useSelector } from "react-redux";

const RenderCode = () => {
  const fullCode = useSelector((state: any) => state.compiler.fullCode);
  const combinedCode = `
  <html>
    <style>${fullCode.css}</style>

    <body>
    ${fullCode.html}
    
    <script>
    ${fullCode.javascript}
    </script>
    </body>

  </html>
  `;
  const iframeCode = `data:text/html;charset=utf-8,${encodeURIComponent(
    combinedCode
  )}`;
  return (
    <div className="h-[calc(100dvh-64px)]">
      <iframe className="w-full h-full" src={iframeCode} />
    </div>
  );
};

export default RenderCode;
