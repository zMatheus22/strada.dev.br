import { Html } from "next/document";
import BaseHead from "../components/BaseHead.jsx";
import { SITE_TITLE, SITE_DESCRIPTION } from "../config";

const data = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function Document() {
  return (
    <Html lang="pt-br" data-theme="night">
      <BaseHead title={data.title} description={data.description} />
    </Html>
  );
}
