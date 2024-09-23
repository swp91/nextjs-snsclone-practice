"use client";

import { useRouter } from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
  const router = useRouter();
  router.replace("/i/flow/login");
  return <Main />;
}

// router.push
// localhost:3000/login -> localhost:3000/i/flow/login

//router.replace (replace는 이전 히스토리를 없애버린다(대체한다))
// localhost:3000/login -> localhost:3000/i/flow/login
