import React, { useState } from "react";
export default function Gif({ gifDataUrl }) {
  const [name, setName] = useState(gifDataUrl);
  return (
    <div>
      <img src={gifDataUrl} />
    </div>
  );
}
