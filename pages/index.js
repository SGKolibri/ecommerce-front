import Featured from "@/components/Featured";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Featured />
      </div>
    </>
  );
}


export function GetServerSidePros() {
  return {
    props: {
      title: "Home",
    },
  };
}