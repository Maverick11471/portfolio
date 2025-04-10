import { siGithub } from "simple-icons";

export default function Footer() {
  return (
    <div className="">
      <div dangerouslySetInnerHTML={{ __html: siGithub.svg }} />
    </div>
  );
}
