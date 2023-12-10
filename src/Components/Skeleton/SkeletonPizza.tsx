import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonPizza: React.FC = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="289" rx="3" ry="3" width="280" height="30" />
    <rect x="34" y="465" rx="3" ry="3" width="178" height="6" />
    <circle cx="131" cy="130" r="130" />
    <rect x="0" y="336" rx="0" ry="0" width="280" height="55" />
    <rect x="0" y="415" rx="0" ry="0" width="125" height="40" />
    <rect x="150" y="415" rx="0" ry="0" width="125" height="40" />
  </ContentLoader>
)

export default SkeletonPizza;
