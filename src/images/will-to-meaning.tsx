import React from "react";

export default function WillToMeaning() {
  return (
    <p>
    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
  {/* <!-- Main horizontal arrow from Reason to Happiness --> */}
  <defs>
  <marker id="arrowhead" markerWidth="10" markerHeight="7" 
            refX="9" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="white" />
    </marker>
  </defs>
  
  {/* <!-- Horizontal arrow --> */}
  <line x1="80" y1="80" x2="380" y2="80" stroke="white" stroke-width="2" marker-end="url(#arrowhead)" />
  
  {/* <!-- "A REASON TO BE HAPPY" text --> */}
  <text x="80" y="60" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="white">
    <tspan x="80" dy="0">A REASON</tspan>
    <tspan x="80" dy="15">TO BE HAPPY</tspan>
  </text>
  
  {/* <!-- "HAPPINESS" text --> */}
  <text x="400" y="70" text-anchor="middle" font-family="serif" font-size="14" font-weight="bold" fill="white">HAPPINESS</text>
  
  {/* <!-- "ensue" text above arrow --> */}
  <text x="230" y="70" text-anchor="middle" font-family="serif" font-size="12" font-style="italic" fill="white">ensue</text>
  
  {/* <!-- Vertical line down from "A REASON TO BE HAPPY" --> */}
  <line x2="80" y2="90" x1="80" y1="200" stroke="white" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  {/* <!-- "WILL TO MEANING" text along vertical arrow --> */}
  <text x="65" y="145" text-anchor="middle" font-family="serif" font-size="12" font-style="italic" fill="white" transform="rotate(-90 65 145)">"WILL TO MEANING"</text>
  
  {/* <!-- Diagonal line from bottom left to top right --> */}
  <line x1="80" y1="200" x2="360" y2="90" stroke="white" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  {/* <!-- "PURSUE" text along diagonal line --> */}
  <text x="200" y="140" text-anchor="middle" font-family="serif" font-size="12" font-style="italic" fill="white" transform="rotate(-22 200 140)">pursue</text>
  
  {/* <!-- "PURSUIT OF HAPPINESS" text --> */}
  <text x="230" y="150" text-anchor="middle" font-family="serif" font-size="12" font-style="italic" fill="white" transform="rotate(-22 240 150)">"PURSUIT OF HAPPINESS"</text>
  
  {/* <!-- Figure caption --> */}
  <text x="400" y="280" text-anchor="middle" font-family="serif" font-size="12" font-style="italic" fill="white">Figure from Will to Meaning</text>
</svg>
    </p>
  );
}
