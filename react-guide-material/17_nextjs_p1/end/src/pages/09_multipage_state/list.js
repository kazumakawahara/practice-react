import List from "../../components/list/index.js";
import { useAppContext } from "../../context/AppContext.js";
import { useRouter } from "next/router";
export default function PageList() {
  const [list] = useAppContext();
  const router = useRouter();

  return (
    <>
      <List list={list} />
      <button onClick={() => router.back()}>前のページへ</button>
    </>
  );
}
