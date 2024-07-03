import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useAppStore } from "~/stores/app.store";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  return { id: params.id };
};

export default function Post() {
  const { id } = useLoaderData<typeof loader>();
  const posts = useAppStore((state) => state.posts);
  const data = posts.find((post) => post.id === Number(id));

  return (
    <div className="font-sans">
      <h1 className="font-bold text-2xl">{data?.title}</h1>
      <p className="text-sm opacity-20">{data?.subText}</p>

      <div className="font-sans grid lg:grid-cols-2 gap-10">
        <img src={data?.image} alt={data?.title} className="w-full mt-4" />

        <div className="mt-4 text-justify flex flex-col gap-4">
          <p>{data?.description}</p>
          <p>
            {data?.description}
            {data?.description}
          </p>
          <p>{data?.description}</p>

          <p>
            {data?.description}
            {data?.description}
          </p>

          <p>{data?.description}</p>
        </div>
      </div>
    </div>
  );
}
