import { useRouter } from "next/router";
import Topic from "../../components/Topic";

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { topicId } = params;

  const req = await fetch(
    process.env.HOST + "/api/getTopic?topicId=" + topicId
  );
  const topic = await req.json();
  return { props: { topic } };
};

function TopicDetail({ topic }) {
  const router = useRouter();
  const topicId = router.query.topicId;

  return (
    <div className="min-h-screen ">
      <div className="grid place-items-center">
        <div className="grid grid-cols-1 gap-7 place-items-left text-slate-700 max-w-3xl mx-5">
          <p className="text-2xl mr-100"></p>{" "}
          <Topic
            _id={topic._id}
            title={topic.title}
            date={topic.date}
            userId={topic.userId}
            author={topic.author}
            text={topic.text}
            videoLink={topic.videoLink}
            code={topic.code}
          />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default TopicDetail;
