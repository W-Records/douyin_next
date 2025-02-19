import Link from "next/link";
export default function Page() {
  return (
    <div>
      <h1>关于页面</h1>
      <div>测试内容</div>

      <div>
        <Link href="/">跳到首页</Link>
      </div>
    </div>
  );
}