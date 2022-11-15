import { useSession } from "next-auth/react";
import CompactTopic from "../../components/CompactTopic";
import { Button, Input } from "@web3uikit/core";
import Link from "next/link";

export const getServerSideProps = async () => {
  const req = await fetch(process.env.HOST + "/api/getAllTopics");
  const topics = await req.json();
  return { props: { topics } };
};

export default function blog({ topics }) {
  const { data: session, status } = useSession();

  return <p>oui</p>;
}
