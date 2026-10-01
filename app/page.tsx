import { PortfolioV1 } from "./components/PortfolioV1";

// V1: the scrolling one-pager is the home page again.
// The V2 journey UI is still in the repo: import Journey from "./components/journey/Journey" and return <Journey />.
export default function Home() {
  return <PortfolioV1 />;
}
