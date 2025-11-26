import React from "react";
import Layout from "@theme/Layout";

export default function MapPage() {
  return (
    <Layout title="Карта сервера" description="Карта сервера HardShard">
      <main>
        <div style={{ width: "100%", height: "90vh" }}>
          <iframe
            src="http://localhost:8100"
            style={{
              width: "100%",
              height: "100%",
              border: "0",
            }}
            title="Карта сервера"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </main>
    </Layout>
  );
}
