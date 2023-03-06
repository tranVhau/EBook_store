import React from "react";

function EBookDetail() {
  return <div className="h-[50vh] bg-blue-500">EBookDetail</div>;
}

export function getStaticPaths() {
  return {
    paths: [{ params: { ebookSlug: 1 } }, { params: { ebookSlug: 2 } }],
    fallback: false,
  };
}

export default EBookDetail;
