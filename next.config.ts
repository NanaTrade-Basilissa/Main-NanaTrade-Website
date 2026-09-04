import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Disabled: breaks Framer Motion's mount/whileInView animation lifecycle
  // (components get stuck at their `initial` state and never animate to
  // `animate`/`whileInView`). Re-enable only after confirming compatibility.
  reactCompiler: false,
};

export default nextConfig;
